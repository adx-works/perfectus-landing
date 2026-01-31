import { SpecialistProfile } from "./SpecialistProfile";

export default function VilenaDyakonova() {
  const education = [
    {
      type: "Основное образование",
      institution: "Название учебного заведения/организации",
      date: "01.07.2010"
    },
    {
      type: "Повышение квалификации",
      institution: "Название учебного заведения/организации",
      date: "15.05.2015"
    }
  ];

  return (
    <SpecialistProfile 
      name="Дьяконова Вилена Викторовна"
      role="Главный врач, врач стоматолог-ортопед, терапевт, хирург"
      experience="28 лет"
      image="/figmaAssets/image-929.png"
      education={education}
    />
  );
}
