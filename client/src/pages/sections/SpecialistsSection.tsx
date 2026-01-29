import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SpecialistsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[786px] items-start gap-2 px-4 py-0 relative">
      <div className="flex items-start justify-between w-full gap-4">
        <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-textdark text-[44px] tracking-[-0.25px] leading-[66px] whitespace-nowrap">
          Наши специалисты
        </h2>

        <Button className="inline-flex items-center gap-2.5 px-6 py-2 h-auto rounded-[100px] bg-[linear-gradient(39deg,rgba(86,142,255,1)_0%,rgba(158,186,195,1)_100%)] hover:opacity-90 transition-opacity">
          <span className="[font-family:'Manrope',Helvetica] font-semibold text-white text-[17px] tracking-[-0.10px] leading-[25.5px] whitespace-nowrap">
            все специалисты
          </span>
          <ArrowRightIcon className="w-[19px] h-[19px]" />
        </Button>
      </div>

      <p className="self-stretch [font-family:'Manrope',Helvetica] font-medium text-[#6f6f6f] text-xl tracking-[-0.17px] leading-7">
        Для более подробной информации о каждом из наших врачей, их квалификации
        и опыте, вы можете ознакомиться с их профилями на нашем сайте
      </p>
    </section>
  );
};
