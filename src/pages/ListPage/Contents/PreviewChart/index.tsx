import { useState } from 'react';
import EchartBase from '@components/EchartsBase';
import { css, SerializedStyles } from '@emotion/react';
import { EChartsOption, SeriesOption } from 'echarts';
import { ClipLoader } from 'react-spinners';
import { useEffect } from 'react';

const containerWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * 기본 Series 옵션.
 * */
export const defaultSeriesOpt: SeriesOption = {
  type: 'line',
  smooth: true,
  symbol: 'none',
};

const defaultOpt: EChartsOption = {
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
};

export interface Props {
  isLoading?: boolean;
  animation?: boolean;
  // colorSet?: [color: string, opacity?: number][];
  fontSize?: number;
  showSymbol?: boolean;
  title?: string;
  subtitle?: string;
  containerCss?: SerializedStyles;
  chartData?: number[][];
}

const PreviewChart = ({
  chartData = [],
  animation = true,
  // colorSet,
  fontSize,
  showSymbol = true,
  subtitle,
  title,
  containerCss,
  isLoading = false,
}: Props) => {
  const [opt, setOpt] = useState(defaultOpt);
  useEffect(() => {
    const _series = {
      ...defaultSeriesOpt,
      data: chartData,
    };
    setOpt({
      ...defaultOpt,
      series: _series,
    });
  }, [chartData]);

  return (
    <div css={[containerWrapper, containerCss]}>
      {isLoading && <ClipLoader />}
      {!isLoading && <EchartBase option={opt} />}
    </div>
  );
};

export default PreviewChart;
