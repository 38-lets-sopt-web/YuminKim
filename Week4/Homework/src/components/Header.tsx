import styled from "@emotion/styled";
import { useNavigate } from "react-router";

type HeaderProps = {
  name: string;
};

function Header({ name }: HeaderProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <HeaderInner>
        <BrandArea>
          <BrandTitle>SOPT MEMBERS</BrandTitle>
          <Greeting>안녕하세요, {name}님!</Greeting>
        </BrandArea>

        <NavList>
          <NavButton type="button" onClick={() => navigate("/mypage")}>
            내 정보
          </NavButton>
          <NavButton type="button" onClick={() => navigate("/members")}>
            회원 조회
          </NavButton>
          <NavButton type="button" onClick={handleLogout}>
            로그아웃
          </NavButton>
        </NavList>
      </HeaderInner>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  background: ${({ theme }: any) => theme.color.text};
  color: ${({ theme }: any) => theme.color.buttonText};
`;

const HeaderInner = styled.div`
  width: min(86rem, calc(100% - 3rem));
  height: 7.25rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BrandArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const BrandTitle = styled.h1`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 800;
`;

const Greeting = styled.p`
  margin: 0;
  font-size: ${({ theme }: any) => theme.font.button};
  font-weight: 700;
`;

const NavList = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.75rem;
`;

const NavButton = styled.button`
  border: none;
  background: transparent;
  color: inherit;
  font-size: ${({ theme }: any) => theme.font.button};
  font-weight: 800;
`;
