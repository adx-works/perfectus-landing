import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SpecialistsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-4 px-4 py-0 relative">
      <div className="flex items-center gap-4 w-full">
        <h2 className="[font-family:'Manrope',Helvetica] font-semibold text-black text-[32px] tracking-[-0.25px] leading-[1.2]">
          Наши специалисты
        </h2>
        
        <Button className="inline-flex items-center gap-2 px-4 py-2 bg-[#B8D4FF] hover:bg-[#A0C8FF] text-[#4A7DE6] rounded-full font-medium text-sm transition-colors">
          все специалисты
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </div>

      <p className="[font-family:'Manrope',Helvetica] font-normal text-[#666666] text-base tracking-[-0.15px] leading-[1.5] max-w-[520px]">
        Для более подробной информации о каждом из наших врачей, их квалификации
        и опыте, вы можете ознакомиться с их профилями на нашем сайте
      </p>
    </section>
  );
};
