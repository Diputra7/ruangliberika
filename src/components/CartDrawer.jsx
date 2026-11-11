
import {
  FaTimes,
  FaShoppingBag,
  FaTrashAlt,
  FaMinus,
  FaPlus,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import { formatPrice } from "./ProductCard";

export default function CartDrawer({
  showCart,
  onClose,
  cart,
  cartCount,
  cartTotal,
  onChangeQuantity,
  onCheckout,
  onExploreMenu,
}) {
  if (!showCart) return null;

  return (
    <div className="fixed inset-0 z-[70] flex justify-end bg-[#1E140D]/55 backdrop-blur-[2px]" onClick={onClose}>
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Keranjang belanja"
        className="flex h-full w-full max-w-md flex-col bg-[#FBF8F2] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#E9DFD3] px-6 py-5">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#987451]">Your selection</p>
            <h2 className="mt-1 font-heading text-2xl font-semibold">Shopping Cart</h2>
          </div>
          <button onClick={onClose} aria-label="Tutup keranjang" className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[#F0E7DA]">
            <FaTimes size={19} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center pb-12 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F0E7DA] text-[#987451]">
                <FaShoppingBag size={27} />
              </div>
              <h3 className="mt-6 font-heading text-2xl font-semibold">Your cart is empty</h3>
              <p className="mt-2 max-w-[230px] text-xs leading-6 text-[#8A7866]">
                Belum ada kopi pilihanmu di sini. Yuk, temukan menu favoritmu.
              </p>
              <button onClick={onExploreMenu} className="mt-6 rounded-full bg-[#3B281B] px-6 py-3 text-xs font-semibold text-white transition hover:bg-[#79583D]">
                Explore Menu
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-[#EDE4D9] pb-5">
                  <img src={item.image} alt={item.name} className="h-24 w-20 rounded-xl bg-[#EDE3D6] object-cover" />

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-heading text-lg font-semibold">{item.name}</h3>
                        <p className="mt-1 text-xs text-[#806044]">{formatPrice(item.price)}</p>
                      </div>
                      <button onClick={() => onChangeQuantity(item.id, -item.quantity)} aria-label={`Hapus ${item.name}`} className="rounded-full p-1.5 text-[#A27C63] transition hover:bg-[#F0E7DA] hover:text-[#7C3925]">
                        <FaTrashAlt size={14} />
                      </button>
                    </div>

                    <div className="mt-4 inline-flex items-center gap-4 rounded-full border border-[#E5D8C8] px-3 py-1.5">
                      <button onClick={() => onChangeQuantity(item.id, -1)} aria-label={`Kurangi ${item.name}`} className="text-[#705943] hover:text-[#7C3925]">
                        <FaMinus size={11} />
                      </button>
                      <span className="min-w-3 text-center text-xs font-semibold">{item.quantity}</span>
                      <button onClick={() => onChangeQuantity(item.id, 1)} aria-label={`Tambah ${item.name}`} className="text-[#705943] hover:text-[#7C3925]">
                        <FaPlus size={11} />
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
            <span className="text-xs text-[#806B57]">Total ({cartCount} item)</span>
            <span className="font-heading text-xl font-semibold text-[#503B2A]">{formatPrice(cartTotal)}</span>
          </div>

          <button
            onClick={onCheckout}
            disabled={cart.length === 0}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#3B281B] py-4 text-xs font-semibold text-white transition hover:bg-[#79583D] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <FaWhatsapp size={16} />
            Order via WhatsApp
            <FaArrowRight size={13} />
          </button>
          <p className="mt-3 text-center text-[9px] leading-5 text-[#A08D79]">
            Pesanan akan diteruskan ke WhatsApp untuk konfirmasi.
          </p>
        </div>
      </aside>
    </div>
  );
}
