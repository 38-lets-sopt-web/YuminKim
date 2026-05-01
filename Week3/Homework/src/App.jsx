import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "@emotion/styled";

import moleImg from "./assets/mole.png";
import bombImg from "./assets/bomb.png";
import hitMoleImg from "./assets/hit-mole.png";

const Page = styled.main`
  min-height: 100vh;
  background-color: #effcff;
  padding: 32px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 24px;
  border-radius: 16px;
  color: #309cac;
  background-color: #dff8ff;
`;

const Title = styled.h1`
  margin: 0;
  color: #309cac;
  font-size: 40px;
`;

const TabButton = styled.button`
  padding: 8px 14px;
  border: 1px solid #98d0d9;
  border-radius: 16px;
  background-color: #ffffff;
  color: #309cac;
  cursor: pointer;
`;

const GameLayout = styled.section`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 24px;
  margin-top: 28px;
`;

const StatusPanel = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Card = styled.div`
  border-radius: 16px;
  background-color: #d8f7ff;
  padding: 24px;
  text-align: center;
`;

const GamePanel = styled.section`
  border-radius: 16px;
  background-color: #d8f7ff;
  padding: 24px;
`;

const Board = styled.div`
  width: 420px;
  height: 420px;
  margin: 24px auto 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  padding: 40px;
  border-radius: 16px;
  background-color: #f4fdff;
`;

const Hole = styled.button`
  width: 100%;
  aspect-ratio: 1 / 1;
  border: none;
  border-radius: 50%;
  background-color: #9feefa;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const TargetImage = styled.img`
  width: 65%;
  height: 65%;
  object-fit: contain;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(18, 56, 92, 0.55);
`;

const ModalBox = styled.div`
  width: 280px;
  padding: 28px;
  border-radius: 18px;
  background-color: #eaf7ff;
  text-align: center;
  color: #12385c;
  box-shadow: 0 20px 50px rgba(18, 56, 92, 0.25);
`;

const ModalTitle = styled.h2`
  margin: 0 0 16px;
  font-size: 22px;
`;

const ModalScore = styled.strong`
  display: block;
  margin-bottom: 20px;
  font-size: 28px;
  color: #309cac;
`;

const ModalButton = styled.button`
  padding: 10px 18px;
  border: none;
  border-radius: 999px;
  background-color: #37bfd4;
  color: #ffffff;
  cursor: pointer;
`;

//여기부터 랭킹

const RankingPanel = styled.section`
  margin-top: 28px;
  padding: 28px;
  border-radius: 16px;
  background-color: #d8f7ff;
`;

const RankingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const RankingTitle = styled.h2`
  margin: 0;
  color: #12385c;
  font-size: 24px;
`;

const ResetButton = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 999px;
  background-color: #ff7c7c;
  color: #ffffff;
  cursor: pointer;
`;

const RankingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  background-color: #effcff;
`;

const TableHead = styled.thead`
  background-color: #9feefa;
  color: #12385c;
`;

const TableCell = styled.td`
  padding: 14px;
  border-bottom: 1px solid #bceef6;
`;

const TableHeaderCell = styled.th`
  padding: 14px;
`;

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

  const showRandomTarget = () => {
    const randomIndex = Math.floor(Math.random() * 4);
    const randomType = Math.random() < 0.7 ? "mole" : "bomb";

    setActiveIndex(randomIndex);
    setActiveType(randomType);
  };

  const handleClickHole = (index) => {
    if (!isPlaying) return;
    if (activeIndex !== index) return;

    if (activeType === "mole") {
      setScore((prevScore) => prevScore + 1);
      setSuccessCount((prevCount) => prevCount + 1);
      setActiveType("hit");

      setTimeout(() => {
        showRandomTarget();
      }, 700);

      return;
    }

    if (activeType === "bomb") {
      setScore((prevScore) => prevScore - 1);
      setFailCount((prevCount) => prevCount + 1);
      showRandomTarget();
    }
  };

  const handleStartGame = () => {
    setIsGameOver(false);
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

  useEffect(() => {
    if (!isPlaying) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0.1) {
          setIsPlaying(false);
          setIsGameOver(true);
          setActiveIndex(null);
          setActiveType(null);
          return 0;
        }

        return prevTime - 0.1;
      });
    }, 100);

    return () => clearInterval(timerId);
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) return;

    const targetTimerId = setInterval(() => {
      if (activeType === "hit") return;

      showRandomTarget();
    }, 2000);

    return () => clearInterval(targetTimerId);
  }, [isPlaying, activeType]);

  return (
    <Page>
      <Header>
        <Title>두더지 게임</Title>
        <TabButton onClick={() => setActiveTab("game")}>게임</TabButton>
        <TabButton onClick={() => setActiveTab("ranking")}>랭킹</TabButton>
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

            <Card>
              <p>성공</p>
              <strong>{successCount}</strong>
            </Card>

            <Card>
              <p>실패</p>
              <strong>{failCount}</strong>
            </Card>

            <Card>
              <p>안내 메세지</p>
              <strong>
                {isPlaying ? "게임 진행 중" : "시작 버튼을 눌러주세요"}
              </strong>
            </Card>
          </StatusPanel>

          <GamePanel>
            <div>
              <select>
                <option>Level 1</option>
                <option>Level 2</option>
                <option>Level 3</option>
              </select>

              <button onClick={handleStartGame}>시작</button>
              <button onClick={() => setIsPlaying(false)}>중단</button>
            </div>

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
            <ResetButton>기록 초기화</ResetButton>
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
              <tr>
                <TableCell>1</TableCell>
                <TableCell>Level 1</TableCell>
                <TableCell>10점</TableCell>
                <TableCell>2026. 5. 1 오후 7:20</TableCell>
              </tr>
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
