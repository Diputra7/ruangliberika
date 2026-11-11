
import { FaTimes, FaStar, FaShoppingBag } from "react-icons/fa";
import { formatPrice } from "./ProductCard";

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#1E140D]/65 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Detail ${product.name}`}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[26px] bg-[#FBF8F2] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Tutup detail produk"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#503B2A] shadow transition hover:bg-[#3B281B] hover:text-white"
        >
          <FaTimes size={17} />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="min-h-[260px] overflow-hidden bg-[#EDE3D6]">
            <img src={product.image} alt={product.name} className="h-full max-h-[360px] w-full object-cover md:max-h-none" />
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#987451]">
              {product.category} · {product.tag}
            </p>
            <h2 className="mt-3 font-heading text-4xl font-semibold text-[#352316]">{product.name}</h2>

            <div className="mt-4 flex items-center gap-2 text-xs text-[#806B57]">
              <FaStar size={13} className="text-[#A47A35]" />
              {product.rating} / 5
            </div>

            <p className="mt-5 text-sm leading-7 text-[#806B57]">{product.description}</p>
            <p className="mt-7 font-heading text-2xl font-semibold text-[#68472F]">{formatPrice(product.price)}</p>

            <button
              onClick={() => onAddToCart(product)}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#3B281B] py-4 text-xs font-semibold text-white transition hover:bg-[#79583D]"
            >
              <FaShoppingBag size={15} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
