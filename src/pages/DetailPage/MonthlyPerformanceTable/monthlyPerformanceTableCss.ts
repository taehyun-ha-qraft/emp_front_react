import { css } from '@emotion/react';

export default {
  container: css`
    .table-container {
      background-color: #ffffff;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.13);
      border-radius: 10px;
      overflow: hidden;

      table {
        width: 100%;
        border-collapse: collapse;
        thead {
          tr.head1 {
            height: 35.05px;

            th {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 700;
              font-size: 12px;
              line-height: 15px;
              vertical-align: middle;
              color: #0d1559;
            }
          }

          tr.head2 {
            th {
              border: 0.5px solid #c4c4c4;
              border-bottom: 2px solid #c4c4c4;
              height: 27.26px;
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              font-size: 12px;
              line-height: 15px;
              color: #5b5b5b;
              vertical-align: middle;
            }
            th:first-child {
              border-left: none;
            }
            th:last-child {
              border-right: none;
            }
          }
        }

        tbody {
          tr {
            td {
              text-align: center;
              height: 31.5px;
              vertical-align: middle;
              border: 0.5px solid #c4c4c4;
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              font-size: 12px;
              line-height: 15px;
              color: #5b5b5b;
              border-bottom: none;
            }
            td.td-year {
              font-weight: 700;
            }
            td:first-child {
              border-left: none;
            }
            td:last-child {
              border-right: none;
            }
          }
        }
      }
    }
  `,
};
