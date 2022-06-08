import DetailLabel from '../../../components/DetailLabel';
import EchartsBase from '@components/EchartsBase';
import { EChartsOption, SeriesOption } from 'echarts';
import { getMddData } from './getMddData';
import mddCss from './mddCss';

const MDD = () => {
  const mddData = getMddData();

  const option: EChartsOption = {
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'time',
      boundaryGap: false,
    },
    yAxis: {
      type: 'value',
      // boundaryGap: true,
      // max: 0,
      // min: -100,
      axisLabel: {
        formatter: '{value}%',
      },
    },

    series: [
      {
        name: 'MDD',
        type: 'line',
        smooth: true,
        symbol: 'none',
        areaStyle: {},
        data: mddData,
        // data: data,
      },
    ],
  };

  return (
    <div css={mddCss.container}>
      <DetailLabel label="MDD" />
      <EchartsBase option={option} containerCss={mddCss.chartWrapper} />
    </div>
  );
};

export default MDD;
