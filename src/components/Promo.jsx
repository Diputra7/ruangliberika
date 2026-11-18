 
import { FaMapMarkerAlt } from "react-icons/fa";
import kopiImg from "../assets/img/kopi.png";

export default function Promo() {
  return (
    <section
      id="story"
      className="bg-[#EFE3D2] px-5 py-16 sm:py-20 lg:px-10"
    >
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[28px] bg-[#3B281B] shadow-[0_20px_55px_rgba(59,40,27,0.15)] md:grid-cols-2">

        {/* HISTORY CONTENT */}
        <div className="flex flex-col items-start justify-center px-7 py-12 sm:px-12 sm:py-16 lg:px-16">

          {/* LABEL */}
          <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D6B99A]">
            <FaMapMarkerAlt size={13} />
            The History of Liberika
          </div>

          {/* HEADING */}
          <h2 className="mt-5 font-heading text-4xl font-semibold leading-[1.12] text-[#FFF9F0] sm:text-5xl">
            From Liberia
            <br />
            <span className="font-normal italic text-[#D9B58D]">
              to Nusantara.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <div className="mt-6 max-w-md space-y-4 text-sm leading-7 text-white/65">
            <p>
              Kopi Liberika berasal dari wilayah Liberia,
              Afrika Barat. Pada tahun 1878, kopi ini
              diperkenalkan ke Indonesia oleh pemerintah
              Hindia Belanda sebagai alternatif pengganti
              kopi Arabika yang terserang penyakit karat daun.
            </p>

            <p>
              Di Indonesia, Liberika kemudian berkembang
              di wilayah Tanjung Jabung Barat, Jambi.
              Pada tahun 1940-an, bibitnya dibawa dari
              Malaysia oleh Haji Sayuti dan mulai
              dibudidayakan di kawasan Mekar Jaya,
              Kecamatan Betara.
            </p>
          </div>

          {/* LOCATION HIGHLIGHT */}
          <div className="mt-8 flex items-center gap-3 rounded-full border border-[#987451]/40 bg-white/5 px-5 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D9B58D]/15 text-[#D9B58D]">
              <FaMapMarkerAlt size={14} />
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#C8A987]">
                One of Indonesia's Liberika Centers
              </p>
              <p className="mt-1 text-xs font-semibold text-[#FFF9F0]">
                Tanjung Jabung Barat, Jambi
              </p>
            </div>
          </div>
        </div>

        {/* STORY IMAGE */}
        <div className="relative min-h-[320px] overflow-hidden md:min-h-[500px]">
          <img
            src={kopiImg}
            alt="Kopi Liberika sebagai bagian dari sejarah kopi Nusantara"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[center_40%] transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B11]/65 via-transparent to-transparent" />

          {/* IMAGE CAPTION */}
          <div className="absolute bottom-7 left-7 text-white sm:bottom-9 sm:left-9">
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E5C49E]">
              A Journey Through Time
            </p>

            <h3 className="mt-2 font-heading text-2xl font-semibold sm:text-3xl">
              The Heritage of Liberika.
            </h3>

            <p className="mt-2 text-[11px] text-white/75">
              From Africa to Indonesia.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
