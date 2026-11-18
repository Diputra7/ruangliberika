import { useEffect, useState } from "react";

const heroImages = [
  {
    image:
      "https://afrocoffee.com/media/98/03/a5/1773838737/headup%20liberica.jpeg?ts=1774355370",
    alt: "Buah kopi Liberika berwarna merah dan hijau di pohon",
  },
  {
    image:
      "https://media.es.wired.com/photos/63c59c3bcd65a93ba5b49406/1:1/w_853,h_853,c_limit/Liberica_GettyImages-1417895004.jpg",
    alt: "Buah kopi Liberika dan bunga kopi di perkebunan",
  },
  {
    image: "https://cdn.antaranews.com/cache/1200x800/2022/10/07/IMG_2577.jpg",
    alt: "Petani kopi Liberika sedang memanen buah kopi di perkebunan",
  },
];

const INSTAGRAM_URL = "https://www.instagram.com/ruangliberika/";

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[560px] items-center justify-center overflow-hidden bg-[#302014] px-5 py-28 sm:min-h-[620px] lg:min-h-[680px]"
    >
      {/* BACKGROUND SLIDESHOW */}
      {heroImages.map((item, index) => (
        <img
          key={item.image}
          src={item.image}
          alt={item.alt}
          fetchPriority={index === 0 ? "high" : "auto"}
          className={`absolute inset-0 h-full w-full object-cover object-[center_65%] transition-opacity duration-[1500ms] ${
            activeImage === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#1D140E]/65" />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1D140E]/30 via-[#1D140E]/20 to-[#1D140E]/75" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
        <p className="mb-6 text-[9px] font-semibold uppercase tracking-[0.4em] text-[#E5C49E] sm:text-[11px]">
          Ruang Liberika · Coffee & Stories
        </p>

        <h1 className="font-heading text-4xl font-bold uppercase leading-[1.15] tracking-wide sm:text-5xl md:text-6xl lg:text-[72px]">
          Discover the
          <br />
          <span className="text-[#E5C49E]">World of Liberica.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-[11px] leading-7 text-white/85 sm:text-sm sm:leading-8">
          Liberika merupakan salah satu jenis kopi dengan karakter yang
          istimewa. Dikenal melalui ukuran buahnya yang khas, aroma yang unik,
          serta cita rasa yang berbeda dari kopi lainnya. Mari mengenal lebih
          dekat keunikan kopi Liberika dalam setiap cangkirnya.
        </p>

        {/* EXPLORE BUTTON */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center justify-center rounded-full border border-[#E5C49E] bg-[#E5C49E] px-8 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#302014] transition duration-300 hover:border-white hover:bg-white sm:px-10 sm:py-4"
        >
          Explore Liberika
        </a>

        {/* SLIDE INDICATOR */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              aria-label={`Tampilkan gambar ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeImage === index
                  ? "w-9 bg-[#E5C49E]"
                  : "w-2 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* BOTTOM LABEL */}
      <div className="absolute bottom-6 left-0 right-0 z-10 text-center">
        <p className="text-[8px] uppercase tracking-[0.35em] text-white/60 sm:text-[9px]">
          Discover · Learn · Enjoy
        </p>
      </div>
    </section>
  );
}
