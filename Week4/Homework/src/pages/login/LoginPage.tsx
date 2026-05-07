import { useNavigate } from "react-router";
import {
  PageContainer,
  LoginForm,
  Title,
  LoginButton,
  SignupButton,
} from "./LoginPage_css";
import Input from "../../components/input/Input";
function LoginPage() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <LoginForm>
        <Title>SOPT MEMBERS</Title>

        <Input
          id="username"
          label="아이디"
          placeholder="아이디를 입력해주세요."
        />

        <Input
          id="password"
          label="비밀번호"
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
