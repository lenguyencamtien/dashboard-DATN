/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from 'react';

const AddMedicine = () => {

    const [medicine, setMedicine] = useState({
        name: '',
        stockDate: '',
        manufactureDate: '',
        expiryDate: '',
        price: '',
        quantity: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setMedicine((prevMedicine) => ({
            ...prevMedicine,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Medicine Data Submitted:", medicine);
    };

    return (
        <div className="flex">
            <div className="p-4 flex-1">
                <h2 className="text-2xl font-semibold mb-4">Add Medicine</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Tên</label>
                        <input
                            type="text"
                            name="name"
                            value={medicine.name}
                            onChange={handleChange}
                            required
                            className="border rounded p-2 w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Ngày Nhập Kho</label>
                        <input
                            type="date"
                            name="stockDate"
                            value={medicine.stockDate}
                            onChange={handleChange}
                            required
                            className="border rounded p-2 w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Ngày Sản Xuất</label>
                        <input
                            type="date"
                            name="manufactureDate"
                            value={medicine.manufactureDate}
                            onChange={handleChange}
                            required
                            className="border rounded p-2 w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Ngày Hết Hạn</label>
                        <input
                            type="date"
                            name="expiryDate"
                            value={medicine.expiryDate}
                            onChange={handleChange}
                            required
                            className="border rounded p-2 w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Giá</label>
                        <input
                            type="number"
                            name="price"
                            value={medicine.price}
                            onChange={handleChange}
                            required
                            className="border rounded p-2 w-full"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Số Lượng</label>
                        <input
                            type="number"
                            name="quantity"
                            value={medicine.quantity}
                            onChange={handleChange}
                            required
                            className="border rounded p-2 w-full"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Save Medicine
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddMedicine;
