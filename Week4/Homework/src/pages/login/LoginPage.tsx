import { useNavigate } from "react-router";
import {
  PageContainer,
  LoginForm,
  Title,
  Label,
  Input,
  LoginButton,
  SignupButton,
} from "./LoginPage_css";

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
