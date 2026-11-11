 
import {
  FaRegHeart,
  FaHeart,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

const INSTAGRAM_URL = "https://www.instagram.com/ruangliberika/";

export function formatPrice(price) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function ProductCard({
  product,
  isFavorite,
  onToggleFavorite,
}) {
  const handleOrder = () => {
    window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="group overflow-hidden rounded-[22px] border border-[#EEE5D9] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#D8C5AE] hover:shadow-[0_18px_45px_rgba(65,43,25,0.10)]">

      {/* PRODUCT IMAGE */}
      <div className="relative overflow-hidden bg-[#EDE3D6]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-[290px] w-full object-cover object-[center_90%] transition duration-700 group-hover:scale-[1.045] sm:h-[310px]"
        />

        {/* PRODUCT TAG */}
        <div className="absolute left-4 top-4 rounded-full border border-white/50 bg-[#FBF8F2]/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#705238] backdrop-blur">
          {product.tag}
        </div>

        {/* FAVORITE BUTTON */}
        <button
          onClick={onToggleFavorite}
          aria-label={
            isFavorite
              ? `Hapus ${product.name} dari favorit`
              : `Tambah ${product.name} ke favorit`
          }
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full shadow-sm backdrop-blur transition ${
            isFavorite
              ? "bg-[#7C3925] text-white"
              : "bg-white/90 text-[#503B2A] hover:bg-white hover:text-[#7C3925]"
          }`}
        >
          {isFavorite ? (
            <FaHeart size={16} />
          ) : (
            <FaRegHeart size={16} />
          )}
        </button>

        {/* RATING */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-[#FBF8F2]/90 px-3 py-1.5 text-[10px] font-semibold text-[#806044] backdrop-blur">
          <FaStar size={12} className="text-[#A47A35]" />
          {product.rating}
        </div>
      </div>

      {/* PRODUCT INFORMATION */}
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

        {/* ORDER BUTTON */}
        <div className="mt-5 flex justify-end border-t border-[#F0E9E0] pt-4">
          <button
            onClick={handleOrder}
            className="group/order inline-flex items-center justify-center gap-2 rounded-full bg-[#3B281B] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition duration-300 hover:bg-[#79583D] active:scale-95"
          >
            Order
            <FaArrowRight
              size={10}
              className="transition-transform duration-300 group-hover/order:translate-x-1"
            />
          </button>
        </div>
      </div>
    </article>
  );
}
