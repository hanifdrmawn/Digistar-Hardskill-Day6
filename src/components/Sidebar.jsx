import React from 'react';
import Wallets from './Wallets';
import Categories from './Categories';

const Sidebar = ({
    wallets,
    categories,
    formatRupiah,
    startEditingWallet,
    startEditingCategory,
    setIsModalOpen,
    setIsCategoryModalOpen,
    }) => {
    return (
        <aside className="w-1/4 bg-white p-6 border-r">
        <Wallets
            wallets={wallets}
            formatRupiah={formatRupiah}
            startEditing={startEditingWallet}  // Pastikan mengirim startEditingWallet
            setIsModalOpen={setIsModalOpen}   // Pastikan mengirim setIsModalOpen
        />
        <Categories
            categories={categories}
            formatRupiah={formatRupiah}
            startEditingCategory={startEditingCategory} // Pastikan mengirim startEditingCategory
            setIsCategoryModalOpen={setIsCategoryModalOpen} // Pastikan mengirim setIsCategoryModalOpen
        />
        </aside>
    );
};

export default Sidebar;
