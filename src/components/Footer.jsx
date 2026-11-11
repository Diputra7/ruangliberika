import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

import logo from "../assets/img/logo.png";

const INSTAGRAM_URL = "https://www.instagram.com/ruangliberika/";
const WHATSAPP_URL = "https://wa.me/6283187050086";

const MAPS_URL =
  "https://www.bing.com/maps/search?mepi=0%7E%7EEmbedded%7EAddress_Link&ty=18&v=2&sV=1&FORM=MPSRPL&ss=id.ypid%3AYN9F2737891E219FE&q=Fianda+coffee+space+and+roastery&ppois=0.4810676872730255_101.40548706054688_Fianda+coffee+space+and+roastery_YN9F2737891E219FE%7E&cp=0.481068%7E101.405487&lvl=16&style=r";

export default function Footer() {
  return (
    <footer className="bg-[#302014] text-[#FFF9F0]">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-10 lg:py-16">
        <div className="grid gap-11 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16">
          {/* BRAND */}
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
              A space for coffee, stories, and meaningful moments. Temukan teman
              terbaik untuk setiap jeda harimu.
            </p>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-full border border-[#987451]/50 px-5 py-3 text-[10px] font-semibold tracking-wider text-[#E8D4BD] transition duration-300 hover:border-[#C8A987] hover:bg-[#4A3020]"
            >
              <FaInstagram size={15} />
              FOLLOW OUR INSTAGRAM
            </a>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="mb-5 font-heading text-lg font-semibold">Explore</h3>

            <div className="flex flex-col gap-4 text-xs text-white/60">
              <a href="#home" className="w-fit transition hover:text-[#D9B58D]">
                Home
              </a>
              <a href="#menu" className="w-fit transition hover:text-[#D9B58D]">
                Our Menu
              </a>
              <a
                href="#story"
                className="w-fit transition hover:text-[#D9B58D]"
              >
                Our Story
              </a>
              <a
                href="#about"
                className="w-fit transition hover:text-[#D9B58D]"
              >
                About Us
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-5 font-heading text-lg font-semibold">
              Contact Us
            </h3>

            <div className="flex flex-col gap-5 text-xs text-white/60">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-3 transition hover:text-[#D9B58D]"
              >
                <FaMapMarkerAlt size={17} className="text-[#C8A987]" />
                Location
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-3 transition hover:text-[#D9B58D]"
              >
                <FaInstagram size={17} className="text-[#C8A987]" />
                Instagram
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-3 transition hover:text-[#D9B58D]"
              >
                <FaWhatsapp size={17} className="text-[#C8A987]" />
                Customer Service
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-center text-[10px] text-white/35 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© 2026 Ruang Liberika. All rights reserved.</p>
          <p>Made for coffee lovers.</p>
        </div>
      </div>
    </footer>
  );
}
