import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: "/figmaAssets/exclude.svg",
    iconBg: "bg-[#98b7c6]",
    label: "Мы находимся по адресу:",
    value: "Приозерск, ул. Калинина, 11, 3 этаж, каб 301",
  },
  {
    icon: "/figmaAssets/frame-12343950-1.svg",
    iconBg: "",
    label: "Задать нам вопрос:",
    value: "perf-dent@yandex.ru",
  },
];

const workingHours = [
  "Будни — 9:30 - 20:00",
  "Сб — 9:30 - 16:00",
  "Вс — Выходной",
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex w-full items-center gap-10 px-6 lg:px-10 py-8 relative bg-transparent">
      <div className="relative w-full lg:w-[641px] h-[400px] lg:h-auto lg:self-stretch rounded-[30px] bg-[url(/figmaAssets/image-930.png)] bg-cover bg-center" />

      <div className="flex flex-col items-start gap-8 px-4 py-0 relative flex-1">
        <div className="flex flex-col items-start gap-6 relative w-full">
          <div className="flex items-center gap-8 relative w-full">
            <div className="flex items-center gap-6 relative flex-1">
              <img
                className="relative w-[53px] h-[53px]"
                alt="Frame"
                src="/figmaAssets/frame-12343899-1.svg"
              />

              <div className="inline-flex flex-col items-start justify-center relative">
                <h2 className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-black text-xl tracking-[-0.21px] leading-normal">
                  ПЕРФЕКТУС
                </h2>

                <p className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-textgray text-[17px] tracking-[-0.17px] leading-[28.9px] whitespace-nowrap">
                  Стоматологическая клиника
                </p>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-6 relative flex-wrap">
            <Button className="inline-flex h-[55px] items-center justify-center gap-2.5 px-[35px] py-3 relative rounded-full overflow-hidden bg-[linear-gradient(39deg,rgba(86,142,255,1)_0%,rgba(158,186,195,1)_100%)] hover:opacity-90">
              <img
                className="relative w-[18px] h-[18px]"
                alt="Vector"
                src="/figmaAssets/vector.svg"
              />

              <span className="w-fit font-[number:var(--desktop-subtitle-font-weight)] text-white text-[length:var(--desktop-subtitle-font-size)] tracking-[var(--desktop-subtitle-letter-spacing)] leading-[var(--desktop-subtitle-line-height)] whitespace-nowrap font-desktop-subtitle [font-style:var(--desktop-subtitle-font-style)]">
                +7 (921) 873-70-73
              </span>
            </Button>

            <p className="relative max-w-[170px] [font-family:'Manrope',Helvetica] font-medium text-[#4e5155b2] text-base tracking-[-0.17px] leading-[22.4px]">
              Записаться на прием можно по телефону
            </p>
          </div>
        </div>

        <div className="flex items-start gap-14 relative w-full flex-wrap">
          <div className="inline-flex flex-col items-start gap-3 relative">
            {contactInfo.map((contact, index) => (
              <div
                key={index}
                className="inline-flex items-start gap-4 relative"
              >
                {contact.iconBg ? (
                  <div
                    className={`flex w-10 h-10 items-center justify-center gap-2.5 relative ${contact.iconBg} rounded-full`}
                  >
                    <div className="relative w-[13px] h-[15.7px] bg-[url(/figmaAssets/exclude.svg)] bg-[100%_100%]" />
                  </div>
                ) : (
                  <img
                    className="relative w-10 h-10"
                    alt="Frame"
                    src={contact.icon}
                  />
                )}

                <div className="inline-flex flex-col items-start relative">
                  <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-semibold text-[#a4a4a4] text-sm tracking-[-0.10px] leading-[21px]">
                    {contact.label}
                  </p>

                  <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-medium text-textdark text-sm tracking-[-0.10px] leading-[21px]">
                    {contact.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start justify-center gap-0.5 relative">
            <h3 className="relative self-stretch [font-family:'Manrope',Helvetica] font-semibold text-[#557585] text-[17px] tracking-[-0.10px] leading-[25.5px]">
              Время работы:
            </h3>

            <div className="flex flex-col items-start relative">
              {workingHours.map((hours, index) => (
                <p
                  key={index}
                  className="relative self-stretch [font-family:'Manrope',Helvetica] font-medium text-textdark text-sm tracking-[-0.10px] leading-[21px]"
                >
                  {hours}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 relative w-full">
          <p className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-textgray text-base text-center tracking-[-0.17px] leading-[27.2px] whitespace-nowrap">
            © Перфектус, 2025
          </p>
        </div>
      </div>
    </footer>
  );
};
