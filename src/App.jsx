import { useState,  } from "react";

const App = () => {
  const [inputFrom, setInputFrom] = useState("5000");
  const [inputTo, setInputTo] = useState("");
  const [activeCurrencyFrom, setActiveCurrencyFrom] = useState("RUB");
  const [activeCurrencyTo, setActiveCurrencyTo] = useState("USD");

  const getRate = (from, to) => {
    const rates = { RUB: 1, USD: 96.5, EUR: 104.2, GBP: 122.1 };
    return (rates[to] / rates[from]).toFixed(4);
  };

  return (
    <>
      <div className="converter">
        {/* ПЕРВЫЙ БЛОК - У меня есть */}
        <div className="converter__box">
          <div className="converter__box_text">У меня есть</div>
          <div className="converter__switcher">
            <button
              className={`converter__btn ${activeCurrencyFrom === "RUB" ? "active" : ""}`}
              onClick={() => setActiveCurrencyFrom("RUB")}
              data-currency="RUB"
            >
              <span className="converter-btn__text">RUB</span>
              <div className="currency-tooltip">
                <p>
                  <strong>RUB</strong> – Российский рубль
                </p>
              </div>
            </button>

            <button
              className={`converter__btn ${activeCurrencyFrom === "USD" ? "active" : ""}`}
              onClick={() => setActiveCurrencyFrom("USD")}
              data-currency="USD"
            >
              <span className="converter-btn__text">USD</span>
              <div className="currency-tooltip">
                <p>
                  <strong>USD</strong> – Доллар США
                </p>
              </div>
            </button>

            <button
              className={`converter__btn ${activeCurrencyFrom === "EUR" ? "active" : ""}`}
              onClick={() => setActiveCurrencyFrom("EUR")}
              data-currency="EUR"
            >
              <span className="converter-btn__text">EUR</span>
              <div className="currency-tooltip">
                <p>
                  <strong>EUR</strong> – Евро
                </p>
              </div>
            </button>

            <button
              className={`converter__btn ${activeCurrencyFrom === "GBP" ? "active" : ""}`}
              onClick={() => setActiveCurrencyFrom("GBP")}
              data-currency="GBP"
            >
              <span className="converter-btn__text">GBP</span>
              <div className="currency-tooltip">
                <p>
                  <strong>GBP</strong> – Фунт стерлингов
                </p>
              </div>
            </button>

            <button className="converter__btn" data-currency="down">
              <span className="converter-btn__text">↓</span>
            </button>
          </div>

          <div className="converter__input">
            <input
              type="number"
              placeholder="0"
              value={inputFrom}
              onChange={(e) => setInputFrom(e.target.value)}
              className="converter__input-field"
            />
            {inputFrom && (
              <div className="converter__input_rate">
                1 {activeCurrencyFrom} ={" "}
                {getRate(activeCurrencyFrom, activeCurrencyTo)}{" "}
                {activeCurrencyTo}
              </div>
            )}
          </div>
        </div>

        {/* КНОПКА СМЕНЫ */}
        <div className="converter_switch">
          <button className="button_switch">↹</button>
        </div>

        {/* ВТОРОЙ БЛОК - Хочу приобрести */}
        <div className="converter__box">
          <div className="converter__box_text">Хочу приобрести</div>
          <div className="converter__switcher">
            <button
              className={`converter__btn ${activeCurrencyTo === "RUB" ? "active" : ""}`}
              onClick={() => setActiveCurrencyTo("RUB")}
              data-currency="RUB"
            >
              <span className="converter-btn__text">RUB</span>
              <div className="currency-tooltip">
                <p>
                  <strong>RUB</strong> – Российский рубль
                </p>
              </div>
            </button>

            <button
              className={`converter__btn ${activeCurrencyTo === "USD" ? "active" : ""}`}
              onClick={() => setActiveCurrencyTo("USD")}
              data-currency="USD"
            >
              <span className="converter-btn__text">USD</span>
              <div className="currency-tooltip">
                <p>
                  <strong>USD</strong> – Доллар США
                </p>
              </div>
            </button>

            <button
              className={`converter__btn ${activeCurrencyTo === "EUR" ? "active" : ""}`}
              onClick={() => setActiveCurrencyTo("EUR")}
              data-currency="EUR"
            >
              <span className="converter-btn__text">EUR</span>
              <div className="currency-tooltip">
                <p>
                  <strong>EUR</strong> – Евро
                </p>
              </div>
            </button>

            <button
              className={`converter__btn ${activeCurrencyTo === "GBP" ? "active" : ""}`}
              onClick={() => setActiveCurrencyTo("GBP")}
              data-currency="GBP"
            >
              <span className="converter-btn__text">GBP</span>
              <div className="currency-tooltip">
                <p>
                  <strong>GBP</strong> – Фунт стерлингов
                </p>
              </div>
            </button>

            <button className="converter__btn" data-currency="down">
              <span className="converter-btn__text">↓</span>
            </button>
          </div>

          <div className="converter__input">
            <input
              type="number"
              placeholder="0"
              value={inputTo}
              onChange={(e) => setInputTo(e.target.value)}
              className="converter__input-field"
            />
            {inputTo && (
              <div className="converter__input_rate">
                1 {activeCurrencyTo} ={" "}
                {getRate(activeCurrencyTo, activeCurrencyFrom)}{" "}
                {activeCurrencyFrom}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
