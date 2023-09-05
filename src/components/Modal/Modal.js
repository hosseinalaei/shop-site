import React from "react";
import Backdrop from "./backdrop/Backdrop";

const Modal = ({ show, modalClosed, children, title }) => {
  return (
    <>
      <Backdrop show={show} modalClosed={modalClosed} />
      <div className="content-modal">
        <div className="modal-header">
          <div className="modal-title h4">{title}</div>
          <button
            type="button"
            className="btn btn-sm btn-icon btn-white btn-active-light-primary"
            onClick={modalClosed}
          >
            <i className="fas fa-times-circle"></i>
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </>
  );
};

export default React.memo(Modal);
