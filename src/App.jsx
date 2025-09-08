import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Pos from "./pages/POS";
import MemberList from "./pages/MemberList";
import MemberDetails from "./pages/Member";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Layout from "./components/layout/Layout";
import SalesReport from "./pages/SalesReport"; 
import Packages from "./pages/Packages";
import Trainers from "./pages/Trainers";
import MemberEdit from "./pages/MemberEdit";


export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pos" element={<Pos />} />
          <Route path="/reports" element={<SalesReport />} />
          <Route path="/members" element={<MemberList />} />
          <Route path="/members/:id" element={<MemberDetails />} />
          <Route path="/members/:id/edit" element={<MemberEdit />} />
          <Route path="/products" element={<Products />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/settings" element={<Settings />} />
          {/* Add a catch-all route for 404 */}
          <Route path="*" element={<div className="text-center mt-20 text-2xl text-red-500">404 - Page Not Found</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
