const ConverterFrom = (props) => {
  const {
    inputFrom,
    setInputFrom,
    activeCurrency,
    setActiveCurrency,
    rate,
    targetCurrency,
    } = props;
    
  const getCurrencyName = (currency) => {
    const names = {
      RUB: "Российский рубль",
      USD: "Доллар США",
      EUR: "Евро",
      GBP: "Фунт стерлингов",
    };
    return names[currency] || currency;
  };

  return (
    <div className="converter__box">
      <div className="converter__box_text">У меня есть</div>
      <div className="converter__switcher">
        {["RUB", "USD", "EUR", "GBP"].map((currency) => (
          <button
            key={currency}
            className={`converter__btn ${activeCurrency === currency ? "active" : ""}`}
            onClick={() => setActiveCurrency(currency)}
          >
            <span className="converter-btn__text">{currency}</span>
            <div className="currency-tooltip">
              <p>
                <strong>{currency}</strong> – {getCurrencyName(currency)}
              </p>
            </div>
          </button>
        ))}
        <button className="converter__btn down">↓</button>
      </div>
      <div className="converter__input">
        <input
          type="number"
          value={inputFrom}
          onChange={(e) => setInputFrom(e.target.value)}
          className="converter__input-field"
        />
        {inputFrom && (
          <div className="converter__input_rate">
            1 {activeCurrency} = {rate} {targetCurrency}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConverterFrom;
