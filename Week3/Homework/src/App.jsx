import { useCallback, useRef, useState } from "react";

import moleImg from "./assets/mole.png";
import bombImg from "./assets/bomb.png";
import hitMoleImg from "./assets/hit-mole.png";

import Game from "./game/Game";
import useMoleGame from "./game/useMoleGame";
import Header from "./header/Header";
import Ranking from "./ranking/Ranking";

const RANKING_STORAGE_KEY = "mole-game-rankings";

const RANKING_CONFIG = {
  MIN_SAVE_SCORE: 1,
};

function App() {
  const [activeTab, setActiveTab] = useState("game");
  const [rankingRecords, setRankingRecords] = useState([]);
  const hasSaveRecordRef = useRef(false);

  const saveRankingRecord = useCallback((score) => {
    if (hasSaveRecordRef.current) return;
    if (score < RANKING_CONFIG.MIN_SAVE_SCORE) return;

    hasSaveRecordRef.current = true;

    const prevRecords = JSON.parse(
      localStorage.getItem(RANKING_STORAGE_KEY) || "[]",
    );

    const newRecord = {
      id: crypto.randomUUID(),
      level: "Level 1",
      score,
      recordedAt: new Date().toLocaleString(),
    };

    const nextRecords = [...prevRecords, newRecord].sort(
      (a, b) => b.score - a.score,
    );

    localStorage.setItem(RANKING_STORAGE_KEY, JSON.stringify(nextRecords));
  }, []);

  const game = useMoleGame({
    onGameEnd: saveRankingRecord,
  });

  const handleStartGame = () => {
    hasSaveRecordRef.current = false;
    game.handleStartGame();
  };

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

  return (
    <main className="page">
      <Header activeTab={activeTab} onChangeTab={handleChangeTab} />

      {activeTab === "game" && (
        <Game
          timeLeft={game.timeLeft}
          score={game.score}
          successCount={game.successCount}
          failCount={game.failCount}
          message={game.message}
          isPlaying={game.isPlaying}
          isGameOver={game.isGameOver}
          activeTarget={game.activeTarget}
          moleImg={moleImg}
          bombImg={bombImg}
          hitMoleImg={hitMoleImg}
          onStartGame={handleStartGame}
          onStopGame={game.handleStopGame}
          onClickHole={game.handleClickHole}
          onCloseModal={game.handleCloseModal}
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
