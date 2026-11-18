const coffeeTypes = [
  {
    name: "Arabica",
    scientific: "Coffea arabica",
    image: "https://images.prom.ua/1893520579_w640_h640_1893520579.jpg",
    origin: "Ethiopia",
    aroma: "Floral dan fruity",
    taste: "Lembut dengan tingkat keasaman yang lebih terasa.",
    character: "Biji oval dengan garis tengah melengkung.",
  },
  {
    name: "Robusta",
    scientific: "Coffea canephora",
    image: "https://www.embrapa.br/bme_images/o/276600080o.jpg",
    origin: "Afrika Tengah dan Barat",
    aroma: "Kuat dan earthy",
    taste: "Lebih pahit, pekat, dan tinggi kandungan kafein.",
    character: "Biji cenderung bulat dengan garis tengah lurus.",
  },
  {
    name: "Liberika",
    scientific: "Coffea liberica",
    image:
      "https://projectorigin.coffee/wp-content/uploads/2023/10/Malaysia-My-Liberica-liberica-coffee-tree-1.webp",
    origin: "Liberia, Afrika Barat",
    aroma: "Khas dan kompleks",
    taste: "Memiliki nuansa rasa fruity dan woody.",
    character: "Buah dan bijinya relatif lebih besar.",
    featured: true,
  },
];

export default function CoffeeComparison() {
  return (
    <section
      id="coffee-comparison"
      className="scroll-mt-20 bg-[#FBF8F2] px-5 py-20 sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#987451]">
            Get to Know Your Coffee
          </p>

          <h2 className="mt-4 font-heading text-4xl font-semibold leading-[1.15] text-[#352316] sm:text-5xl">
            Three Types,
            <br />
            <span className="font-normal italic text-[#987451]">
              Three Unique Characters.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-xs leading-6 text-[#806B57] sm:text-[13px]">
            Setiap jenis kopi memiliki aroma, cita rasa, dan karakteristik yang
            berbeda. Kenali keunikan Arabika, Robusta, dan Liberika.
          </p>
        </div>

        {/* COFFEE CARDS */}
        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3">
          {coffeeTypes.map((coffee) => (
            <article
              key={coffee.name}
              className={`group flex flex-col overflow-hidden rounded-[22px] border p-1 transition-all duration-300 hover:-translate-y-1 ${
                coffee.featured
                  ? "border-[#B99770] bg-[#F0E4D3] shadow-[0_8px_25px_rgba(93,61,35,0.10)] hover:shadow-[0_15px_32px_rgba(93,61,35,0.14)]"
                  : "border-[#E3D6C6] bg-[#F4EBDD] shadow-[0_6px_20px_rgba(93,61,35,0.05)] hover:border-[#B99770] hover:shadow-[0_14px_28px_rgba(93,61,35,0.10)]"
              }`}
            >
              {/* INNER CARD */}
              <div className="flex h-full flex-col overflow-hidden rounded-[17px] bg-[#FBF8F2]">
                {/* IMAGE */}
                <div className="relative m-2 overflow-hidden rounded-[13px] bg-[#E9D9C5]">
                  <div className="relative h-[215px] overflow-hidden sm:h-[230px]">
                    <img
                      src={coffee.image}
                      alt={`Kopi ${coffee.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* IMAGE OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#21160F]/75 via-transparent to-transparent" />

                    {/* COFFEE NAME */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-heading text-3xl font-semibold text-white">
                        {coffee.name}
                      </h3>

                      <p className="mt-1 text-[11px] italic text-white/80">
                        {coffee.scientific}
                      </p>
                    </div>
                  </div>
                </div>

                {/* DETAILS */}
                <div className="flex flex-1 flex-col px-5 pb-5 pt-2 sm:px-5">
                  {/* ORIGIN */}
                  <div className="flex items-center justify-between gap-3 border-b border-[#E7DCCE] pb-3">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#A18465]">
                      Origin
                    </span>

                    <span className="text-[11px] font-medium text-[#493020]">
                      {coffee.origin}
                    </span>
                  </div>

                  {/* AROMA */}
                  <div className="border-b border-[#E7DCCE] py-3">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#A18465]">
                      Aroma
                    </p>

                    <p className="mt-1.5 text-xs font-medium text-[#493020]">
                      {coffee.aroma}
                    </p>
                  </div>

                  {/* TASTE */}
                  <div className="border-b border-[#E7DCCE] py-3">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#A18465]">
                      Cita Rasa
                    </p>

                    <p className="mt-1.5 text-[11px] leading-5 text-[#806B57]">
                      {coffee.taste}
                    </p>
                  </div>

                  {/* CHARACTER */}
                  <div className="flex-1 py-3">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#A18465]">
                      Karakteristik
                    </p>

                    <p className="mt-1.5 text-[11px] leading-5 text-[#806B57]">
                      {coffee.character}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
