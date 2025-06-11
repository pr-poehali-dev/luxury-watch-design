import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-luxury-dark"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=1920&h=1080&fit=crop"
          alt="Швейцарские часы"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-luxury-dark/70"></div>
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
            <span className="gold-text-gradient">Мастерство</span>
            <br />
            <span className="text-luxury-silver">Времени</span>
          </h1>

          <p className="text-xl md:text-2xl text-luxury-silver/90 mb-8 max-w-2xl">
            Профессиональный ремонт швейцарских часов премиум-класса в Москве.
            20+ лет опыта с Rolex, Patek Philippe, Omega.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-dark font-semibold px-8 py-4"
            >
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              Записаться на диагностику
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-1">
                20+
              </div>
              <div className="text-sm text-luxury-silver/70">лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-1">
                500+
              </div>
              <div className="text-sm text-luxury-silver/70">клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-1">15</div>
              <div className="text-sm text-luxury-silver/70">брендов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
