import React, { useEffect } from 'react';
import detailCss from './detailCss';

import CumulativeReturn from './CumulativeReturn';
import BasicPerformance from './BasicPerformance';
import AllocationStatus from './AllocationStatus';
import DetailPerformance from './DetailPerformance';
import MDD from './MDD';
import PerformanceTable from './PerformanceTable';
import MonthlyPerfomanceTable from './MonthlyPerformanceTable';

const Detail = () => {
  return (
    <div css={detailCss.container}>
      <CumulativeReturn />
      <div css={detailCss.flexRow}>
        <BasicPerformance />
        <AllocationStatus />
      </div>
      <DetailPerformance />
      <MDD />
      <PerformanceTable />
      <MonthlyPerfomanceTable />
    </div>
  );
};

export default Detail;
