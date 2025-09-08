import { Link, useLocation } from "react-router-dom";
import {
  FaCashRegister,
  FaBoxOpen,
  FaChartBar,
  FaUsers,
  FaDumbbell,
  FaUserTie,
  FaCog,
} from "react-icons/fa";

export default function Nav() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  const navItems = [
    { path: "/pos", label: "POS", icon: <FaCashRegister /> },
    { path: "/products", label: "Products", icon: <FaBoxOpen /> },
    { path: "/reports", label: "Reports", icon: <FaChartBar /> },
    { path: "/members", label: "Members", icon: <FaUsers /> },
    { path: "/packages", label: "Packages", icon: <FaDumbbell /> },
    { path: "/trainers", label: "Trainers", icon: <FaUserTie /> },
    { path: "/settings", label: "Settings", icon: <FaCog /> },
  ];

  const getLinkClasses = (path) => {
    const isActive = location.pathname === path;
    return isActive
      ? "flex flex-col items-center text-blue-500"
      : "flex flex-col items-center text-gray-300 hover:text-white transition";
  };

  return (
    <header className="flex z-50 sticky top-0 bg-gray-900 p-3 rounded-xl items-center justify-between mb-8 shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/dumbbell.png"
          alt="Gym Logo"
          className="w-8 h-8"
        />
        <h1 className="text-xl font-bold text-white tracking-tight">
          Gym Management
        </h1>
      </div>

      {/* Navigation */}
      {!isLoginPage && (
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className={getLinkClasses(item.path)}>
              <span className="text-lg">{item.icon}</span>
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
