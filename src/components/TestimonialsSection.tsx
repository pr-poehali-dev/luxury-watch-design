import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Александр Волков",
      position: "Коллекционер часов",
      watch: "Patek Philippe Nautilus",
      text: "Доверил свои винтажные Patek Philippe только после долгих поисков надежного мастера. Результат превзошел все ожидания — часы ходят как новые, а оригинальность полностью сохранена.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Елена Смирнова",
      position: "Директор галереи",
      watch: "Cartier Tank",
      text: "Обращалась с семейной реликвией — часами Cartier моей бабушки. Мастера отнеслись с невероятным трепетом, восстановили до идеального состояния. Теперь рекомендую всем знакомым.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    },
    {
      name: "Дмитрий Козлов",
      position: "Предприниматель",
      watch: "Rolex Submariner",
      text: "После падения мой Rolex перестал работать. В SwissTime не только восстановили механизм, но и вернули первоначальный блеск корпусу. Профессионализм на высшем уровне!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-luxury-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-cormorant font-bold mb-6">
            <span className="gold-text-gradient">Отзывы клиентов</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Доверие наших клиентов — наша главная награда. Читайте истории тех,
            кто доверил нам свои драгоценные временные спутники
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="luxury-card group">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className="w-5 h-5 text-luxury-gold fill-current"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-white/80 leading-relaxed mb-6 relative">
                  <Icon
                    name="Quote"
                    className="w-6 h-6 text-luxury-gold/30 absolute -top-2 -left-1"
                  />
                  <p className="pl-8">{testimonial.text}</p>
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-white/60 text-sm">
                      {testimonial.position}
                    </div>
                    <div className="text-luxury-gold text-sm font-medium">
                      {testimonial.watch}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="gold-border-gradient rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-cormorant font-semibold text-white mb-4">
              Станьте частью наших довольных клиентов
            </h3>
            <p className="text-white/80 mb-6">
              Доверьте свои часы профессионалам с многолетним опытом
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://yandex.ru/maps/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark transition-all duration-300 rounded-md"
              >
                <Icon name="ExternalLink" className="w-4 h-4 mr-2" />
                Все отзывы на Яндекс.Картах
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
