const CurrencyButton = (props) => {
  const {
    currency,
    isActive,
    onClick,
    tooltipText
  } = props;
  return (
    <button
      className={`converter__btn ${isActive ? "active" : ""}`}
      onClick={() => onClick(currency)}
      data-currency={currency}
    >
      <span className="converter-btn__text">{currency}</span>
      <div className="currency-tooltip">
        <p>
          <strong>{currency}</strong> – {tooltipText}
        </p>
      </div>
    </button>
  );
};

export default CurrencyButton;
