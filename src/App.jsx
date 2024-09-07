import React, { useState } from 'react';
import './App.css';

// Fungsi untuk memformat angka menjadi Rupiah
const formatRupiah = (value) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value);
};

function App() {
  // State untuk menyimpan daftar wallet
  const [wallets, setWallets] = useState([
    { id: 1, name: 'Home Wallet', amount: 325000000 },
    { id: 2, name: 'Investment', amount: 175000000 },
  ]);

  // State untuk menyimpan daftar categories
  const [categories, setCategories] = useState([
    { id: 1, name: 'Bills', amount: 255000000 },
    { id: 2, name: 'Education', amount: 120000000 },
  ]);

  // State untuk menyimpan daftar transaksi
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2020-01-15', description: 'Restaurants & Cafe', amount: -99000 },
    { id: 2, date: '2020-01-16', description: 'Clothes & Shopping', amount: -2357000 },
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
    setIsModalOpen(false); // Menutup modal setelah menambah wallet
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
    setIsCategoryModalOpen(false); // Menutup modal setelah menambah category
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
    setIsTransactionModalOpen(false); // Menutup modal setelah menambah transaksi
  };

  // Fungsi untuk menghapus wallet
  const deleteWallet = (id) => {
    setWallets(wallets.filter(wallet => wallet.id !== id));
    setIsEditModalOpen(false); // Menutup modal edit setelah hapus wallet
  };

  // Fungsi untuk menghapus category
  const deleteCategory = (id) => {
    setCategories(categories.filter(category => category.id !== id));
    setIsCategoryEditModalOpen(false); // Menutup modal edit setelah hapus category
  };

  // Fungsi untuk menghapus transaksi
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
    setIsTransactionEditModalOpen(false); // Menutup modal edit setelah hapus transaksi
  };

  // Fungsi untuk memulai edit wallet
  const startEditing = (wallet) => {
    setEditingWallet(wallet);
    setNewWalletName(wallet.name);
    setNewWalletAmount(wallet.amount);
    setIsEditModalOpen(true); // Buka modal edit
  };

  // Fungsi untuk memulai edit category
  const startEditingCategory = (category) => {
    setEditingCategory(category);
    setNewCategoryName(category.name);
    setNewCategoryAmount(category.amount);
    setIsCategoryEditModalOpen(true); // Buka modal edit category
  };

  // Fungsi untuk memulai edit transaksi
  const startEditingTransaction = (transaction) => {
    setEditingTransaction(transaction);
    setNewTransactionDescription(transaction.description);
    setNewTransactionAmount(transaction.amount);
    setNewTransactionDate(transaction.date);
    setIsTransactionEditModalOpen(true); // Buka modal edit transaksi
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
    setIsEditModalOpen(false); // Menutup modal setelah simpan
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
    setIsCategoryEditModalOpen(false); // Menutup modal setelah simpan
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
    setIsTransactionEditModalOpen(false); // Menutup modal setelah simpan
  };

  return (
    <div className="min-h-screen bg-blue-100 w-screen p-10">
      {/* Navbar */}
      <nav className="bg-yellow-50 p-4 shadow-sm flex justify-between items-center">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-green-400"></div> {/* Logo Placeholder */}
            <span className="text-xl font-bold text-gray-800">My Wallet</span>
          </div>
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border rounded-lg focus:outline-none bg-slate-300"
          />
          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-black">Overview</a>
            <a href="#" className="text-gray-600 hover:text-black">Finance</a>
            <a href="#" className="text-gray-600 hover:text-black">Calendar</a>
            <a href="#" className="text-gray-600 hover:text-black">Events</a>
          </div>
        </div>

        {/* User Icon */}
        <div className="flex items-center space-x-6">
          <button className="bg-transparent border-none outline-none">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/565/565422.png" 
              alt="Notif Icon" 
              className="w-4 h-4"
            />          
          </button>
          <div className="w-8 h-8 rounded-full bg-blue-500"></div>
        </div>
      </nav>

      {/* Main Content Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white p-6 border-r">
          {/* Wallets */}
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-600 mb-4">Wallets</h2>
            <button
              onClick={() => setIsModalOpen(true)}
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
            {wallets.map(wallet => (
              <li key={wallet.id} className="flex items-center justify-between py-3">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-purple-600 rounded-full mr-3"></span>
                  <p>{wallet.name}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <p className="font-semibold text-gray-700">{formatRupiah(wallet.amount)}</p>
                  <button
                    onClick={() => startEditing(wallet)}
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

          {/* Categories */}
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
              {categories.map(category => (
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
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-white">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800">Daftar Transaksi</h1>
            <button 
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700 transition"
              onClick={() => setIsTransactionModalOpen(true)}
            >
              <img 
                src="https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png" 
                alt="Plus Icon" 
                className="w-6 h-6"
              />
            </button>
          </div>

          {/* Tampilkan jumlah transaksi dan total nominal */}
          <div className="mt-4 flex justify-between">
            <p className="text-gray-600 text-lg">
              Jumlah Transaksi: {totalTransactions}
            </p>
            <p className="text-gray-600 text-lg">
              Total Pengeluaran: {formatRupiah(totalAmount*-1)}
            </p>
          </div>
          
          {/* Transaction List */}
          <div className="mt-1">
            <div className="border rounded-lg p-4 bg-white">
              <h2 className="text-lg font-semibold text-gray-600">Transaksi</h2>
              <div className="mt-4">
                {transactions.map(transaction => (
                  <div key={transaction.id} className="flex justify-between py-2 border-b">
                    <div>
                      <p>{transaction.description}</p>
                      <p className="text-gray-500 text-sm">{transaction.date}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <p className={transaction.amount < 0 ? "text-red-500" : "text-green-500"}>
                        {formatRupiah(transaction.amount)}
                      </p>
                      <button
                        onClick={() => startEditingTransaction(transaction)}
                        className="bg-blue-500 hover:bg-blue-700 transition p-1"
                      >
                        <img 
                          src="https://static-00.iconduck.com/assets.00/edit-icon-2048x2048-6svwfwto.png" 
                          alt="Edit Icon" 
                          className="w-5 h-5"
                        />                    
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Modal Tambah Transaction */}
      {isTransactionModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Tambah Transaksi Baru</h2>
            <input
              type="text"
              placeholder="Deskripsi Transaksi"
              value={newTransactionDescription}
              onChange={(e) => setNewTransactionDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none mb-4 bg-slate-300"
            />
            <input
              type="number"
              placeholder="Jumlah"
              value={newTransactionAmount}
              onChange={(e) => setNewTransactionAmount(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none mb-4 bg-slate-300"
            />
            <input
              type="date"
              value={newTransactionDate}
              onChange={(e) => setNewTransactionDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none mb-4 bg-slate-300"
            />
            <div className="flex justify-between">
              <button
                onClick={addTransaction}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Tambah Transaksi
              </button>
              <button
                onClick={() => setIsTransactionModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Edit Transaction */}
      {isTransactionEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-xl font-bold mb-4">Edit Transaksi</h2>
            <input
              type="text"
              placeholder="Deskripsi Transaksi"
              value={newTransactionDescription}
              onChange={(e) => setNewTransactionDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none mb-4 bg-slate-300"
            />
            <input
              type="number"
              placeholder="Jumlah"
              value={newTransactionAmount}
              onChange={(e) => setNewTransactionAmount(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none mb-4 bg-slate-300"
            />
            <input
              type="date"
              value={newTransactionDate}
              onChange={(e) => setNewTransactionDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none mb-4 bg-slate-300"
            />
            <div className="flex justify-between">
              <button
                onClick={saveEditTransaction}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Simpan Perubahan
              </button>
              <button
                onClick={() => deleteTransaction(editingTransaction.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Hapus Transaksi
              </button>
              <button
                onClick={() => setIsTransactionEditModalOpen(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
