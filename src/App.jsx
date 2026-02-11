import { useState, useEffect } from "react";
import ConverterBox from "./components/ConverterBox";
import SwapButton from "./components/SwapButton";

const App = () => {
  const [inputFrom, setInputFrom] = useState("5000");
  const [inputTo, setInputTo] = useState("");
  const [activeCurrencyFrom, setActiveCurrencyFrom] = useState("RUB");
  const [activeCurrencyTo, setActiveCurrencyTo] = useState("USD");

  const getRate = (from, to) => {
    // Актуальный курс ЦБ РФ на февраль 2026
    const rates = {
      RUB: 1,
      USD: 77.4648,
      EUR: 92.475,
      GBP: 105.9254,
    };
    return (rates[from] / rates[to]).toFixed(4);
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
