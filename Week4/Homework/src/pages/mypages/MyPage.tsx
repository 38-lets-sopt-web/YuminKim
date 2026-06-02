import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getUser, updateUser } from "../../apis/user";
import Header from "../../components/Header";
import Input from "../../components/input/Input";
import {
  PageContainer,
  MainContainer,
  Title,
  InfoCard,
  InfoRow,
  InfoLabel,
  InfoValue,
  FormContainer,
  UpdateButton,
} from "./MyPage.styled";

function MyPage() {
  const navigate = useNavigate();
  const [myInfo, setMyInfo] = useState({
    loginId: "",
    part: "",
    name: "",
    email: "",
    age: "",
  });

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    const fetchMyInfo = async () => {
      try {
        const data = await getUser(userId);
        const user = data.data;

        setMyInfo({
          loginId: user.loginId,
          part: user.part,
          name: user.name,
          email: user.email,
          age: String(user.age),
        });
      } catch {
        alert("내 정보를 불러오지 못했습니다.");
      }
    };

    fetchMyInfo();
  }, [navigate]);

  const handleMyInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setMyInfo({
      ...myInfo,
      [id]: value,
    });
  };

  const handleUpdateButtonClick = async () => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    try {
      await updateUser(userId, {
        name: myInfo.name,
        email: myInfo.email,
        age: Number(myInfo.age),
      });

      alert("정보 수정에 성공했습니다.");
    } catch {
      alert("정보 수정에 실패했습니다.");
    }
  };

  return (
    <PageContainer>
      <Header name={myInfo.name} />

      <MainContainer>
        <Title>내 정보</Title>

        <InfoCard>
          <InfoRow>
            <InfoLabel>아이디</InfoLabel>
            <InfoValue>{myInfo.loginId}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>파트</InfoLabel>
            <InfoValue>{myInfo.part}</InfoValue>
          </InfoRow>
        </InfoCard>

        <FormContainer>
          <Input
            id="name"
            label="이름"
            placeholder=""
            value={myInfo.name}
            onChange={handleMyInfoChange}
          />
          <Input
            id="email"
            label="이메일"
            type="email"
            placeholder=""
            value={myInfo.email}
            onChange={handleMyInfoChange}
          />
          <Input
            id="age"
            label="나이"
            type="number"
            placeholder=""
            value={myInfo.age}
            onChange={handleMyInfoChange}
          />

          <UpdateButton type="button" onClick={handleUpdateButtonClick}>
            정보 수정
          </UpdateButton>
        </FormContainer>
      </MainContainer>
    </PageContainer>
  );
}

export default MyPage;
