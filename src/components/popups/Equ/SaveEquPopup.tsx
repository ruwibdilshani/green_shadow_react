import closeBtn from "../../../assets/icon/close-btn.svg";

const SaveEquPopup = ( ) => {
    return (
        <div
            id="save-equ-popup"
            className="position-absolute start-0 end-0 top-0 bottom-0 w-100 h-auto justify-content-center align-items-center"
        >
            <div className="w-50 h-auto p-4">
                <img className="float-end" src={closeBtn}/>
                <h2 className="mt-3 mb-3">Save Equipment</h2>
                <div className="w-100 h-auto form-set">
                    <div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control equ-name-text"
                                id="floatingInput"
                                placeholder=""
                            />
                            <label htmlFor="floatingInput">Equipment Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control equ-type-text"
                                id="floatingInput"
                                placeholder=""
                            />
                            <label htmlFor="floatingInput">Equipment Type</label>
                        </div>
                    </div>
                    <button type="button" className="btn btn-outline-success w-100">Save Equipment</button>
                </div>
            </div>
        </div>
    )
}

export default SaveEquPopup;