import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Message = styled.p``;

const Error = () => {
  return (
    <Wrapper>
      <Message>Um erro ocorreu</Message>
    </Wrapper>
  );
};

export default Error;
