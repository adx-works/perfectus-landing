import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ClinicPhotosSection } from "./sections/ClinicPhotosSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderSection } from "./sections/HeaderSection";
import { HeroCallToActionSection } from "./sections/HeroCallToActionSection";
import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection";
import { SpecialistsSection } from "./sections/SpecialistsSection";

const specialists = [
  {
    name: "Дьяконова Вилена Викторовна",
    role: "Главный врач, врач стоматолог-ортопед, терапевт, хирург",
    image: "/figmaAssets/image-929.png",
    hasGradient: false,
  },
  {
    name: "Царева Юлия Анатольевна",
    role: "Врач-стоматолог\nобщей практики",
    image: "/figmaAssets/image.png",
    hasGradient: true,
  },
  {
    name: "Гогина Алина Владимировна",
    role: "Врач-стоматолог\nобщей практики",
    image: "/figmaAssets/image-1.png",
    hasGradient: true,
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
  return (
    <div className="bg-[#ffffff] w-full min-w-[1440px] relative">
      <HeaderSection />

      <section className="relative w-full">
        <div className="relative w-full px-10">
          <div className="relative w-full h-[640px]">
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
              className="absolute inset-0 w-full h-full object-cover"
              alt="Mask group"
              src="/figmaAssets/mask-group-1.png"
            />

            <div className="absolute top-[258px] left-1/2 -translate-x-1/2 w-[990px] flex flex-col items-center gap-[41px]">
              <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-[#ffffff] text-[40px] text-center tracking-[-0.25px] leading-[44px]">
                СТОМАТОЛОГИЧЕСКАЯ КЛИНИКА
              </h2>
              <h1 className="[font-family:'Manrope',Helvetica] font-bold text-[#ffffff] text-[110px] text-center tracking-[-0.25px] leading-[121.0px]">
                «ПЕРФЕКТУС»
              </h1>
            </div>

            <Button className="absolute top-[454px] left-1/2 -translate-x-1/2 flex flex-col w-[330px] items-center justify-center px-10 py-5 bg-[#568eff] rounded-[40px] h-auto hover:bg-[#4a7de6]">
              <span className="[font-family:'Manrope',Helvetica] font-semibold text-white text-xl text-center tracking-[0] leading-[normal]">
                Записаться на прием
              </span>
              <span className="font-medium text-[#ffffffb2] text-sm tracking-[-0.10px] leading-[21px] whitespace-nowrap [font-family:'Manrope',Helvetica]">
                +7 (921) 873-70-73
              </span>
            </Button>

            <p className="absolute top-[436px] right-10 w-[363px] [font-family:'Manrope',Helvetica] font-semibold text-[#ffffff] text-xl tracking-[-0.17px] leading-7">
              Опытные врачи, индивидуальный подход, современное оборудование,
              безопасное лечение, дружелюбная атмосфера — вот что вас ждет в
              стоматологии «Перфектус»
            </p>
          </div>
        </div>
      </section>

      <HeroSection />

      <HeroCallToActionSection />

      <section id="services" className="relative w-full bg-[#f8f9fc] py-20">
        <ServicesSection />
      </section>

      <section id="specialists" className="relative w-full py-20 flex flex-col items-center gap-12">
        <SpecialistsSection />
        
        <div className="flex gap-[27px] items-start justify-center flex-wrap px-10">
          <Card className="w-[317px] h-[415px] rounded-[30px] bg-[linear-gradient(39deg,rgba(86,142,255,1)_0%,rgba(158,186,195,1)_100%)] border-0 relative overflow-hidden">
            <CardContent className="p-0 h-full flex flex-col justify-between py-[35px] px-[35px] relative z-10">
              <p className="font-semibold text-[22px] tracking-[-0.20px] leading-[26.4px] [font-family:'Manrope',Helvetica] text-[#ffffff]">
                28 лет опыта
                <br />
                работы у глав врача, <br />у другого – 24
              </p>
              <p className="[font-family:'Manrope',Helvetica] font-normal text-[#ffffff] text-[22px] tracking-[-0.20px] leading-[26.4px]">
                *ещё что-нибудь про команду, либо убрать блок
              </p>
            </CardContent>
          </Card>

          {specialists.map((specialist, index) => (
            <Card
              key={index}
              className="flex flex-col w-[318px] h-[415px] items-center gap-[11px] border-0 bg-transparent"
            >
              <CardContent className="p-0 flex-1 grow relative self-stretch w-full bg-[#f8f9fc] rounded-[30px] overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
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
          ))}
        </div>
      </section>

      <section className="relative w-full px-10 py-20 bg-[#f8f9fc] rounded-[40px] my-20">
        <div className="flex flex-col md:flex-row gap-20 items-center justify-between">
          <div className="flex flex-col gap-8 max-w-[620px]">
            <h2 className="text-[40px] font-semibold leading-[1.1] tracking-[-0.25px] uppercase bg-gradient-to-r from-[#568eff] to-[#6aa1c2] bg-clip-text text-transparent">
              не уверены в выборе услуги?
            </h2>
            <p className="text-[44px] font-normal leading-[1.2] text-black uppercase">
              Свяжитесь с нами<br />и уточните<br />у специалиста
            </p>
            <div className="flex flex-col gap-5 text-[22px] leading-[1.68]">
              <div>
                <p className="font-medium text-black">Номер телефона:</p>
                <p className="font-semibold text-[#587675]">+7 (921) 873-70-73</p>
              </div>
              <div>
                <p className="font-medium text-black">Электронная почта:</p>
                <p className="font-semibold text-[#587675]">perf-dent@yandex.ru</p>
              </div>
            </div>
          </div>
          
          <div className="relative w-[225px] h-[229px] shrink-0">
            <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-[#568eff] to-[#9ebac3]" />
            <img src="https://www.figma.com/api/mcp/asset/7eaa935b-f60f-4b44-a460-32318099c01c" alt="Tooth" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-auto" />
          </div>

          <div className="w-[490px] h-[488px] rounded-[40px] overflow-hidden relative shrink-0">
            <img src="/figmaAssets/img-7846-1.png" alt="Contact" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(126,167,222,0.5)] to-transparent" />
          </div>
        </div>
      </section>

      <section className="relative w-full px-10 py-20">
        <div className="grid grid-cols-[433px_216px_370px_293px] gap-4 auto-rows-min">
          <img
            className="rounded-2xl object-cover"
            style={{ gridColumn: "1", gridRow: "1" }}
            alt="Img"
            src="/figmaAssets/img-7853-1.png"
          />
          <img
            className="rounded-2xl object-cover"
            style={{ gridColumn: "2", gridRow: "1" }}
            alt="Img"
            src="/figmaAssets/img-7807-1-2.png"
          />
          <img
            className="rounded-2xl object-cover"
            style={{ gridColumn: "2", gridRow: "2" }}
            alt="Img"
            src="/figmaAssets/img-7828-1.png"
          />
          <img
            className="rounded-2xl object-cover"
            style={{ gridColumn: "3", gridRow: "1 / 3" }}
            alt="Img"
            src="/figmaAssets/img-7822-1-2.png"
          />
          <img
            className="rounded-2xl object-cover"
            style={{ gridColumn: "4", gridRow: "1 / 3" }}
            alt="Img"
            src="/figmaAssets/img-7759-1.png"
          />
          <img
            className="rounded-2xl object-cover"
            style={{ gridColumn: "1", gridRow: "2 / 4" }}
            alt="Img"
            src="/figmaAssets/img-7846-1.png"
          />
          <img
            className="rounded-2xl object-cover"
            style={{ gridColumn: "2 / 4", gridRow: "3 / 5" }}
            alt="Img"
            src="/figmaAssets/img-7838-1--1-.png"
          />
          <img
            className="rounded-2xl object-cover"
            style={{ gridColumn: "4", gridRow: "3" }}
            alt="Img"
            src="/figmaAssets/img-7836-1.png"
          />
          <img
            className="rounded-2xl object-cover"
            style={{ gridColumn: "4", gridRow: "4" }}
            alt="Img"
            src="/figmaAssets/img-7785-1-2.png"
          />
        </div>
      </section>

      <ClinicPhotosSection />

      <FooterSection />
    </div>
  );
};
