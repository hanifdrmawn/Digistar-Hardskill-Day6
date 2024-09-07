import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TransactionList from './components/TransactionList';
import Modal from './components/Modal';
import { formatRupiah } from './utils/formatRupiah';
import './App.css'

function App() {
  // State untuk menyimpan daftar wallet
  const [wallets, setWallets] = useState([
    { id: 1, name: 'Home Wallet', amount: 325000000 },
    { id: 2, name: 'Investment', amount: 175000000 },
  ]);

  // State untuk menyimpan daftar categories
  const [categories, setCategories] = useState([
    { id: 1, name: 'Bills', amount: 124000000 },
    { id: 2, name: 'Education', amount: 3500000 },
  ]);

  // State untuk menyimpan daftar transaksi
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2024-06-15', description: 'Restaurants & Cafe', amount: -100000 },
    { id: 2, date: '2024-07-16', description: 'Clothes & Shopping', amount: -1250000 },
    { id: 3, date: '2024-08-01', description: 'Hair & Spa', amount: -250000 },
  ]);

  // State untuk menyimpan input baru
  const [newWalletName, setNewWalletName] = useState('');
  const [newWalletAmount, setNewWalletAmount] = useState('');
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryAmount, setNewCategoryAmount] = useState('');
  const [newTransactionDescription, setNewTransactionDescription] = useState('');
  const [newTransactionAmount, setNewTransactionAmount] = useState('');
  const [newTransactionDate, setNewTransactionDate] = useState('');

  // State untuk modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isCategoryEditModalOpen, setIsCategoryEditModalOpen] = useState(false);
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);
  const [isTransactionEditModalOpen, setIsTransactionEditModalOpen] = useState(false);

  // State untuk mengedit wallet, category, dan transaksi
  const [editingWallet, setEditingWallet] = useState(null);
  const [editingCategory, setEditingCategory] = useState(null);
  const [editingTransaction, setEditingTransaction] = useState(null);

  // Fungsi untuk menambahkan wallet baru
  const addWallet = () => {
    const newWallet = {
      id: wallets.length + 1,
      name: newWalletName,
      amount: parseInt(newWalletAmount),
    };
    setWallets([...wallets, newWallet]);
    setNewWalletName('');
    setNewWalletAmount('');
    setIsModalOpen(false);
  };

  // Fungsi untuk menambahkan category baru
  const addCategory = () => {
    const newCategory = {
      id: categories.length + 1,
      name: newCategoryName,
      amount: parseInt(newCategoryAmount),
    };
    setCategories([...categories, newCategory]);
    setNewCategoryName('');
    setNewCategoryAmount('');
    setIsCategoryModalOpen(false);
  };

  // Fungsi untuk menghitung total transaksi dan jumlah transaksi
  const totalTransactions = transactions.length;
  const totalAmount = transactions.reduce((total, transaction) => total + transaction.amount, 0);

  // Fungsi untuk menambahkan transaksi baru
  const addTransaction = () => {
    const newTransaction = {
      id: transactions.length + 1,
      description: newTransactionDescription,
      amount: parseInt(newTransactionAmount),
      date: newTransactionDate,
    };
    setTransactions([...transactions, newTransaction]);
    setNewTransactionDescription('');
    setNewTransactionAmount('');
    setNewTransactionDate('');
    setIsTransactionModalOpen(false);
  };

  // Fungsi untuk menghapus wallet
  const deleteWallet = (id) => {
    setWallets(wallets.filter(wallet => wallet.id !== id));
    setIsEditModalOpen(false);
  };

  // Fungsi untuk menghapus category
  const deleteCategory = (id) => {
    setCategories(categories.filter(category => category.id !== id));
    setIsCategoryEditModalOpen(false);
  };

  // Fungsi untuk menghapus transaksi
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    setIsTransactionEditModalOpen(false);
  };

  // Fungsi untuk memulai edit wallet
  const startEditingWallet = (wallet) => {
    setEditingWallet(wallet);
    setNewWalletName(wallet.name);
    setNewWalletAmount(wallet.amount);
    setIsEditModalOpen(true);
  };

  // Fungsi untuk memulai edit category
  const startEditingCategory = (category) => {
    setEditingCategory(category);
    setNewCategoryName(category.name);
    setNewCategoryAmount(category.amount);
    setIsCategoryEditModalOpen(true);
  };

  // Fungsi untuk memulai edit transaksi
  const startEditingTransaction = (transaction) => {
    setEditingTransaction(transaction);
    setNewTransactionDescription(transaction.description);
    setNewTransactionAmount(transaction.amount);
    setNewTransactionDate(transaction.date);
    setIsTransactionEditModalOpen(true);
  };

  // Fungsi untuk menyimpan perubahan wallet yang diedit
  const saveEditWallet = () => {
    setWallets(wallets.map(wallet =>
      wallet.id === editingWallet.id
        ? { ...wallet, name: newWalletName, amount: parseInt(newWalletAmount) }
        : wallet
    ));
    setEditingWallet(null);
    setNewWalletName('');
    setNewWalletAmount('');
    setIsEditModalOpen(false);
  };

  // Fungsi untuk menyimpan perubahan category yang diedit
  const saveEditCategory = () => {
    setCategories(categories.map(category =>
      category.id === editingCategory.id
        ? { ...category, name: newCategoryName, amount: parseInt(newCategoryAmount) }
        : category
    ));
    setEditingCategory(null);
    setNewCategoryName('');
    setNewCategoryAmount('');
    setIsCategoryEditModalOpen(false);
  };

  // Fungsi untuk menyimpan perubahan transaksi yang diedit
  const saveEditTransaction = () => {
    setTransactions(transactions.map(transaction =>
      transaction.id === editingTransaction.id
        ? { ...transaction, description: newTransactionDescription, amount: parseInt(newTransactionAmount), date: newTransactionDate }
        : transaction
    ));
    setEditingTransaction(null);
    setNewTransactionDescription('');
    setNewTransactionAmount('');
    setNewTransactionDate('');
    setIsTransactionEditModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-blue-100 w-screen p-10">
      <Navbar />
      <div className="flex">
        <Sidebar
          wallets={wallets}
          categories={categories}
          formatRupiah={formatRupiah}
          startEditingWallet={startEditingWallet}
          startEditingCategory={startEditingCategory}
          setIsModalOpen={setIsModalOpen}
          setIsCategoryModalOpen={setIsCategoryModalOpen}
        />
        <TransactionList
          transactions={transactions}
          totalTransactions={totalTransactions}
          totalAmount={totalAmount}
          formatRupiah={formatRupiah}
          startEditingTransaction={startEditingTransaction}
          setIsTransactionModalOpen={setIsTransactionModalOpen}
        />
      </div>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          title="Tambah Wallet Baru"
          nameValue={newWalletName}
          amountValue={newWalletAmount}
          setName={setNewWalletName}
          setAmount={setNewWalletAmount}
          handleSave={addWallet}
          handleClose={() => setIsModalOpen(false)}
        />
      )}

      {isEditModalOpen && (
        <Modal
          isOpen={isEditModalOpen}
          title="Edit Wallet"
          nameValue={newWalletName}
          amountValue={newWalletAmount}
          setName={setNewWalletName}
          setAmount={setNewWalletAmount}
          handleSave={saveEditWallet}
          handleClose={() => setIsEditModalOpen(false)}
        />
      )}
      
      {/* Modal Tambah Category */}
      {isCategoryModalOpen && (
        <Modal
          isOpen={isCategoryModalOpen}
          title="Tambah Category Baru"
          nameValue={newCategoryName}
          amountValue={newCategoryAmount}
          setName={setNewCategoryName}
          setAmount={setNewCategoryAmount}
          handleSave={addCategory}
          handleClose={() => setIsCategoryModalOpen(false)}
        />
      )}

      {/* Modal Edit Category */}
      {isCategoryEditModalOpen && (
        <Modal
          isOpen={isCategoryEditModalOpen}
          title="Edit Category"
          nameValue={newCategoryName}
          amountValue={newCategoryAmount}
          setName={setNewCategoryName}
          setAmount={setNewCategoryAmount}
          handleSave={saveEditCategory}
          handleClose={() => setIsCategoryEditModalOpen(false)}
        />
      )}

      {/* Modal Tambah Transaction */}
      {isTransactionModalOpen && (
        <Modal
          isOpen={isTransactionModalOpen}
          title="Tambah Transaksi Baru"
          nameValue={newTransactionDescription}
          amountValue={newTransactionAmount}
          setName={setNewTransactionDescription}
          setAmount={setNewTransactionAmount}
          handleSave={addTransaction}
          handleClose={() => setIsTransactionModalOpen(false)}
        />
      )}

      {/* Modal Edit Transaction */}
      {isTransactionEditModalOpen && (
        <Modal
          isOpen={isTransactionEditModalOpen}
          title="Edit Transaksi"
          nameValue={newTransactionDescription}
          amountValue={newTransactionAmount}
          setName={setNewTransactionDescription}
          setAmount={setNewTransactionAmount}
          handleSave={saveEditTransaction}
          handleClose={() => setIsTransactionEditModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
