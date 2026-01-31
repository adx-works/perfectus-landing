import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { HeaderSection } from "../sections/HeaderSection";
import { FooterSection } from "../sections/FooterSection";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

interface Education {
  type: string;
  institution: string;
  date: string;
}

interface SpecialistProfileProps {
  name: string;
  role: string;
  experience: string;
  image: string;
  education: Education[];
}

export const SpecialistProfile = ({ name, role, experience, image, education }: SpecialistProfileProps) => {
  // Прокрутка в верх страницы при загрузке
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="w-full max-w-[1440px] mx-auto">
        <HeaderSection />
      </div>
      
      <main className="w-full max-w-[1440px] mx-auto px-10 py-12">
        <Link href="/#specialists">
          <div className="inline-flex items-center gap-4 mb-12 cursor-pointer group">
            <div className="p-2 rounded-full bg-[#f8f9fc] group-hover:bg-[#eef1f7] transition-colors">
              <ArrowLeft className="w-6 h-6 text-black" />
            </div>
            <span className="font-medium text-xl text-black">К общему списку</span>
          </div>
        </Link>

        <div className="flex flex-col md:flex-row gap-16 mb-24">
          <div className="w-[292px] h-[350px] rounded-[36px] overflow-hidden flex-shrink-0">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col gap-10 py-4">
            <div>
              <h1 className="text-4xl font-semibold mb-8">Профиль специалиста</h1>
              <div className="space-y-8">
                <div>
                  <p className="text-[#848685] text-base mb-2">ФИО:</p>
                  <p className="text-[21px] font-medium text-black">{name}</p>
                </div>
                <div>
                  <p className="text-[#848685] text-base mb-2">Профиль специалиста:</p>
                  <p className="text-[21px] font-medium text-black">{role}</p>
                </div>
                <div>
                  <p className="text-[#848685] text-base mb-2">Опыт работы:</p>
                  <p className="text-[21px] font-medium text-black">{experience}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-[#f8f9fc] rounded-[40px] p-12 mb-24">
          <h2 className="text-[28px] font-semibold mb-10">Образование</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {education.map((edu, idx) => (
              <Card key={idx} className="bg-white border-0 rounded-[36px] h-[306px] flex flex-col justify-between p-6">
                <CardContent className="p-0 space-y-4">
                  <div className="inline-block px-5 py-2 rounded-[20px] bg-[linear-gradient(65deg,rgba(145,170,152,0.1)_24%,rgba(155,188,238,0.1)_155%)]">
                    <span className="text-sm font-medium bg-gradient-to-r from-[#91aa98] to-[#9bbcee] bg-clip-text text-transparent">
                      {edu.type}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-black leading-relaxed">{edu.institution}</p>
                    <p className="text-sm">
                      <span className="text-[#767676]">Дата получения: </span>
                      <span className="text-black">{edu.date}</span>
                    </p>
                  </div>
                </CardContent>
                <button className="w-full py-2.5 px-5 rounded-[20px] bg-gradient-to-r from-[#91aa98] to-[#9bbcee] text-white text-sm font-medium flex items-center justify-between hover:opacity-90 transition-opacity">
                  Смотреть сертификат
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </button>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <div className="w-full max-w-[1440px] mx-auto">
        <FooterSection />
      </div>
    </div>
  );
};
