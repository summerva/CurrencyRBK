import { useState, useEffect } from "react";
import ConverterBox from "./components/ConverterBox";
import SwapButton from "./components/SwapButton";

const App = () => {
  const [inputFrom, setInputFrom] = useState("5000");
  const [inputTo, setInputTo] = useState("");
  const [activeCurrencyFrom, setActiveCurrencyFrom] = useState("RUB");
  const [activeCurrencyTo, setActiveCurrencyTo] = useState("USD");

const getRate = (from, to) => {
  // Реальные курсы на февраль 2026
  const rates = { 
    RUB: 1,
    USD: 95.20, 
    EUR: 102.80,
    GBP: 120.50
  };
  return (rates[to] / rates[from]).toFixed(4);
};


  const handleSwap = () => {
    setInputFrom(inputTo);
    setInputTo(inputFrom);

    setActiveCurrencyFrom(activeCurrencyTo);
    setActiveCurrencyTo(activeCurrencyFrom);
  };

  useEffect(() => {
    if (inputFrom) {
      const rate = getRate(activeCurrencyFrom, activeCurrencyTo);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInputTo((parseFloat(inputFrom) * parseFloat(rate)).toFixed(2));
    }
  }, [inputFrom, activeCurrencyFrom, activeCurrencyTo]);

  return (
    <>
      <div className="converter">
        <ConverterBox
          title="У меня есть"
          inputValue={inputFrom}
          onInputChange={setInputFrom}
          activeCurrency={activeCurrencyFrom}
          onCurrencyChange={setActiveCurrencyFrom}
          rate={getRate(activeCurrencyFrom, activeCurrencyTo)}
          targetCurrency={activeCurrencyTo}
        />
        <SwapButton
          inputFrom={inputFrom}
          inputTo={inputTo}
          activeCurrencyFrom={activeCurrencyFrom}
          activeCurrencyTo={activeCurrencyTo}
          onSwap={handleSwap}
        />
        <ConverterBox
          title="Хочу приобрести"
          inputValue={inputTo}
          onInputChange={setInputTo}
          activeCurrency={activeCurrencyTo}
          onCurrencyChange={setActiveCurrencyTo}
          rate={getRate(activeCurrencyTo, activeCurrencyFrom)}
          targetCurrency={activeCurrencyFrom}
        />
      </div>
    </>
  );
};

export default App;
