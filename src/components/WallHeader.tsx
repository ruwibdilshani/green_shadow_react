import style from "../css/components/WallHeader.module.css";
import React from "react";

interface WallHeaderProps {
    title: string;
    addPopupAction: () => void;
    searchAction: React.Dispatch<React.SetStateAction<string>>;
}

const WallHeader = ({ title , addPopupAction , searchAction }: WallHeaderProps) => {
    return (
        <>
            <h1 className={style.h1}>{title}</h1>
            <div className="d-flex justify-content-between align-items-center mt-5">
                <div className="d-flex gap-4">
                    <input
                        type="text"
                        className={`px-3 search-bar ${style.input}`}
                        placeholder="Search ......"
                        onChange={ (e) => searchAction(e.target.value) }
                    />
                    <button className={`border-0 rounded-5`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                        >
                            <path
                                d="M9.16667 5C11.4678 5 13.3333 6.86548 13.3333 9.16667M13.8823 13.8791L17.5 17.5M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                                stroke="black"
                                strokeWidth="1.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
                <button
                    className={`border-0 p-2 d-flex align-items-center gap-2 ${style.addMemberBtn}`}
                    onClick={addPopupAction}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                    >
                        <path
                            d="M13.5 25.2036C7.08237 25.2036 1.86206 19.9833 1.86206 13.5657C1.86206 7.14805 7.08237 1.92773 13.5 1.92773C19.9176 1.92773 25.1379 7.14805 25.1379 13.5657C25.1379 19.9833 19.9176 25.2036 13.5 25.2036ZM13.5 3.7898C8.1093 3.7898 3.72413 8.17498 3.72413 13.5657C3.72413 18.9564 8.1093 23.3415 13.5 23.3415C18.8907 23.3415 23.2759 18.9554 23.2759 13.5657C23.2759 8.17591 18.8907 3.7898 13.5 3.7898Z"
                            fill="white"
                        />
                        <path
                            d="M13.5 20.0833C13.2531 20.0833 13.0163 19.9852 12.8417 19.8106C12.6671 19.636 12.569 19.3992 12.569 19.1523V7.97986C12.569 7.73294 12.6671 7.49612 12.8417 7.32152C13.0163 7.14692 13.2531 7.04883 13.5 7.04883C13.7469 7.04883 13.9837 7.14692 14.1583 7.32152C14.3329 7.49612 14.431 7.73294 14.431 7.97986V19.1523C14.431 19.3992 14.3329 19.636 14.1583 19.8106C13.9837 19.9852 13.7469 20.0833 13.5 20.0833Z"
                            fill="white"
                        />
                        <path
                            d="M19.0862 14.4968H7.91382C7.6669 14.4968 7.43008 14.3987 7.25548 14.2241C7.08088 14.0495 6.98279 13.8127 6.98279 13.5658C6.98279 13.3189 7.08088 13.0821 7.25548 12.9075C7.43008 12.7329 7.6669 12.6348 7.91382 12.6348H19.0862C19.3332 12.6348 19.57 12.7329 19.7446 12.9075C19.9192 13.0821 20.0173 13.3189 20.0173 13.5658C20.0173 13.8127 19.9192 14.0495 19.7446 14.2241C19.57 14.3987 19.3332 14.4968 19.0862 14.4968Z"
                            fill="white"
                        />
                    </svg>
                    Add {title.split(" ")[0]}
                </button>
            </div>
        </>
    );
};

export default WallHeader;
