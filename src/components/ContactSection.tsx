import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: "MapPin",
      title: "Адрес мастерской",
      details: ["ул. Тверская, 15, стр. 2", "Москва, 125009"],
      link: "https://yandex.ru/maps",
    },
    {
      icon: "Phone",
      title: "Телефон",
      details: ["+7 (495) 123-45-67", "+7 (925) 123-45-67"],
      link: "tel:+74951234567",
    },
    {
      icon: "Clock",
      title: "Режим работы",
      details: ["Пн-Пт: 10:00 - 19:00", "Сб: 11:00 - 17:00", "Вс: выходной"],
      link: null,
    },
    {
      icon: "Mail",
      title: "Email",
      details: ["info@swisstime.ru", "master@swisstime.ru"],
      link: "mailto:info@swisstime.ru",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-luxury-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-cormorant font-bold mb-6">
            <span className="gold-text-gradient">Контакты</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Свяжитесь с нами для консультации или записи на диагностику. Мы
            находимся в самом центре Москвы и всегда готовы помочь
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-cormorant font-semibold text-white mb-8">
              Информация для связи
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={info.icon}
                      className="w-6 h-6 text-luxury-gold"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      {info.title}
                    </h4>
                    <div className="space-y-1">
                      {info.details.map((detail, i) => (
                        <div key={i}>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-white/70 hover:text-luxury-gold transition-colors duration-300"
                            >
                              {detail}
                            </a>
                          ) : (
                            <span className="text-white/70">{detail}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-8 rounded-lg overflow-hidden border border-luxury-gold/20">
              <div className="h-64 bg-luxury-charcoal flex items-center justify-center">
                <div className="text-center">
                  <Icon
                    name="MapPin"
                    className="w-12 h-12 text-luxury-gold mx-auto mb-3"
                  />
                  <p className="text-white/60">Интерактивная карта</p>
                  <p className="text-white/40 text-sm">
                    ул. Тверская, 15, стр. 2
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="luxury-card">
              <h3 className="text-2xl font-cormorant font-semibold text-white mb-6">
                Записаться на консультацию
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Имя *
                    </label>
                    <Input
                      placeholder="Ваше имя"
                      className="bg-luxury-dark border-luxury-gold/20 text-white placeholder:text-white/40"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">
                      Телефон *
                    </label>
                    <Input
                      placeholder="+7 (___) ___-__-__"
                      className="bg-luxury-dark border-luxury-gold/20 text-white placeholder:text-white/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 mb-2 text-sm font-medium">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-luxury-dark border-luxury-gold/20 text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2 text-sm font-medium">
                    Бренд часов
                  </label>
                  <Input
                    placeholder="Rolex, Patek Philippe, Omega..."
                    className="bg-luxury-dark border-luxury-gold/20 text-white placeholder:text-white/40"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2 text-sm font-medium">
                    Описание проблемы
                  </label>
                  <Textarea
                    placeholder="Опишите, что случилось с часами или какую услугу вы хотели бы получить..."
                    rows={4}
                    className="bg-luxury-dark border-luxury-gold/20 text-white placeholder:text-white/40 resize-none"
                  />
                </div>

                <Button className="w-full bg-luxury-gold hover:bg-luxury-gold-light text-luxury-dark font-semibold py-3">
                  <Icon name="Send" className="w-4 h-4 mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-white/60 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных
                  данных
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
