import { FaShieldAlt } from "react-icons/fa";

export default function SecuritySettings() {
    return (
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                <FaShieldAlt className="text-red-500" />
                Security Settings
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                        Change Password
                    </label>
                    <input
                        type="password"
                        placeholder="New Password"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </form>
            <div className="mt-6 flex justify-end">
                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition font-semibold">
                    Update Password
                </button>
            </div>
        </section>
    );
}
