import InputField from "../components/common/InputField";
import Button from "../components/common/Button";
import { FaDumbbell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/pos');
    };

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen flex items-center justify-center px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                <div className="flex items-center justify-center mb-6">
                    {/* Replace Material Icon with Font Awesome */}
                    <FaDumbbell className="w-12 h-12 text-blue-500" />
                    <h1 className="text-3xl font-bold text-gray-800 ml-2">Gym POS</h1>
                </div>
                <form onSubmit={handleLogin} className="space-y-4">
                    <InputField label="Email" type="email" placeholder="you@example.com" />
                    <InputField label="Password" type="password" placeholder="********" />
                    <Button className="w-full justify-center">Login</Button>
                </form>
                <p className="text-sm text-gray-600 mt-6 text-center">
                    &copy; 2024 Gym POS. All rights reserved.
                </p>
            </div>
        </div>
    );
}
