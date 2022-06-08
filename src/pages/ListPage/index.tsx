import React, { useEffect, useState } from 'react';
import SearchContainer from './SearchContainer';
import Contents from './Contents';
import { getPreviewChartData } from './Contents/PreviewChart/getPreviewChartData';

const ListPage = () => {
  const [listData, setListData] = useState<any>();

  useEffect(() => {
    // fetch rowData
    setListData(LIST_DATA);
  }, []);

  return (
    <>
      <SearchContainer />
      {listData && <Contents listData={listData} />}
    </>
  );
};

export default ListPage;

const LIST_DATA = [
  {
    portfolioId: 'HANALIFE_0',
    tableData: {
      title: 'HANALIFE_0. 하나생명 AI글로벌주식혼합60형 (MP)',
      lastUpdate: '2021-02-15',
      rows: {
        index: '299.19▲ 0.61(0.32%)',
        rebalancedOn: null,
        updateAsOf: '2022-02-16',
        inceptionDate: '2008-03-28',
        '1m': '-3.13%',
        '3m': '-4.41%',
        '6m': '0.35%',
        '1y': '6.54%',
        '3y': '42.00%',
        '5y': '58.32%',
        ytd: '-4.90%',
        itd: '97.90%',
      },
    },
    chartData: getPreviewChartData(),
  },
  {
    portfolioId: 'HANALIFE_1',
    tableData: {
      title: 'HANALIFE_1. 하나생명 AI글로벌주식혼합60형 (MP)',
      lastUpdate: '2021-02-15',
      rows: {
        index: '299.19▲ 0.61(0.32%)',
        rebalancedOn: null,
        updateAsOf: '2022-02-16',
        inceptionDate: '2008-03-28',
        '1m': '-3.13%',
        '3m': '-4.41%',
        '6m': '0.35%',
        '1y': '6.54%',
        '3y': '42.00%',
        '5y': '58.32%',
        ytd: '-4.90%',
        itd: '97.90%',
      },
    },
    chartData: getPreviewChartData(),
  },
  {
    portfolioId: 'HANALIFE_2',
    tableData: {
      title: 'HANALIFE_2. 하나생명 AI글로벌주식혼합60형 (MP)',
      lastUpdate: '2021-02-15',
      rows: {
        index: '299.19▲ 0.61(0.32%)',
        rebalancedOn: null,
        updateAsOf: '2022-02-16',
        inceptionDate: '2008-03-28',
        '1m': '-3.13%',
        '3m': '-4.41%',
        '6m': '0.35%',
        '1y': '6.54%',
        '3y': '42.00%',
        '5y': '58.32%',
        ytd: '-4.90%',
        itd: '97.90%',
      },
    },
    chartData: getPreviewChartData(),
  },
  {
    portfolioId: 'HANALIFE_3',
    tableData: {
      title: 'HANALIFE_3. 하나생명 AI글로벌주식혼합60형 (MP)',
      lastUpdate: '2021-02-15',
      rows: {
        index: '299.19▲ 0.61(0.32%)',
        rebalancedOn: null,
        updateAsOf: '2022-02-16',
        inceptionDate: '2008-03-28',
        '1m': '-3.13%',
        '3m': '-4.41%',
        '6m': '0.35%',
        '1y': '6.54%',
        '3y': '42.00%',
        '5y': '58.32%',
        ytd: '-4.90%',
        itd: '97.90%',
      },
    },
    chartData: getPreviewChartData(),
  },
  {
    portfolioId: 'HANALIFE_4',
    tableData: {
      title: 'HANALIFE_4. 하나생명 AI글로벌주식혼합60형 (MP)',
      lastUpdate: '2021-02-15',
      rows: {
        index: '299.19▲ 0.61(0.32%)',
        rebalancedOn: null,
        updateAsOf: '2022-02-16',
        inceptionDate: '2008-03-28',
        '1m': '-3.13%',
        '3m': '-4.41%',
        '6m': '0.35%',
        '1y': '6.54%',
        '3y': '42.00%',
        '5y': '58.32%',
        ytd: '-4.90%',
        itd: '97.90%',
      },
    },
    chartData: getPreviewChartData(),
  },
  {
    portfolioId: 'HANALIFE_5',
    tableData: {
      title: 'HANALIFE_4. 하나생명 AI글로벌주식혼합60형 (MP)',
      lastUpdate: '2021-02-15',
      rows: {
        index: '299.19▲ 0.61(0.32%)',
        rebalancedOn: null,
        updateAsOf: '2022-02-16',
        inceptionDate: '2008-03-28',
        '1m': '-3.13%',
        '3m': '-4.41%',
        '6m': '0.35%',
        '1y': '6.54%',
        '3y': '42.00%',
        '5y': '58.32%',
        ytd: '-4.90%',
        itd: '97.90%',
      },
    },
    chartData: getPreviewChartData(),
  },
  {
    portfolioId: 'HANALIFE_6',
    tableData: {
      title: 'HANALIFE_4. 하나생명 AI글로벌주식혼합60형 (MP)',
      lastUpdate: '2021-02-15',
      rows: {
        index: '299.19▲ 0.61(0.32%)',
        rebalancedOn: null,
        updateAsOf: '2022-02-16',
        inceptionDate: '2008-03-28',
        '1m': '-3.13%',
        '3m': '-4.41%',
        '6m': '0.35%',
        '1y': '6.54%',
        '3y': '42.00%',
        '5y': '58.32%',
        ytd: '-4.90%',
        itd: '97.90%',
      },
    },
    chartData: getPreviewChartData(),
  },
];
