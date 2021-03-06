import styled from 'styled-components';

import { Box } from '~/styles/grids';
import Media, { windows } from '~/styles/media';
import { backgroundColor, primaryTextColor } from '~/styles/colors';

export const Container = styled(Box)`
  position: relative;
  padding-bottom: 180px;

  > span {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 500px;

    background: ${primaryTextColor};
    color: ${backgroundColor};

    margin: 80px auto;
    border-radius: 8px;

    h1 {
      font-size: 2.25rem;
      margin-top: 10px;
    }

    h2 {
      margin-bottom: 10px;
      font-weight: normal;
    }
  }

  section + span {
    margin-top: 170px;
  }

  section {
    position: relative;

    &::before {
      content: '';
      position: absolute;

      width: 20px;
      height: 20px;
      border: 5px solid ${primaryTextColor};
      border-radius: 50%;

      top: -30px;
      left: calc(50% - 15px);

      background: ${backgroundColor};
      z-index: -1;
    }

    &::after {
      content: '';
      position: absolute;

      width: 5px;
      height: calc(100% + 30px);
      border-radius: 2.5px;

      top: -30px;
      left: calc(50% - 2.5px);

      background: ${primaryTextColor};
      z-index: -2;
    }

    @media (max-width: ${windows.smallDesktop}px) and (min-width: 621px) {
      &::before {
        left: calc(50% - 15px - 145px);
      }

      &::after {
        left: calc(50% - 2.5px - 145px);
      }
    }
  }

  ${Media.bigPhone`
      section::before,
      section::after {
        top: -60px;
      }

      > span {
        width: calc(100% - 30px);
        max-width: 400px;

        h1 {
          font-size: 1.8rem;
        }

        h2 {
          font-size: 1.4rem;
        }
      }
    `}
`;
