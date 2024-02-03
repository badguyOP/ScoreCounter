import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import styles from "./HomeContainer.module.css";

const App = ({ teamName, homeScoreLeft }) => {
  App.propTypes = {
    teamName: PropTypes.string.isRequired,
    homeScoreLeft: PropTypes.string.isRequired,
  };

  const homeDivStyle = useMemo(() => ({
    left: homeScoreLeft,
  }), [homeScoreLeft]);

  const [count, setCount] = useState(0);

  return (
    <div className={styles.homeDiv} style={homeDivStyle}>
      <div className={styles.homeScore}>
        <h1 className={styles.home}>{teamName}</h1>
        <div className={styles.wrapper}>
          <h1 className={styles.h1} id="homeScore">
            {count}
          </h1>
        </div>
      </div>
      <div className={styles.score}>
        <button className={styles.button} 
        onClick={() => setCount(count + 1)}>
          +1
        </button>
        <button className={styles.button1} 
        onClick={() => setCount(count + 2)}>
          +2
        </button>
        <button className={styles.button2} 
        onClick={() => setCount(count + 3)}>
          +3
        </button>
      </div>
    </div>
  );
};

export default App;
