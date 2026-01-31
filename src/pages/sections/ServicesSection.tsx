import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const servicesData = [
  {
    id: 1,
    icon: "/figmaAssets/frame-3232-1.svg",
    title: "Ортопедия\nи протезирование",
    description:
      "Замещение отсутствующих зубов, восстановление красоты зубного ряда",
    isPrimary: true,
    downloadIcon: "/figmaAssets/frame-5.svg",
  },
  {
    id: 2,
    icon: "/figmaAssets/frame-3232-2.svg",
    title: "Терапевтическое лечение зубов",
    description: "Лечени кариеса, пульпита, периодонтита",
    isPrimary: false,
    downloadIcon: "/figmaAssets/frame.svg",
  },
  {
    id: 3,
    icon: "/figmaAssets/frame-3232-5.svg",
    title: "Пародонтология",
    description:
      "Устранение подвижности зубов лечением десен, шинированием, протезированием",
    isPrimary: false,
    downloadIcon: "/figmaAssets/frame-2.svg",
  },
  {
    id: 4,
    icon: "/figmaAssets/frame-3232-4.svg",
    title: "Эстетическая стоматология",
    description: "Профессиональное и безопасное отбеливание зубов",
    isPrimary: false,
    downloadIcon: "/figmaAssets/frame.svg",
  },
  {
    id: 5,
    icon: "/figmaAssets/frame-3232-3.svg",
    title: "Профессиональная гигиена",
    description: "Удаление зубных камней и налета ультразвуком, airflow",
    isPrimary: false,
    downloadIcon: "/figmaAssets/frame.svg",
  },
  {
    id: 6,
    icon: "/figmaAssets/frame-3232.svg",
    title: "Хирургическая стоматология",
    description: "Удаление зубов, разрезы, закрытый/открытый кюретаж",
    isPrimary: false,
    downloadIcon: "/figmaAssets/frame-2.svg",
  },
];

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-5 relative px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {servicesData.map((service) => (
          <Card
            key={service.id}
            className={`group flex flex-col h-full rounded-[30px] overflow-hidden border-0 ${
              service.id === 1 ? "shadow-[0px_0px_15px_#8f9eac3d]" : ""
            }`}
          >
            <CardContent className="flex flex-col flex-1 items-stretch gap-8 px-[27px] py-8 w-full min-h-0">
              <div className="flex flex-col items-start gap-4 pl-4 pr-0 py-0 w-full flex-1 min-h-0">
                <div className="flex items-center gap-6 w-full">
                  <img
                    className="w-[60px] h-[60px] flex-shrink-0"
                    alt={service.title}
                    src={service.icon}
                  />
                  <h3 className="flex-1 [font-family:'Manrope',Helvetica] font-semibold text-textdark text-[22px] tracking-[-0.20px] leading-[26.4px] whitespace-pre-line">
                    {service.title}
                  </h3>
                </div>
                <p className="w-full [font-family:'Manrope',Helvetica] font-medium text-textgray text-base tracking-[-0.17px] leading-[22.4px]">
                  {service.description}
                </p>
              </div>
              <Button
                className={`relative h-auto w-fit self-center inline-flex items-center justify-center gap-2.5 px-[35px] py-3 rounded-[100px] overflow-hidden mt-auto flex-shrink-0 font-desktop-button font-[number:var(--desktop-button-font-weight)] text-[length:var(--desktop-button-font-size)] tracking-[var(--desktop-button-letter-spacing)] leading-[var(--desktop-button-line-height)] [font-style:var(--desktop-button-font-style)] whitespace-nowrap transition-all duration-300 transform hover:scale-105 hover:shadow-lg before:absolute before:inset-0 before:bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.3)_50%,transparent_70%)] before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700 ${
                  service.isPrimary
                    ? "bg-[linear-gradient(39deg,#568EFF_0%,#9EBAC3_100%)] text-white hover:bg-[linear-gradient(39deg,rgba(86,142,255,1)_0%,rgba(158,186,195,1)_100%)] hover:opacity-90"
                    : "bg-[linear-gradient(39deg,#568EFF_0%,#9EBAC3_100%)] hover:bg-[linear-gradient(39deg,rgba(86,142,255,1)_0%,rgba(158,186,195,1)_100%)] hover:text-white hover:opacity-90"
                }`}
              >
                <img
                  className="w-[19.2px] h-[19.2px] relative z-10"
                  alt="Download"
                  src={service.downloadIcon}
                />
                <span className="relative z-10 text-white">
                  Скачать PDF
                </span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
