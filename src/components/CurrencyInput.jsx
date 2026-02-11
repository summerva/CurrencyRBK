const CurrencyInput = (props) => {
  const { 
  value, 
  onChange, 
  activeCurrency, 
  rate, 
  targetCurrency 
} = props
  return (
    <div className="converter__input">
      <input
        type="number"
        placeholder="0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="converter__input-field"
      />
      {value && (
        <div className="converter__input_rate">
          1 {activeCurrency} = {rate} {targetCurrency}
        </div>
      )}
    </div>
  );
};

export default CurrencyInput;
