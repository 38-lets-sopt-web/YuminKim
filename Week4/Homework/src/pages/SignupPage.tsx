import styled from "@emotion/styled";
import { useNavigate } from "react-router";

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

const PageContainer = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eaf2f9;
`;

const SignupForm = styled.section`
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
const Select = styled.select`
  padding: 8px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
`;
const LoginText = styled.h1`
  margin-bottom: 28px;
  color: #173a5e;
  font-size: 15px;
  text-align: center;
`;
const Input = styled.input`
  height: 40px;
  margin-bottom: 24px;
  padding: 0 14px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
`;

const LoginButton = styled.button`
  margin-top: 12px;
  border: none;
  background: transparent;
  color: #2563eb;
  cursor: pointer;
`;

const SignupButton = styled.button`
  margin-top: 40px;
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
