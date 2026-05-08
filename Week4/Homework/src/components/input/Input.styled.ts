import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: ${({ theme }: any) => theme.font.label};
`;

export const StyledInput = styled.input`
  height: 40px;
  margin-bottom: 24px;
  padding: 0 14px;
  border: 1px solid ${({ theme }: any) => theme.color.border};
  border-radius: 6px;
  font-size: ${({ theme }: any) => theme.font.input};
`;
