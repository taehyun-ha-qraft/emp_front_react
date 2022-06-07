import DetailLabel from '@components/DetailLabel';
import performanceTableCss from './performanceTableCss';

const PerformanceTable = () => {
  const DATA = [
    {
      head: 'Return',
      '1M': 3,
      '3M': 0.01,
      '6M': 0.01,
      '1Y': 0.01,
      '3Y': 0.01,
      '5Y': 0.01,
      YTD: 0.01,
      ITD: 0.01,
    },
    {
      head: 'Sharp',
      '1M': 1.1,
      '3M': 0.01,
      '6M': 0.01,
      '1Y': 0.01,
      '3Y': 0.01,
      '5Y': 0.01,
      YTD: 0.01,
      ITD: 0.01,
    },
    {
      head: 'MDD',
      '1M': -20,
      '3M': 0.01,
      '6M': 0.01,
      '1Y': 0.01,
      '3Y': 0.01,
      '5Y': 0.01,
      YTD: 0.01,
      ITD: 0.01,
    },
    {
      head: 'Sortino',
      '1M': 1.1,
      '3M': 0.01,
      '6M': 0.01,
      '1Y': 0.01,
      '3Y': 0.01,
      '5Y': 0.01,
      YTD: 0.01,
      ITD: 0.01,
    },
    {
      head: 'Win rate',
      '1M': 45,
      '3M': 0.01,
      '6M': 0.01,
      '1Y': 0.01,
      '3Y': 0.01,
      '5Y': 0.01,
      YTD: 0.01,
      ITD: 0.01,
    },
  ];

  const createTable = (data: any) => {
    return (
      <table>
        <thead>
          <tr>
            <td className="space-start"></td>
            <th className="blank"></th>
            <th>1M</th>
            <th>3M</th>
            <th>6M</th>
            <th>1Y</th>
            <th>3Y</th>
            <th>5Y</th>
            <th>YTD</th>
            <th>ITD</th>
            <td className="space-end"></td>
          </tr>
        </thead>

        <tbody>
          {data.map((el: any, index: number) => (
            <tr key={index}>
              <td className="space-start"></td>
              <th>{el.head}</th>
              <td>{el['1M']}</td>
              <td>{el['3M']}</td>
              <td>{el['6M']}</td>
              <td>{el['1Y']}</td>
              <td>{el['3Y']}</td>
              <td>{el['5Y']}</td>
              <td>{el['YTD']}</td>
              <td>{el['ITD']}</td>
              <td className="space-end"></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  return (
    <section css={performanceTableCss.section}>
      <div css={performanceTableCss.container}>
        <DetailLabel label="Performace Table (%, 샤프: x.x , 2자리수)" />
        <div className="table-container">{createTable(DATA)}</div>
      </div>
    </section>
  );
};

export default PerformanceTable;
