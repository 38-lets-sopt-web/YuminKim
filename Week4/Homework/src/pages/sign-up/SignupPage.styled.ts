import styled from "@emotion/styled";

export const PageContainer = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }: any) => theme.color.primary};
`;

export const SignupForm = styled.section`
  width: 480px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-bottom: 28px;
  color: ${({ theme }: any) => theme.color.text};
  font-size: ${({ theme }: any) => theme.font.title};
  text-align: center;
`;

export const Select = styled.select`
  padding: 8px 14px;
  border: 1px solid ${({ theme }: any) => theme.color.border};
  border-radius: 6px;
  font-size: ${({ theme }: any) => theme.font.input};
`;

export const LoginText = styled.h1`
  margin-bottom: 28px;
  color: ${({ theme }: any) => theme.color.text};
  font-size: ${({ theme }: any) => theme.font.caption};
  text-align: center;
`;

export const LoginButton = styled.button`
  margin-top: 12px;
  border: none;
  background: transparent;
  color: ${({ theme }: any) => theme.color.text};
  font-size: ${({ theme }: any) => theme.font.caption};
`;

export const SignupButton = styled.button`
  margin-top: 40px;
  height: 42px;
  border: none;
  border-radius: 6px;
  background: ${({ theme }: any) => theme.color.buttonBackground};
  color: white;
  font-size: ${({ theme }: any) => theme.font.button};

  &:hover {
    background: ${({ theme }: any) => theme.color.buttonHover};
  }
`;
