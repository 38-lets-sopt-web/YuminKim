import { useState } from "react";
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
  const [myInfo, setMyInfo] = useState({
    loginId: "",
    part: "",
    name: "",
    email: "",
    age: "",
  });

  const handleMyInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setMyInfo({
      ...myInfo,
      [id]: value,
    });
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

          <UpdateButton type="button">정보 수정</UpdateButton>
        </FormContainer>
      </MainContainer>
    </PageContainer>
  );
}

export default MyPage;
