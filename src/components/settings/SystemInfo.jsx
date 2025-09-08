import { FaInfoCircle } from "react-icons/fa";

export default function SystemInfo() {
    return (
        <section className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-4">
                <FaInfoCircle className="text-gray-500" />
                System Info
            </h2>
            <ul className="text-gray-700 space-y-2">
                <li>
                    <strong>Version:</strong> 1.0.0
                </li>
                <li>
                    <strong>Last Update:</strong> 2024-06-15
                </li>
                <li>
                    <strong>License:</strong> Commercial
                </li>
            </ul>
        </section>
    );
}
