import React from 'react';

const TransactionList = ({ transactions, totalTransactions, totalAmount, formatRupiah, startEditingTransaction, setIsTransactionModalOpen }) => {
    return (
        <main className="flex-1 p-8 bg-white">
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

            <div className="mt-4 flex justify-between">
                <p className="text-gray-600 text-lg">Jumlah Transaksi: {totalTransactions}</p>
                <p className="text-gray-600 text-lg">Total Pengeluaran: {formatRupiah(totalAmount * -1)}</p>
            </div>

            <div className="mt-1">
                <div className="border rounded-lg p-4 bg-white">
                <h2 className="text-lg font-semibold text-gray-600">Transaksi</h2>
                    <div className="mt-4">
                        {transactions.map((transaction) => (
                        <div key={transaction.id} className="flex justify-between py-2 border-b">
                            <div>
                                <p>{transaction.description}</p>
                                <p className="text-gray-500 text-sm">{transaction.date}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <p className={transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}>
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
    );
};

export default TransactionList;
