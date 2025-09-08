import { FaUserPlus } from "react-icons/fa";

export default function AddAdminModal({ onClose }) {
    const handleAdd = () => {
        alert("Admin account added!");
        onClose();
    };

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full text-center"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
                    <FaUserPlus className="text-blue-600" />
                    Add Admin Account
                </h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="Manager">Manager</option>
                        <option value="Super Admin">Super Admin</option>
                    </select>
                </form>
                <div className="mt-6 flex justify-center gap-4">
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
                        onClick={handleAdd}
                    >
                        <FaUserPlus />
                        Add
                    </button>
                    <button
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
