import React from 'react';
import { useI18n } from '@/context/i18n';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/Card';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { t } = useI18n();

  


  const imagesWithNames = [
    {
      url: "https://ik.imagekit.io/tekora/JCL-8032-1.png",
      name: "TKR-8032-1",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8096-1.png",
      name: "TKR-8096-1",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8081-37.png",
      name: "TKR-8081-37",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8039-3.png",
      name: "TKR-8039-3",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8039-6.png",
      name: "TKR-8039-6",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8066-1.png",
      name: "TKR-8066-1",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8075-2.png",
      name: "TKR-8075-2",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8071-1.png",
      name: "TKR-8071-1",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8103-1.png",
      name: "TKR-8103-1",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8075-9.png",
      name: "TKR-8075-9",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8066-3.png",
      name: "TKR-8066-3",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8096-11.png",
      name: "TKR-8096-11",
    }, {
      url: "https://ik.imagekit.io/tekora/JCL-8105-2.png",
      name: "TKR-8105-2",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8117-2.png",
      name: "TKR-8117-2",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8103-6.png",
      name: "TKR-8103-6",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8103-1.png",
      name: "TKR-8103-1",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8105-11.png",
      name: "TKR-8105-11",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8602K-3.png",
      name: "TKR-8602K-3",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8131-2.png",
      name: "TKR-8131-2",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8131-1.png",
      name: "TKR-8131-1",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8117-8.png",
      name: "TKR-8117-8",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8601K-1.png",
      name: "TKR-8601K-1",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8117-1.png",
      name: "TKR-8117-1",
    },
    {
      url: "https://ik.imagekit.io/tekora/JCL-8131-1.png",
      name: "TKR-8131-1",
    },
    
  ];
  

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="fade-up text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold text-primary-foreground">
            {t.blog.hero.title}
          </h1>
          <p className="fade-up-delay-1 mt-6 text-lg md:text-xl font-poppins font-light text-primary-foreground/80 max-w-3xl mx-auto">
            {t.blog.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Pinterest-style Gallery */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-2 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4  ">
            {imagesWithNames.map((img , i) => {
            
              return (
              <div
                key={i}
                className="rounded-md relative h-[140px] overflow-hidden rounded-lg cursor-pointer group "
              >
                <img
                style={{borderRadius : "30px"}}
                  src={img.url}
                  alt={img.name}
                  className="w-full h-full object-cover transition-transform duration-300  ease-out group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-bla">
                  <span className="text-white font-bold text-sm tracking-wide">
                    {img.name}
                  </span>
                </div>
              </div>
              );
            })}
          </div>
        </div>


        <div className="container mx-auto p-4 my-5 lg:px-8">
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
      {/* <section className="py-24 lg:py-32 bg-neutralBg">
        
      </section> */}
      <Footer />
    </div>
  );
};

export default Blog;