import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 4px solid ${(props) => props.theme.spinnerColor};
  border-top-color: transparent;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  animation: ${spin} 0.6s linear infinite;
`;

const Loading = () => {
  return <Spinner />;
};

export default Loading;
