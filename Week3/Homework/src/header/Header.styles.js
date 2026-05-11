import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 2.4rem;
  border-radius: 1.6rem;
  color: #309cac;
  background-color: #dff8ff;
`;

export const Title = styled.h1`
  margin: 0;
  color: #309cac;
  font-size: 5rem;
`;

export const TabButton = styled.button`
  padding: 0.8rem 1.4rem;
  border: 1px solid #98d0d9;
  border-radius: 1.6rem;
  background-color: ${({ $isActive }) => ($isActive ? "#9feefa" : "#ffffff")};
  color: #309cac;
  cursor: pointer;
`;
