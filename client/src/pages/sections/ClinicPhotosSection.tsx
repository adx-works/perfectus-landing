import { MapPinIcon } from "lucide-react";

export const ClinicPhotosSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[696px] items-center gap-1 relative mx-auto">
      <h2 className="w-fit [font-family:'Manrope',Helvetica] font-semibold text-textdark text-[44px] text-center tracking-[-0.25px] leading-[66px] whitespace-nowrap">
        Фото клиники
      </h2>

      <div className="inline-flex items-center gap-4 relative">
        <MapPinIcon className="w-[19.74px] h-6 text-textdark" />

        <p className="w-fit [font-family:'Manrope',Helvetica] font-medium text-[#6f6f6f] text-xl tracking-[-0.10px] leading-[30px] whitespace-nowrap">
          Приозерск, ул. Калинина, 11, 3 этаж, каб 301
        </p>
      </div>
    </section>
  );
};
