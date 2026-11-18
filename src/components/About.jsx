
const reelUrl =
  "https://www.instagram.com/fiandacoffee_hq/reel/De0jp8sTNGC/";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-[#F7F0E6] px-5 py-12 sm:py-14 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* MAIN CONTAINER */}
        <div className="grid overflow-hidden rounded-[26px] bg-[#3B281B] shadow-[0_18px_45px_rgba(59,40,27,0.12)] lg:grid-cols-2">

          {/* LEFT INSTAGRAM VIDEO */}
          <div className="relative min-h-[360px] overflow-hidden bg-[#21160F] sm:min-h-[400px] lg:min-h-[500px]">
            <iframe
              src="https://www.instagram.com/reel/De0jp8sTNGC/embed"
              title="Fianda Coffee Instagram Reel"
              className="absolute inset-0 h-full w-full border-0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              loading="eager"
              scrolling="no"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative flex flex-col justify-center overflow-hidden px-7 py-9 sm:px-9 sm:py-10 lg:px-11 lg:py-12">

            {/* DECORATIVE CIRCLES */}
            <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full border border-[#D9B58D]/15" />

            <div className="pointer-events-none absolute -right-12 -top-16 h-52 w-52 rounded-full border border-[#D9B58D]/15" />

            {/* CONTENT */}
            <div className="relative">

              {/* LABEL */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#D9B58D]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D9B58D]">
                  A Little About Us
                </p>
              </div>

              {/* HEADING */}
              <h2 className="mt-5 font-heading text-3xl font-semibold leading-[1.12] text-[#FBF8F2] sm:text-4xl xl:text-[48px]">
                More Than
                <br />
                Coffee,
                <br />
                <span className="font-normal italic text-[#D9B58D]">
                  A Place to Belong.
                </span>
              </h2>

              {/* DESCRIPTION */}
              <div className="mt-5 max-w-xl space-y-3 text-[13px] leading-7 text-[#E5D3C0]/85">
                <p>
                  Ruang Liberika merupakan bagian dari Fianda Coffee
                  Space and Roastery yang hadir untuk memperkenalkan
                  keunikan kopi Liberika.
                </p>

                <p>
                  Kami ingin menghadirkan ruang yang nyaman untuk
                  menikmati kopi, bersantai, dan berbagi cerita.
                  Bagi kami, menikmati kopi bukan hanya tentang rasa,
                  tetapi juga tentang pengalaman dan momen sederhana
                  yang tercipta di setiap kunjungan.
                </p>
              </div>

              {/* BOTTOM ACCENT */}
              <div className="mt-6 flex items-center gap-4 border-t border-[#D9B58D]/25 pt-5">
                <div className="h-9 w-1 rounded-full bg-[#D9B58D]" />

                <div>
                  <p className="font-heading text-lg italic text-[#E5C49E]">
                    "Every Cup Has a Story."
                  </p>

                  <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.2em] text-[#E5D3C0]/60">
                    Ruang Liberika
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
