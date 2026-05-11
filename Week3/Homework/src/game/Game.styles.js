import styled from "@emotion/styled";

export const GameLayout = styled.section`
  display: grid;
  grid-template-columns: 26.4rem 1fr;
  align-items: stretch;
  gap: 2.8rem;
  margin-top: 2.8rem;
`;

export const StatusPanel = styled.aside`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1.2fr;
  gap: 1.6rem;
  height: 100%;
`;

export const Card = styled.div`
  border-radius: 1.6rem;
  background-color: var(--color-panel-bg);
  padding: 2.4rem;
  text-align: center;
  color: var(--color-primary-dark);

  p {
    margin: 0 0 0.8rem;
    font-size: 1.6rem;
  }

  strong {
    font-size: 2.4rem;
  }
`;

export const CountRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.6rem;
`;

export const StatusLabel = styled.p`
  color: ${({ type }) =>
    type === "success" ? "var(--color-success)" : "var(--color-danger)"};
`;

export const MessageCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GamePanel = styled.section`
  min-height: 56rem;
  border-radius: 1.6rem;
  background-color: var(--color-panel-bg);
  padding: 2.4rem;
`;

export const GameToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`;

export const LevelSelect = styled.select`
  padding: 0.8rem 1.4rem;
  border: 1px solid var(--color-border);
  border-radius: 1.6rem;
  background-color: var(--color-white);
  color: var(--color-primary);
  font-size: 1.6rem;
  cursor: pointer;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const GameButton = styled.button`
  padding: 0.8rem 1.4rem;
  border: 1px solid var(--color-border);
  border-radius: 1.6rem;
  background-color: var(--color-white);
  color: var(--color-primary);
  cursor: pointer;
`;

export const GameButtonText = styled.span`
  color: ${({ type }) =>
    type === "success" ? "var(--color-success)" : "var(--color-danger)"};
`;

export const Board = styled.div`
  width: 42rem;
  height: 42rem;
  margin: 2.4rem auto 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
  padding: 4rem;
  border-radius: 1.6rem;
  background-color: var(--color-board-bg);
`;

export const Hole = styled.button`
  width: 100%;
  aspect-ratio: 1 / 1;
  border: none;
  border-radius: 50%;
  background-color: var(--color-hole);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const TargetImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(18, 56, 92, 0.55);
`;

export const ModalBox = styled.div`
  width: 28rem;
  padding: 2.8rem;
  border-radius: 1.8rem;
  background-color: var(--color-modal-bg);
  text-align: center;
  color: var(--color-text-dark);
  box-shadow: 0 20px 50px rgba(18, 56, 92, 0.25);
`;

export const ModalTitle = styled.h2`
  margin: 0 0 1.6rem;
  font-size: 2.2rem;
`;

export const ModalScore = styled.strong`
  display: block;
  margin-bottom: 2rem;
  font-size: 2.8rem;
  color: var(--color-primary);
`;

export const ModalButton = styled.button`
  padding: 1rem 1.8rem;
  border: none;
  border-radius: 999px;
  background-color: var(--color-primary);
  color: var(--color-white);
  cursor: pointer;
`;
