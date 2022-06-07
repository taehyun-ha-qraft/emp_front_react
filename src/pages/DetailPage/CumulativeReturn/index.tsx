import cumulativeReturnData from './cumulativeReturnData.json';
import DetailLabel from '@components/DetailLabel';
import EchartsBase from '@components/EchartsBase';
import { EChartsOption, SeriesOption } from 'echarts';
import cumulativeReturnCss from './cumulativeReturnCss';

const CumulativeReturn = () => {
  const option: EChartsOption = {
    dataset: [
      {
        id: 'dataset_raw',
        source: cumulativeReturnData,
      },
      {
        id: 'dataset_since_1950_of_germany',
        fromDatasetId: 'dataset_raw',
        transform: {
          type: 'filter',
          config: {
            and: [
              { dimension: 'Year', gte: 1950 },
              { dimension: 'Country', '=': 'Germany' },
            ],
          },
        },
      },
      {
        id: 'dataset_since_1950_of_france',
        fromDatasetId: 'dataset_raw',
        transform: {
          type: 'filter',
          config: {
            and: [
              { dimension: 'Year', gte: 1950 },
              { dimension: 'Country', '=': 'France' },
            ],
          },
        },
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      // nameLocation: "middle",
    },
    yAxis: {
      // name: "Income",
    },
    series: [
      {
        type: 'line',
        name: 'Germany',
        datasetId: 'dataset_since_1950_of_germany',
        showSymbol: false,
        encode: {
          x: 'Year',
          y: 'Income',
          itemName: 'Year',
          tooltip: ['Income'],
        },
        // animationDuration: 5000,
        animation: false,
      },
      {
        type: 'line',
        name: 'France',
        datasetId: 'dataset_since_1950_of_france',
        showSymbol: false,
        encode: {
          x: 'Year',
          y: 'Income',
          itemName: 'Year',
          tooltip: ['Income'],
        },
        animation: false,
      },
    ],
  };

  return (
    <div css={cumulativeReturnCss.container}>
      <div>
        <DetailLabel label="Cumulative Return" />
        <EchartsBase option={option} containerCss={cumulativeReturnCss.chartWrapper} />
      </div>
    </div>
  );
};

export default CumulativeReturn;
