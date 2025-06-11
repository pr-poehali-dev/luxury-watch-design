import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Александр Волков",
      role: "Владелец Rolex Submariner",
      content:
        "Отличная работа! Мои часы теперь работают как новые. Мастер очень профессиональный, объяснил все детали ремонта.",
      rating: 5,
    },
    {
      name: "Елена Смирнова",
      role: "Коллекционер Patek Philippe",
      content:
        "Доверяю свои винтажные часы только здесь. Бережное отношение к каждой детали и высочайшее качество работы.",
      rating: 5,
    },
    {
      name: "Михаил Петров",
      role: "Владелец Omega Speedmaster",
      content:
        "Быстро и качественно отремонтировали сложную поломку. Цены честные, гарантия на все работы. Рекомендую!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-luxury-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="gold-text-gradient">Отзывы клиентов</span>
          </h2>
          <p className="text-xl text-luxury-silver/80 max-w-3xl mx-auto">
            Что говорят наши клиенты о качестве нашей работы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="luxury-card">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    className="w-5 h-5 text-luxury-gold fill-current"
                  />
                ))}
              </div>

              <p className="text-luxury-silver/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div>
                <h4 className="font-semibold text-luxury-silver">
                  {testimonial.name}
                </h4>
                <p className="text-luxury-gold text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
