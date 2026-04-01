const RED = "#bd4033";

const videos = [
  { id: "y66427jxyMQ" },
  { id: "tVlAyxsetJQ" },
  { id: "Xr_EnzmI1Kc" },
];

const VideoTestimonialsSection = () => {
  return (
    <section className="pt-16 lg:pt-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-foreground leading-tight">
            Ascolta chi ha già partecipato al{" "}
            <span className="italic" style={{ color: RED }}>training e ai nostri percorsi</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {videos.map((v) => (
            <div
              key={v.id}
              className="rounded-2xl overflow-hidden shadow-sm border"
              style={{ borderColor: "hsl(30 20% 90%)" }}
            >
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title="Video testimonianza"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VideoTestimonialsSection;
