import styled from "@emotion/styled";

export const RankingPanel = styled.section`
  margin-top: 28px;
  padding: 28px;
  border-radius: 16px;
  background-color: #d8f7ff;
`;

export const RankingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const RankingTitle = styled.h2`
  margin: 0;
  color: #12385c;
  font-size: 24px;
`;

export const ResetButton = styled.button`
  padding: 10px 16px;
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
  padding: 14px;
  border-bottom: 1px solid #bceef6;
`;

export const TableHeaderCell = styled.th`
  padding: 14px;
`;
