import React from 'react';
import { useI18n } from '@/context/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/Card';
import { Award, ShieldCheck, Leaf, Globe, BadgeCheck } from 'lucide-react';

const Certifications = () => {
  const { t } = useI18n();

  const certIcons = [ShieldCheck, Leaf, Globe, BadgeCheck];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="fade-up text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold text-primary-foreground">
            {t.certifications.hero.title}
          </h1>
          <p className="fade-up-delay-1 mt-6 text-lg md:text-xl font-poppins font-light text-primary-foreground/80 max-w-3xl mx-auto">
            {t.certifications.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Quality Section with Single Image */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <div className="w-20 h-20 bg-secondary/10 flex items-center justify-center mb-8">
                <Award className="w-10 h-10 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-foreground mb-4">
                {t.certifications.quality.title}
              </h2>
              <p className="font-poppins font-light text-muted-foreground text-lg leading-relaxed">
                {t.certifications.quality.description}
              </p>
            </div>
            <div className="fade-up-delay-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                  alt="Quality"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications List */}
      <section className="py-24 lg:py-32 bg-neutralBg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="fade-up text-3xl md:text-4xl font-poppins font-semibold text-foreground">
              {t.certifications.quality.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {t.certifications.list.map((cert, index) => {
              const Icon = certIcons[index] || ShieldCheck;
              return (
                <Card
                  key={index}
                  variant="elevated"
                  className={`fade-up-delay-${index + 1} group hover:-translate-y-2`}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-secondary">
                      <Icon className="w-8 h-8 text-secondary transition-colors duration-300 group-hover:text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">
                        {cert.name}
                      </h3>
                      <p className="font-poppins font-light text-muted-foreground">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitment Section with Single Image */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up order-2 lg:order-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                  alt="Commitment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="fade-up-delay-1 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-semibold text-foreground mb-6">
                {t.certifications.commitment.title}
              </h2>
              <p className="font-poppins font-light text-muted-foreground text-lg leading-relaxed">
                {t.certifications.commitment.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certifications;