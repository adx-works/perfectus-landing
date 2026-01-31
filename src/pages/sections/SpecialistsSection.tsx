import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SpecialistsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-2 px-4 py-0 relative text-center">
      <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-black text-[44px] tracking-[-0.25px] leading-[66px] whitespace-nowrap">
        Наши специалисты
      </h2>

      <p className="self-stretch [font-family:'Manrope',Helvetica] font-medium text-[#707070] text-xl tracking-[-0.17px] leading-7">
        Для более подробной информации о каждом из наших врачей, их квалификации
        и опыте, вы можете ознакомиться с их профилями на нашем сайте
      </p>
    </section>
  );
};
