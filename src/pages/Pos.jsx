import ProductList from "../components/pos/ProductList";
import Cart from "../components/pos/Cart";
import Sales from "../components/pos/Sales";

export default function Pos() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <ProductList />
        <Cart />
      </div>
      <Sales />
    </>
  );
}
