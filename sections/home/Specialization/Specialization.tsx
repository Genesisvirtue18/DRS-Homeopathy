"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const specializations = [
  {
    id: 1,
    title: "किडनी स्टोन",
    image: "/images/kidney.jpg",
    description: "किडनी स्टोन से हैं परेशान तो आप्रेशन क्यों? (बिना ऑपरेशन पथरी का सफल इलाज होम्योपैथिक द्वारा आज ही कॉल करे)",
    phone: "+91 9911293060",
    facebook: "https://www.facebook.com/profile.php?id=100054600572327",
    instagram: "https://www.instagram.com/dr.rekhasaroha/"
  },
  {
    id: 2,
    title: "गंजेपन का सफल इलाज",
    image: "/images/baldness.jpg",
    description: "अगर आपको गंजेपन के कारण होना पड़ता है शर्मिन्दा तो आज ही अपनाए DRS homoeopathy, गंजेपन का सफल इलाज बिना किसी transplant और ऑपरेशन के कॉल करे",
    phone: "+91 9911293060",
    facebook: "https://www.facebook.com/profile.php?id=100054600572327",
    instagram: "https://www.instagram.com/dr.rekhasaroha/"
  },
  {
    id: 3,
    title: "खासी जुकाम सफल इलाज",
    image: "/images/cold.jpg",
    description: "अगर मौसम बदलने पे आपको बार बार होता है खासी जुकाम तो आज ही अपनाए DRS homoeopathy, खासी जुखाम जड़ से खत्म बिना किसी साइड इफेक्ट्स के कॉल करे",
    phone: "+91 9911293060",
    facebook: "https://www.facebook.com/profile.php?id=100054600572327",
    instagram: "https://www.instagram.com/dr.rekhasaroha/"
  },
  {
    id: 4,
    title: "BP और शूगर रिवर्स/कंट्रोल",
    image: "/images/bp.jpg",
    description: "अपना BP और शूगर को रिवर्स/कंट्रोल करे बिना किसी एंटी बायोटिक और साइड इफेक्ट्स के आज ही अपनाए DRS homoeopathy कॉल करे",
    phone: "+91 9911293060",
    facebook: "https://www.facebook.com/profile.php?id=100054600572327",
    instagram: "https://www.instagram.com/dr.rekhasaroha/"
  },
  {
    id: 5,
    title: "मोटापे से छुटकारा",
    image: "/images/fat.jpg",
    description: "पाए मोटापे से छुटकारा बिना किसी ऑपरेशन/साइड इफेक्ट और बिना किसी खास व्याम के होम्योपैथिक चिकित्सा द्वारा सफल इलाज आज ही कॉल करे",
    phone: "+91 9911293060",
    facebook: "https://www.facebook.com/profile.php?id=100054600572327",
    instagram: "https://www.instagram.com/dr.rekhasaroha/"
  },
  {
    id: 6,
    title: "मानसिक बीमारी इलाज",
    image: "/images/depression.jpg",
    description: "अगर आप भी है परेशान रात में किसी भी वजह/स्ट्रेस से ठीक से नींद आने से या पूरा दिन आपको थका हुआ महसूस होता है किसी काम में मन नहीं लगता, चीड़ चिड़ापन रहता तो ये एक मानसिक बीमारी हो सकती है पाए जड़ से छुटकारा आज ही अपनाए DRS homoeopathy कॉल करे",
    phone: "+91 9911293060",
    facebook: "https://www.facebook.com/profile.php?id=100054600572327",
    instagram: "https://www.instagram.com/dr.rekhasaroha/"
  },
  {
    id: 7,
    title: "बार बार पेशाब आना/UTI",
    image: "/images/urine.jpg",
    description: "अगर आपके रात में बार बार पेशाब जाना /UTI पड़ता हैं | अपको खुल कर पेशाब नहीं आता, प्रेशर लगाना पड़ता हैं, पेशाब जाने के तुरंत बाद दोबारा जाने का मन होता हैं तो ये प्रोस्टेट हो सकता हैं, पाए जड़ से छुटकारा आज ही कॉल करे",
    phone: "+91 9911293060",
    facebook: "https://www.facebook.com/profile.php?id=100054600572327",
    instagram: "https://www.instagram.com/dr.rekhasaroha/"
  },
  {
    id: 8,
    title: "हार्ट प्रोब्लम",
    image: "/images/heart.jpg",
    description: "आजकल क्यों आ रहे हैं कम उम्र में हार्ट अटैक? अगर आपको हार्ट प्रोब्लम है अगर आपको सीढ़ीया चढ़ते हुए सांस फूलता है तो ये खतरे की घंटी हो सकती हैं आज ही कॉल करे बिना किसी सर्जरी और ऑपरेशन के होम्योपैथिक द्वारा सफल इलाज",
    phone: "+91 9911293060",
    facebook: "https://www.facebook.com/profile.php?id=100054600572327",
    instagram: "https://www.instagram.com/dr.rekhasaroha/"
  },
  {
    id: 9,
    title: "कब्ज और एलोपैथी से परेशान",
    image: "/images/kabj.jpg",
    description: "अगर आप है पुराने कब्ज से परेशान और एलोपैथी से परेशान हो चुके हैं तो आज ही अपनाए DRS homoeopathy कब्ज का सफल इलाज बिना किसी साइड इफेक्ट के कॉल करे",
    phone: "+91 9911293060",
    facebook: "https://www.facebook.com/profile.php?id=100054600572327",
    instagram: "https://www.instagram.com/dr.rekhasaroha/"
  },
  {
    id: 10,
    title: "Allergic Rhinitis",
    image: "/images/allergic.jpg",
    description: "अगर आपके घर में कोई भी परेशान है पुराने नजले से - Allergic Rhinitis से बार बार छींक आना, आंखो से पानी आना, डस्ट एलर्जी तो पाए जड़ से छुटकारा आज ही कॉल करे",
    phone: "+91 9911293060",
    facebook: "https://www.facebook.com/profile.php?id=100054600572327",
    instagram: "https://www.instagram.com/dr.rekhasaroha/"
  },
  {
    id: 11,
    title: "PCOD / महिला समस्याएं",
    image: "/images/pain.jpg",
    description: "अगर आप परेशान है पीसीओडी, मासिक चक्र मिस होना, ज्यादा ब्लीडिंग होना, अनवांटेड ग्रोथ जैसे किसी भी तरह की समस्या के कॉल करे Best Treatment by Lady Doctor आज ही कॉल करे",
    phone: "+91 9911293060",
    facebook: "https://www.facebook.com/profile.php?id=100054600572327",
    instagram: "https://www.instagram.com/dr.rekhasaroha/"
  },
  {
    id: 12,
    title: "गांठे का इलाज",
    image: "/images/ganthe.jpg",
    description: "अगर आपके शरीर में जगह जगह है गांठे और आप पाना चाहते है इनसे छुटकारा आज ही अपनाए DRS homoeopathy बिना किसी ऑपरेशन/लेजर/साइड इफेक्ट के जड़ से खत्म, आज ही कॉल करे",
    phone: "+91 9911293060",
    facebook: "https://www.facebook.com/profile.php?id=100054600572327",
    instagram: "https://www.instagram.com/dr.rekhasaroha/"
  },
  {
    id: 13,
    title: "बच्चों में Bed Wetting",
    image: "/images/child.jpg",
    description: "यदि आपका बच्चा 5 साल का होने पर भी करता है bed गीला तो ये एक गंभीर समस्या हो सकती है भविष्य में पाए जड़ से छुटकारा आज ही कॉल करे",
    phone: "+91 9911293060",
    facebook: "https://www.facebook.com/profile.php?id=100054600572327",
    instagram: "https://www.instagram.com/dr.rekhasaroha/"
  },
  {
    id: 14,
    title: "मस्से से छुटकारा",
    image: "/images/masse.jpg",
    description: "अगर आपके गले, आंख के नीचे, हाथ में, या शरीर के किसी भी हिस्से में आपको मस्से है तो जड़ से खत्म होम्योपैथिक दवाई द्वारा बिना किसी लेजर/ऑपरेशन के आज ही कॉल करे",
    phone: "+91 9911293060",
    facebook: "https://www.facebook.com/profile.php?id=100054600572327",
    instagram: "https://www.instagram.com/dr.rekhasaroha/"
  },
  {
    id: 15,
    title: "Hyperacidity, Ulcer",
    image: "/images/acid.jpg",
    description: "अगर आपको बार बार एसिड बनता है। आप सफर कर रहे है Hyperacidity से, H pylori infection, ulcer का problem है तो आज ही चुने Dr. Rekha Saroha's DRS Homoeopathy कॉल करे",
    phone: "+91 9911293060",
    facebook: "https://www.facebook.com/profile.php?id=100054600572327",
    instagram: "https://www.instagram.com/dr.rekhasaroha/"
  },
  {
    id: 16,
    title: "Vomiting / Motion Sickness",
    image: "/images/vomet.jpg",
    description: "अगर आपके कहीं घूमने जाने से पहले Vomiting का प्रोब्लम रहता है या सफर के दौरान Vomiting होता है या Motion sickness की समस्या है तो आप होम्योपैथिक की मदद से इसे जड़ से खत्म कर सकते हैं",
    phone: "+91 9911293060",
    facebook: "https://www.facebook.com/profile.php?id=100054600572327",
    instagram: "https://www.instagram.com/dr.rekhasaroha/"
  },
  {
    id: 17,
    title: "Migraine / सर्वाइकल",
    image: "/images/migrane.jpg",
    description: "अगर आपको अक्सर Migraine की शिकायत रहती है आधे हिस्से में सर दर्द रहता है कभी लेफ्ट कभी राइट और महीने में बार बार होता है तो ये माइग्रेन या सर्वाइकल हो सकता है आज ही कॉल करे DRS homoeopathy",
    phone: "+91 9911293060",
    facebook: "https://www.facebook.com/profile.php?id=100054600572327",
    instagram: "https://www.instagram.com/dr.rekhasaroha/"
  },
  {
    id: 18,
    title: "पीलिया और Indigestion",
    image: "/images/yellow.jpg",
    description: "अगर आपको बार बार हो जाता है पीलिया और रहती है Digestion संबंधी समस्या तो ये लीवर की समस्या हो सकती है",
    phone: "+91 9911293060",
    facebook: "https://www.facebook.com/profile.php?id=100054600572327",
    instagram: "https://www.instagram.com/dr.rekhasaroha/"
  },
  {
    id: 19,
    title: "Slow Growth (बच्चों में)",
    image: "/images/growth.jpg",
    description: "अगर आप भी परेशान हैं अपने बच्चे की Slow Growth से या मानसिक/शारीरिक कमजोरी से तो आज ही अपनाए DRS homoeopathy और पाए अपने बच्चे की Balanced Growth कॉल करे",
    phone: "+91 9911293060",
    facebook: "https://www.facebook.com/profile.php?id=100054600572327",
    instagram: "https://www.instagram.com/dr.rekhasaroha/"
  },
  {
    id: 20,
    title: "BP (Blood Pressure)",
    image: "/images/bp2.jpg",
    description: "अगर आप परेशान है बढ़े हुए BP से और तंग आ चुके हैं एलोपैथी ट्रीटमेंट से होने वाले साइड इफेक्ट्स से पाए जड़ से छुटकारा परमानेंट BP की समस्या से",
    phone: "+91 9911293060",
    facebook: "https://www.facebook.com/profile.php?id=100054600572327",
    instagram: "https://www.instagram.com/dr.rekhasaroha/"
  }
];

export default function Specializations() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#6EDC8C]/10 px-4 py-1.5 mb-3">
            <span className="text-xs font-semibold text-[#0E2A5A]">हमारी विशेषज्ञताएं</span>
          </div>
          <h2 className="text-3xl font-semibold text-[#0E2A5A] md:text-4xl">
            Our <span className="text-[#6EDC8C]">Specializations</span>
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#6EDC8C]"></div>
            <div className="h-2 w-2 rounded-full bg-[#6EDC8C]"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#6EDC8C]"></div>
          </div>
          <p className="mt-3 text-sm text-gray-500">होम्योपैथिक द्वारा विभिन्न रोगों का सफल इलाज</p>
        </div>

        {/* Horizontal Scrollable Container */}
        <div className="relative group">
          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg text-[#0E2A5A] opacity-0 transition-all duration-300 group-hover:opacity-100 hover:scale-110 hover:bg-[#0E2A5A] hover:text-white lg:-left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg text-[#0E2A5A] opacity-0 transition-all duration-300 group-hover:opacity-100 hover:scale-110 hover:bg-[#0E2A5A] hover:text-white lg:-right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-4"
            style={{
              scrollbarWidth: 'thin',
              msOverflowStyle: 'auto',
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                height: 6px;
              }
              div::-webkit-scrollbar-track {
                background: #e5e7eb;
                border-radius: 10px;
              }
              div::-webkit-scrollbar-thumb {
                background: #6EDC8C;
                border-radius: 10px;
              }
              div::-webkit-scrollbar-thumb:hover {
                background: #4CAF50;
              }
            `}</style>
            
            {specializations.map((item) => (
              <div
                key={item.id}
                className="w-[280px] flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <div className="bg-[#6EDC8C] rounded-md px-2 py-0.5">
                      <span className="text-xs font-bold text-[#0E2A5A]">#{item.id}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <h3 className="text-base font-bold text-[#0E2A5A] line-clamp-2 min-h-[48px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-gray-600 leading-relaxed line-clamp-3 min-h-[60px]">
                    {item.description}
                  </p>
                  
                  {/* Contact Section */}
                  <div className="mt-4 flex items-center gap-2">
                    <Link
                      href={`tel:${item.phone.replace(/\s/g, '')}`}
                      className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-[#6EDC8C] px-3 py-2 text-xs font-semibold text-[#0E2A5A] transition-all duration-300 hover:bg-[#5bc87a] hover:scale-105"
                    >
                      <Phone className="h-3 w-3" />
                      Call Now
                    </Link>
                    
                    <Link
                      href={item.facebook}
                      target="_blank"
                      className="rounded-lg bg-[#1877F2] p-2 text-white transition-all duration-300 hover:bg-[#1664d8] hover:scale-105"
                    >
                      <FaFacebookF className="h-3 w-3" />
                    </Link>
                    
                    <Link
                      href={item.instagram}
                      target="_blank"
                      className="rounded-lg bg-gradient-to-r from-[#E4405F] to-[#833AB4] p-2 text-white transition-all duration-300 hover:opacity-90 hover:scale-105"
                    >
                      <FaInstagram className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5">
            <div className="flex gap-1">
              <div className="h-1.5 w-4 rounded-full bg-[#6EDC8C]"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-gray-300"></div>
            </div>
            <span className="text-xs text-gray-500">Scroll to see more →</span>
          </div>
        </div>
      </div>
    </section>
  );
}