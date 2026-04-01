const Services = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif mb-12">Services</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Full Stack Systems",
            "E-Commerce Platforms",
            "Admin Panels",
            "Startup MVPs",
            "Secure APIs",
            "Modern UI Systems"
          ].map((service, i) => (
            <div key={i} className="border border-white/5 p-6 rounded-xl text-vintageGrey hover:border-mutedGold transition">
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;