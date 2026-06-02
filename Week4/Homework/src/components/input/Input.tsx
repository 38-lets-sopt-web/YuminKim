import { InputContainer, Label, StyledInput } from "./Input.styled";

type InputProps = {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
}
export default Input;
