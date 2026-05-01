import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import moleImg from "./assets/mole.png";
import bombImg from "./assets/bomb.png";
import hitMoleImg from "./assets/hit-mole.png";

import {
  Page,
  Header,
  Title,
  TabButton,
  GameButton,
  GameLayout,
  StatusPanel,
  Card,
  CountRow,
  MessageCard,
  GamePanel,
  GameToolbar,
  LevelSelect,
  ButtonGroup,
  Board,
  Hole,
  TargetImage,
  ModalOverlay,
  ModalBox,
  ModalTitle,
  ModalScore,
  ModalButton,
  RankingPanel,
  RankingHeader,
  RankingTitle,
  ResetButton,
  RankingTable,
  TableHead,
  TableCell,
  TableHeaderCell,
} from "./App.styles";

const RANKING_STORAGE_KEY = "mole-game-rankings";

const getRandomTarget = () => {
  const randomIndex = Math.floor(Math.random() * 4);
  const randomType = Math.random() < 0.7 ? "mole" : "bomb";

  return { randomIndex, randomType };
};

function App() {
  const [activeTab, setActiveTab] = useState("game");
  const [timeLeft, setTimeLeft] = useState(15);
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
      }, 700);

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
      }, 500);
    }
  };

  const handleStartGame = () => {
    setIsGameOver(false);
    hasSaveRecordRef.current = false;
    setTimeLeft(15);
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
    if (score < 1) return;

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

  useEffect(() => {
    if (!isPlaying) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0.1) {
          setIsPlaying(false);
          setIsGameOver(true);
          setActiveIndex(null);
          setActiveType(null);
          saveRankingRecord();
          return 0;
        }

        return prevTime - 0.1;
      });
    }, 100);

    return () => clearInterval(timerId);
  }, [isPlaying, saveRankingRecord]);

  useEffect(() => {
    if (!isPlaying) return;

    const targetTimerId = setInterval(() => {
      if (activeType === "hit") return;
      if (message) return;

      showRandomTarget();
    }, 1300);

    return () => clearInterval(targetTimerId);
  }, [isPlaying, activeType, message, showRandomTarget]);

  return (
    <Page>
      <Header>
        <Title>두더지 게임</Title>
        <TabButton onClick={() => setActiveTab("game")}>게임</TabButton>
        <TabButton
          onClick={() => {
            setActiveTab("ranking");
            loadRankingRecords();
          }}
        >
          랭킹
        </TabButton>
      </Header>

      {activeTab === "game" && (
        <GameLayout>
          <StatusPanel>
            <Card>
              <p>남은시간</p>
              <strong>{timeLeft.toFixed(1)}</strong>
            </Card>

            <Card>
              <p>총 점수</p>
              <strong>{score}</strong>
            </Card>

            <CountRow>
              <Card>
                <p style={{ color: "#31b45f" }}>성공</p>
                <strong>{successCount}</strong>
              </Card>

              <Card>
                <p style={{ color: "#f06b6b" }}>실패</p>
                <strong>{failCount}</strong>
              </Card>
            </CountRow>

            <MessageCard>
              <p>안내 메세지</p>
              <strong>{message}</strong>
            </MessageCard>
          </StatusPanel>

          <GamePanel>
            <GameToolbar>
              <LevelSelect>
                <option>Level 1</option>
                <option>Level 2</option>
                <option>Level 3</option>
              </LevelSelect>

              <ButtonGroup>
                <GameButton onClick={handleStartGame}>
                  <span style={{ color: "#31b45f" }}>시작</span>
                </GameButton>
                <GameButton onClick={() => setIsPlaying(false)}>
                  <span style={{ color: "#f06b6b" }}>중단</span>
                </GameButton>
              </ButtonGroup>
            </GameToolbar>

            <Board>
              {[0, 1, 2, 3].map((index) => (
                <Hole key={index} onClick={() => handleClickHole(index)}>
                  {isPlaying &&
                    activeIndex === index &&
                    activeType === "mole" && (
                      <TargetImage src={moleImg} alt="두더지" />
                    )}

                  {isPlaying &&
                    activeIndex === index &&
                    activeType === "bomb" && (
                      <TargetImage src={bombImg} alt="폭탄" />
                    )}

                  {isPlaying &&
                    activeIndex === index &&
                    activeType === "hit" && (
                      <TargetImage src={hitMoleImg} alt="맞은 두더지" />
                    )}
                </Hole>
              ))}
            </Board>
          </GamePanel>
        </GameLayout>
      )}

      {activeTab === "ranking" && (
        <RankingPanel>
          <RankingHeader>
            <RankingTitle>랭킹 보드</RankingTitle>
            <ResetButton onClick={handleResetRanking}>기록 초기화</ResetButton>
          </RankingHeader>

          <RankingTable>
            <TableHead>
              <tr>
                <TableHeaderCell>순위</TableHeaderCell>
                <TableHeaderCell>레벨</TableHeaderCell>
                <TableHeaderCell>점수</TableHeaderCell>
                <TableHeaderCell>기록 시각</TableHeaderCell>
              </tr>
            </TableHead>

            <tbody>
              {rankingRecords.length === 0 ? (
                <tr>
                  <TableCell colSpan={4}>
                    아직 기록이 없습니다. 게임을 시작해보세요!
                  </TableCell>
                </tr>
              ) : (
                rankingRecords.map((record, index) => (
                  <tr key={record.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{record.level}</TableCell>
                    <TableCell>{record.score}점</TableCell>
                    <TableCell>{record.recordedAt}</TableCell>
                  </tr>
                ))
              )}
            </tbody>
          </RankingTable>
        </RankingPanel>
      )}

      {isGameOver &&
        createPortal(
          <ModalOverlay>
            <ModalBox>
              <ModalTitle>게임 종료!</ModalTitle>
              <ModalScore>최종 점수: {score}점</ModalScore>
              <ModalButton onClick={handleCloseModal}>확인</ModalButton>
            </ModalBox>
          </ModalOverlay>,
          document.body,
        )}
    </Page>
  );
}

export default App;
