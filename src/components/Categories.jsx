import React from 'react';

const Categories = ({ categories, formatRupiah, startEditingCategory, setIsCategoryModalOpen }) => {
    return (
        <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-600">Categories</h2>
                <button
                    onClick={() => setIsCategoryModalOpen(true)}
                    className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700 transition"
                    >
                    <img
                        src="https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png"
                        alt="Plus Icon"
                        className="w-6 h-6"
                    />
                </button>
            </div>

            <ul>
                {categories.map((category) => (
                <li key={category.id} className="flex items-center justify-between py-3">
                    <div className="flex items-center">
                        <span className="w-3 h-3 bg-green-600 rounded-full mr-3"></span>
                        <p>{category.name}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <p className="font-semibold text-gray-700">{formatRupiah(category.amount)}</p>
                        <button
                            onClick={() => startEditingCategory(category)}
                            className="bg-blue-500 hover:bg-blue-700 transition p-1"
                        >
                            <img
                                src="https://static-00.iconduck.com/assets.00/edit-icon-2048x2048-6svwfwto.png"
                                alt="Edit Icon"
                                className="w-5 h-5"
                            />
                        </button>
                    </div>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
