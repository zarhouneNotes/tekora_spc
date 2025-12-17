import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/context/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import bg from "@/images/bg.png"
import { ArrowRight, Gem, Lightbulb, Leaf, Shield } from 'lucide-react';
import { AnimatedDiv, AnimatedSection } from '@/hooks/useScrollAnimation';

const Index = () => {
  const { t } = useI18n();

  const valueIcons = [Gem, Lightbulb, Leaf, Shield];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Background Image */}
      <AnimatedSection>

     
      <AnimatedSection className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            // backgroundImage: `url('https://images.pexels.com/photos/269063/pexels-photo-269063.jpeg')`
            backgroundImage: `url('${bg}')`
          }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center py-32">
          <h1 className="fade-up text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins font-semibold text-primary-foreground leading-tight max-w-5xl mx-auto">
            {t.home.hero.title}
          </h1>
          <p className="fade-up-delay-1 mt-8 text-lg md:text-xl font-poppins font-light text-primary-foreground/80 max-w-3xl mx-auto">
            {t.home.hero.subtitle}
          </p>
          <div className="fade-up-delay-2 mt-12">
            <Link to="/produits">
              <Button variant="solid" size="lg" className="group">
                {t.home.hero.cta}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection >
       </AnimatedSection>
      {/* About Section */}

      
      <AnimatedDiv className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-semibold text-foreground">
                {t.home.about.title}
              </h2>
              <p className="mt-6 text-lg font-poppins font-light text-muted-foreground leading-relaxed">
                {t.home.about.description}
              </p>
              <div className="mt-8">
                <Link to="/entreprise">
                  <Button variant="outline" size="md" className="group">
                    {t.home.about.cta}
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="fade-up-delay-1">
              <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2121120/pexels-photo-2121120.jpeg"
                  alt="Marble texture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-primary/90 p-6">
                  <p className="font-poppins font-semibold text-primary-foreground text-2xl">20+</p>
                  <p className="font-poppins font-light text-primary-foreground/80 text-sm mt-1">
                    {t.home.about.cta === 'En savoir plus' ? "Années d'excellence" : 'Years of Excellence'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedDiv >

      {/* Values Section */}
      <AnimatedSection className="py-24 lg:py-32 bg-neutralBg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="fade-up text-3xl md:text-4xl lg:text-5xl font-poppins font-semibold text-foreground">
              {t.home.values.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.home.values.items.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <Card
                  key={index}
                  variant="elevated"
                  className={`fade-up-delay-${index + 1} text-center group hover:-translate-y-2`}
                >
                  <div className="w-16 h-16 mx-auto bg-secondary/10 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-secondary">
                    <Icon className="w-8 h-8 text-secondary transition-colors duration-300 group-hover:text-secondary-foreground" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-poppins font-light text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </AnimatedSection >

      {/* Products Preview Section */}
      <AnimatedSection className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="fade-up text-3xl md:text-4xl lg:text-5xl font-poppins font-semibold text-foreground">
              {t.home.products.title}
            </h2>
            <p className="fade-up-delay-1 mt-4 text-lg font-poppins font-light text-muted-foreground max-w-2xl mx-auto">
              {t.home.products.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {(['marble', 'granite', 'onyx'] as const).map((category, index) => {
              const categoryData = t.products.categories[category];
              const images = [
                'https://i.pinimg.com/1200x/3d/42/92/3d4292dbb649ab4b05ffef569089822a.jpg',
                'https://i.pinimg.com/1200x/3c/2b/d7/3c2bd79a80528d6bde1a68cdaad37cda.jpg',
                'https://i.pinimg.com/1200x/96/32/76/963276969ee2f184844cbaea8087183c.jpg'
              ];
              return (
                <div
                  key={category}
                  className={`fade-up-delay-${index + 1} aspect-[3/4] relative overflow-hidden group cursor-pointer`}
                >
                  <img 
                    src={images[index]}
                    alt={categoryData.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-poppins font-semibold text-primary-foreground">
                      {categoryData.title}
                    </h3>
                    <p className="mt-2 font-poppins font-light text-primary-foreground/80 text-sm">
                      {categoryData.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="fade-up-delay-4 text-center mt-12">
            <Link to="/produits">
              <Button variant="dark" size="lg" className="group">
                {t.home.products.cta}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection >

      {/* CTA Section */}
      <AnimatedSection className="py-24 lg:py-32 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="fade-up text-3xl md:text-4xl lg:text-5xl font-poppins font-semibold text-primary-foreground max-w-3xl mx-auto">
            {t.home.cta.title}
          </h2>
          <p className="fade-up-delay-1 mt-6 text-lg font-poppins font-light text-primary-foreground/80 max-w-2xl mx-auto">
            {t.home.cta.description}
          </p>
          <div className="fade-up-delay-2 mt-10">
            <Link to="/contact">
              <Button variant="solid" size="lg">
                {t.home.cta.button}
              </Button>
            </Link>
          </div>
        </div>
      </AnimatedSection >

      <Footer />
    </div>
  );
};

export default Index;