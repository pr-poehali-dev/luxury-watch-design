import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Главная", href: "#home" },
    { name: "Услуги", href: "#services" },
    { name: "О нас", href: "#about" },
    { name: "Отзывы", href: "#testimonials" },
    { name: "Контакты", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-luxury-dark/90 backdrop-blur-md z-50 border-b border-luxury-gold/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <Icon name="Watch" className="w-8 h-8 text-luxury-gold" />
            <div>
              <h1 className="text-2xl font-bold gold-text-gradient">
                SwissTime
              </h1>
              <p className="text-xs text-luxury-gold/70">
                Мастерская элитных часов
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-luxury-silver hover:text-luxury-gold transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button className="bg-luxury-gold hover:bg-luxury-gold-light text-luxury-dark font-medium">
              <Icon name="Phone" className="w-4 h-4 mr-2" />
              Связаться
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-luxury-gold/20">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-luxury-gold transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                variant="outline"
                className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark mt-4 w-full"
              >
                <Icon name="Phone" className="w-4 h-4 mr-2" />
                Связаться
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
