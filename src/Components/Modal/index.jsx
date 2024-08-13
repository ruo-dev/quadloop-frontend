import React from "react";
import ReactDOM from "react-dom";

export const Modal = ({ isOpen, onClose, children }) => {
     if (!isOpen) return null;

     return ReactDOM.createPortal(
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
               <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full p-6">
                    <button
                         onClick={onClose}
                         className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
                    >
                         &times;
                    </button>
                    {children}
               </div>
          </div>,
          document.getElementById("modal-root")
     );
};
