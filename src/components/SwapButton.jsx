const SwapButton = (props) => {
  const {
    inputFrom,
    inputTo,
    activeCurrencyFrom,
    activeCurrencyTo,
    onSwap } = props;

  const handleSwap = () => {
    onSwap(inputFrom, inputTo, activeCurrencyFrom, activeCurrencyTo);
  };

  return (
    <div className="converter_switch">
      <button className="button_switch" onClick={handleSwap}>
        ↹
      </button>
    </div>
  );
};

export default SwapButton;
