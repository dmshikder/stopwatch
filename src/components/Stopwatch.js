import { useState } from "react";
import "./Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();

  const start = () => {
    run();
    setInterv(setInterval(run, 10));
  };

  let updatedMs = time.ms,
    updatedM = time.m,
    updatedS = time.s,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }

    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
  };
  const reset = () => {
    clearInterval(interv);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  return (
    <>
      <div>
        <h2>Stopwatch play</h2>
      </div>
      <div className="app__full-box">
        <div className="app__time">
          <div className="app__small-box">
            <p className="app__time-number">
              {time.h < 10 ? "0" + time.h : time.h}
            </p>
          </div>
          <div className="app__small-box">
            <p className="app__time-number">
              {time.m < 10 ? "0" + time.m : time.m}
            </p>
          </div>
          <div className="app__small-box">
            <p className="app__time-number">
              {time.s < 10 ? "0" + time.s : time.s}
            </p>
          </div>
          <div className="app__small-box">
            <p className="app__time-number">
              {time.ms < 10 ? "0" + time.ms : time.ms}
            </p>
          </div>
          
          <div className="app__button">
              <button className="app__start-btn" onClick={start}>
                Start
              </button>

              <button className="app__reset-btn" onClick={reset}>
                Reset
              </button>

              <button className="app__stop-btn" onClick={stop}>
                Stop
              </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
