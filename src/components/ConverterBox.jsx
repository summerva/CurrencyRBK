import CurrencySwitcher from "./CurrencySwitcher";
import CurrencyInput from "./CurrencyInput";

const ConverterBox = (props) => {
  const {
    title,
    inputValue,
    onInputChange,
    activeCurrency,
    onCurrencyChange,
    rate,
    targetCurrency,
  } = props;
  return (
    <div className="converter__box">
      <div className="converter__box_text">{title}</div>
      <CurrencySwitcher
        activeCurrency={activeCurrency}
        onCurrencyChange={onCurrencyChange}
      />
      <CurrencyInput
        value={inputValue}
        onChange={onInputChange}
        activeCurrency={activeCurrency}
        rate={rate}
        targetCurrency={targetCurrency}
      />
    </div>
  );
};

export default ConverterBox;
