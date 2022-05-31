// import './previewTable.scss';
import previewTableCss from './previewTableCss';

const TABLE_DATA = {
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
};

const createTable = (data: any) => {
  return (
    <table>
      <tbody>
        <tr>
          <th className="preview-col1">Index</th>
          <td className="preview-col2">{data['index']}</td>
          <th className="preview-col3">1M</th>
          <td className="percent-view preview-col4">{data['1m']}</td>
          <th className="preview-col5">3M</th>
          <td className="percent-view">{data['3m']}</td>
        </tr>
        <tr>
          <th className="preview-col1">Rebalanced on</th>
          <td className="preview-col2">{data['rebalancedOn']}</td>
          <th className="preview-col3">6M</th>
          <td className="percent-view preview-col4">{data['6m']}</td>
          <th className="preview-col5">1Y</th>
          <td className="percent-view">{data['1y']}</td>
        </tr>
        <tr>
          <th className="preview-col1">Update as of</th>
          <td className="preview-col2">{data['updateAsOf']}</td>
          <th className="preview-col3">3Y</th>
          <td className="percent-view preview-col4">{data['3y']}</td>
          <th className="preview-col5">5Y</th>
          <td className="percent-view">{data['5y']}</td>
        </tr>
        <tr>
          <th className="preview-col1">Inception Date</th>
          <td className="preview-col2">{data['inceptionDate']}</td>
          <th className="preview-col3">YTD</th>
          <td className="percent-view preview-col4">{data['ytd']}</td>
          <th className="preview-col5">ITD</th>
          <td className="percent-view">{data['itd']}</td>
        </tr>
      </tbody>
    </table>
  );
};

const PreviewTable = () => {
  return (
    <div css={previewTableCss.container}>
      <p className="preview-table-header">
        <span className="product-name">HANALIFE_2. 하나생명 AI글로벌주식혼합60형 (MP)</span>
        <span className="last-update">Last update : 2021-02-15</span>
      </p>
      {createTable(TABLE_DATA)}
    </div>
  );
};

export default PreviewTable;
