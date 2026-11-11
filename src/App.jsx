 
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Promo from "./components/Promo";
import About from "./components/About";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";
import CartDrawer from "./components/CartDrawer";

import { formatPrice } from "./components/ProductCard";

const INSTAGRAM_URL = "https://www.instagram.com/ruangliberika/";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [notice, setNotice] = useState("");

  // Menghitung jumlah produk dalam keranjang
  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  // Menghitung total harga keranjang
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Menampilkan notifikasi
  const showNotice = (message) => {
    setNotice(message);

    window.clearTimeout(showNotice.timer);

    showNotice.timer = window.setTimeout(() => {
      setNotice("");
    }, 2200);
  };

  // Menambahkan produk ke keranjang
  const addToCart = (product) => {
    setCart((previous) => {
      const existing = previous.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return previous.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...previous,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    showNotice(`${product.name} ditambahkan ke keranjang`);
  };

  // Mengubah jumlah produk
  const changeQuantity = (id, amount) => {
    setCart((previous) =>
      previous
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + amount,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Menambahkan dan menghapus produk favorit
  const toggleFavorite = (id) => {
    const isFavorite = favorites.includes(id);

    setFavorites((previous) =>
      isFavorite
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );

    showNotice(
      isFavorite
        ? "Dihapus dari favorit"
        : "Ditambahkan ke favorit"
    );
  };

  // Mengarahkan pengguna ke bagian menu
  const openMenu = () => {
    setMobileMenu(false);

    document.getElementById("menu")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Checkout melalui Instagram
  const checkoutInstagram = () => {
    if (cart.length === 0) return;

    const orderDetails = cart
      .map(
        (item) =>
          `${item.name} x${item.quantity} = ${formatPrice(
            item.price * item.quantity
          )}`
      )
      .join("\n");

    console.log("Detail pesanan:", orderDetails);
    console.log("Total pesanan:", formatPrice(cartTotal));

    window.open(
      INSTAGRAM_URL,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FBF8F2] font-body text-[#352316] selection:bg-[#DCC3A5] selection:text-[#352316]">

      {/* NAVBAR */}
      <Navbar
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />

      {/* HERO */}
      <Hero />

      {/* MENU */}
      <Menu
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        onAddToCart={addToCart}
        onViewDetails={setSelectedProduct}
      />

      {/* PROMO */}
      <Promo />

      {/* ABOUT */}
      <About />

      {/* FOOTER */}
      <Footer />

      {/* PRODUCT DETAIL MODAL */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(product) => {
          addToCart(product);
          setSelectedProduct(null);
          setShowCart(true);
        }}
      />

      {/* SHOPPING CART DRAWER */}
      <CartDrawer
        showCart={showCart}
        onClose={() => setShowCart(false)}
        cart={cart}
        cartCount={cartCount}
        cartTotal={cartTotal}
        onChangeQuantity={changeQuantity}
        onCheckout={checkoutInstagram}
        onExploreMenu={() => {
          setShowCart(false);
          openMenu();
        }}
      />

      {/* NOTIFICATION */}
      {notice && (
        <div className="fixed bottom-5 left-1/2 z-[90] flex -translate-x-1/2 items-center gap-2 bg-[#302014] px-5 py-3 text-xs font-medium text-white shadow-xl">
          <FaCheck
            size={14}
            className="text-[#D9B994]"
          />

          {notice}
        </div>
      )}
    </div>
  );
}

export default App;
