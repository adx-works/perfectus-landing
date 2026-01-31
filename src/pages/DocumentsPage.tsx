import { useEffect } from "react";
import { HeaderSection } from "./sections/HeaderSection";
import { FooterSection } from "./sections/FooterSection";

export default function DocumentsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="w-full max-w-[1440px] mx-auto">
        <HeaderSection />
      </div>

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-10 py-20 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="w-48 h-48 text-[#98b7c6] opacity-90">
            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
              <path d="M16 8h24l12 12v32a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z" />
              <path d="M40 8v12h12" />
              <path d="M20 28h24M20 36h16M20 44h24" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-semibold text-black [font-family:'Manrope',Helvetica]">
              Страница в разработке
            </h1>
            <p className="text-[#707070] text-lg [font-family:'Manrope',Helvetica] max-w-md">
              Раздел «Документы» скоро будет доступен. Мы работаем над наполнением страницы.
            </p>
          </div>
        </div>
      </main>

      <div className="w-full max-w-[1440px] mx-auto mt-auto">
        <FooterSection />
      </div>
    </div>
  );
}
