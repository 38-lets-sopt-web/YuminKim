import styled from "@emotion/styled";

export const PageContainer = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eaf2f9;
`;

export const SignupForm = styled.section`
  width: 480px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-bottom: 28px;
  color: #173a5e;
  font-size: 28px;
  text-align: center;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 13px;
`;

export const Select = styled.select`
  padding: 8px 14px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
`;

export const LoginText = styled.h1`
  margin-bottom: 28px;
  color: #173a5e;
  font-size: 15px;
  text-align: center;
`;

export const Input = styled.input`
  height: 40px;
  margin-bottom: 24px;
  padding: 0 14px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
`;

export const LoginButton = styled.button`
  margin-top: 12px;
  border: none;
  background: transparent;
  color: #2563eb;
  cursor: pointer;
`;

export const SignupButton = styled.button`
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
