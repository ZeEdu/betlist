import React, { FC } from "react";
import styled from "styled-components";
import { IEvent } from "../interfaces/IEvent";
import { TitleMixin } from "../styledComponents/Mixins";
import Market from "./Market";

const Section = styled.section`
  width: 100%;
  background: #1b2025;
  margin-top: 32px;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition: 0.3s;
`;

const Heading = styled.header`
  text-align: center;
`;
const Title = styled.h2`
  padding: 1rem 0;
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
