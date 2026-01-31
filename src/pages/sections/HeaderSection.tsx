import { MapPinIcon } from "lucide-react";
import { Link } from "wouter";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navigationItems = [
  { label: "Наша клиника", href: "/" },
  { label: "Услуги", href: "#services" },
  { label: "Специалисты", href: "#specialists" },
  { label: "Документы", href: "#documents" },
];

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex w-full max-w-[1440px] items-center justify-between px-4 py-6 relative mx-auto bg-transparent">
      <div className="inline-flex items-center gap-10 relative flex-[0_0_auto]">
        <Link href="/">
          <div className="inline-flex h-[43px] items-center gap-3 relative flex-[0_0_auto] cursor-pointer">
            <img
              className="relative w-[43.2px] h-[43.2px]"
              alt="Frame"
              src="/figmaAssets/frame-12343899.svg"
            />
            <div className="relative w-fit [font-family:'Manrope',Helvetica] font-semibold text-black text-xl tracking-[-0.21px] leading-[normal]">
              ПЕРФЕКТУС
            </div>
          </div>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-4">
            {navigationItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink asChild>
                  <a
                    href={item.href}
                    className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-black text-base tracking-[-0.10px] leading-6 whitespace-nowrap cursor-pointer hover:text-[#587675] transition-colors"
                  >
                    {item.label}
                  </a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
        <div className="inline-flex items-center gap-[9px] relative flex-[0_0_auto]">
          <div className="flex w-10 h-10 items-center justify-center gap-2.5 relative bg-[#98b7c6] rounded-full">
            <MapPinIcon className="w-[13px] h-[15.7px] text-white" />
          </div>
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="relative self-stretch [font-family:'Manrope',Helvetica] font-semibold text-[#a4a4a4] text-sm tracking-[-0.10px] leading-[21px]">
              Мы находимся по адресу:
            </div>
            <div className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-textdark text-sm tracking-[-0.10px] leading-[21px] whitespace-nowrap">
              Приозерск, ул. Калинина, 11, 3 этаж, каб 301
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-[9px] relative flex-[0_0_auto]">
          <img
            className="relative w-10 h-10"
            alt="Frame"
            src="/figmaAssets/frame-12343950.svg"
          />
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="relative self-stretch [font-family:'Manrope',Helvetica] font-semibold text-[#a4a4a4] text-sm tracking-[-0.10px] leading-[21px]">
              Запись по телефону:
            </div>
            <div className="self-stretch font-medium text-textdark text-sm tracking-[-0.10px] leading-[21px] relative [font-family:'Manrope',Helvetica]">
              +7 (921) 873-70-73
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
