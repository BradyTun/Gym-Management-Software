import { useState } from "react";
import AddAdminModal from "./AddAdminModal";
import { FaUserShield, FaUserPlus, FaEdit, FaTrash } from "react-icons/fa";

export default function AdminAccounts() {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <FaUserShield className="text-purple-600" />
                    Admin Accounts
                </h2>
                <button
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2"
                    onClick={() => setShowModal(true)}
                >
                    <FaUserPlus className="text-base" /> Add Admin
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">
                                Username
                            </th>
                            <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">
                                Email
                            </th>
                            <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">
                                Role
                            </th>
                            <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-2">admin</td>
                            <td className="px-4 py-2">admin@gym.com</td>
                            <td className="px-4 py-2">
                                <span className="text-green-600 font-semibold">Super Admin</span>
                            </td>
                            <td className="px-4 py-2 flex gap-2">
                                <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 transition text-sm flex items-center gap-1">
                                    <FaEdit className="text-base" /> Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition text-sm flex items-center gap-1"
                                    disabled
                                >
                                    <FaTrash className="text-base" /> Delete
                                </button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-2">manager</td>
                            <td className="px-4 py-2">manager@gym.com</td>
                            <td className="px-4 py-2">
                                <span className="text-blue-600 font-semibold">Manager</span>
                            </td>
                            <td className="px-4 py-2 flex gap-2">
                                <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-300 transition text-sm flex items-center gap-1">
                                    <FaEdit className="text-base" /> Edit
                                </button>
                                <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition text-sm flex items-center gap-1">
                                    <FaTrash className="text-base" /> Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {showModal && <AddAdminModal onClose={() => setShowModal(false)} />}
        </section>
    );
}
