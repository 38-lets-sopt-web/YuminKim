import { useCallback, useEffect, useState } from "react";

const GAME_CONFIG = {
  DURATION: 15,
  TICK_INTERVAL: 100,
  TICK_UNIT: 0.1,
  HIT_DELAY: 700,
  BOMB_DELAY: 500,
  TARGET_INTERVAL: 1300,
  BOARD_COUNT: 4,
  MOLE_RATE: 0.7,
};

const getRandomTarget = () => {
  const index = Math.floor(Math.random() * GAME_CONFIG.BOARD_COUNT);
  const type = Math.random() < GAME_CONFIG.MOLE_RATE ? "mole" : "bomb";

  return { index, type };
};

function useMoleGame({ onGameEnd }) {
  const [timeLeft, setTimeLeft] = useState(GAME_CONFIG.DURATION);
  const [score, setScore] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const [failCount, setFailCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [activeTarget, setActiveTarget] = useState({
    index: null,
    type: null,
  });
  const [message, setMessage] = useState("");

  const showRandomTarget = useCallback(() => {
    setActiveTarget(getRandomTarget());
  }, []);

  const handleClickHole = (index) => {
    if (!isPlaying) return;
    if (activeTarget.index !== index) return;

    if (activeTarget.type === "mole") {
      setScore((prevScore) => prevScore + 1);
      setSuccessCount((prevCount) => prevCount + 1);
      setActiveTarget((prevTarget) => ({ ...prevTarget, type: "hit" }));
      setMessage("두더지를 잡았다!");

      setTimeout(() => {
        setMessage("");
        showRandomTarget();
      }, GAME_CONFIG.HIT_DELAY);

      return;
    }

    if (activeTarget.type === "bomb") {
      setScore((prevScore) => prevScore - 1);
      setFailCount((prevCount) => prevCount + 1);
      setMessage("펑!!");

      setActiveTarget({ index: null, type: null });

      setTimeout(() => {
        setMessage("");
        showRandomTarget();
      }, GAME_CONFIG.BOMB_DELAY);
    }
  };

  const handleStartGame = () => {
    setIsGameOver(false);
    setTimeLeft(GAME_CONFIG.DURATION);
    setScore(0);
    setSuccessCount(0);
    setFailCount(0);
    setIsPlaying(true);
    showRandomTarget();
  };

  const handleStopGame = () => {
    setIsPlaying(false);
  };

  const handleCloseModal = () => {
    setIsGameOver(false);
  };

  const finishGame = useCallback(() => {
    setIsPlaying(false);
    setIsGameOver(true);
    setActiveTarget({ index: null, type: null });
    onGameEnd(score);
  }, [onGameEnd, score]);

  useEffect(() => {
    if (!isPlaying) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= GAME_CONFIG.TICK_UNIT) {
          finishGame();
          return 0;
        }

        return prevTime - GAME_CONFIG.TICK_UNIT;
      });
    }, GAME_CONFIG.TICK_INTERVAL);

    return () => clearInterval(timerId);
  }, [isPlaying, finishGame]);

  useEffect(() => {
    if (!isPlaying) return;

    const targetTimerId = setInterval(() => {
      if (activeTarget.type === "hit") return;
      if (message) return;

      showRandomTarget();
    }, GAME_CONFIG.TARGET_INTERVAL);

    return () => clearInterval(targetTimerId);
  }, [isPlaying, activeTarget.type, message, showRandomTarget]);

  return {
    timeLeft,
    score,
    successCount,
    failCount,
    message,
    isPlaying,
    isGameOver,
    activeTarget,
    handleStartGame,
    handleStopGame,
    handleClickHole,
    handleCloseModal,
  };
}

export default useMoleGame;
