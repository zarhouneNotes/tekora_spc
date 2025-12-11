import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/context/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Check, ArrowRight, Star } from 'lucide-react';

const Produits = () => {
  const { t } = useI18n();

  const categories = ['marble', 'granite', 'limestone', 'onyx'] as const;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="fade-up text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold text-primary-foreground">
            {t.products.hero.title}
          </h1>
          <p className="fade-up-delay-1 mt-6 text-lg md:text-xl font-poppins font-light text-primary-foreground/80 max-w-3xl mx-auto">
            {t.products.hero.subtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Categories Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="fade-up text-3xl md:text-4xl font-poppins font-semibold text-foreground">
              {t.products.categories.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div
                key={category}
                className={`fade-up-delay-${index + 1} group cursor-pointer`}
              >
                <div className="aspect-square bg-muted relative overflow-hidden mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute inset-0 bg-secondary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-foreground group-hover:text-secondary transition-colors duration-200">
                  {t.products.categories[category].title}
                </h3>
                <p className="mt-2 font-poppins font-light text-muted-foreground text-sm">
                  {t.products.categories[category].description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PietraNox Premium Section */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-8 h-8 text-secondary" />
                <span className="text-secondary font-poppins font-medium text-sm uppercase tracking-wider">
                  {t.products.pietranox.subtitle}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-semibold text-primary-foreground mb-6">
                {t.products.pietranox.title}
              </h2>
              <p className="font-poppins font-light text-primary-foreground/80 text-lg leading-relaxed mb-8">
                {t.products.pietranox.description}
              </p>
              <ul className="space-y-4">
                {t.products.pietranox.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-secondary flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <span className="font-poppins font-light text-primary-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-up-delay-1 order-1 lg:order-2">
              <div className="aspect-[4/5] bg-primary-foreground/10 relative">
                <div className="absolute top-6 left-6 bg-secondary px-4 py-2">
                  <span className="font-poppins font-semibold text-secondary-foreground text-sm">
                    PIETRANOX
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-neutralBg">
        <div className="container mx-auto px-4 lg:px-8">
          <Card variant="elevated" className="fade-up text-center py-16 px-8">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-foreground mb-4">
              {t.products.cta.title}
            </h2>
            <p className="font-poppins font-light text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              {t.products.cta.description}
            </p>
            <Link to="/contact">
              <Button variant="solid" size="lg" className="group">
                {t.products.cta.button}
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Produits;
