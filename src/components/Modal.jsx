// components/Modal.js
import React from 'react';

const Modal = ({ isOpen, title, nameValue, amountValue, setName, setAmount, handleSave, handleClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                <input
                    type="text"
                    placeholder="Nama"
                    value={nameValue}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none mb-4 bg-slate-300"
                />
                <input
                    type="number"
                    placeholder="Jumlah"
                    value={amountValue}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none mb-4 bg-slate-300"
                />
                <div className="flex justify-between">
                    <button
                        onClick={handleSave}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                        Simpan
                    </button>
                    <button
                        onClick={handleClose}
                        className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                    >
                        Batal
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
