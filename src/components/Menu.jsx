
import { useState } from "react";
import ProductCard from "./ProductCard";

import liberikaImg from "../assets/img/liberika.png";
import senjaImg from "../assets/img/senja.png";
import dirtyLatteImg from "../assets/img/dl.png";

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

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All Menu");
  const [favorites, setFavorites] = useState([]);

  const filteredProducts =
    activeCategory === "All Menu"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  const toggleFavorite = (id) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id]
    );
  };

  return (
    <section
      id="menu"
      className="bg-[#FBF8F2] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10">

        {/* MENU HEADER */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#A47750]">
              Our Menu
            </p>

            <h2 className="font-heading text-4xl font-semibold tracking-tight text-[#382317] sm:text-5xl lg:text-[56px]">
              Find Your Coffee
            </h2>

            <p className="mt-4 max-w-[560px] text-[13px] leading-7 text-[#806B57] sm:text-sm">
              Pilihan kopi untuk menemani berbagai suasana.
              Temukan yang paling cocok dengan seleramu.
            </p>
          </div>

          {/* MENU INFORMATION */}
          {/* <p className="text-[11px] text-[#A18465]">
            {filteredProducts.length} menu available
          </p> */}
        </div>

        {/* CATEGORY FILTER */}
        <div className="mt-10 flex flex-wrap items-center gap-3 border-b border-[#E7DCCF] pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 text-[11px] font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[#3B281B] text-white shadow-md shadow-[#3B281B]/10"
                  : "bg-[#F0E7DA] text-[#705238] hover:bg-[#E5D6C3]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PRODUCT LIST */}
        <div className="mt-9 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={() => toggleFavorite(product.id)}
            />
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredProducts.length === 0 && (
          <div className="py-16 text-center">
            <p className="font-heading text-xl text-[#493020]">
              Menu belum tersedia
            </p>
            <p className="mt-2 text-sm text-[#806B57]">
              Silakan pilih kategori lainnya.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
