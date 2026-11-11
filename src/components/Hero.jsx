 
import {
  FaLeaf,
  FaArrowRight,
  FaCoffee,
  FaSeedling,
} from "react-icons/fa";

import liberikaBeans from "../assets/img/liberika-beans.jpg";

const highlights = [
  {
    icon: <FaSeedling />,
    title: "Biji Kopi Liberika",
    description: "Karakter biji yang khas",
  },
  {
    icon: <FaCoffee />,
    title: "Aroma yang Kuat",
    description: "Aroma kopi yang berkesan",
  },
  {
    icon: <FaLeaf />,
    title: "Cita Rasa Unik",
    description: "Pengalaman rasa berbeda",
  },
];

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative overflow-hidden bg-[#E9D9C5]"
      >
        {/* Background Decoration */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-[38%] bg-[#D6BEA3]/35" />

        <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full border border-[#8B6546]/15" />

        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[350px] w-[350px] rounded-full border border-[#8B6546]/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-14 sm:py-20 md:grid-cols-[1fr_0.95fr] lg:gap-16 lg:px-10 lg:py-24">

          {/* LEFT CONTENT */}
          <div className="order-2 md:order-1">

            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-12 bg-[#805638]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#805638]">
                Mengenal Kopi Liberika
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-xl font-heading text-[43px] font-semibold leading-[1.1] tracking-[-0.035em] text-[#382317] sm:text-6xl lg:text-[68px]">
              Discover the
              <br />
              Unique Character
              <br />
              <span className="font-normal italic text-[#8A5B38]">
                of Liberika.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[440px] text-[13px] leading-[2] text-[#644A36] sm:text-[14px]">
              Kenali keunikan kopi Liberika melalui aroma yang khas,
              karakter rasa yang berbeda, dan pengalaman menikmati
              kopi yang punya cerita tersendiri. Setiap cangkir
              menghadirkan keistimewaan dari biji kopi Liberika.
            </p>

            {/* Action Button */}
            <div className="mt-9">
              <a
                href="#menu"
                className="group inline-flex items-center gap-3 rounded-full bg-[#4A2F20] px-7 py-4 text-[10px] font-semibold tracking-[0.12em] text-[#FFF8EE] shadow-md shadow-[#4A2F20]/10 transition duration-300 hover:-translate-y-1 hover:bg-[#704A30] hover:shadow-lg"
              >
                LIHAT PILIHAN KOPI

                <FaArrowRight
                  size={11}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Information */}
            <div className="mt-12 max-w-[440px] border-t border-[#B99D7E] pt-6">
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#8A6546]">
                Mengenal lebih dekat
              </p>

              <div className="mt-5 grid grid-cols-2 gap-5">
                <div>
                  <p className="font-heading text-2xl font-semibold text-[#382317] sm:text-3xl">
                    Liberika
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-[#765B43]">
                    Jenis kopi dengan karakter tersendiri
                  </p>
                </div>

                <div className="border-l border-[#B99D7E] pl-5">
                  <p className="font-heading text-2xl font-semibold text-[#382317] sm:text-3xl">
                    Khas
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-[#765B43]">
                    Aroma dan cita rasa yang unik
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 mx-auto w-full max-w-[510px] md:order-2">
            <div className="relative">

              {/* Decorative Circle */}
              <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-[#8A6546]/40 sm:-right-7 sm:-top-7 sm:h-32 sm:w-32" />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-[32px] bg-[#C5A783] shadow-[0_25px_60px_rgba(74,47,32,0.16)]">
                <img
                  src={liberikaBeans}
                  alt="Biji kopi Liberika pilihan"
                  loading="eager"
                  className="h-[340px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[450px] lg:h-[500px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#28190F]/65 via-transparent to-transparent" />

                {/* Image Caption */}
                <div className="absolute bottom-7 left-7 text-[#FFF8EE] sm:bottom-9 sm:left-9">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#E5C49E]">
                    The Character of Liberika
                  </p>

                  <h2 className="mt-2 font-heading text-3xl font-semibold sm:text-4xl">
                    Rich in Character.
                  </h2>

                  <p className="mt-2 text-[11px] tracking-wide text-[#F1DFCB]">
                    A different kind of coffee experience.
                  </p>
                </div>
              </div>

              {/* Floating Label */}
              <div className="absolute -bottom-5 right-5 inline-flex items-center gap-3 rounded-full border border-[#D9B58D]/30 bg-[#4A2F20] px-5 py-3 text-[#FFF8EE] shadow-lg sm:right-8">
                <FaLeaf className="text-[#D9B58D]" size={14} />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em]">
                  Speciality Coffee
                </span>
              </div>
            </div>

            <p className="mt-11 text-right text-[9px] uppercase tracking-[0.25em] text-[#8A6546]">
              Discover the uniqueness of Liberika
            </p>
          </div>
        </div>
      </section>

      {/* LIBERIKA HIGHLIGHTS */}
      <section className="border-b border-[#D7C3AA] bg-[#F7F0E6]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 px-5 sm:grid-cols-3 lg:px-10">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`flex items-center gap-4 py-6 sm:justify-center sm:py-7 ${
                index !== 0
                  ? "border-t border-[#E4D6C5] sm:border-l sm:border-t-0"
                  : ""
              }`}
            >
              {/* Rounded Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#CBB397] bg-[#E9D9C5]/50 text-[#805638] transition duration-300 hover:bg-[#4A2F20] hover:text-[#FFF8EE]">
                {item.icon}
              </div>

              <div>
                <h3 className="font-heading text-base font-semibold text-[#493020]">
                  {item.title}
                </h3>

                <p className="mt-1 text-[10px] text-[#806B57]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
