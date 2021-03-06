import { css } from '@emotion/react';
import { LEFT_NAV_WIDTH } from '@constants/size';

export default {
  container: css`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-x: hidden;
    min-width: 1527px;
  `,
  mainView: css`
    margin-left: ${LEFT_NAV_WIDTH}px;
    height: 100%;
    /* flex-grow: 1; */
    padding: 0 30px;
    padding-bottom: 40px;
    overflow-y: auto;

    display: flex;
    justify-content: center;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      border: 3px solid transparent;
      background-color: #2f3b43;
      background-clip: content-box;
      border-radius: 100px;
    }
    &::-webkit-scrollbar-track {
      border: 3px solid transparent;
      background-color: #ececec;
      background-clip: content-box;
      border-radius: 100px;
      margin-top: 5px;
      margin-bottom: 6px;
    }
  `,

  responsiveCenter: css`
    flex-grow: 1;
    width: 1200px;
    max-width: 1600px;
  `,
};
