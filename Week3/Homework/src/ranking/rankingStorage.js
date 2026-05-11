const RANKING_STORAGE_KEY = "mole-game-rankings";

const RANKING_CONFIG = {
  MIN_SAVE_SCORE: 1,
};

export const getRankingRecords = () => {
  return JSON.parse(localStorage.getItem(RANKING_STORAGE_KEY) || "[]");
};

export const saveRankingRecord = (score) => {
  if (score < RANKING_CONFIG.MIN_SAVE_SCORE) return false;

  const prevRecords = getRankingRecords();

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
  return true;
};

export const clearRankingRecords = () => {
  localStorage.removeItem(RANKING_STORAGE_KEY);
};
