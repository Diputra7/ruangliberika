
import { FaCoffee, FaHeart } from "react-icons/fa";
import stuImg from "../assets/img/stu.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[#FBF8F2] py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-10">

        {/* LEFT IMAGE */}
        <div className="relative px-2 pb-5">
          {/* Decorative Background */}
          <div className="absolute -bottom-2 -left-2 h-2/3 w-2/3 rounded-[32px] bg-[#EDE0CC] sm:-bottom-3 sm:-left-3" />

          {/* Main Image */}
          <img
            src={stuImg}
            alt="Interior coffee shop yang nyaman"
            loading="lazy"
            className="relative h-[300px] w-full rounded-[32px] object-cover object-[center_60%] shadow-lg sm:h-[420px]"
          />

          {/* Image Caption */}
          <div className="absolute -bottom-1 right-4 rounded-full border border-[#E9DFD3] bg-[#FBF8F2] px-6 py-3 shadow-lg sm:right-7">
            <p className="font-heading text-lg font-semibold text-[#503B2A]">
              Take it slow.
            </p>

            <p className="text-[10px] text-[#987451]">
              Enjoy every little moment.
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="pt-4 lg:pt-0">

          {/* Label */}
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#987451]">
            A Little About Us
          </p>

          {/* Heading */}
          <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.15] text-[#352316] sm:text-[46px]">
            More Than Coffee,
            <br />
            It&apos;s a Place to Belong.
          </h2>

          {/* Description */}
          <p className="mt-6 text-sm leading-8 text-[#806B57]">
            Ruang Liberika hadir sebagai ruang untuk menikmati kopi,
            berbagi cerita, dan menciptakan momen sederhana yang
            berkesan. Kami percaya bahwa setiap cangkir kopi memiliki
            cerita dan keistimewaannya sendiri.
          </p>

          {/* HIGHLIGHT CARDS */}
          <div className="mt-8 grid grid-cols-2 gap-4">

            {/* QUALITY */}
            <div className="rounded-[24px] border border-[#E9DFD3] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F0E7DA] text-[#987451]">
                <FaCoffee size={19} />
              </div>

              <h3 className="mt-4 font-heading text-lg font-semibold text-[#493020]">
                Quality
              </h3>

              <p className="mt-1 text-[11px] leading-5 text-[#8A7866]">
                Pilihan rasa yang berkesan.
              </p>
            </div>

            {/* PASSION */}
            <div className="rounded-[24px] border border-[#E9DFD3] bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F0E7DA] text-[#987451]">
                <FaHeart size={19} />
              </div>

              <h3 className="mt-4 font-heading text-lg font-semibold text-[#493020]">
                Passion
              </h3>

              <p className="mt-1 text-[11px] leading-5 text-[#8A7866]">
                Disajikan dengan sepenuh hati.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
