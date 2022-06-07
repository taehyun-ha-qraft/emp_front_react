import { css } from '@emotion/react';
import { LEFT_NAV_WIDTH } from '@constants/size';

export default {
  container: css`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-x: hidden;
  `,
  mainView: css`
    margin-left: ${LEFT_NAV_WIDTH}px;
    flex-grow: 1;
    padding: 0 30px;
    padding-bottom: 40px;
    overflow: auto;
    min-width: 1260px;

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
};
