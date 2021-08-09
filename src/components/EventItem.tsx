import React, { FC } from "react";
import styled from "styled-components";
import { IEvent } from "../interfaces/IEvent";
import { TitleMixin } from "../styledComponents/Mixins";
import Market from "./Market";

const Section = styled.section`
  width: 100%;
  margin-top: 32px;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition: 0.3s;
  @media (min-width: 992px) {
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
  }
`;

const Heading = styled.header`
  text-align: center;
  /* margin-bottom: 0.25rem; */
  /* box-shadow: 0px 1px 0px rgba(17, 17, 26, 0.1); */
`;
const Title = styled.h2`
  padding: 1rem 0;
  /* margin: 1rem auto; */
  font-weight: bold;
  ${TitleMixin}
`;

interface Props {
  event: IEvent;
}

const EventItem: FC<Props> = ({ event }) => {
  return (
    <Section>
      <Heading>
        <Title>{event.name}</Title>
      </Heading>
      {event.markets.map((market) => (
        <Market key={market.id} market={market} eventId={event.id} />
      ))}
    </Section>
  );
};

export default EventItem;
