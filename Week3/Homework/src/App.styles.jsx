import styled from "@emotion/styled";

export const Page = styled.main`
  min-height: 100vh;
  background-color: #effcff;
  padding: 32px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 24px;
  border-radius: 16px;
  color: #309cac;
  background-color: #dff8ff;
`;

export const Title = styled.h1`
  margin: 0;
  color: #309cac;
  font-size: 40px;
`;

export const TabButton = styled.button`
  padding: 8px 14px;
  border: 1px solid #98d0d9;
  border-radius: 16px;
  background-color: #ffffff;
  color: #309cac;
  cursor: pointer;
`;

export const GameLayout = styled.section`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 24px;
  margin-top: 28px;
`;

export const StatusPanel = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Card = styled.div`
  border-radius: 16px;
  background-color: #d8f7ff;
  padding: 24px;
  text-align: center;
  color: #164673;
`;

export const CountRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const MessageCard = styled(Card)`
  min-height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GamePanel = styled.section`
  border-radius: 16px;
  background-color: #d8f7ff;
  padding: 24px;
`;

export const GameToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const LevelSelect = styled.select`
  padding: 8px 14px;
  border: 1px solid #98d0d9;
  border-radius: 16px;
  background-color: #ffffff;
  color: #309cac;
  font-size: 16px;
  cursor: pointer;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const GameButton = styled.button`
  padding: 8px 14px;
  border: 1px solid #98d0d9;
  border-radius: 16px;
  background-color: #ffffff;
  color: #309cac;
  cursor: pointer;
`;

export const Board = styled.div`
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

export const Hole = styled.button`
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
  width: 280px;
  padding: 28px;
  border-radius: 18px;
  background-color: #eaf7ff;
  text-align: center;
  color: #12385c;
  box-shadow: 0 20px 50px rgba(18, 56, 92, 0.25);
`;

export const ModalTitle = styled.h2`
  margin: 0 0 16px;
  font-size: 22px;
`;

export const ModalScore = styled.strong`
  display: block;
  margin-bottom: 20px;
  font-size: 28px;
  color: #309cac;
`;

export const ModalButton = styled.button`
  padding: 10px 18px;
  border: none;
  border-radius: 999px;
  background-color: #37bfd4;
  color: #ffffff;
  cursor: pointer;
`;
