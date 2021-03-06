import styled from 'styled-components';

import { Box } from '~/styles/grids';
import { primaryLightColor } from '~/styles/colors';

export const Container = styled(Box)`
  margin: 80px auto;
`;

export const Photos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;

  button {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 8px;

    img {
      width: 100%;
      height: 100%;
      cursor: zoom-in;
      transition: 0.6s;
      border-radius: 8px;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;

export const PopUp = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  margin: auto;

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.6);
  visibility: ${props => (props.opened ? 'visible' : 'hidden')};

  svg {
    width: 80px;
    height: 80px;

    margin: 0 30px;
    cursor: pointer;

    &:hover {
      transform: scale(1.4);
      transition: transform 0.2s;
      color: ${primaryLightColor};
    }

    &:active {
      transform: scale(1.2);
    }
  }

  span {
    > img {
      width: calc(280px * 2);
      height: calc(190px * 2);
      user-select: none;
    }

    > svg {
      position: absolute;
      top: 15px;
      right: 15px;
    }
  }
`;
