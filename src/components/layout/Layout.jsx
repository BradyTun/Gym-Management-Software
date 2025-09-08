import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen font-sans">
      <div className="max-w-5xl mx-auto py-10 px-4">
        <Nav />
        {children}
        <Footer />
      </div>
    </div>
  );
}
