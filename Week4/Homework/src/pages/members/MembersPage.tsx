import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/Header";
import { getUser, getUsers } from "../../apis/user";
import {
  PageContainer,
  MainContainer,
  Title,
  SearchArea,
  SearchInput,
  SearchButton,
  SectionTitle,
  MemberList,
  MemberCard,
  MemberName,
  MemberInfo,
  DetailBox,
  DetailRow,
  EmptyText,
} from "./MembersPage.styled";

type Member = {
  id?: number;
  userId?: number;
  loginId?: string;
  name: string;
  email?: string;
  age: number;
  part: string;
};

function MembersPage() {
  const navigate = useNavigate();
  const [memberList, setMemberList] = useState<Member[]>([]);
  const [searchId, setSearchId] = useState("");
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  useEffect(() => {
    const fetchMemberList = async () => {
      try {
        const data = await getUsers();
        const members = data.data.users;

        setMemberList(members);
      } catch {
        alert("회원 목록을 불러오지 못했습니다.");
      }
    };

    fetchMemberList();
  }, []);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchId(event.target.value);
  };

  const handleSearchButtonClick = async () => {
    try {
      const data = await getUser(searchId);
      setSelectedMember(data.data);
    } catch {
      alert("회원을 조회하지 못했습니다.");
      setSelectedMember(null);
    }
  };

  const handleMemberCardClick = (userId: number) => {
    navigate(`/members/${userId}`);
  };

  const getMemberId = (member: Member) => {
    return member.userId ?? member.id;
  };

  return (
    <PageContainer>
      <Header name="회원" />

      <MainContainer>
        <Title>회원 조회</Title>

        <SearchArea>
          <SearchInput
            type="number"
            placeholder="회원 ID를 입력해주세요."
            value={searchId}
            onChange={handleSearchInputChange}
          />
          <SearchButton
            type="button"
            disabled={searchId === ""}
            onClick={handleSearchButtonClick}
          >
            조회
          </SearchButton>
        </SearchArea>

        {selectedMember && (
          <DetailBox>
            <SectionTitle>조회 결과</SectionTitle>
            <DetailRow>
              <strong>아이디</strong>
              <span>{selectedMember.loginId}</span>
            </DetailRow>
            <DetailRow>
              <strong>이름</strong>
              <span>{selectedMember.name}</span>
            </DetailRow>
            <DetailRow>
              <strong>이메일</strong>
              <span>{selectedMember.email}</span>
            </DetailRow>
            <DetailRow>
              <strong>나이</strong>
              <span>{selectedMember.age}</span>
            </DetailRow>
            <DetailRow>
              <strong>파트</strong>
              <span>{selectedMember.part}</span>
            </DetailRow>
          </DetailBox>
        )}

        <SectionTitle>전체 회원</SectionTitle>

        {memberList.length === 0 ? (
          <EmptyText>표시할 회원이 없습니다.</EmptyText>
        ) : (
          <MemberList>
            {memberList.map((member) => (
              <MemberCard
                key={getMemberId(member)}
                onClick={() => {
                  const memberId = getMemberId(member);

                  if (memberId) {
                    handleMemberCardClick(memberId);
                  }
                }}
              >
                <MemberName>{member.name}</MemberName>
                {member.loginId && <MemberInfo>{member.loginId}</MemberInfo>}
                <MemberInfo>{member.part}</MemberInfo>
              </MemberCard>
            ))}
          </MemberList>
        )}
      </MainContainer>
    </PageContainer>
  );
}

export default MembersPage;
