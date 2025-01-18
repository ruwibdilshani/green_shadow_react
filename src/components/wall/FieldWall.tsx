import WallHeader from "../WallHeader.tsx";
import CardSet from "../CardSet.tsx";
import {useEffect, useState} from "react";
import SaveField from "../popups/Field/SaveField.tsx";
import {useSelector} from "react-redux";
import {Field} from "../../model/Field.ts";

const FieldWall = () => {
    const [saveFieldPopup, setSaveFieldPopup] = useState(false)
    const fieldsData = useSelector((state: { field: Field[] }) => state.field)
    const [search, setSearch] = useState('')
    const [fields, setFields] = useState(fieldsData)

    const handleSaveFieldPopup = () => {
        setSaveFieldPopup(!saveFieldPopup)
    }

    useEffect(() => {
        const filteredFields = fieldsData.filter((field: Field) => {
            return field.fieldName.toLowerCase().includes(search.toLowerCase())
        })
        setFields(filteredFields)
    }, [search, fieldsData])



    return (
        <>
            {saveFieldPopup && <SaveField closePopupAction={handleSaveFieldPopup} />}
            <div className="w-100 p-5 bg-transparent" id="field-wall">
                <WallHeader title={"Field Management"} addPopupAction={handleSaveFieldPopup} searchAction={setSearch} />
                <CardSet cardType={"field"} cardSet={fields} />
            </div>
        </>
    )
}

export default FieldWall