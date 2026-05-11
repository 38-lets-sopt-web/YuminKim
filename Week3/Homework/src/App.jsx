import { useCallback, useEffect, useRef, useState } from "react";

import moleImg from "./assets/mole.png";
import bombImg from "./assets/bomb.png";
import hitMoleImg from "./assets/hit-mole.png";

import Game from "./game/Game";
import Header from "./header/Header";
import Ranking from "./ranking/Ranking";

const RANKING_STORAGE_KEY = "mole-game-rankings";

const GAME_CONFIG = {
  DURATION: 15,
  TICK_INTERVAL: 100,
  TICK_UNIT: 0.1,
  HIT_DELAY: 700,
  BOMB_DELAY: 500,
  TARGET_INTERVAL: 1300,
  BOARD_COUNT: 4,
  MOLE_RATE: 0.7,
  MIN_SAVE_SCORE: 1,
};

const getRandomTarget = () => {
  const randomIndex = Math.floor(Math.random() * GAME_CONFIG.BOARD_COUNT);
  const randomType = Math.random() < GAME_CONFIG.MOLE_RATE ? "mole" : "bomb";

  return { randomIndex, randomType };
};

function App() {
  const [activeTab, setActiveTab] = useState("game");
  const [timeLeft, setTimeLeft] = useState(GAME_CONFIG.DURATION);
  const [score, setScore] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeType, setActiveType] = useState(null);
  const [rankingRecords, setRankingRecords] = useState([]);
  const hasSaveRecordRef = useRef(false);
  const [message, setMessage] = useState("");

  const showRandomTarget = useCallback(() => {
    const { randomIndex, randomType } = getRandomTarget();

    setActiveIndex(randomIndex);
    setActiveType(randomType);
  }, []);

  const handleClickHole = (index) => {
    if (!isPlaying) return;
    if (activeIndex !== index) return;

    if (activeType === "mole") {
      setScore((prevScore) => prevScore + 1);
      setSuccessCount((prevCount) => prevCount + 1);
      setActiveType("hit");
      setMessage("두더지를 잡았다!");

      setTimeout(() => {
        setMessage("");
        showRandomTarget();
      }, GAME_CONFIG.HIT_DELAY);

      return;
    }

    if (activeType === "bomb") {
      setScore((prevScore) => prevScore - 1);
      setFailCount((prevCount) => prevCount + 1);
      showRandomTarget();
      setMessage("펑!!");

      setActiveIndex(null);
      setActiveType(null);

      setTimeout(() => {
        setMessage("");
        showRandomTarget();
      }, GAME_CONFIG.BOMB_DELAY);
    }
  };

  const handleStartGame = () => {
    setIsGameOver(false);
    hasSaveRecordRef.current = false;
    setTimeLeft(GAME_CONFIG.DURATION);
    setScore(0);
    setSuccessCount(0);
    setFailCount(0);
    setIsPlaying(true);
    showRandomTarget();
  };

  const handleCloseModal = () => {
    setIsGameOver(false);
  };

  const saveRankingRecord = useCallback(() => {
    if (hasSaveRecordRef.current) return;
    if (score < GAME_CONFIG.MIN_SAVE_SCORE) return;

    hasSaveRecordRef.current = true;

    const prevRecords = JSON.parse(
      localStorage.getItem(RANKING_STORAGE_KEY) || "[]",
    );

    const newRecord = {
      id: Date.now(),
      level: "Level 1",
      score,
      recordedAt: new Date().toLocaleString(),
    };

    const nextRecords = [...prevRecords, newRecord].sort(
      (a, b) => b.score - a.score,
    );

    localStorage.setItem(RANKING_STORAGE_KEY, JSON.stringify(nextRecords));
  }, [score]);

  const loadRankingRecords = () => {
    const records = JSON.parse(
      localStorage.getItem(RANKING_STORAGE_KEY) || "[]",
    );

    setRankingRecords(records);
  };

  const handleResetRanking = () => {
    localStorage.removeItem(RANKING_STORAGE_KEY);
    setRankingRecords([]);
  };

  const handleChangeTab = (tab) => {
    setActiveTab(tab);

    if (tab === "ranking") {
      loadRankingRecords();
    }
  };

  useEffect(() => {
    if (!isPlaying) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= GAME_CONFIG.TICK_UNIT) {
          setIsPlaying(false);
          setIsGameOver(true);
          setActiveIndex(null);
          setActiveType(null);
          saveRankingRecord();
          return 0;
        }

        return prevTime - GAME_CONFIG.TICK_UNIT;
      });
    }, GAME_CONFIG.TICK_INTERVAL);

    return () => clearInterval(timerId);
  }, [isPlaying, saveRankingRecord]);

  useEffect(() => {
    if (!isPlaying) return;

    const targetTimerId = setInterval(() => {
      if (activeType === "hit") return;
      if (message) return;

      showRandomTarget();
    }, GAME_CONFIG.TARGET_INTERVAL);

    return () => clearInterval(targetTimerId);
  }, [isPlaying, activeType, message, showRandomTarget]);

  return (
    <main className="page">
      <Header activeTab={activeTab} onChangeTab={handleChangeTab} />

      {activeTab === "game" && (
        <Game
          timeLeft={timeLeft}
          score={score}
          successCount={successCount}
          failCount={failCount}
          message={message}
          isPlaying={isPlaying}
          isGameOver={isGameOver}
          activeIndex={activeIndex}
          activeType={activeType}
          moleImg={moleImg}
          bombImg={bombImg}
          hitMoleImg={hitMoleImg}
          onStartGame={handleStartGame}
          onStopGame={() => setIsPlaying(false)}
          onClickHole={handleClickHole}
          onCloseModal={handleCloseModal}
        />
      )}

      {activeTab === "ranking" && (
        <Ranking
          rankingRecords={rankingRecords}
          onResetRanking={handleResetRanking}
        />
      )}

    </main>
  );
}

export default App;
