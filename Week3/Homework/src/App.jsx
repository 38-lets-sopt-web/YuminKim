import { useState } from "react";
import styled from "@emotion/styled";

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
  border: none;
  border-radius: 50%;
  background-color: #9feefa;
`;

function App() {
  const [activeTab, setActiveTab] = useState("game");

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
              <strong>15.0</strong>
            </Card>

            <Card>
              <p>성공</p>
              <strong>0</strong>
            </Card>

            <Card>
              <p>실패</p>
              <strong>0</strong>
            </Card>

            <Card>
              <p>안내 메세지</p>
            </Card>
          </StatusPanel>

          <GamePanel>
            <div>
              <select>
                <option>Level 1</option>
                <option>Level 2</option>
                <option>Level 3</option>
              </select>

              <button>시작</button>
              <button>중단</button>
            </div>

            <Board>
              <Hole />
              <Hole />
              <Hole />
              <Hole />
            </Board>
          </GamePanel>
        </GameLayout>
      )}

      {activeTab === "ranking" && <div>랭킹 화면</div>}
    </Page>
  );
}

export default App;
