import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  ${({ theme }) => theme.fontSizes.body};
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const InputField = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  border: 1px solid ${(props) => props.theme.borderColor};
`;

const Input = ({ label, name, type, value, onChange }) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputField
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={`Enter ${label}`}
      />
    </InputWrapper>
  );
};

export default Input;
