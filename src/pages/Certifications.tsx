import React from 'react';
import { useI18n } from '@/context/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/Card';
import { Award, ShieldCheck } from 'lucide-react';

const Certifications = () => {
  const { t } = useI18n();

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
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Quality Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="fade-up w-20 h-20 mx-auto bg-secondary/10 flex items-center justify-center mb-8">
              <Award className="w-10 h-10 text-secondary" />
            </div>
            <h2 className="fade-up text-3xl md:text-4xl font-poppins font-semibold text-foreground mb-4">
              {t.certifications.quality.title}
            </h2>
            <p className="fade-up-delay-1 font-poppins font-light text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.certifications.quality.description}
            </p>
          </div>
        </div>
      </section>

      {/* Certifications List */}
      <section className="py-24 lg:py-32 bg-neutralBg">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {t.certifications.list.map((cert, index) => (
              <Card
                key={index}
                variant="elevated"
                className={`fade-up-delay-${index + 1} group hover:-translate-y-2`}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-secondary">
                    <ShieldCheck className="w-8 h-8 text-secondary transition-colors duration-300 group-hover:text-secondary-foreground" />
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
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="fade-up text-3xl md:text-4xl lg:text-5xl font-poppins font-semibold text-primary-foreground mb-6">
            {t.certifications.commitment.title}
          </h2>
          <p className="fade-up-delay-1 font-poppins font-light text-primary-foreground/80 text-lg max-w-3xl mx-auto">
            {t.certifications.commitment.description}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certifications;
