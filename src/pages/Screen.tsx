import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ClinicPhotosSection } from "./sections/ClinicPhotosSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroCallToActionSection } from "./sections/HeroCallToActionSection";
import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection";
import { SpecialistsSection } from "./sections/SpecialistsSection";
import { PhotoCarousel } from "@/components/PhotoCarousel";

const specialists = [
  {
    name: "Дьяконова Вилена Викторовна",
    role: "Главный врач, врач стоматолог-ортопед, терапевт, хирург",
    image: "/specialists/vilena-dyakonova.png",
    hasGradient: false,
    slug: "dyakonova"
  },
  {
    name: "Царева Юлия Анатольевна",
    role: "Врач-стоматолог\nобщей практики",
    image: "/specialists/tsareva.png",
    hasGradient: true,
    slug: "tsareva"
  },
  {
    name: "Гогина Алина Владимировна",
    role: "Врач-стоматолог\nобщей практики",
    image: "/specialists/gogina.png",
    hasGradient: true,
    slug: "gogina"
  },
];

const clinicPhotos = [
  {
    src: "/figmaAssets/img-7853-1.png",
    className: "w-[433px] h-[289px]",
  },
  {
    src: "/figmaAssets/img-7807-1-2.png",
    className: "w-[216px] h-[137px]",
  },
  {
    src: "/figmaAssets/img-7828-1.png",
    className: "w-[216px] h-[136px]",
  },
  {
    src: "/figmaAssets/img-7822-1-2.png",
    className: "w-[370px] h-[289px]",
  },
  {
    src: "/figmaAssets/img-7759-1.png",
    className: "w-[293px] h-[289px]",
  },
  {
    src: "/figmaAssets/img-7846-1.png",
    className: "w-[433px] h-[389px]",
  },
  {
    src: "/figmaAssets/img-7838-1--1-.png",
    className: "w-[602px] h-[389px]",
  },
  {
    src: "/figmaAssets/img-7836-1.png",
    className: "w-[293px] h-[195px]",
  },
  {
    src: "/figmaAssets/img-7785-1-2.png",
    className: "w-[293px] h-[177px]",
  },
];

export const Screen = (): JSX.Element => {
  // Прокрутка к якорю при загрузке страницы с хешем (#services, #specialists и т.д.)
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        const scroll = () => el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Небольшая задержка, чтобы контент успел отрендериться
        const t = setTimeout(scroll, 100);
        return () => clearTimeout(t);
      }
    }
  }, []);

  return (
    <div className="bg-[#ffffff] w-full relative">
      <div className="w-full max-w-[1440px] mx-auto mb-8">
        <HeaderSection />
      </div>

      <section className="relative w-full">
        <div className="relative w-full max-w-[1440px] mx-auto px-10">
          <div className="relative w-full h-[640px] rounded-[40px] overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              alt="Rectangle"
              src="/figmaAssets/rectangle-6.svg"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover"
              alt="Mask group"
              src="/figmaAssets/mask-group.png"
            />
            <img
              className="absolute inset-0 w-[80%] h-[80%] object-cover top-[20.5%] left-[10%]"
              alt="Mask group"
              src="/figmaAssets/mask-group-1.png"
            />

            {/* Статистика в верхней части */}
            <div className="absolute top-8 left-8 right-8 flex gap-6">
              <div className="flex-1 bg-[#ffffff1a] rounded-[30px] backdrop-blur-[5px] p-8 min-h-[120px] flex flex-col justify-center">
                <div className="[font-family:'Manrope',Helvetica] font-bold text-[#ffffff] text-[48px] leading-[1.1] mb-2">
                  65 600
                </div>
                <div className="[font-family:'Nunito',Helvetica] font-normal text-[#ffffff] text-[18px] leading-[1.3]">
                  поставили<br />пломб
                </div>
              </div>
              <div className="flex-1 bg-[#ffffff1a] rounded-[30px] backdrop-blur-[5px] p-8 min-h-[120px] flex flex-col justify-center">
                <div className="[font-family:'Manrope',Helvetica] font-bold text-[#ffffff] text-[48px] leading-[1.1] mb-2">
                  8 640
                </div>
                <div className="[font-family:'Nunito',Helvetica] font-normal text-[#ffffff] text-[18px] leading-[1.3]">
                  поставили<br />коронок
                </div>
              </div>
              <div className="flex-1 bg-[#ffffff1a] rounded-[30px] backdrop-blur-[5px] p-8 min-h-[120px] flex flex-col justify-center text-right">
                <div className="[font-family:'Manrope',Helvetica] font-bold text-[#ffffff] text-[48px] leading-[1.1] mb-2">
                  3550
                </div>
                <div className="[font-family:'Nunito',Helvetica] font-normal text-[#ffffff] text-[18px] leading-[1.3]">
                  установили съемных<br />протезов
                </div>
              </div>
              <div className="flex-1 bg-[#ffffff1a] rounded-[30px] backdrop-blur-[5px] p-8 min-h-[120px] flex flex-col justify-center text-right">
                <div className="[font-family:'Manrope',Helvetica] font-bold text-[#ffffff] text-[48px] leading-[1.1] mb-2">
                  3400
                </div>
                <div className="[font-family:'Nunito',Helvetica] font-normal text-[#ffffff] text-[18px] leading-[1.3]">
                  зубов спасли<br />от удаления
                </div>
              </div>
            </div>

            <div className="absolute top-[200px] left-1/2 -translate-x-1/2 w-[990px] flex flex-col items-center gap-[20px]">
              <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#ffffff] text-[24px] text-center tracking-[-0.25px] leading-[1.2] mt-10">
                СТОМАТОЛОГИЧЕСКАЯ КЛИНИКА
              </h2>
              <h1 className="[font-family:'Manrope',Helvetica] font-bold text-[#ffffff] text-[80px] text-center tracking-[-0.25px] leading-[1.1]">
                «ПЕРФЕКТУС»
              </h1>
            </div>

            <Button className="absolute bottom-[120px] left-1/2 -translate-x-1/2 flex flex-col w-[330px] items-center justify-center px-10 py-5 bg-[#568eff] rounded-[40px] h-auto hover:bg-[#4a7de6]">
              <span className="[font-family:'Manrope',Helvetica] font-semibold text-white text-xl text-center tracking-[0] leading-[normal]">
                Записаться на прием
              </span>
              <span className="font-medium text-[#ffffffb2] text-sm tracking-[-0.10px] leading-[21px] whitespace-nowrap [font-family:'Manrope',Helvetica]">
                +7 (921) 873-70-73
              </span>
            </Button>

            <p className="absolute bottom-[140px] right-10 w-[363px] [font-family:'Manrope',Helvetica] font-semibold text-[#ffffff] text-l tracking-[-0.17px] leading-7">
              Опытные врачи, индивидуальный подход, современное оборудование,
              безопасное лечение, дружелюбная атмосфера — вот что вас ждет в
              стоматологии «Перфектус»
            </p>
          </div>
        </div>
      </section>

      <div id="services" className="w-full max-w-[1440px] mx-auto mt-8 mb-8">
        <HeroCallToActionSection />
      </div>

      <div className="w-full bg-[#f8f9fc] py-20 scroll-mt-24">
        <div className="w-full max-w-[1440px] mx-auto">
          <ServicesSection />
        </div>
      </div>

      <section id="specialists" className="relative w-full py-20 flex flex-col items-center gap-12">
        <div className="w-full max-w-[1440px] mx-auto">
          <SpecialistsSection />
        </div>
        
        <div className="flex gap-[27px] items-start justify-center flex-wrap px-10 w-full max-w-[1440px] mx-auto">
          <Card className="w-[317px] h-[415px] rounded-[30px] bg-[linear-gradient(39deg,rgba(86,142,255,1)_0%,rgba(158,186,195,1)_100%)] border-0 relative overflow-hidden">
            <CardContent className="p-0 h-full flex flex-col justify-between py-[35px] px-[35px] relative z-10">
              <p className="font-semibold text-[22px] tracking-[-0.20px] leading-[26.4px] [font-family:'Manrope',Helvetica] text-[#ffffff]">
                Опытная команда
                <br />
                специалистов с многолетней
                <br />
                практикой
              </p>
              <p className="[font-family:'Manrope',Helvetica] font-normal text-[#ffffff] text-[22px] tracking-[-0.20px] leading-[26.4px]">
                Наши врачи регулярно повышают квалификацию и используют современные методы лечения
              </p>
            </CardContent>
          </Card>

          {specialists.map((specialist, index) => (
            <Link key={index} href={`/specialists/${specialist.slug}`}>
              <Card
                className="flex flex-col w-[318px] h-[415px] items-center gap-[11px] border-0 bg-transparent cursor-pointer group"
              >
                <CardContent className="p-0 flex-1 grow relative self-stretch w-full bg-[#f8f9fc] rounded-[30px] overflow-hidden">
                  <img
                    className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                    alt={specialist.name}
                    src={specialist.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[65%] to-[rgba(0,0,0,0.75)]" />
                  <div className="flex flex-col w-full items-center gap-2.5 absolute bottom-5 px-4">
                    <h3 className="font-semibold text-[#ffffff] text-2xl tracking-[-0.20px] leading-[28.8px] relative self-stretch [font-family:'Manrope',Helvetica] text-center">
                      {specialist.name}
                    </h3>
                  </div>
                </CardContent>
                <p className="font-medium text-[rgba(0,0,0,0.85)] text-[17px] tracking-[-0.17px] leading-[23.8px] relative self-stretch [font-family:'Manrope',Helvetica] text-center whitespace-pre-line">
                  {specialist.role}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <div className="w-full max-w-[1440px] mx-auto">
        <ClinicPhotosSection />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-10 py-10">
        <PhotoCarousel />
      </div>

      <div className="w-full max-w-[1440px] mx-auto">
        <FooterSection />
      </div>
    </div>
  );
};
