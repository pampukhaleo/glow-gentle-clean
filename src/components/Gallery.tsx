
import { useLanguage } from "@/contexts/LanguageContext";

interface GalleryProps {
  isVisible: Record<string, boolean>;
}

export const Gallery = ({ isVisible }: GalleryProps) => {
  const { t } = useLanguage();
  
  const beforeAfterImages = [
    {
      before: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&h=300&fit=crop",
      area: t('gallery.legs')
    },
    {
      before: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop", 
      area: t('gallery.armpits')
    },
    {
      before: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?w=400&h=300&fit=crop",
      area: t('gallery.face')
    }
  ];

  return (
    <section 
      id="gallery" 
      data-section 
      className={`py-20 bg-white transition-all duration-1000 ${
        isVisible.gallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-salon-teal mb-8">
            {t('gallery.title')}
          </h2>
          <p className="font-lora text-lg text-gray-700 max-w-2xl mx-auto">
            {t('gallery.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {beforeAfterImages.map((image, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-300">
                <h3 className="font-montserrat font-semibold text-lg text-salon-teal mb-4 text-center">
                  {image.area}
                </h3>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={image.before} 
                      alt={`${image.area} vorher`}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs font-montserrat">
                      {t('gallery.before')}
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={image.after} 
                      alt={`${image.area} nachher`}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 bg-salon-teal/90 text-white px-2 py-1 rounded text-xs font-montserrat">
                      {t('gallery.after')}
                    </div>
                  </div>
                </div>
                
                <p className="font-lora text-sm text-gray-600 text-center">
                  {t('gallery.after-treatments')}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-lora text-gray-600 mb-6">
            Möchten Sie Ihr eigenes Vorher-Nachher Ergebnis sehen?
          </p>
          <button className="bg-salon-teal hover:bg-salon-teal-light text-white font-montserrat px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
            {t('gallery.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};
