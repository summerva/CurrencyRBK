// ConverterTo.jsx
const ConverterTo = (props) => {
  const {
    inputTo,
    setInputTo,
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
      <div className="converter__box_text">Хочу приобрести</div>
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
        <button className="converter__btn" data-currency="down">
          <span className="converter-btn__text">↓</span>
        </button>
      </div>
      <div className="converter__input">
        <input
          type="number"
          value={inputTo}
          onChange={(e) => setInputTo(e.target.value)}
          className="converter__input-field"
        />
        {inputTo && (
          <div className="converter__input_rate">
            1 {activeCurrency} = {rate} {targetCurrency}
          </div>
        )}
      </div>
    </div>
  );
};

export default ConverterTo;
