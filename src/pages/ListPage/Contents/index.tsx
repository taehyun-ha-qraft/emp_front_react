import React from 'react';
import contentsCss from './contentsCss';
import { useInternalRouter } from '@pages/routing';
import PreviewTable, { PreviewTableData } from './PreviewTable';
import PreviewChart from './PreviewChart';
import { css } from '@emotion/react';

type ContentsProps = {
  listData: {
    portfolioId: string;
    tableData: PreviewTableData;
    chartData: number[][];
  }[];
};
const Contents = ({ listData }: ContentsProps) => {
  const router = useInternalRouter();

  const goDetail = (portfolioId: string, headerText: string) => {
    router.push(`/emp/list/${portfolioId}`, { state: { headerText } });
  };

  return (
    <div css={contentsCss.contents} className="contents">
      {listData.map((rowData) => {
        const { portfolioId, tableData, chartData } = rowData;
        return (
          <div key={portfolioId} css={contentsCss.row}>
            <div className="col1" onClick={() => goDetail(portfolioId, tableData.title)}>
              <PreviewTable tableData={rowData.tableData} />
            </div>
            <div id="chart_test" className="col2" onClick={() => goDetail(portfolioId, tableData.title)}>
              <PreviewChart
                chartData={chartData}
                containerCss={css`
                  width: 100%;
                  height: 100%;
                `}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contents;
