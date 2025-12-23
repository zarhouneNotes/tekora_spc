import React from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/context/i18n';
import logo from "@/images/logo.png"

const Footer = () => {
  const { t } = useI18n();

  const quickLinks = [
    { href: '/', label: t.nav.home },
    { href: '/entreprise', label: t.nav.company },
    { href: '/produits', label: t.nav.products },
    { href: '/certifications', label: t.nav.certifications },
    { href: '/blog', label: t.nav.blog },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid bg-seconda grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-6 ">
            <div className="flex items-center">
        
              <img src={logo} alt="" width={"150px"} />
            </div>
            <p className="font-poppins font-light text-sm leading-relaxed opacity-80">
              {t.company.hero.subtitle}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-base mb-6">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-poppins font-light text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-poppins font-semibold text-base mb-6">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="font-poppins font-light text-sm opacity-80">
                {t.contact.info.address.value}
              </li>
              <li>
                <a
                  href="tel:+212662131138"
                  className="font-poppins font-light text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all duration-200"
                >
                  +2126-621-311-38
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@tekora.com"
                  className="font-poppins font-light text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all duration-200"
                >
                   contact@tekoramaroc.com 
                  
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          {/* <div>
            <h4 className="font-poppins font-semibold text-base mb-6">{t.footer.legal}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="font-poppins font-light text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all duration-200"
                >
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-poppins font-light text-sm opacity-80 hover:opacity-100 hover:text-secondary transition-all duration-200"
                >
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <p className="font-poppins font-light text-sm text-center opacity-60">
            © {new Date().getFullYear()} TEKORA. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
