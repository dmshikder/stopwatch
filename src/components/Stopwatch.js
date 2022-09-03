import "./Stopwatch.css";

const Stopwatch = () => {
  return (
    <>
      <div>
        <h2>Stopwatch play</h2>
      </div>
      <div className="app__full-box">
        <div className="app__time">
          <div className="app__small-box">
            <p className="app__time-number">00</p>
            
          </div>
          <div className="app__small-box">
          <p className="app__time-number">00</p>
          </div>
          <div className="app__small-box">
          <p className="app__time-number">00</p>
          </div>
        </div>
        <div className="app__button">
            <div className="app__btn1">
                <button className="app__btn">Start</button>
            </div>
            <div className="app__btn2"><button className="app__btn">Start</button></div>
            <div className="app__btn3"><button className="app__btn">Start</button></div>

        </div>
      </div>
    </>
  );
};

export default Stopwatch;
