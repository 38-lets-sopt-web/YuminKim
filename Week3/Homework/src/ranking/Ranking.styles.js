import styled from "@emotion/styled";

export const RankingPanel = styled.section`
  margin-top: 2.8rem;
  padding: 2.8rem;
  border-radius: 1.6rem;
  background-color: var(--color-panel-bg);
`;

export const RankingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;
`;

export const RankingTitle = styled.h2`
  margin: 0;
  color: var(--color-text-dark);
  font-size: 2.4rem;
`;

export const ResetButton = styled.button`
  padding: 1rem 1.6rem;
  border: none;
  border-radius: 999px;
  background-color: var(--color-reset);
  color: var(--color-white);
  cursor: pointer;
`;

export const RankingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  background-color: var(--color-page-bg);
`;

export const TableHead = styled.thead`
  background-color: var(--color-hole);
  color: var(--color-text-dark);
`;

export const TableCell = styled.td`
  padding: 1.4rem;
  border-bottom: 1px solid var(--color-table-border);
`;

export const TableHeaderCell = styled.th`
  padding: 1.4rem;
`;
