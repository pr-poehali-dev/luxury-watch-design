import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: "Settings",
      title: "Полное обслуживание",
      description:
        "Комплексная диагностика, чистка механизма, замена масел и регулировка точности хода",
      price: "от 15 000 ₽",
      duration: "7-14 дней",
    },
    {
      icon: "Wrench",
      title: "Ремонт механизма",
      description:
        "Восстановление поврежденных деталей, замена компонентов, настройка баланса",
      price: "от 25 000 ₽",
      duration: "14-21 день",
    },
    {
      icon: "ShieldCheck",
      title: "Замена стекла",
      description:
        "Установка оригинального сапфирового или минерального стекла с полировкой",
      price: "от 8 000 ₽",
      duration: "2-3 дня",
    },
    {
      icon: "Sparkles",
      title: "Полировка корпуса",
      description:
        "Профессиональная полировка и восстановление первоначального блеска корпуса и браслета",
      price: "от 12 000 ₽",
      duration: "3-5 дней",
    },
    {
      icon: "Gauge",
      title: "Регулировка точности",
      description:
        "Настройка хода часов на профессиональном оборудовании для максимальной точности",
      price: "от 5 000 ₽",
      duration: "1-2 дня",
    },
    {
      icon: "Crown",
      title: "Реставрация антиквариата",
      description:
        "Бережное восстановление винтажных и коллекционных часов с сохранением аутентичности",
      price: "от 35 000 ₽",
      duration: "21-30 дней",
    },
  ];

  return (
    <section id="services" className="py-20 bg-luxury-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-cormorant font-bold mb-6">
            <span className="gold-text-gradient">Наши услуги</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Предлагаем полный спектр услуг по обслуживанию и ремонту швейцарских
            часов с использованием оригинальных запчастей и современного
            оборудования
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="luxury-card group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-luxury-gold/20 transition-colors duration-300">
                  <Icon
                    name={service.icon}
                    className="w-8 h-8 text-luxury-gold"
                  />
                </div>
                <h3 className="text-2xl font-cormorant font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div className="border-t border-luxury-gold/20 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-luxury-gold font-semibold text-lg">
                    {service.price}
                  </span>
                  <span className="text-white/60 text-sm">
                    {service.duration}
                  </span>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark"
                >
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="gold-border-gradient rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-cormorant font-semibold text-white mb-4">
              Не нашли нужную услугу?
            </h3>
            <p className="text-white/80 mb-6">
              Свяжитесь с нами для консультации по индивидуальным запросам
            </p>
            <Button className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-dark font-semibold">
              <Icon name="MessageCircle" className="w-4 h-4 mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
