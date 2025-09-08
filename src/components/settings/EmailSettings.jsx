import { FaCog } from "react-icons/fa";

export default function EmailSettings() {
    return (
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                <FaCog className="text-orange-500" />
                Email SMTP Settings
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                        SMTP Server
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="smtp.example.com"
                    />
                </div>
                <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                        SMTP Port
                    </label>
                    <input
                        type="number"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="587"
                    />
                </div>
                <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                        SMTP Username
                    </label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="user@example.com"
                    />
                </div>
                <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                        SMTP Password
                    </label>
                    <input
                        type="password"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Password"
                    />
                </div>
                <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                        Sender Email
                    </label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="noreply@example.com"
                    />
                </div>
                <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                        Use SSL/TLS
                    </label>
                    <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="ssl">SSL</option>
                        <option value="tls">TLS</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </form>
            <div className="mt-6 flex justify-end">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
                    Save Changes
                </button>
            </div>
        </section>
    );
}
