import styled from "@emotion/styled";

export const PageContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }: any) => theme.color.primary};
`;

export const MainContainer = styled.main`
  width: min(40rem, calc(100% - 2rem));
  margin: 0 auto;
  padding: 8rem 0 5rem;
`;

export const Title = styled.h2`
  margin: 0 0 2.5rem;
  color: ${({ theme }: any) => theme.color.text};
  font-size: ${({ theme }: any) => theme.font.title};
  text-align: center;
`;

export const InfoCard = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
  padding: 2rem;
  border-radius: 0.875rem;
  background: ${({ theme }: any) => theme.color.primary};
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoLabel = styled.strong`
  color: ${({ theme }: any) => theme.color.text};
  font-size: 1.375rem;
`;

export const InfoValue = styled.span`
  color: #8f9a9a;
  font-size: 1.25rem;
`;

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const UpdateButton = styled.button`
  height: 2.75rem;
  margin-top: 1rem;
  border: none;
  border-radius: 0.375rem;
  background: ${({ theme }: any) => theme.color.buttonBackground};
  color: ${({ theme }: any) => theme.color.buttonText};
  font-size: ${({ theme }: any) => theme.font.button};

  &:hover {
    background: ${({ theme }: any) => theme.color.buttonHover};
  }
`;
