import { useState } from "react";
import { useNavigate } from "react-router";
import { signin } from "../../apis/auth";
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
  const [loginForm, setLoginForm] = useState({
    loginId: "",
    password: "",
  });

  const handleLoginFormChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { id, value } = event.target;

    setLoginForm({
      ...loginForm,
      [id]: value,
    });
  };

  const handleLoginButtonClick = async () => {
    try {
      const data = await signin(loginForm);

      localStorage.setItem("userId", String(data.data.userId));
      navigate("/mypage");
    } catch {
      alert("로그인에 실패했습니다.");
    }
  };

  return (
    <PageContainer>
      <LoginForm>
        <Title>SOPT MEMBERS</Title>

        <Input
          id="loginId"
          label="아이디"
          placeholder="아이디를 입력해주세요."
          value={loginForm.loginId}
          onChange={handleLoginFormChange}
        />

        <Input
          id="password"
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={loginForm.password}
          onChange={handleLoginFormChange}
        />

        <LoginButton type="button" onClick={handleLoginButtonClick}>
          로그인
        </LoginButton>
        <SignupButton type="button" onClick={() => navigate("/signup")}>
          회원가입
        </SignupButton>
      </LoginForm>
    </PageContainer>
  );
}
export default LoginPage;
