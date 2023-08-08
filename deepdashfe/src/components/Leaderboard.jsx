import { useEffect } from "react";
import TimeFormat from "hh-mm-ss";
import { useDispatch } from "react-redux";

import deepracer from "../assets/deepracer.png";
import rmit from "../assets/rmit.png";
import car from "../assets/car.png";
import "../styles/leaderboard.scss";
import { useSelector } from "react-redux";
import { setScores, updateModelName } from "../redux/appActions";
import config from "../config/env";

function Leaderboard() {
  const dispatch = useDispatch();  
  const allScores = useSelector((state) => state.app.scores);

  const handleImageRender = (name) => {
    dispatch(updateModelName(name));
  }

  useEffect(() => {    
    const pollScores = setInterval(()=> {
      fetch(`${config.external_ip_addr}/api/score`, {
      method: "GET",
    })
    .then((res) => res.json())
      .then((data) => dispatch(setScores(data))) // setScores(data)
      .catch((err) => console.error(err));
    }, 10000);
    return () => clearInterval(pollScores);
  }, [dispatch])

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-title">
        <img src={deepracer} alt="deepracer logo" className="deepracerLogo" />
        <img src={rmit} alt="rmit logo" className="leaderboard-rmit-logo" />
        <img src={car} alt="deepracer car" />
      </div>
      <div className="leaderboard-table">
        <div className="leaderboard-header">
          <div>Position</div>
          <div>Racer</div>
          <div>Time</div>
          <div>Gap to 1st</div>
        </div>
        <div className="leaderboard-ranking">
          {allScores.map(({ id, modelname, time }, i) => {
            return (
              <div className="leaderboard-row" key={id} onClick={() => handleImageRender(modelname)}>
                <div>{`#${i + 1}`}</div>
                <div>{modelname}</div>
                <div>{TimeFormat.fromMs(Number(time * 1000), "mm:ss.sss")}</div>
                <div>-</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
