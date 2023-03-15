import React from "react";
import style from "./Modal.module.css";

const Modal = (props) => {
    if (!props.show === true) {
        return null;
    }
    return(
        <div className={style.modal}>
            <div className={style.modalContent}>
                <div className={style.close} onClick={props.closeModal}>&times;</div>
                <h1>{props.heading}</h1>
                <section>{props.content}</section>
            </div>
        </div>
    )
}

export default Modal;