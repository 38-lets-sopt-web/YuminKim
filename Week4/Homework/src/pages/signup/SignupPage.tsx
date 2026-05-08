import { useState } from "react";
import { useNavigate } from "react-router";
import {
  PageContainer,
  SignupForm,
  Title,
  LoginText,
  LoginButton,
  SignupButton,
} from "./SignupPage_css";

import Input from "../../components/input/Input";

function SignupPage() {
  const navigate = useNavigate();
  const [signupForm, setSignupForm] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    age: "",
    part: "",
  });

  const handleSignupFormChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { id, value } = event.target;

    setSignupForm({
      ...signupForm,
      [id]: value,
    });
  };

  const handleSignupButtonClick = () => {
    console.log(signupForm);
    alert("회원가입에 성공했습니다!");
  };

  return (
    <PageContainer>
      <SignupForm>
        <Title>회원가입</Title>

        <Input
          id="username"
          label="아이디"
          placeholder="아이디를 입력해주세요."
          value={signupForm.username}
          onChange={handleSignupFormChange}
        />

        <Input
          id="password"
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={signupForm.password}
          onChange={handleSignupFormChange}
        />

        <Input
          id="name"
          label="이름"
          placeholder="이름을 입력해주세요."
          value={signupForm.name}
          onChange={handleSignupFormChange}
        />

        <Input
          id="email"
          label="이메일"
          type="email"
          placeholder="이메일을 입력해주세요."
          value={signupForm.email}
          onChange={handleSignupFormChange}
        />

        <Input
          id="age"
          label="나이"
          type="number"
          placeholder="나이를 입력해주세요."
          value={signupForm.age}
          onChange={handleSignupFormChange}
        />

        <Input
          id="part"
          label="파트"
          placeholder="파트를 입력해주세요."
          value={signupForm.part}
          onChange={handleSignupFormChange}
        />

        <SignupButton type="button" onClick={handleSignupButtonClick}>
          회원가입
        </SignupButton>

        <LoginText>
          이미 계정이 있나요?
          <LoginButton type="button" onClick={() => navigate("/login")}>
            로그인
          </LoginButton>
        </LoginText>
      </SignupForm>
    </PageContainer>
  );
}
export default SignupPage;
