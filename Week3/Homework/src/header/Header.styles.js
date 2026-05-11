import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 2.4rem;
  border-radius: 1.6rem;
  color: var(--color-primary);
  background-color: var(--color-header-bg);
`;

export const Title = styled.h1`
  margin: 0;
  color: var(--color-primary);
  font-size: 5rem;
`;

export const TabButton = styled.button`
  padding: 0.8rem 1.4rem;
  border: 1px solid var(--color-border);
  border-radius: 1.6rem;
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--color-hole)" : "var(--color-white)"};
  color: var(--color-primary);
  cursor: pointer;
`;
