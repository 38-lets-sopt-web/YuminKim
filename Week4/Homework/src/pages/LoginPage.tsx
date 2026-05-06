import styled from "@emotion/styled";
import { useNavigate } from "react-router";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <LoginForm>
        <Title>SOPT MEMBERS</Title>

        <Label htmlFor="username">아이디</Label>
        <Input id="username" placeholder="아이디를 입력해주세요." />

        <Label htmlFor="password">비밀번호</Label>
        <Input
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />

        <LoginButton type="button">로그인</LoginButton>
        <SignupButton type="button" onClick={() => navigate("/signup")}>
          회원가입
        </SignupButton>
      </LoginForm>
    </PageContainer>
  );
}
export default LoginPage;

const PageContainer = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eaf2f9;
`;

const LoginForm = styled.section`
  width: 480px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  margin-bottom: 28px;
  color: #173a5e;
  font-size: 28px;
  text-align: center;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-size: 13px;
`;

const Input = styled.input`
  height: 40px;
  margin-bottom: 24px;
  padding: 0 14px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
`;

const LoginButton = styled.button`
  height: 42px;
  border: none;
  border-radius: 6px;
  background: #aeefff;
  color: white;
  cursor: pointer;

  &:hover {
    background: #79ddf0;
  }
`;

const SignupButton = styled.button`
  margin-top: 12px;
  border: none;
  background: transparent;
  color: #2563eb;
  cursor: pointer;
`;
