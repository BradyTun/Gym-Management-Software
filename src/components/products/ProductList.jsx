import Button from "../common/Button";
// Import Font Awesome icons
import { FaEdit, FaTrash } from "react-icons/fa";

export default function ProductList({showModel, setShowModal}) {
    const products = [
        { id: "P001", name: "Protein Powder", price: "50.00", stock: 20 },
        { id: "P002", name: "Yoga Mat", price: "25.00", stock: 15 },
        { id: "P003", name: "Dumbbell Set", price: "80.00", stock: 10 },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">
                            ID
                        </th>
                        <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">
                            Name
                        </th>
                        <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">
                            Price
                        </th>
                        <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">
                            Stock
                        </th>
                        <th className="px-4 py-2 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {products.map((p) => (
                        <tr key={p.id} className="hover:bg-gray-50">
                            <td className="px-4 py-2">{p.id}</td>
                            <td className="px-4 py-2">{p.name}</td>
                            <td className="px-4 py-2">${p.price}</td>
                            <td className="px-4 py-2">{p.stock}</td>
                            <td className="px-4 py-2 flex gap-2">
                                <Button variant="secondary" onClick={()=>setShowModal(true)} >
                                    <FaEdit className="text-base mr-1"/> Edit
                                </Button>
                                <Button variant="danger">
                                    <FaTrash className="text-base mr-1" /> Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
