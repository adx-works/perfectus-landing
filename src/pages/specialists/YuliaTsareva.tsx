import { SpecialistProfile } from "./SpecialistProfile";

export default function YuliaTsareva() {
  const education = [
    {
      type: "Основное образование",
      institution: "Название учебного заведения/организации",
      date: "01.07.2012"
    }
  ];

  return (
    <SpecialistProfile 
      name="Царева Юлия Анатольевна"
      role="Врач-стоматолог общей практики"
      experience="12 лет"
      image="/figmaAssets/image.png"
      education={education}
    />
  );
}
