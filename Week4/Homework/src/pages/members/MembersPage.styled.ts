import styled from "@emotion/styled";

export const PageContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }: any) => theme.color.primary};
`;

export const MainContainer = styled.main`
  width: min(48rem, calc(100% - 2rem));
  margin: 0 auto;
  padding: 5rem 0;
`;

export const Title = styled.h2`
  margin: 0 0 2.5rem;
  color: ${({ theme }: any) => theme.color.text};
  font-size: ${({ theme }: any) => theme.font.title};
  text-align: center;
`;

export const SearchArea = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
`;

export const SearchInput = styled.input`
  flex: 1;
  height: 2.75rem;
  padding: 0 0.875rem;
  border: 1px solid ${({ theme }: any) => theme.color.border};
  border-radius: 0.375rem;
  font-size: ${({ theme }: any) => theme.font.input};
`;

export const SearchButton = styled.button`
  width: 6rem;
  border: none;
  border-radius: 0.375rem;
  background: ${({ theme }: any) => theme.color.buttonBackground};
  color: ${({ theme }: any) => theme.color.buttonText};
  font-size: ${({ theme }: any) => theme.font.button};
  font-weight: 700;

  &:hover:not(:disabled) {
    background: ${({ theme }: any) => theme.color.buttonHover};
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

export const SectionTitle = styled.h3`
  margin: 0 0 1rem;
  color: ${({ theme }: any) => theme.color.text};
  font-size: 1.25rem;
`;

export const MemberList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const MemberCard = styled.li`
  padding: 1.25rem;
  border-radius: 0.5rem;
  background: ${({ theme }: any) => theme.color.white};
  cursor: pointer;

  &:hover {
    background: ${({ theme }: any) => theme.color.buttonBackground};
  }
`;

export const MemberName = styled.strong`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }: any) => theme.color.text};
  font-size: 1.125rem;
`;

export const MemberInfo = styled.p`
  margin: 0.25rem 0 0;
  color: #6d7c7c;
  font-size: ${({ theme }: any) => theme.font.caption};
`;

export const DetailBox = styled.section`
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }: any) => theme.color.white};
`;

export const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 0;
  color: ${({ theme }: any) => theme.color.text};
`;

export const EmptyText = styled.p`
  margin: 0;
  color: #6d7c7c;
  font-size: ${({ theme }: any) => theme.font.caption};
  text-align: center;
`;
