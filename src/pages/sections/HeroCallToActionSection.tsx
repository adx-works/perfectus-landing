export const HeroCallToActionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[786px] mx-auto items-center gap-2 px-4">
      <h1 className="w-fit [font-family:'Manrope',Helvetica] font-semibold text-textdark text-[44px] text-center tracking-[-0.25px] leading-[66px] whitespace-nowrap">
        Стоматологические услуги
      </h1>

      <p className="w-full [font-family:'Manrope',Helvetica] font-medium text-[#6f6f6f] text-xl text-center tracking-[-0.17px] leading-7">
        В нашей клинике мы предлагаем комплексные стоматологические услуги,
        направленные на поддержание здоровья и красоты ваших зубов. Для
        ознакомления со стоимостью услуг скачайте наш PDF-прайс
      </p>
    </section>
  );
};
