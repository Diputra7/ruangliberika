 
import { FaArrowRight, FaRegStar } from "react-icons/fa";
import kopiImg from "../assets/img/kopi.png";

export default function Promo() {
  return (
    <section
      id="story"
      className="bg-[#EFE3D2] px-5 py-16 sm:py-20 lg:px-10"
    >
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[28px] bg-[#3B281B] shadow-[0_20px_55px_rgba(59,40,27,0.15)] md:grid-cols-2">

        {/* STORY CONTENT */}
        <div className="flex flex-col items-start justify-center px-7 py-12 sm:px-12 sm:py-16 lg:px-16">

          {/* Label */}
          <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D6B99A]">
            <FaRegStar size={13} />
            Our Story
          </div>

          {/* Heading */}
          <h2 className="mt-5 font-heading text-4xl font-semibold leading-[1.12] text-[#FFF9F0] sm:text-5xl">
            The Story of
            <br />
            <span className="font-normal italic text-[#D9B58D]">
              Liberika Coffee.
            </span>
          </h2>

          {/* Description */}
          <div className="mt-5 max-w-md space-y-4 text-sm leading-7 text-white/65">
            <p>
              Kopi Liberika dikenal dengan karakteristiknya
              yang unik, mulai dari aroma khas hingga cita
              rasa yang berbeda dari jenis kopi lainnya.
            </p>

            <p>
              Melalui Ruang Liberika, kami ingin memperkenalkan
              keistimewaan kopi Liberika dan menghadirkan
              pengalaman menikmati kopi yang memiliki cerita
              tersendiri di setiap cangkirnya.
            </p>
          </div>

          {/* Button */}
          <a
            href="#about"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#F5EBDD] px-6 py-3.5 text-xs font-semibold text-[#3B281B] transition duration-300 hover:-translate-y-1 hover:bg-white"
          >
            Discover Our Story

            <FaArrowRight
              size={13}
              className="transition group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* STORY IMAGE */}
        <div className="relative min-h-[300px] overflow-hidden md:min-h-[430px]">
          <img
            src={kopiImg}
            alt="Kopi Liberika dengan karakter rasa yang khas"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover object-[center_40%] transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B11]/35 to-transparent md:bg-gradient-to-r md:from-[#3B281B]/20 md:to-transparent" />

          {/* Image Caption */}
          <div className="absolute bottom-7 left-7 text-white sm:bottom-9 sm:left-9">
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E5C49E]">
              A Coffee with Character
            </p>

            <h3 className="mt-2 font-heading text-2xl font-semibold sm:text-3xl">
              A Story in Every Cup.
            </h3>
          </div>
        </div>

      </div>
    </section>
  );
}
