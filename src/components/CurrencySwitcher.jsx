import CurrencyButton from "./CurrencyButton";

const CurrencySwitcher = (props) => {
  const {
    activeCurrency,
    onCurrencyChange
  } = props;
  
  const currencies = [
    { code: "RUB", name: "Российский рубль" },
    { code: "USD", name: "Доллар США" },
    { code: "EUR", name: "Евро" },
    { code: "GBP", name: "Фунт стерлингов" },
  ];

  return (
    <div className="converter__switcher">
      {currencies.map(({ code, name }) => (
        <CurrencyButton
          key={code}
          currency={code}
          isActive={activeCurrency === code}
          onClick={onCurrencyChange}
          tooltipText={name}
        />
      ))}
      <button className="converter__btn down-arrow">↓</button>
    </div>
  );
};

export default CurrencySwitcher;
