import { FaDumbbell } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ProductList() {
  const products = [
    { name: "Protein Shake", type: "Drink", price: 3.5 },
    { name: "Gym Towel", type: "Accessory", price: 7.0 },
    { name: "Day Pass", type: "Service", price: 10.0 },
    { name: "Personal Training", type: "Service", price: 30.0 },
  ];

  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 col-span-1">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <FaDumbbell className="text-blue-600" />
        Gym Products 
      </h2>
      <Link
        to="/products"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        <FaPencil className="inline mr-1" />
        Edit Products
      </Link>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <ul className="divide-y">
        {products.map((p, i) => (
          <li key={i} className="flex items-center justify-between py-3">
            <div>
              <span className="font-semibold text-gray-700">{p.name}</span>
              <span className="ml-2 text-xs text-gray-400">{p.type}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">${p.price.toFixed(2)}</span>
              <button className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition">
                Add
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
