const PLACEHOLDER_DEMO_URL =
  'https://www.youtube.com/embed/TUrR0xxeczE?si=13t4g_cUa7SIVdZj'

export function DemoVideoBanner() {
  return (
    <section
      id="demo-video"
      className="bg-[var(--marine-dark)] py-20 md:py-28"
      aria-label="Vidéo de démonstration"
    >
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-10">
        {/* Title */}
        <div className="text-center flex flex-col gap-4">
          <span className="inline-flex self-center items-center rounded-full bg-white/10 text-white text-[13px] font-medium px-3 py-1">
            Démonstration
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white text-balance">
            Regardez notre monobrosse autolaveuse en action
          </h2>
          <p className="text-white/70 max-w-lg mx-auto leading-relaxed text-base">
            Un matériel professionnel pour des résultats incomparables — même
            sur les surfaces les plus exigeantes.
          </p>
        </div>

        {/* YouTube embed */}
        <div className="w-full relative aspect-video rounded-xl overflow-hidden shadow-2xl">
          <iframe
            src={PLACEHOLDER_DEMO_URL}
            title="Démonstration monobrosse autolaveuse Service Pro'Preté"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}
