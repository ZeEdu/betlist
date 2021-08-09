import { FC } from "react";
import styled from "styled-components";

import { ReactComponent as MenuSVG } from "../assets/menu.svg";
import { ContainerMixin } from "../styledComponents/Mixins";

const Container = styled.div`
  ${ContainerMixin}
`;

const Wrapper = styled.nav`
  width: 100%;
  box-shadow: 0px 2px 0px rgba(17, 17, 26, 0.1);
`;
const Menu = styled.div`
  width: 2rem;
  height: 2rem;
  background: transparent;
  margin: 1rem;
  cursor: pointer;
`;
const MenuWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

interface Props {
  handleClick: () => void;
}

const Header: FC<Props> = ({ handleClick }) => {
  return (
    <Wrapper>
      <Container>
        <MenuWrapper>
          <Menu onClick={handleClick}>
            <MenuSVG />
          </Menu>
        </MenuWrapper>
      </Container>
    </Wrapper>
  );
};

export default Header;
