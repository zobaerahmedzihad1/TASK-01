import React from "react";
import leaderboard from "../../assets/leaderboard.png";
import "./LeaderBoard.scss";

const LeaderBoard = () => {
  return (
    <div className="leaderboard__container">
      <div className="leaderboard__img">
        <img src={leaderboard} alt="img" />
      </div>
      <div className="leaderboard__content">
        <h2>Leaderboard</h2>
        <h5>
          Show your learning skills and become a top scorer <br /> among
          thousands of other students and get exiting rewards.
        </h5>
      </div>
    </div>
  );
};

export default LeaderBoard;
