import DetailLabel from '../../../components/DetailLabel';
import EchartsBase from '@components/EchartsBase';
import { EChartsOption, SeriesOption } from 'echarts';
import detailPerformanceCss from './detailPerformanceCss';

const DetailPerformance = () => {
  let base = +new Date(1988, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let data = [[base, Math.random() * 300]];
  for (let i = 1; i < 20000; i++) {
    let now = new Date((base += oneDay));
    data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
  }
  const option: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%'];
      },
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none',
        },
        restore: {},
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'time',
      boundaryGap: false,
      // type: "category",
      // data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: 'value',

      // min: 80,
      // max: 120,
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 20,
      },
      {
        start: 0,
        end: 20,
      },
    ],
    series: [
      {
        name: 'Fake Data',
        type: 'line',
        // smooth: true,
        symbol: 'none',
        // areaStyle: {},
        data: data,
        // data: [100, 100, 100, 100, 100, 100, 100],
        // animation: false,
      },
    ],
  };
  return (
    <section css={detailPerformanceCss.section}>
      <div css={detailPerformanceCss.container}>
        <div>
          <DetailLabel label="Detail Performance" />
          <div className="chart-container">
            <EchartsBase option={option} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default DetailPerformance;
