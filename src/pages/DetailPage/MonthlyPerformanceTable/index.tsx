import DetailLabel from '../../../components/DetailLabel';
import monthlyPerformanceTableCss from './monthlyPerformanceTableCss';

const MonthlyPerfomanceTable = () => {
  const DATA = [
    {
      Year: 2022,
      Total: -12.83,
      Infl: -11.08,
      Jan: -8.7,
      Feb: -4.5,
      Mar: null,
      Apr: null,
      May: null,
      Jun: null,
      Jul: null,
      Aug: null,
      Sep: null,
      Oct: null,
      Nov: null,
      Dec: null,
    },
    {
      Year: 2021,
      Total: +27.42,
      Infl: 18.98,
      Jan: 0.3,
      Feb: -0.1,
      Mar: 1.7,
      Apr: 5.9,
      May: -1.2,
      Jun: 6.3,
      Jul: 2.9,
      Aug: 4.2,
      Sep: -5.7,
      Oct: 7.9,
      Nov: 2.0,
      Dec: 1.2,
    },
    {
      Year: 2020,
      Total: +48.4,
      Infl: 18.98,
      Jan: 3.0,
      Feb: -6.1,
      Mar: -7.3,
      Apr: 15.0,
      May: 6.6,
      Jun: 6.3,
      Jul: 7.4,
      Aug: 10.9,
      Sep: -5.8,
      Oct: -3.0,
      Nov: 11.2,
      Dec: 4.9,
    },
    {
      Year: 2019,
      Total: +33.96,
      Infl: 35.89,
      Jan: 9.0,
      Feb: 3.0,
      Mar: 3.9,
      Apr: 5.5,
      May: -8.2,
      Jun: 7.6,
      Jul: 2.3,
      Aug: -1.9,
      Sep: 0.9,
      Oct: 4.4,
      Nov: 4.1,
      Dec: 3.9,
    },
    {
      Year: 2018,
      Total: -0.12,
      Infl: -1.99,
      Jan: 8.8,
      Feb: -4.3,
      Mar: -4.1,
      Apr: 0.5,
      May: 5.7,
      Jun: 1.1,
      Jul: 2.8,
      Aug: 5.8,
      Sep: -0.3,
      Oct: -8.6,
      Nov: -0.3,
      Dec: -8.7,
    },
    {
      Year: 2017,
      Total: 32.66,
      Infl: 29.9,
      Jan: 5.1,
      Feb: 4.4,
      Mar: 2.0,
      Apr: 2.7,
      May: 3.9,
      Jun: -2.3,
      Jul: 4.1,
      Aug: 2.1,
      Sep: -0.3,
      Oct: -4.6,
      Nov: 2.0,
      Dec: 0.6,
    },
    {
      Year: 2016,
      Total: 33.96,
      Infl: 35.89,
      Jan: 9.0,
      Feb: 3.0,
      Mar: 3.9,
      Apr: 5.5,
      May: -8.2,
      Jun: 7.6,
      Jul: 2.3,
      Aug: -1.9,
      Sep: 0.9,
      Oct: 4.4,
      Nov: 4.1,
      Dec: 3.9,
    },
  ];

  const createTable = (data: any) => {
    return (
      <table>
        <thead>
          <tr className="head1">
            <th colSpan={3}>Yearly Return(%)</th>
            <th colSpan={12}>Monthly Return(%)</th>
          </tr>
          <tr className="head2">
            <th>Year</th>
            <th>Total</th>
            <th>Infl.Adj</th>
            <th>Jan</th>
            <th>Feb</th>
            <th>Mar</th>
            <th>Apr</th>
            <th>May</th>
            <th>Jun</th>
            <th>Jul</th>
            <th>Aug</th>
            <th>Sep</th>
            <th>Oct</th>
            <th>Nov</th>
            <th>Dec</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el: any, index: number) => {
            const getBackgroundColor = (value: number) => {
              let color = '#F8FAFF';

              if (value > 0) {
                if (value >= 3) {
                  color = '#EAF2FF';
                }
              } else {
                color = '#FFF5F5';
                if (value <= -4) {
                  color = '#FFEAEA';
                }
              }
              if (!value) {
                color = '#ffffff';
              }
              return {
                backgroundColor: color,
              };
            };
            return (
              <tr key={index}>
                <td className="td-year">{el.Year}</td>
                <td style={{ color: el.Total < 0 ? '#D23E3E' : '#404CB6' }}>
                  {el.Total > 0 && '+'}
                  {el.Total?.toFixed(2)}
                </td>
                <td style={{ color: el.Infl < 0 ? '#D23E3E' : '#404CB6' }}>
                  {el.Infl > 0 && '+'}
                  {el.Infl?.toFixed(2)}
                </td>
                <td style={getBackgroundColor(el.Jan)}>{el.Jan?.toFixed(1)}</td>
                <td style={getBackgroundColor(el.Feb)}>{el.Feb?.toFixed(1)}</td>
                <td style={getBackgroundColor(el.Mar)}>{el.Mar?.toFixed(1)}</td>
                <td style={getBackgroundColor(el.Apr)}>{el.Apr?.toFixed(1)}</td>
                <td style={getBackgroundColor(el.May)}>{el.May?.toFixed(1)}</td>
                <td style={getBackgroundColor(el.Jun)}>{el.Jun?.toFixed(1)}</td>
                <td style={getBackgroundColor(el.Jul)}>{el.Jul?.toFixed(1)}</td>
                <td style={getBackgroundColor(el.Aug)}>{el.Aug?.toFixed(1)}</td>
                <td style={getBackgroundColor(el.Sep)}>{el.Sep?.toFixed(1)}</td>
                <td style={getBackgroundColor(el.Oct)}>{el.Oct?.toFixed(1)}</td>
                <td style={getBackgroundColor(el.Nov)}>{el.Nov?.toFixed(1)}</td>
                <td style={getBackgroundColor(el.Dec)}>{el.Dec?.toFixed(1)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  return (
    <section css={monthlyPerformanceTableCss.section}>
      {/* <div className="monthly-performance-container"> */}
      <div css={monthlyPerformanceTableCss.container}>
        <DetailLabel label="Monthly Performance Table (%, 샤프: x.x , 2자리수) lazyportfolio" />
        <div className="table-container">{createTable(DATA)}</div>
      </div>
    </section>
  );
};

export default MonthlyPerfomanceTable;
