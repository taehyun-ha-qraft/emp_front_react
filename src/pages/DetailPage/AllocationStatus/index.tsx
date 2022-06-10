import DetailLabel from '../../../components/DetailLabel';
import EchartsBase from '@components/EchartsBase';
import { EChartsOption } from 'echarts';
import { useState } from 'react';
import { css } from '@emotion/react';
import allocationStatusCss from './allocationStatusCss';
import polygon_image from '@asset/Polygon.png';

export const pieChartColorPalette = () => [
  '#0D1559',
  '#3A11AD',
  '#0500F8',
  '#2D31FA',
  '#033EB0',
  '#404CB6',
  '#3574EE',
  '#35B6EE',
  '#95BFFF',
  '#EEEEEE',
];
const option1: EChartsOption = {
  title: {
    text: 'Historical Weight\nChart',

    left: 0,
    textStyle: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 13,
      lineHeight: 16,
      color: '#868F97',
      height: 17,
    },
    subtextStyle: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 13,
      lineHeight: 16,
      color: '#000',
      height: 17,
    },
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    // left: "center",
    // bottom: 0,
    left: 'right',
    orient: 'vertical',
    type: 'scroll',
    top: 48,
  },
  color: pieChartColorPalette(),
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['30%', '55%'],

      avoidLabelOverlap: false,
      itemStyle: {
        // borderRadius: 6,
        borderColor: '#fff',
        borderWidth: 2,
        // color: "red",
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 10, name: '미국주식' },
        { value: 5, name: '채권' },
        { value: 3, name: '신흥국 주식1' },
        { value: 4, name: '신흥국 주식2' },
        { value: 5, name: '신흥국 주식3' },
        { value: 6, name: '신흥국 주식4' },
        { value: 7, name: '신흥국 주식5' },
        { value: 8, name: '신흥국 주식6' },
        { value: 9, name: '신흥국 주식7' },
        { value: 10, name: '신흥국 주식8' },
        // { value: 11, name: "신흥국 주식9" },
        // { value: 12, name: "신흥국 주식10" },
        // { value: 13, name: "신흥국 주식11" },
      ],
    },
  ],
};

const option2: EChartsOption = {
  title: {
    text: 'Weight Chart -',
    subtext: 'Febraury',
    left: 0,
    textStyle: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 13,
      lineHeight: 16,
      color: '#868F97',
      height: 17,
    },
    subtextStyle: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: 13,
      lineHeight: 0,
      color: '#000',
      height: 17,
    },
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    // left: "center",
    // bottom: 0,
    left: 'right',
    orient: 'vertical',
    type: 'scroll',
    top: 48,
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['30%', '55%'],

      avoidLabelOverlap: false,
      itemStyle: {
        // borderRadius: 6,
        borderColor: '#fff',
        borderWidth: 2,
        // color: "red",
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1, name: '미국주식' },
        { value: 2, name: '채권' },
        { value: 3, name: '신흥국 주식1' },
        { value: 4, name: '신흥국 주식2' },
        { value: 5, name: '신흥국 주식3' },
        { value: 6, name: '신흥국 주식4' },
        { value: 7, name: '신흥국 주식5' },
        { value: 8, name: '신흥국 주식6' },
        { value: 9, name: '신흥국 주식7' },
        { value: 10, name: '신흥국 주식8' },
        { value: 11, name: '신흥국 주식9' },
        { value: 12, name: '신흥국 주식10' },
        { value: 13, name: '신흥국 주식11' },
      ],
    },
  ],
};

const LIST_ITEM = [
  { id: 0, label: 'ETF LEVEL' },
  { id: 1, label: 'ASSETCLASS LEVEL' },
  // { id: 2, label: "LEVEL2" },
  // { id: 3, label: "LEVEL3" },
  // { id: 4, label: "LEVEL4" },
  // { id: 5, label: "LEVEL5" },
];
const AllocationStatus = () => {
  const [toggle, setToggle] = useState(false);
  // const [list, setList] = useState(LIST_ITEM);
  const [selected, setSelected] = useState(LIST_ITEM[0]);
  // const [unSelected, setUnSelected] = useState(LIST_ITEM[0]);

  const closeFilter = () => {
    setToggle(false);
  };

  const handleSelected = (item: any) => {
    setSelected(item);
    closeFilter();
  };

  return (
    <div css={allocationStatusCss.container}>
      <DetailLabel label="Allocation Status" />
      <div className="double-pie-wrapper">
        <div className="pie-box" style={{ paddingRight: 34 }}>
          <EchartsBase
            option={option1}
            containerCss={css`
              width: 387px;
              height: 100%;
            `}
          />
        </div>

        <div className="pie-box" style={{ paddingRight: 34 }}>
          <EchartsBase
            option={option2}
            containerCss={css`
              width: 387px;
              height: 100%;
            `}
          />
          <div className="toggle-select">
            <p
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              <span>{selected.label}</span>
              <img src={polygon_image} alt="polygon" />
            </p>

            {toggle &&
              LIST_ITEM.filter((el) => el.id !== selected.id).map((el) => {
                return (
                  <p
                    key={el.id}
                    onClick={() => {
                      handleSelected(el);
                    }}
                  >
                    <span>{el.label}</span>
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllocationStatus;
