import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

export default function CurrentUser() {
    return (
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                <FaUserCircle className="text-blue-600 text-3xl" />
                Current User
            </h2>
            <div className="flex items-center gap-6">
                <img
                    src="https://img.icons8.com/ios-filled/50/4a90e2/user-male-circle.png"
                    alt="User Avatar"
                    className="w-16 h-16 rounded-full border"
                />
                <div>
                    <div className="font-semibold text-gray-700">Username</div>
                    <div className="text-gray-900 mb-2">admin</div>
                    <div className="font-semibold text-gray-700">Role</div>
                    <div className="text-green-600 font-semibold mb-2">Administrator</div>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition flex items-center gap-2"
                        onClick={() => alert("Logged out!")}
                    >
                        <FaSignOutAlt />
                        Logout
                    </button>
                </div>
            </div>
        </section>
    );
}
