import styled from "@emotion/styled";

export const PageContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }: any) => theme.color.primary};
`;

export const MainContainer = styled.main`
  width: min(40rem, calc(100% - 2rem));
  margin: 0 auto;
  padding: 5rem 0;
`;

export const Title = styled.h2`
  margin: 0 0 2.5rem;
  color: ${({ theme }: any) => theme.color.text};
  font-size: ${({ theme }: any) => theme.font.title};
  text-align: center;
`;

export const DetailCard = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 0.5rem;
  background: ${({ theme }: any) => theme.color.white};
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: ${({ theme }: any) => theme.color.text};
  font-size: ${({ theme }: any) => theme.font.button};
`;

export const BackButton = styled.button`
  width: 100%;
  height: 2.75rem;
  border: none;
  border-radius: 0.375rem;
  background: ${({ theme }: any) => theme.color.buttonBackground};
  color: ${({ theme }: any) => theme.color.buttonText};
  font-size: ${({ theme }: any) => theme.font.button};
  font-weight: 700;

  &:hover {
    background: ${({ theme }: any) => theme.color.buttonHover};
  }
`;
