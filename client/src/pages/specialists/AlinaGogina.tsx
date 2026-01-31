import { SpecialistProfile } from "./SpecialistProfile";

export default function AlinaGogina() {
  const education = [
    {
      type: "Основное образование",
      institution: "Название учебного заведения/организации",
      date: "01.07.2014"
    }
  ];

  return (
    <SpecialistProfile 
      name="Гогина Алина Владимировна"
      role="Врач-стоматолог общей практики"
      experience="10 лет"
      image="/figmaAssets/image-1.png"
      education={education}
    />
  );
}
