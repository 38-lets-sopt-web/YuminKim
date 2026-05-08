import styled from "@emotion/styled";

export const PageContainer = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }: any) => theme.color.primary};
`;

export const LoginForm = styled.section`
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

export const LoginButton = styled.button`
  height: 42px;
  border: none;
  border-radius: 6px;
  background: ${({ theme }: any) => theme.color.buttonBackground};
  color: ${({ theme }: any) => theme.color.buttonText};
  font-size: ${({ theme }: any) => theme.font.button};

  &:hover {
    background: ${({ theme }: any) => theme.color.buttonHover};
  }
`;

export const SignupButton = styled.button`
  margin-top: 12px;
  border: none;
  background: transparent;
  color: ${({ theme }: any) => theme.color.text};
  font-size: ${({ theme }: any) => theme.font.button};
`;
