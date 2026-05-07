import { useNavigate } from "react-router";
import {
  PageContainer,
  SignupForm,
  Title,
  Label,
  Select,
  LoginText,
  Input,
  LoginButton,
  SignupButton,
} from "./SignupPage_css";

function SignupPage() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <SignupForm>
        <Title>회원가입</Title>

        <Label htmlFor="username">아이디</Label>
        <Input id="username" placeholder="아이디를 입력해 주세요" />

        <Label htmlFor="password">비밀번호</Label>
        <Input
          id="password"
          type="password"
          placeholder="비밀번호를 입력해 주세요"
        />

        <Label htmlFor="name">이름</Label>
        <Input id="name" placeholder="이름을 입력해 주세요" />

        <Label htmlFor="email">이메일</Label>
        <Input id="email" type="email" placeholder="이메일을 입력해 주세요" />

        <Label htmlFor="age">나이</Label>
        <Input id="age" type="number" placeholder="나이를 입력해 주세요" />

        <Label htmlFor="part">파트</Label>
        <Select id="part" defaultValue="web">
          <option value="web">웹</option>
          <option value="server">서버</option>
          <option value="design">디자인</option>
        </Select>

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
