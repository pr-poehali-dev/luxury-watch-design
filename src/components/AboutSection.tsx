import Icon from "@/components/ui/icon";

const AboutSection = () => {
  const achievements = [
    {
      icon: "Award",
      title: "Сертифицированный мастер",
      description: "Официальная сертификация от Swiss Watch Academy",
    },
    {
      icon: "Users",
      title: "Семейная традиция",
      description: "Три поколения часовых мастеров в нашей семье",
    },
    {
      icon: "Gem",
      title: "Работа с люксом",
      description: "Официальный партнер премиальных брендов",
    },
    {
      icon: "Clock",
      title: "Опыт 20+ лет",
      description: "Более двух десятилетий в часовом деле",
    },
  ];

  return (
    <section id="about" className="py-20 bg-luxury-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-5xl font-cormorant font-bold mb-8">
              <span className="gold-text-gradient">О мастерской</span>
            </h2>

            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                SwissTime — это семейная мастерская, где традиции швейцарского
                часового искусства передаются из поколения в поколение. Наш
                основатель, Михаил Петров, прошел обучение в легендарной Swiss
                Watch Academy в Гренхене.
              </p>

              <p>
                Мы специализируемся на обслуживании и ремонте часов
                премиум-класса, используя только оригинальные запчасти и
                современное швейцарское оборудование. Каждые часы для нас — это
                произведение искусства, требующее бережного отношения.
              </p>

              <p>
                За годы работы через наши руки прошли тысячи уникальных
                механизмов — от классических Rolex до редких винтажных Patek
                Philippe. Мы понимаем ценность каждого изделия и гарантируем
                высочайшее качество работы.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={achievement.icon}
                      className="w-6 h-6 text-luxury-gold"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1609587312208-cea54be969e7?w=800&h=600&fit=crop&crop=center"
                alt="Часовая мастерская"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/60 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-luxury-charcoal border border-luxury-gold/20 rounded-lg p-6 max-w-xs">
              <div className="text-center">
                <div className="text-3xl font-cormorant font-bold text-luxury-gold mb-2">
                  500+
                </div>
                <div className="text-white text-sm">
                  Отремонтированных часов в год
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 bg-luxury-charcoal border border-luxury-gold/20 rounded-lg p-6 max-w-xs">
              <div className="text-center">
                <div className="text-3xl font-cormorant font-bold text-luxury-gold mb-2">
                  98%
                </div>
                <div className="text-white text-sm">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
