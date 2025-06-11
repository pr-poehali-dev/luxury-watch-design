import Icon from "@/components/ui/icon";

const Footer = () => {
  const quickLinks = [
    { name: "Главная", href: "#home" },
    { name: "Услуги", href: "#services" },
    { name: "О нас", href: "#about" },
    { name: "Контакты", href: "#contact" },
  ];

  const services = [
    "Полное обслуживание",
    "Ремонт механизма",
    "Замена стекла",
    "Полировка корпуса",
    "Реставрация антиквариата",
  ];

  const brands = [
    "Rolex",
    "Patek Philippe",
    "Omega",
    "Cartier",
    "Breitling",
    "TAG Heuer",
    "IWC",
    "Jaeger-LeCoultre",
  ];

  return (
    <footer className="bg-luxury-charcoal border-t border-luxury-gold/20">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Icon name="Watch" className="w-8 h-8 text-luxury-gold" />
              <div>
                <h3 className="text-2xl font-cormorant font-bold gold-text-gradient">
                  SwissTime
                </h3>
                <p className="text-xs text-luxury-gold/70 font-light">
                  Мастерская элитных часов
                </p>
              </div>
            </div>

            <p className="text-white/70 leading-relaxed mb-6">
              Профессиональный ремонт и обслуживание швейцарских часов
              премиум-класса с более чем 20-летним опытом работы.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center hover:bg-luxury-gold/20 transition-colors duration-300"
              >
                <Icon name="Phone" className="w-5 h-5 text-luxury-gold" />
              </a>
              <a
                href="mailto:info@swisstime.ru"
                className="w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center hover:bg-luxury-gold/20 transition-colors duration-300"
              >
                <Icon name="Mail" className="w-5 h-5 text-luxury-gold" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center hover:bg-luxury-gold/20 transition-colors duration-300"
              >
                <Icon name="MapPin" className="w-5 h-5 text-luxury-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-cormorant font-semibold text-white mb-6">
              Навигация
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-luxury-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-cormorant font-semibold text-white mb-6">
              Услуги
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-xl font-cormorant font-semibold text-white mb-6">
              Бренды часов
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {brands.map((brand) => (
                <span key={brand} className="text-white/70 text-sm">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-luxury-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 SwissTime. Все права защищены.
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-white/60 hover:text-luxury-gold transition-colors duration-300"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-luxury-gold transition-colors duration-300"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
