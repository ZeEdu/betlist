import { FC } from "react";
import styled from "styled-components";
import { IMarket } from "../interfaces/IMarket";
import { TitleMixin } from "../styledComponents/Mixins";
import Selection from "./Selection";

const Section = styled.section`
  box-shadow: 0px -1px 0px rgba(17, 17, 26, 0.1);
`;
const Title = styled.h2`
  padding: 0.5rem;
  padding-top: 1rem;
  ${TitleMixin}
  text-align: center;
`;

const SelectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding: 0.5rem; */
`;

interface Props {
  market: IMarket;
  eventId: string;
}
const Market: FC<Props> = ({ market, eventId }) => {
  return (
    <Section>
      <header>
        <Title>{market.name}</Title>
      </header>
      <SelectionWrapper>
        {market.selections.map((selection) => (
          <Selection
            key={selection.id}
            selection={selection}
            marketId={market.id}
            eventId={eventId}
          >
            {selection.name}
          </Selection>
        ))}
      </SelectionWrapper>
    </Section>
  );
};

export default Market;
