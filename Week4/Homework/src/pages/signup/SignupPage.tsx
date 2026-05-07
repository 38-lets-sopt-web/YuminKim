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

  return (
    <PageContainer>
      <SignupForm>
        <Title>회원가입</Title>

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

        <Input id="name" label="이름" placeholder="이름을 입력해주세요." />

        <Input id="email" label="이메일" placeholder="이메일을 입력해주세요." />

        <Input id="age" label="나이" placeholder="나이를 입력해주세요." />

        <Input id="part" label="파트" placeholder="파트를 입력해주세요." />

        <SignupButton type="button">회원가입</SignupButton>

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
