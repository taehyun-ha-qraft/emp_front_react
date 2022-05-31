import EchartBase from '@components/EchartsBase';
import { css, SerializedStyles } from '@emotion/react';
import { EChartsOption } from 'echarts';

const containerWrapper = css``;

let base = +new Date(1988, 9, 3);
let oneDay = 24 * 3600 * 1000;
let data = [[base, Math.random() * 300]];
for (let i = 1; i < 1000; i++) {
  let now = new Date((base += oneDay));
  data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
}

const option: EChartsOption = {
  grid: {
    top: '5%',
    bottom: '5%',
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    position: function (pt) {
      return [pt[0], '10%'];
    },
  },
  xAxis: {
    type: 'time',
    boundaryGap: false,
    // show: false,
  },
  yAxis: {
    type: 'value',
    // show: false,
  },
  series: [
    {
      data: data,
      type: 'line',
      smooth: true,
      symbol: 'none',
    },
  ],
};

export interface Props {
  // isLoading?: boolean;
  // animation?: boolean;
  // colorSet?: [color: string, opacity?: number][];
  // fontSize?: number;
  // showSymbol?: boolean;
  // title?: string;
  // subtitle?: string;
  containerCss?: SerializedStyles;
  // rowData?: { name: string; data: number[][] }[];
}

const PreviewChart = ({ containerCss }: Props) => {
  return (
    <div css={[containerWrapper, containerCss]}>
      {/* {!!isLoading && (
        <ClipLoader
          css={css`
            background: red;
          `}
        />
      )}
      {!isLoading && <EchartBase option={opt} />} */}
      <EchartBase option={option} />
    </div>
  );
};

export default PreviewChart;
