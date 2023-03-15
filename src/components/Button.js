import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.buttonTextColor};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.buttonHoverColor};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: ${(props) => props.theme.buttonActiveColor};
  }
`;

export default Button;
