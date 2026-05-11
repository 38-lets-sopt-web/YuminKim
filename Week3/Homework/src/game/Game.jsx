import { createPortal } from "react-dom";

import {
  Board,
  ButtonGroup,
  Card,
  CountRow,
  GameButton,
  GameButtonText,
  GameLayout,
  GamePanel,
  GameToolbar,
  Hole,
  LevelSelect,
  MessageCard,
  StatusLabel,
  ModalBox,
  ModalButton,
  ModalOverlay,
  ModalScore,
  ModalTitle,
  StatusPanel,
  TargetImage,
} from "./Game.styles";

function Game({
  timeLeft,
  score,
  successCount,
  failCount,
  message,
  isPlaying,
  isGameOver,
  activeTarget,
  moleImg,
  bombImg,
  hitMoleImg,
  onStartGame,
  onStopGame,
  onClickHole,
  onCloseModal,
}) {
  const targetImageMap = {
    mole: moleImg,
    bomb: bombImg,
    hit: hitMoleImg,
  };

  const targetAltMap = {
    mole: "두더지",
    bomb: "폭탄",
    hit: "맞은 두더지",
  };

  const targetImage = targetImageMap[activeTarget.type];
  const targetAlt = targetAltMap[activeTarget.type];

  return (
    <>
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
              <StatusLabel type="success">성공</StatusLabel>
              <strong>{successCount}</strong>
            </Card>

            <Card>
              <StatusLabel type="danger">실패</StatusLabel>
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
              <GameButton onClick={onStartGame}>
                <GameButtonText type="success">시작</GameButtonText>
              </GameButton>
              <GameButton onClick={onStopGame}>
                <GameButtonText type="danger">중단</GameButtonText>
              </GameButton>
            </ButtonGroup>
          </GameToolbar>

          <Board>
            {[0, 1, 2, 3].map((index) => (
              <Hole key={index} onClick={() => onClickHole(index)}>
                {isPlaying &&
                  activeTarget.index === index &&
                  targetImage && (
                    <TargetImage src={targetImage} alt={targetAlt} />
                  )}
              </Hole>
            ))}
          </Board>
        </GamePanel>
      </GameLayout>

      {isGameOver &&
        createPortal(
          <ModalOverlay>
            <ModalBox>
              <ModalTitle>게임 종료!</ModalTitle>
              <ModalScore>최종 점수: {score}점</ModalScore>
              <ModalButton onClick={onCloseModal}>확인</ModalButton>
            </ModalBox>
          </ModalOverlay>,
          document.body,
        )}
    </>
  );
}

export default Game;
