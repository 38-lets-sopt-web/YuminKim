import {
  RankingPanel,
  RankingHeader,
  RankingTitle,
  ResetButton,
  RankingTable,
  TableHead,
  TableCell,
  TableHeaderCell,
} from "./Ranking.styles";

function Ranking({ rankingRecords, onResetRanking }) {
  return (
    <RankingPanel>
      <RankingHeader>
        <RankingTitle>랭킹 보드</RankingTitle>
        <ResetButton onClick={onResetRanking}>기록 초기화</ResetButton>
      </RankingHeader>

      <RankingTable>
        <TableHead>
          <tr>
            <TableHeaderCell>순위</TableHeaderCell>
            <TableHeaderCell>레벨</TableHeaderCell>
            <TableHeaderCell>점수</TableHeaderCell>
            <TableHeaderCell>기록 시각</TableHeaderCell>
          </tr>
        </TableHead>

        <tbody>
          {rankingRecords.length === 0 ? (
            <tr>
              <TableCell colSpan={4}>
                아직 기록이 없습니다. 게임을 시작해보세요!
              </TableCell>
            </tr>
          ) : (
            rankingRecords.map((record, index) => (
              <tr key={record.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{record.level}</TableCell>
                <TableCell>{record.score}점</TableCell>
                <TableCell>{record.recordedAt}</TableCell>
              </tr>
            ))
          )}
        </tbody>
      </RankingTable>
    </RankingPanel>
  );
}

export default Ranking;
