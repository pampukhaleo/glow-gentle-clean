
import { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServiceSelector } from "./ServiceSelector";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface ContactProps {
  isVisible: Record<string, boolean>;
}

export const Contact = ({ isVisible }: ContactProps) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    services: [] as string[],
    date: "",
    message: ""
  });

  useEffect(() => {
    const handleServiceSelection = (event: CustomEvent) => {
      const { serviceId } = event.detail;
      setFormData(prev => ({
        ...prev,
        services: [serviceId]
      }));
    };

    window.addEventListener('selectService', handleServiceSelection as EventListener);
    
    return () => {
      window.removeEventListener('selectService', handleServiceSelection as EventListener);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim() || formData.services.length === 0) {
      toast({
        title: t('contact.error.required'),
        description: t('contact.error.required'),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-form-telegram-laserbeauty', {
        body: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          services: formData.services,
          date: formData.date,
          message: formData.message
        }
      });

      if (error) {
        console.error('Error sending contact form:', error);
        toast({
          title: t('contact.error.sending'),
          description: t('contact.error.sending'),
          variant: "destructive",
        });
        return;
      }

      toast({
        title: t('contact.success.title'),
        description: t('contact.success.message'),
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        services: [],
        date: "",
        message: ""
      });

    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: t('contact.error.unexpected'),
        description: t('contact.error.unexpected'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                  className="border-gray-300 focus:border-salon-teal"
                  placeholder="Weitere Fragen oder Anmerkungen..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-salon-teal hover:bg-salon-teal-light text-white font-montserrat py-3 text-lg transition-colors duration-300"
              >
                {isSubmitting ? t('contact.sending') : t('contact.submit')}
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
                      Schwertstrasse 4<br />
                      47799, Krefeld
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-salon-teal" />
                  <p className="font-lora text-gray-700">+4917632156647</p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-salon-teal" />
                  <p className="font-lora text-gray-700">Laser.beauty.studio@icloud.com</p>
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
                src="https://www.google.com/maps?q=Schwertstrasse%204,%2047799,%20Krefeld,%20Germany&hl=de&output=embed"
                width="100%"
                height="300"
                className="rounded-lg border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LaserBeauty – Schwertstrasse 4, 47799 Krefeld"
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-12 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="font-montserrat font-bold text-2xl text-salon-teal mb-4">
              <span className="text-[#F772C1]">Laser</span>Beauty
            </div>
            <p className="font-lora text-gray-600 mb-6">
            {t('contact.footer.tagline')}
            </p>
            <p className="font-lora text-gray-500 text-sm mt-4">
              {t('contact.footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};
