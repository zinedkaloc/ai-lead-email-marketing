import React from "react";
import styled from "styled-components";

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const NotFoundStatus = styled.h1`
  font-size: 10rem;
  margin: 0;
`;

const NotFoundMessage = styled.p`
  font-size: 1.5rem;
  margin: 0;
`;

function NotFoundPage() {
  return (
    <NotFound>
      <NotFoundStatus>404</NotFoundStatus>
      <NotFoundMessage>Page not found</NotFoundMessage>
    </NotFound>
  );
}

export default NotFoundPage;
