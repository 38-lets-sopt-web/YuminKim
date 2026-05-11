import { useCallback, useRef, useState } from "react";

import moleImg from "./assets/mole.png";
import bombImg from "./assets/bomb.png";
import hitMoleImg from "./assets/hit-mole.png";

import Game from "./game/Game";
import useMoleGame from "./game/useMoleGame";
import Header from "./header/Header";
import Ranking from "./ranking/Ranking";
import {
  clearRankingRecords,
  getRankingRecords,
  saveRankingRecord,
} from "./ranking/rankingStorage";

function App() {
  const [activeTab, setActiveTab] = useState("game");
  const [rankingRecords, setRankingRecords] = useState([]);
  const hasSaveRecordRef = useRef(false);

  const handleSaveRankingRecord = useCallback((score) => {
    if (hasSaveRecordRef.current) return;

    const isSaved = saveRankingRecord(score);
    hasSaveRecordRef.current = isSaved;
  }, []);

  const game = useMoleGame({
    onGameEnd: handleSaveRankingRecord,
  });

  const handleStartGame = () => {
    hasSaveRecordRef.current = false;
    game.handleStartGame();
  };

  const loadRankingRecords = () => {
    setRankingRecords(getRankingRecords());
  };

  const handleResetRanking = () => {
    clearRankingRecords();
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
