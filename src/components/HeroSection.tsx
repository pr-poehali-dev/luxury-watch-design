import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=1920&h=1080&fit=crop&crop=center"
          alt="Luxury Swiss Watch"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-dark via-luxury-dark/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-4xl">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-cormorant font-bold leading-tight mb-6">
              <span className="gold-text-gradient">Мастерство</span>
              <br />
              <span className="text-white">Времени</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Профессиональный ремонт и обслуживание швейцарских часов
              премиум-класса. Более 20 лет опыта работы с Rolex, Patek Philippe,
              Omega и другими элитными брендами.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                size="lg"
                className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-dark font-semibold px-8 py-4 text-lg"
              >
                <Icon name="Calendar" className="w-5 h-5 mr-2" />
                Записаться на диагностику
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark px-8 py-4 text-lg"
              >
                <Icon name="PlayCircle" className="w-5 h-5 mr-2" />
                Смотреть процесс работы
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg">
              <div className="text-center">
                <div className="text-3xl font-cormorant font-bold text-luxury-gold mb-1">
                  20+
                </div>
                <div className="text-sm text-white/70">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-cormorant font-bold text-luxury-gold mb-1">
                  500+
                </div>
                <div className="text-sm text-white/70">довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-cormorant font-bold text-luxury-gold mb-1">
                  15
                </div>
                <div className="text-sm text-white/70">брендов часов</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="w-6 h-6 text-luxury-gold" />
      </div>
    </section>
  );
};

export default HeroSection;
