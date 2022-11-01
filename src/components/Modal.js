import React from "react";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="modal">
      {modalOpen ? (
        <div className="modal-content">
          <div className="modal-body">
            <div className="closing-modal-button-div">
              <button onClick={() => setModalOpen(false)} className="closing-modal-button">
                <MdOutlineClose />
              </button>
            </div>
            <h1>Modal Content</h1>
          </div>
        </div>
      ) : (
        <button onClick={() => setModalOpen(true)} className="modal-button">
          Modal
        </button>
      )}
    </div>
  );
};

export default Modal;
