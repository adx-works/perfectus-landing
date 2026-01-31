import { SpecialistProfile } from "./SpecialistProfile";

export default function YuliaTsareva() {
  const education = [
    {
      type: "Основное образование", 
      institution: "2001 г. — Первый Санкт-Петербургский государственный медицинский университет им. акад. И.П. Павлова",
      date: "2001"
    }
  ];

  return (
    <SpecialistProfile 
      name="Царева Юлия Анатольевна"
      role="Врач-стоматолог общей практики"
      experience="24 года"
      image="/specialists/tsareva.png"
      education={education}
    />
  );
}
