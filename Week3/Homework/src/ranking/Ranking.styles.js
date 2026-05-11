import styled from "@emotion/styled";

export const RankingPanel = styled.section`
  margin-top: 2.8rem;
  padding: 2.8rem;
  border-radius: 1.6rem;
  background-color: #d8f7ff;
`;

export const RankingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;
`;

export const RankingTitle = styled.h2`
  margin: 0;
  color: #12385c;
  font-size: 2.4rem;
`;

export const ResetButton = styled.button`
  padding: 1rem 1.6rem;
  border: none;
  border-radius: 999px;
  background-color: #ff7c7c;
  color: #ffffff;
  cursor: pointer;
`;

export const RankingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  background-color: #effcff;
`;

export const TableHead = styled.thead`
  background-color: #9feefa;
  color: #12385c;
`;

export const TableCell = styled.td`
  padding: 1.4rem;
  border-bottom: 1px solid #bceef6;
`;

export const TableHeaderCell = styled.th`
  padding: 1.4rem;
`;
