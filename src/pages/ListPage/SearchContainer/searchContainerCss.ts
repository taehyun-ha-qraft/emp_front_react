import { css } from '@emotion/react';

export default {
  container: css`
    height: 44px;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;
    margin-top: 17px;
  `,
  searchInput: css`
    width: 510px;
    height: inherit;
    padding-left: 16px;
    background-color: #ffffff;
    border: 0.5px solid #c4c4c4;
    border-radius: 6px;
    margin-right: 10px;
    background-image: url('asset/bx-search.png');
    background-size: 24px 24px;
    background-position: center right 13px;
    background-repeat: no-repeat;

    &::placeholder {
      color: #c0c5ee;
    }
  `,
  filter: css`
    z-index: 2;

    .inner-input.open-filter-board {
      border-radius: 6px 6px 0 0 !important;
    }

    .inner-input {
      width: 427px;
      margin-right: 5px;
      display: flex;
      align-items: center;
      border: 0.5px solid #c4c4c4;
      border-radius: 6px;
      overflow: hidden;
      background-color: #ffffff;

      input {
        flex-grow: 1;
        height: 42px;
        padding-left: 18px;
        background-color: #ffffff;
        border: none;
      }

      input::placeholder {
        color: #c0c5ee;
      }

      img {
        margin-right: 7px;
      }
    }

    .option-board {
      width: 427px;
      border-radius: 0 0 6px 6px;
      background-color: #ffffff;
      border: 0.5px solid #c4c4c4;
      border-top: 0;

      .tags-container {
        min-height: 36px;
        border-bottom: 0.2px solid #c4c4c4;
        padding: 7px 11px 6px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px 7px;

        .tag {
          background-color: #6c7093;
          font-family: 'Noto Sans KR';
          font-style: normal;
          font-weight: 600;
          font-size: 11px;
          line-height: 15px;
          color: #ffffff;
          padding: 3px 5px 4px 9px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 7px;
          cursor: pointer;
        }
      }

      .checklist-wrapper {
        display: flex;
        flex-wrap: wrap;
        padding: 8px 11px;
        gap: 6px 0;
        max-height: 186px;
        overflow-y: scroll;

        .check-block {
          width: 128px;
          font-family: 'Noto Sans KR';
          font-style: normal;
          font-weight: 500;
          font-size: 11px;
          line-height: 15px;
          color: #5b5b5b;
          display: flex;
          align-items: center;
          gap: 10.56px;
        }
      }
      .checklist-wrapper::-webkit-scrollbar {
        width: 8px;
      }
      .checklist-wrapper::-webkit-scrollbar-thumb {
        border: 3px solid transparent;
        background-color: #2f3b43;
        background-clip: content-box;
        border-radius: 100px;
      }
      .checklist-wrapper::-webkit-scrollbar-track {
        border: 3px solid transparent;
        background-color: #ececec;
        background-clip: content-box;
        border-radius: 100px;
        margin-top: 5px;
        margin-bottom: 6px;
      }
    }
  `,
  filterApplyButton: css`
    width: 85px;
    background-color: #6c7093;
    color: #ffffff;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    margin-right: 16px;
    border-radius: 6px;
    padding: 10px 19px 13px 18px;
  `,

  selectWrapper: css`
    position: relative;
    width: 180px;
    height: inherit;
    margin-right: 9px;
    cursor: pointer;

    .label {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      height: inherit;
      padding-left: 21px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 18px;
      color: #5b5b5b;
      border-radius: 6px;
      border: 0.5px solid #c4c4c4;
      background-color: #ffffff;

      .select-arrow {
        position: absolute;
        top: 16px;
        right: 15px;
        width: 0;
        height: 0;
        pointer-events: none;
        border-style: solid;
        border-width: 8px 5px 0 5px;
        border-color: #999 transparent transparent transparent;
      }
    }
    .label.open-sort-board {
      border-radius: 6px 6px 0 0;
    }

    .option-list {
      position: absolute;
      left: 0;
      width: 100%;
      background: #ffffff;
      list-style-type: none;
      padding: 0;
      border-radius: 0 0 6px 6px;
      overflow: hidden;
      transition: 0.3s ease-in;
      border: 0.5px solid #c4c4c4;
      border-top: none;
      z-index: 2;

      .option-item {
        height: 44px;
        display: flex;
        align-items: center;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        color: rgba(91, 91, 91, 0.7);
        padding: 8px 21px;
        background-color: #ffffff;
      }

      .option-item:hover {
        background: rgba(196, 196, 196, 0.15);
        color: rgba(91, 91, 91, 1);
      }
    }
  `,
  sortButton: css`
    background-color: #6c7093;
    border-radius: 6px;
    padding: 9px 7px 8px 4px;

    img {
      width: 27px;
      height: 27px;
    }
  `,
};
