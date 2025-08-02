
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServiceSelector } from "./ServiceSelector";

interface ContactProps {
  isVisible: Record<string, boolean>;
}

export const Contact = ({ isVisible }: ContactProps) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    services: [] as string[],
    date: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would integrate with your email/CRM system
    alert("Vielen Dank für Ihre Anfrage! Wir melden uns binnen 24 Stunden bei Ihnen.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      services: [],
      date: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServicesChange = (services: string[]) => {
    setFormData({
      ...formData,
      services
    });
  };

  return (
    <section 
      id="contact" 
      data-section 
      className={`py-20 bg-salon-cream/30 transition-all duration-1000 ${
        isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-salon-teal mb-8">
            {t('contact.title')}
          </h2>
          <p className="font-lora text-lg text-gray-700 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="font-montserrat font-semibold text-2xl text-salon-teal mb-6">
              {t('contact.form.title')}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="font-lora text-gray-700 mb-2 block">{t('contact.name')} *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-salon-teal"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>
                <div>
                  <label className="font-lora text-gray-700 mb-2 block">{t('contact.phone')} *</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-salon-teal"
                    placeholder="+49 123 456789"
                  />
                </div>
              </div>

              <div>
                <label className="font-lora text-gray-700 mb-2 block">{t('contact.email')}</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-salon-teal"
                  placeholder="ihre.email@beispiel.de"
                />
              </div>

              <div>
                <label className="font-lora text-gray-700 mb-2 block">
                  {t('contact.service')} *
                </label>
                <ServiceSelector
                  selectedServices={formData.services}
                  onServicesChange={handleServicesChange}
                />
              </div>

              <div>
                <label className="font-lora text-gray-700 mb-2 block">{t('contact.date')}</label>
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-salon-teal"
                />
              </div>

              <div>
                <label className="font-lora text-gray-700 mb-2 block">{t('contact.message')}</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="border-gray-300 focus:border-salon-teal"
                  placeholder="Weitere Fragen oder Anmerkungen..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-salon-teal hover:bg-salon-teal-light text-white font-montserrat py-3 text-lg transition-colors duration-300"
              >
                {t('contact.submit')}
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="font-montserrat font-semibold text-2xl text-salon-teal mb-6">
                {t('contact.info.title')}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-salon-teal mt-1" />
                  <div>
                    <p className="font-lora text-gray-700">
                      {t('contact.address')}:<br />
                      Musterstraße 123<br />
                      10115 Berlin, Deutschland
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-salon-teal" />
                  <p className="font-lora text-gray-700">+49 30 12345678</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-salon-teal" />
                  <p className="font-lora text-gray-700">info@laserbeauty-salon.de</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-salon-teal mt-1" />
                  <div className="font-lora text-gray-700">
                    <p>{t('contact.hours')}:</p>
                    <div className="whitespace-pre-line">{t('contact.hours.detail')}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.0965932049154!2d13.376993516236815!3d52.52000097981317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburg%20Gate!5e0!3m2!1sen!2sde!4v1629794729405!5m2!1sen!2sde"
                width="100%"
                height="300"
                className="rounded-lg border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LaserBeauty Salon Standort"
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="font-montserrat font-bold text-2xl text-salon-teal mb-4">
              LaserBeauty
            </div>
            <p className="font-lora text-gray-600 mb-6">
              {t('contact.footer.tagline')}
            </p>
            <div className="flex justify-center space-x-6 text-sm font-lora text-gray-500">
              <a href="#" className="hover:text-salon-teal transition-colors">{t('contact.footer.privacy')}</a>
              <a href="#" className="hover:text-salon-teal transition-colors">{t('contact.footer.imprint')}</a>
              <a href="#" className="hover:text-salon-teal transition-colors">{t('contact.footer.terms')}</a>
            </div>
            <p className="font-lora text-gray-500 text-sm mt-4">
              {t('contact.footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};
