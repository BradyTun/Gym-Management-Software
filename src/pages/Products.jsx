import { useState } from "react";
import { FaBoxOpen, FaPlus } from "react-icons/fa"; // FontAwesome icons
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import ProductList from "../components/products/ProductList";
import ProductModal from "../components/products/ProductModal";

export default function Products() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <Card title="Products" icon={<FaBoxOpen className="text-xl" />}>
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full md:w-1/3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button variant="success" onClick={() => setShowModal(true)}>
            <FaPlus className="text-sm" /> Add Product
          </Button>
        </div>
        <ProductList showModal={showModal} setShowModal={setShowModal} />
      </Card>

      {showModal && <ProductModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
