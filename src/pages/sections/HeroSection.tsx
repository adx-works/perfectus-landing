import { Card, CardContent } from "@/components/ui/card";

const statsData = [
  {
    number: "65 600",
    description: "поставили\nпломб",
    align: "items-start",
    textAlign: "text-left",
  },
  {
    number: "8 640",
    description: "поставили\nкоронок",
    align: "items-start",
    textAlign: "text-left",
  },
  {
    number: "3550",
    description: "установили съемных протезов",
    align: "items-end",
    textAlign: "text-right",
  },
  {
    number: "3400",
    description: "зубов спасли\nот удаления",
    align: "items-end",
    textAlign: "text-right",
  },
];

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex w-full max-w-[1440px] items-center gap-4 px-[60px] py-0 relative mx-auto">
      {statsData.map((stat, index) => (
        <Card
          key={index}
          className="flex-1 bg-[#ffffff1a] rounded-[40px] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] border-0"
        >
          <CardContent
            className={`flex flex-col ${stat.align} pt-5 pb-[25px] px-10`}
          >
            <div className="relative flex items-end justify-center w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-bold text-[#ffffff] text-[56px] tracking-[0] leading-[normal]">
              {stat.number}
            </div>
            <div
              className={`relative flex items-end justify-center self-stretch mt-[-5px] [font-family:'Nunito',Helvetica] font-normal text-[#ffffff] text-[22px] ${stat.textAlign} tracking-[0] leading-[22px] whitespace-pre-line`}
            >
              {stat.description}
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
