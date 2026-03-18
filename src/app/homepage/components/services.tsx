import { PiHandCoins, PiTag, PiKey, PiCurrencyDollar } from "react-icons/pi";

export default function ServicesSection() {
  const services = [
    {
      icon: PiHandCoins,
      title: "Buy Property",
      description:
        "Find verified homes and commercial spaces at the right price.",
    },
    {
      icon: PiTag,
      title: "Sell Property",
      description:
        "List your property with expert pricing, marketing, and fast closing support.",
    },
    {
      icon: PiKey,
      title: "Rent & Lease",
      description:
        "Find rental homes and commercial spaces that fit your lifestyle and business needs.",
    },
    {
      icon: PiCurrencyDollar,
      title: "Investment Consulting",
      description:
        "Every property is thoroughly checked to ensure accuracy, quality, and legal safety.",
    },
  ];

  return (
    <section className="bg-white px-8 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-lime-500 text-xl">+</span>
            <h2 className="text-teal-600 font-bold text-lg">Services</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-teal-900 max-w-3xl">
            We help buyers, sellers, and investors make confident property
            decisions with expert guidance.
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:border-teal-300 hover:bg-teal-50 transition duration-300 group"
              >
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-teal-900 group-hover:text-teal-500 transition" />
                </div>
                <h4 className="text-xl font-bold text-teal-900 mb-4">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
