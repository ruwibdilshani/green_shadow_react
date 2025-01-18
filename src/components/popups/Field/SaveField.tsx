import closeBtn from '../../../assets/icon/close-btn.svg';
import { generateUUID } from '../../../util/generateUUID.ts';
import { useEffect, useRef, useState } from 'react';
import { Field } from '../../../model/Field.ts';
import { useDispatch } from 'react-redux';
import { saveField } from '../../../store/slices/FieldSlice.ts';
import { toast } from 'react-toastify';
import validateField from '../../../util/validation/FieldValidation.ts';
import '../../../css/components/Popups/FieldPopup.css';

interface SaveFieldProps {
    closePopupAction: () => void;
}

const SaveField = ({ closePopupAction }: SaveFieldProps) => {
    const [field, setField] = useState<Field>({
        fieldCode: generateUUID('FIELD'),
        fieldName: '',
        fieldSize: '',
        fieldImage1: null ,
        fieldImage2: null ,
        location: {
            latitude: 0,
            longitude: 0,
        },
        assignStaffs: [],
    });
    const [image1, setImage1] = useState<File | null>(null);
    const [image2, setImage2] = useState<File | null>(null);

    const dispatch = useDispatch();
    const mapRef = useRef<HTMLDivElement>(null);
    const markerRef = useRef<google.maps.Marker | null>(null); // Use a ref for the marker
    const [map, setMap] = useState<google.maps.Map | null>(null);

    const defaultLocation = { lat: 6.0367, lng: 80.217 };

    useEffect(() => {
        if (mapRef.current && !map) {
            const googleMap = new google.maps.Map(mapRef.current, {
                center: defaultLocation,
                zoom: 13,
            });
            setMap(googleMap);

            // Initial marker
            markerRef.current = new google.maps.Marker({
                position: defaultLocation,
                map: googleMap,
            });

            googleMap.addListener('click', (e : google.maps.MapMouseEvent) => {
                if (e.latLng) {
                    // Remove previous marker
                    if (markerRef.current) {
                        markerRef.current.setMap(null);
                    }

                    // Set new marker
                    markerRef.current = new google.maps.Marker({
                        position: e.latLng,
                        map: googleMap,
                    });

                    // Update location in field
                    setField((prev) => ({
                        ...prev,
                        location: {
                            latitude: e.latLng!.lat(),
                            longitude: e.latLng!.lng(),
                        },
                    }));
                }
            });
        }
    }, [map]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;

        setField((prev) => {
            if (files) {
                console.log(files[0]);
                console.log(field.fieldImage1)
                return {
                    ...prev,
                    [name]: files[0] as File, // Ensure it's cast to File
                };
            }
            return {
                ...prev,
                [name]: value,
            };
        });
    };

    const saveBtnAction = () => {
        const { fieldName, fieldSize } = field;

        if (!validateField(fieldName, fieldSize, image1 as File, image2 as File)) {
            toast.error('Please fill all required fields correctly.');
            return;
        }
        console.log("image",image1);
        field.fieldImage1 = image1;
        field.fieldImage2 = image2;

        try {
            dispatch(saveField(field));
            toast.success('Field saved successfully');
            closePopupAction();
        } catch (error) {
            console.error(error);
            toast.error('Failed to save the field. Please try again.');
        }
    };

    return (
        <div
            id="save-field-popup"
            className="position-absolute start-0 end-0 top-0 bottom-0 w-100 h-auto justify-content-center align-items-center d-flex"
        >
            <div className="w-75 h-auto p-4">
                <img
                    className="float-end"
                    src={closeBtn}
                    alt="Close"
                    onClick={closePopupAction}
                    style={{ cursor: 'pointer' }}
                />
                <h2 className="mt-3 mb-3">Save Field</h2>
                <div className="w-100 h-auto form-set d-grid">
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            name="fieldName"
                            className="form-control fieldName-text"
                            id="fieldName"
                            placeholder="Enter field name"
                            value={field.fieldName}
                            onChange={handleChange}
                        />
                        <label htmlFor="fieldName">Field Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="number"
                            name="fieldSize"
                            className="form-control fieldSize-text"
                            id="fieldSize"
                            placeholder="Enter field size"
                            value={field.fieldSize}
                            onChange={handleChange}
                        />
                        <label htmlFor="fieldSize">Field Size</label>
                    </div>
                    <div className={"form-floating mb-3"}>
                        <input
                            type="file"
                            name="fieldImage1"
                            className="form-control image-1"
                            id="fieldImage1"
                            onChange={(event) => {setImage1(event.target.files![0])}}
                        />
                        <label htmlFor="fieldImage1">Select Image 1</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="file"
                            name="fieldImage2"
                            className="form-control image-2"
                            id="fieldImage2"
                            onChange={(event) => {setImage2(event.target.files![0])}}
                        />
                        <label htmlFor="fieldImage2">Select Image 2</label>
                    </div>
                </div>
                <div
                    id="map"
                    ref={mapRef}
                    className="mt-2 mb-4"
                    style={{ width: '100%', height: '400px' }}
                ></div>
                <button
                    type="button"
                    className="btn btn-outline-success w-100"
                    onClick={saveBtnAction}
                >
                    Save Field
                </button>
            </div>
        </div>
    );
};

export default SaveField;
