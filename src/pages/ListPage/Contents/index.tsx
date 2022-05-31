import React from 'react';
import { useInternalRouter } from '@pages/routing';

import contentsCss from './contentsCss';
import PreviewTable from './PreviewTable';
import PreviewChart from './PreviewChart';
import { css } from '@emotion/react';

const Contents = () => {
  const router = useInternalRouter();

  const renderRow = (portfolioId: string) => {
    const goDetail = () => router.push(`/list/${portfolioId}`);

    return (
      <div key={portfolioId} css={contentsCss.row}>
        <div className="col1" onClick={goDetail}>
          <PreviewTable />
        </div>
        <div id="chart_test" className="col2" onClick={goDetail}>
          <PreviewChart
            containerCss={css`
              width: 100%;
              height: 100%;
            `}
          />
        </div>
      </div>
    );
  };
  return (
    <div css={contentsCss.contents} className="contents">
      {[0, 1, 2, 3, 4, 5, 6, 7].map((el) => renderRow(String(el)))}
    </div>
  );
};

export default Contents;
