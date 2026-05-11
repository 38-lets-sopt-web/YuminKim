import { HeaderContainer, TabButton, Title } from "./Header.styles";

function Header({ activeTab, onChangeTab }) {
  return (
    <HeaderContainer>
      <Title>두더지 게임</Title>
      <TabButton
        type="button"
        $isActive={activeTab === "game"}
        onClick={() => onChangeTab("game")}
      >
        게임
      </TabButton>
      <TabButton
        type="button"
        $isActive={activeTab === "ranking"}
        onClick={() => onChangeTab("ranking")}
      >
        랭킹
      </TabButton>
    </HeaderContainer>
  );
}

export default Header;
