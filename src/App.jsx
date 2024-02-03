import HomeContainer from "../components/Button.jsx";
import styles from "./App.module.css";

const ScoreCounter = () => {
  return (
    <div className={styles.scorecounter}>
      <HomeContainer teamName="Home" homeScoreLeft= "400px"/>
      <HomeContainer teamName="Away" homeScoreLeft="780px" />
    </div>
  );
};

export default ScoreCounter;
