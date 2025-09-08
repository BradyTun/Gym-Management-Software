import { useState, useEffect } from "react";
import { FaBoxOpen } from "react-icons/fa";
import InputField from "../common/InputField";
import Button from "../common/Button";

export default function ProductModal({ onClose, product = null, onSave }) {
  // Initialize state with product values if editing
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    code: "",
  });

  useEffect(() => {
    if (product) {
      setForm({
        name: product.name || "",
        price: product.price || "",
        stock: product.stock || "",
        code: product.code || "",
      });
    }
  }, [product]);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    if (!form.name || !form.price) {
      alert("Please fill in required fields.");
      return;
    }
    // Pass form back to parent
    onSave({ ...form, id: product?.id });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <FaBoxOpen />
          {product ? "Edit Product" : "Add Product"}
        </h2>

        <form className="space-y-4">
          <InputField
            label="Product Name"
            placeholder="e.g. Protein Powder"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <InputField
            label="Price"
            type="number"
            placeholder="50.00"
            value={form.price}
            onChange={(e) => handleChange("price", e.target.value)}
          />
          <InputField
            label="Stock"
            type="number"
            placeholder="20"
            value={form.stock}
            onChange={(e) => handleChange("stock", e.target.value)}
          />
          <InputField
            label="Code"
            placeholder="use a scanner"
            value={form.code}
            onChange={(e) => handleChange("code", e.target.value)}
          />
        </form>

        <div className="mt-6 flex justify-end gap-4">
          <Button onClick={handleSave}>{product ? "Update" : "Save"}</Button>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
