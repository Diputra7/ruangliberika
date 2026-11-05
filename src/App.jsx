import { useMemo, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import {
  Search,
  ShoppingBag,
  Heart,
  Menu,
  X,
  Plus,
  Minus,
  ArrowRight,
  Coffee,
  Leaf,
  Star,
  Trash2,
  MessageCircle,
  MapPin,
  Clock3,
  Check,
  Sparkles,
} from "lucide-react";

import logo from "./assets/img/logo.png";
import liberikaBeans from "./assets/img/liberika-beans.jpg";
import liberikaImg from "./assets/img/liberika.png";
import senjaImg from "./assets/img/senja.png";
import dirtyLatteImg from "./assets/img/dl.png";
import stuImg from "./assets/img/stu.jpg";
import kopiImg from "./assets/img/kopi.png";

const WHATSAPP_NUMBER = "6283187050086";

const whatsappLink = (
  message = "Halo Ruang Liberika, saya ingin bertanya tentang menu.",
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const products = [
  {
    id: 1,
    name: "Liberika",
    category: "Coffee",
    price: 18000,
    rating: 4.9,
    tag: "Signature",
    description:
      "Kopi Liberika dengan karakter rasa khas, aroma yang unik, dan sentuhan rasa alami.",
    image: liberikaImg,
  },
  {
    id: 2,
    name: "Senja",
    category: "Coffee",
    price: 25000,
    rating: 4.9,
    tag: "Favorite",
    description:
      "Sajian kopi spesial dengan perpaduan rasa yang lembut untuk menemani waktu santai.",
    image: senjaImg,
  },
  {
    id: 3,
    name: "Dirty Latte",
    category: "Coffee",
    price: 35000,
    rating: 4.8,
    tag: "Creamy",
    description:
      "Perpaduan espresso dan susu dingin yang creamy dengan karakter rasa kopi yang kuat.",
    image: dirtyLatteImg,
  },
];

const categories = ["All Menu", "Coffee"];

const formatPrice = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);

function App() {
  const [category, setCategory] = useState("All Menu");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("popular");
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [notice, setNotice] = useState("");

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchCategory =
        category === "All Menu" || product.category === category;

      const matchSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase().trim());

      const matchFavorite = !showFavorites || favorites.includes(product.id);

      return matchCategory && matchSearch && matchFavorite;
    });

    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);
    if (sort === "popular") result.sort((a, b) => b.rating - a.rating);

    return result;
  }, [category, search, sort, favorites, showFavorites]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const showNotice = (message) => {
    setNotice(message);
    window.clearTimeout(showNotice.timer);
    showNotice.timer = window.setTimeout(() => setNotice(""), 2200);
  };

  const addToCart = (product) => {
    setCart((previous) => {
      const existing = previous.find((item) => item.id === product.id);

      if (existing) {
        return previous.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...previous, { ...product, quantity: 1 }];
    });

    showNotice(`${product.name} ditambahkan ke keranjang`);
  };

  const changeQuantity = (id, amount) => {
    setCart((previous) =>
      previous
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const toggleFavorite = (id) => {
    const isFavorite = favorites.includes(id);

    setFavorites((previous) =>
      isFavorite ? previous.filter((item) => item !== id) : [...previous, id],
    );

    showNotice(isFavorite ? "Dihapus dari favorit" : "Ditambahkan ke favorit");
  };

  const openMenu = () => {
    setMobileMenu(false);
    setShowFavorites(false);
    setCategory("All Menu");

    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  const checkoutWhatsApp = () => {
    if (cart.length === 0) return;

    const message = [
      "Halo Ruang Liberika, saya ingin memesan:",
      "",
      ...cart.map(
        (item) =>
          `- ${item.name} x${item.quantity} = ${formatPrice(
            item.price * item.quantity,
          )}`,
      ),
      "",
      `Total: ${formatPrice(cartTotal)}`,
      "",
      "Mohon informasi untuk proses pemesanannya. Terima kasih!",
    ].join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FBF8F2] font-body text-[#352316] selection:bg-[#DCC3A5] selection:text-[#352316]">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 border-b border-[#E8DED0] bg-[#FBF8F2]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-10">
          <a href="#home" className="flex shrink-0 items-center gap-3">
            <img
              src={logo}
              alt="Logo Ruang Liberika"
              className="h-11 w-11 object-contain"
            />

            <div className="leading-tight">
              <p className="font-heading text-lg font-bold tracking-tight sm:text-xl">
                Ruang Liberika
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-[#987451]">
                Coffee & Stories
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-[#E9DFD3] bg-[#F7F1E8]/90 p-1.5 shadow-sm md:flex">
            <a
              href="#home"
              className="rounded-full bg-[#3B281B] px-5 py-2.5 text-[12px] font-medium text-white transition"
            >
              Home
            </a>

            <a
              href="#menu"
              className="rounded-full px-5 py-2.5 text-[12px] font-medium text-[#604A37] transition hover:bg-[#E9DCCB]"
            >
              Our Menu
            </a>

            <a
              href="#promo"
              className="rounded-full px-5 py-2.5 text-[12px] font-medium text-[#604A37] transition hover:bg-[#E9DCCB]"
            >
              Special Offers
            </a>

            <a
              href="#about"
              className="rounded-full px-5 py-2.5 text-[12px] font-medium text-[#604A37] transition hover:bg-[#E9DCCB]"
            >
              Our Story
            </a>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden items-center gap-1 rounded-full border border-[#E9DFD3] bg-[#F7F1E8]/90 p-1.5 shadow-sm sm:flex">
              <button
                onClick={() => {
                  setShowFavorites((previous) => !previous);
                  setCategory("All Menu");

                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                aria-label="Lihat produk favorit"
                title="Favorites"
                className={`hidden h-10 w-10 items-center justify-center rounded-full transition sm:flex ${
                  showFavorites
                    ? "bg-[#E9DCCB] text-[#7C3925]"
                    : "text-[#503B2A] hover:bg-[#E9DCCB]"
                }`}
              >
                <Heart
                  size={19}
                  fill={showFavorites ? "currentColor" : "none"}
                />
              </button>

              {/* WHATSAPP CHAT */}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hubungi melalui WhatsApp"
                className="hidden h-10 w-10 items-center justify-center rounded-full text-[#503B2A] transition hover:bg-[#E9DCCB] hover:text-[#503B2A] sm:flex"
              >
                <MessageCircle size={19} />
              </a>

              <button
                onClick={() => setShowCart(true)}
                aria-label={`Buka keranjang, ${cartCount} item`}
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#503B2A] transition hover:bg-[#E9DCCB]"
              >
                <ShoppingBag size={20} />

                {cartCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#7C3925] px-1 text-[10px] font-semibold text-white">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#503B2A] transition hover:bg-[#E9DCCB] md:hidden"
              onClick={() => setMobileMenu((previous) => !previous)}
              aria-label="Buka menu navigasi"
            >
              {mobileMenu ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="border-t border-[#E8DED0] bg-[#FBF8F2] px-6 py-5 shadow-lg md:hidden">
            <div className="flex flex-col gap-1 text-sm font-medium text-[#604A37]">
              <a
                href="#home"
                onClick={() => setMobileMenu(false)}
                className="rounded-xl px-3 py-3 transition hover:bg-[#E9DCCB]"
              >
                Home
              </a>

              <a
                href="#menu"
                onClick={openMenu}
                className="rounded-xl px-3 py-3 transition hover:bg-[#E9DCCB]"
              >
                Our Menu
              </a>

              <a
                href="#promo"
                onClick={() => setMobileMenu(false)}
                className="rounded-xl px-3 py-3 transition hover:bg-[#E9DCCB]"
              >
                Special Offers
              </a>

              <a
                href="#about"
                onClick={() => setMobileMenu(false)}
                className="rounded-xl px-3 py-3 transition hover:bg-[#E9DCCB]"
              >
                Our Story
              </a>

              <button
                onClick={() => {
                  setShowFavorites(true);
                  setCategory("All Menu");
                  setMobileMenu(false);

                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-xl px-3 py-3 text-left transition hover:bg-[#E9DCCB]"
              >
                Your Favorites
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative isolate overflow-hidden bg-[#EFE3D2]"
      >
        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-white/35 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-[#C9AC8B]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:py-16 md:grid-cols-2 lg:gap-16 lg:px-10 lg:py-20">
          <div className="order-2 md:order-1">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#B99A78]/40 bg-[#F9F2E8]/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#806044]">
              <Leaf size={14} />A little pause, a better day
            </div>

            <h1 className="max-w-xl font-heading text-[43px] font-semibold leading-[1.08] tracking-tight text-[#352316] sm:text-6xl lg:text-[68px]">
              A Better Day
              <br />
              Starts With
              <br />
              <span className="font-normal italic text-[#8A6546]">
                Good Coffee.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-sm leading-8 text-[#705943] sm:text-[15px]">
              Temukan pengalaman menikmati kopi dengan karakter rasa yang
              istimewa. Teman sederhana untuk memulai hari, beristirahat
              sejenak, dan berbagi cerita.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#menu"
                className="group inline-flex items-center gap-3 rounded-full bg-[#3B281B] px-7 py-4 text-xs font-semibold text-[#FFF9F0] shadow-lg shadow-[#3B281B]/10 transition hover:-translate-y-0.5 hover:bg-[#68472F]"
              >
                Explore Our Menu
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="#about"
                className="rounded-full border border-[#9A7A5B]/50 px-7 py-4 text-xs font-semibold text-[#503B2A] transition hover:border-[#3B281B] hover:bg-[#3B281B] hover:text-white"
              >
                Our Story
              </a>
            </div>

            <div className="mt-11 flex flex-wrap gap-x-9 gap-y-5 border-t border-[#CDB99F] pt-7">
              <div>
                <p className="font-heading text-2xl font-semibold">100%</p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-[#806044]">
                  Selected Coffee
                </p>
              </div>

              <div>
                <p className="font-heading text-2xl font-semibold">Fresh</p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-[#806044]">
                  Every Single Day
                </p>
              </div>

              <div>
                <p className="font-heading text-2xl font-semibold">Made</p>

                <p className="mt-1 text-[10px] uppercase tracking-wider text-[#806044]">
                  With Care
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 mx-auto w-full max-w-[520px] md:order-2">
            <div className="relative rounded-[34px] bg-[#F8F1E7] p-3 shadow-[0_25px_70px_rgba(76,49,27,0.16)] sm:p-4">
              <div className="overflow-hidden rounded-[25px]">
                <img
                  src={liberikaBeans}
                  alt="Biji kopi Liberika"
                  className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[490px]"
                />
              </div>

              <div className="absolute -bottom-5 left-6 right-6 rounded-2xl border border-white/60 bg-[#FBF6ED]/95 p-5 shadow-xl backdrop-blur-md sm:left-10 sm:right-10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#987451]">
                      Our speciality
                    </p>

                    <h2 className="mt-1 font-heading text-xl font-semibold text-[#352316] sm:text-2xl">
                      The Liberika Experience
                    </h2>

                    <p className="mt-1 text-[11px] text-[#806B57]">
                      Unique taste, authentic character.
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E9DCCB] text-[#755238]">
                    <Coffee size={21} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND NOTE */}
      <section className="border-y border-[#E8DED0] bg-[#FBF8F2]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#E8DED0] px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-10">
          <div className="flex items-center justify-center gap-3 py-6">
            <Coffee size={19} className="text-[#987451]" />

            <span className="text-xs font-medium tracking-wide text-[#604A37]">
              Coffee with Character
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 py-6">
            <Leaf size={19} className="text-[#987451]" />

            <span className="text-xs font-medium tracking-wide text-[#604A37]">
              A Moment to Slow Down
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 py-6">
            <Heart size={19} className="text-[#987451]" />

            <span className="text-xs font-medium tracking-wide text-[#604A37]">
              Made for Good Stories
            </span>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="scroll-mt-20 bg-[#FBF8F2] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <div className="mb-10 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#987451]">
                Our Collection
              </p>

              <h2 className="font-heading text-4xl font-semibold tracking-tight text-[#352316] sm:text-[46px]">
                {showFavorites ? "Your Favorites" : "Find Your Coffee"}
              </h2>

              <p className="mt-3 max-w-md text-sm leading-7 text-[#806B57]">
                Pilihan kopi untuk menemani berbagai suasana. Temukan yang
                paling cocok dengan seleramu.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
              <label className="flex min-h-12 flex-1 items-center gap-3 rounded-full border border-[#E7DCCF] bg-white px-5 transition focus-within:border-[#A78360] lg:w-64">
                <Search size={17} className="shrink-0 text-[#987451]" />

                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Cari menu kopi..."
                  aria-label="Cari menu"
                  className="w-full bg-transparent text-xs text-[#352316] outline-none placeholder:text-[#A99A89]"
                />

                {search && (
                  <button
                    onClick={() => setSearch("")}
                    aria-label="Hapus pencarian"
                    className="text-[#987451]"
                  >
                    <X size={15} />
                  </button>
                )}
              </label>

              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                aria-label="Urutkan produk"
                className="min-h-12 rounded-full border border-[#E7DCCF] bg-white px-5 text-xs text-[#604A37] outline-none transition focus:border-[#A78360]"
              >
                <option value="popular">Most Popular</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="mb-9 flex flex-wrap items-center justify-between gap-4 border-b border-[#E9DFD3] pb-5">
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setCategory(item);
                    setShowFavorites(false);
                  }}
                  className={`rounded-full px-5 py-2.5 text-[11px] font-semibold transition ${
                    category === item && !showFavorites
                      ? "bg-[#3B281B] text-white shadow-md shadow-[#3B281B]/10"
                      : "bg-[#F0E7DA] text-[#705943] hover:bg-[#E6D7C4]"
                  }`}
                >
                  {item}
                </button>
              ))}

              <button
                onClick={() => setShowFavorites((previous) => !previous)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-semibold transition ${
                  showFavorites
                    ? "bg-[#7C3925] text-white"
                    : "bg-[#F0E7DA] text-[#705943] hover:bg-[#E6D7C4]"
                }`}
              >
                <Heart
                  size={13}
                  fill={showFavorites ? "currentColor" : "none"}
                />
                Favorites
              </button>
            </div>

            <p className="text-[11px] text-[#9A8875]">
              {filteredProducts.length} menu available
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-[22px] border border-[#EEE5D9] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#D8C5AE] hover:shadow-[0_18px_45px_rgba(65,43,25,0.10)]"
              >
                <div className="relative overflow-hidden bg-[#EDE3D6]">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-[290px] w-full object-cover object-[center_90%] transition duration-700 group-hover:scale-[1.045] sm:h-[310px]"
                  />

                  <div className="absolute left-4 top-4 rounded-full border border-white/50 bg-[#FBF8F2]/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#705238] backdrop-blur">
                    {product.tag}
                  </div>

                  <button
                    onClick={() => toggleFavorite(product.id)}
                    aria-label={
                      favorites.includes(product.id)
                        ? `Hapus ${product.name} dari favorit`
                        : `Tambah ${product.name} ke favorit`
                    }
                    className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full shadow-sm backdrop-blur transition ${
                      favorites.includes(product.id)
                        ? "bg-[#7C3925] text-white"
                        : "bg-white/90 text-[#503B2A] hover:bg-white hover:text-[#7C3925]"
                    }`}
                  >
                    <Heart
                      size={17}
                      fill={
                        favorites.includes(product.id) ? "currentColor" : "none"
                      }
                    />
                  </button>

                  <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-[#FBF8F2]/90 px-3 py-1.5 text-[10px] font-semibold text-[#806044] backdrop-blur">
                    <Star size={12} fill="currentColor" />
                    {product.rating}
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A18465]">
                        {product.category}
                      </p>

                      <h3 className="mt-1 font-heading text-[25px] font-semibold text-[#352316]">
                        {product.name}
                      </h3>
                    </div>

                    <p className="pt-1 text-sm font-bold text-[#68472F]">
                      {formatPrice(product.price)}
                    </p>
                  </div>

                  <p className="mt-3 min-h-[50px] text-xs leading-6 text-[#8A7866]">
                    {product.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 border-t border-[#F0E9E0] pt-4">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="flex-1 rounded-full border border-[#D9C9B6] py-3 text-[10px] font-semibold text-[#604A37] transition hover:border-[#3B281B] hover:bg-[#F7F1E8]"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => addToCart(product)}
                      aria-label={`Tambah ${product.name} ke keranjang`}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3B281B] text-white transition hover:bg-[#79583D] active:scale-95"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="rounded-3xl border border-dashed border-[#D8C7B3] py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F0E7DA] text-[#987451]">
                <Coffee size={25} />
              </div>

              <h3 className="mt-5 font-heading text-2xl font-semibold">
                Menu belum ditemukan
              </h3>

              <p className="mt-2 text-xs text-[#806B57]">
                Coba kata kunci lain atau tampilkan semua menu.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setShowFavorites(false);
                  setCategory("All Menu");
                }}
                className="mt-5 rounded-full bg-[#3B281B] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#79583D]"
              >
                Tampilkan Semua Menu
              </button>
            </div>
          )}
        </div>
      </section>

      {/* PROMO */}
      <section id="promo" className="bg-[#EFE3D2] px-5 py-16 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[28px] bg-[#3B281B] shadow-[0_20px_55px_rgba(59,40,27,0.15)] md:grid-cols-2">
          <div className="flex flex-col items-start justify-center px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
            <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D6B99A]">
              <Sparkles size={14} />A coffee moment
            </div>

            <h2 className="mt-5 font-heading text-4xl font-semibold leading-[1.12] text-[#FFF9F0] sm:text-5xl">
              Good Coffee,
              <br />
              Better Moments.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
              Setiap cangkir punya cerita. Temukan pilihan kopi spesial dan
              nikmati momen sederhana yang terasa lebih istimewa bersama Ruang
              Liberika.
            </p>

            <a
              href="#menu"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#F5EBDD] px-6 py-3.5 text-xs font-semibold text-[#3B281B] transition hover:bg-white"
            >
              Discover Our Menu
              <ArrowRight
                size={15}
                className="transition group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="relative min-h-[260px] overflow-hidden md:min-h-[430px]">
            <img
              src={kopiImg}
              alt="Suasana kopi yang hangat"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B11]/35 to-transparent md:bg-gradient-to-r md:from-[#3B281B]/20 md:to-transparent" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-20 bg-[#FBF8F2] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div className="relative">
            <div className="absolute -bottom-5 -left-5 h-2/3 w-2/3 rounded-[28px] bg-[#EDE0CC]" />

            <img
              src={stuImg}
              alt="Interior coffee shop yang nyaman"
              loading="lazy"
              className="relative h-[300px] w-full rounded-[26px] object-cover object-[center_60%] shadow-lg sm:h-[420px]"
            />

            <div className="absolute -bottom-5 right-5 rounded-2xl bg-[#FBF8F2] px-5 py-4 shadow-lg sm:right-8">
              <p className="font-heading text-xl font-semibold text-[#503B2A]">
                Take it slow.
              </p>

              <p className="mt-1 text-[10px] text-[#987451]">
                Enjoy every little moment.
              </p>
            </div>
          </div>

          <div className="pt-4 lg:pt-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#987451]">
              A little about us
            </p>

            <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.15] text-[#352316] sm:text-[46px]">
              More Than Coffee,
              <br />
              It&apos;s a Place to Belong.
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#806B57]">
              Ruang Liberika hadir sebagai ruang untuk menikmati kopi, berbagi
              cerita, dan menciptakan momen sederhana yang berkesan. Kami
              percaya bahwa setiap cangkir kopi memiliki cerita dan
              keistimewaannya sendiri.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[#E9DFD3] bg-white p-5">
                <Coffee size={22} className="text-[#987451]" />

                <h3 className="mt-4 font-heading text-lg font-semibold">
                  Quality
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-[#8A7866]">
                  Pilihan rasa yang berkesan.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E9DFD3] bg-white p-5">
                <Heart size={22} className="text-[#987451]" />

                <h3 className="mt-4 font-heading text-lg font-semibold">
                  Passion
                </h3>

                <p className="mt-1 text-[11px] leading-5 text-[#8A7866]">
                  Disajikan dengan sepenuh hati.
                </p>
              </div>
            </div>

            <a
              href={whatsappLink(
                "Halo Ruang Liberika, saya ingin mengetahui informasi lebih lanjut.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              {/* <MessageCircle size={16} />
              Get in Touch */}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#302014] text-[#FFF9F0]">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-16">
          <div className="grid gap-11 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16">
            <div>
              <a href="#home" className="inline-flex items-center gap-3">
                <img
                  src={logo}
                  alt="Logo Ruang Liberika"
                  className="h-12 w-12 rounded-full bg-[#FBF8F2] p-1 object-contain"
                />

                <div>
                  <h2 className="font-heading text-2xl font-semibold">
                    Ruang Liberika
                  </h2>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-[#C8A987]">
                    Coffee & Stories
                  </p>
                </div>
              </a>

              <p className="mt-5 max-w-xs text-xs leading-7 text-white/55">
                A space for coffee, stories, and meaningful moments. Temukan
                teman terbaik untuk setiap jeda harimu.
              </p>
            </div>

            <div>
              <h3 className="mb-5 font-heading text-lg font-semibold">
                Explore
              </h3>

              <div className="flex flex-col gap-3 text-xs text-white/60">
                <a href="#home" className="transition hover:text-white">
                  Home
                </a>

                <a href="#menu" className="transition hover:text-white">
                  Our Menu
                </a>

                <a href="#promo" className="transition hover:text-white">
                  Special Offers
                </a>

                <a href="#about" className="transition hover:text-white">
                  Our Story
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-5 font-heading text-lg font-semibold">
                Say Hello
              </h3>

              <div className="flex flex-col gap-4 text-xs text-white/60">
                <p className="flex items-center gap-3">
                  <MapPin size={16} className="shrink-0 text-[#C8A987]" />
                  Ruang Liberika Coffee Shop
                </p>

                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:text-white"
                >
                  <MessageCircle
                    size={16}
                    className="shrink-0 text-[#C8A987]"
                  />
                  +62 831-8705-0086
                </a>

                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition hover:text-white"
                >
                  <FaInstagram size={16} className="shrink-0 text-[#C8A987]" />
                  @ruangliberika
                </a>

                <p className="flex items-center gap-3">
                  <Clock3 size={16} className="shrink-0 text-[#C8A987]" />
                  Contact us for more information
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-center text-[10px] text-white/35 sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p>© 2026 Ruang Liberika. All rights reserved.</p>
            <p>Made for coffee lovers.</p>
          </div>
        </div>
      </footer>

      {/* PRODUCT DETAIL MODAL */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#1E140D]/65 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Detail ${selectedProduct.name}`}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[26px] bg-[#FBF8F2] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              aria-label="Tutup detail produk"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#503B2A] shadow transition hover:bg-[#3B281B] hover:text-white"
            >
              <X size={19} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="min-h-[260px] overflow-hidden bg-[#EDE3D6]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="h-full max-h-[360px] w-full object-cover md:max-h-none"
                />
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#987451]">
                  {selectedProduct.category} · {selectedProduct.tag}
                </p>

                <h2 className="mt-3 font-heading text-4xl font-semibold text-[#352316]">
                  {selectedProduct.name}
                </h2>

                <div className="mt-4 flex items-center gap-2 text-xs text-[#806B57]">
                  <Star size={14} fill="#A47A35" className="text-[#A47A35]" />
                  {selectedProduct.rating} / 5
                </div>

                <p className="mt-5 text-sm leading-7 text-[#806B57]">
                  {selectedProduct.description}
                </p>

                <p className="mt-7 font-heading text-2xl font-semibold text-[#68472F]">
                  {formatPrice(selectedProduct.price)}
                </p>

                <button
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                    setShowCart(true);
                  }}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#3B281B] py-4 text-xs font-semibold text-white transition hover:bg-[#79583D]"
                >
                  <ShoppingBag size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CART DRAWER */}
      {showCart && (
        <div
          className="fixed inset-0 z-[70] flex justify-end bg-[#1E140D]/55 backdrop-blur-[2px]"
          onClick={() => setShowCart(false)}
        >
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Keranjang belanja"
            className="flex h-full w-full max-w-md flex-col bg-[#FBF8F2] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E9DFD3] px-6 py-5">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#987451]">
                  Your selection
                </p>

                <h2 className="mt-1 font-heading text-2xl font-semibold">
                  Shopping Cart
                </h2>
              </div>

              <button
                onClick={() => setShowCart(false)}
                aria-label="Tutup keranjang"
                className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[#E9DCCB]"
              >
                <X size={21} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center pb-12 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F0E7DA] text-[#987451]">
                    <ShoppingBag size={30} />
                  </div>

                  <h3 className="mt-6 font-heading text-2xl font-semibold">
                    Your cart is empty
                  </h3>

                  <p className="mt-2 max-w-[230px] text-xs leading-6 text-[#8A7866]">
                    Belum ada kopi pilihanmu di sini. Yuk, temukan menu
                    favoritmu.
                  </p>

                  <button
                    onClick={() => {
                      setShowCart(false);
                      openMenu();
                    }}
                    className="mt-6 rounded-full bg-[#3B281B] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#79583D]"
                  >
                    Explore Menu
                  </button>
                </div>
              ) : (
                <div className="space-y-5">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 border-b border-[#EDE4D9] pb-5"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-24 w-20 rounded-xl bg-[#EDE3D6] object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-heading text-lg font-semibold">
                              {item.name}
                            </h3>

                            <p className="mt-1 text-xs text-[#806044]">
                              {formatPrice(item.price)}
                            </p>
                          </div>

                          <button
                            onClick={() =>
                              changeQuantity(item.id, -item.quantity)
                            }
                            aria-label={`Hapus ${item.name}`}
                            className="rounded-full p-1.5 text-[#A27C63] transition hover:bg-[#E9DCCB] hover:text-[#7C3925]"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>

                        <div className="mt-4 inline-flex items-center gap-4 rounded-full border border-[#E5D8C8] px-3 py-1.5">
                          <button
                            onClick={() => changeQuantity(item.id, -1)}
                            aria-label={`Kurangi ${item.name}`}
                            className="text-[#705943] transition hover:text-[#7C3925]"
                          >
                            <Minus size={13} />
                          </button>

                          <span className="min-w-3 text-center text-xs font-semibold">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => changeQuantity(item.id, 1)}
                            aria-label={`Tambah ${item.name}`}
                            className="text-[#705943] transition hover:text-[#7C3925]"
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-[#E9DFD3] bg-white/60 px-6 py-6">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs text-[#806B57]">
                  Total ({cartCount} item)
                </span>

                <span className="font-heading text-xl font-semibold text-[#503B2A]">
                  {formatPrice(cartTotal)}
                </span>
              </div>

              <button
                onClick={checkoutWhatsApp}
                disabled={cart.length === 0}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#3B281B] py-4 text-xs font-semibold text-white transition hover:bg-[#79583D] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <MessageCircle size={16} />
                Order via WhatsApp
                <ArrowRight size={15} />
              </button>

              <p className="mt-3 text-center text-[9px] leading-5 text-[#A08D79]">
                Pesanan akan diteruskan ke WhatsApp untuk konfirmasi.
              </p>
            </div>
          </aside>
        </div>
      )}

      {/* NOTIFICATION */}
      {notice && (
        <div className="fixed bottom-5 left-1/2 z-[90] flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#302014] px-5 py-3 text-xs font-medium text-white shadow-xl">
          <Check size={15} className="text-[#D9B994]" />
          {notice}
        </div>
      )}
    </div>
  );
}

export default App;
