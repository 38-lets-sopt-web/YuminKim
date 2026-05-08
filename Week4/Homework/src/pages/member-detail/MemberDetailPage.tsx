import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getUser } from "../../apis/user";
import Header from "../../components/Header";
import {
  PageContainer,
  MainContainer,
  Title,
  DetailCard,
  DetailRow,
  BackButton,
} from "./MemberDetailPage.styled";

type MemberDetail = {
  loginId: string;
  name: string;
  email: string;
  age: number;
  part: string;
};

function MemberDetailPage() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [memberDetail, setMemberDetail] = useState<MemberDetail | null>(null);

  useEffect(() => {
    if (!userId) {
      alert("회원 ID가 없습니다.");
      navigate("/members");
      return;
    }

    const fetchMemberDetail = async () => {
      try {
        const data = await getUser(userId);
        setMemberDetail(data.data);
      } catch {
        alert("회원 정보를 불러오지 못했습니다.");
        navigate("/members");
      }
    };

    fetchMemberDetail();
  }, [navigate, userId]);

  const handleBackButtonClick = () => {
    navigate("/members");
  };

  return (
    <PageContainer>
      <Header name="회원" />

      <MainContainer>
        <Title>상세 정보</Title>

        {memberDetail && (
          <DetailCard>
            <DetailRow>
              <strong>아이디</strong>
              <span>{memberDetail.loginId}</span>
            </DetailRow>
            <DetailRow>
              <strong>이름</strong>
              <span>{memberDetail.name}</span>
            </DetailRow>
            <DetailRow>
              <strong>이메일</strong>
              <span>{memberDetail.email}</span>
            </DetailRow>
            <DetailRow>
              <strong>나이</strong>
              <span>{memberDetail.age}</span>
            </DetailRow>
            <DetailRow>
              <strong>파트</strong>
              <span>{memberDetail.part}</span>
            </DetailRow>
          </DetailCard>
        )}

        <BackButton type="button" onClick={handleBackButtonClick}>
          뒤로가기
        </BackButton>
      </MainContainer>
    </PageContainer>
  );
}

export default MemberDetailPage;
