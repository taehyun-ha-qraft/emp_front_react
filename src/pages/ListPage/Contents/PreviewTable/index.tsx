import previewTableCss from './previewTableCss';

export type PreviewTableData = {
  title: string;
  lastUpdate: string;
  rows: {
    index: string;
    rebalancedOn: null;
    updateAsOf: string;
    inceptionDate: string;
    '1m': string;
    '3m': string;
    '6m': string;
    '1y': string;
    '3y': string;
    '5y': string;
    ytd: string;
    itd: string;
  };
};

type PreviewTableProps = {
  tableData: PreviewTableData;
};
const PreviewTable = ({ tableData }: PreviewTableProps) => {
  const { title, lastUpdate, rows } = tableData;

  return (
    <div css={previewTableCss.container}>
      <p className="preview-table-header">
        <span className="product-name">{title}</span>
        <span className="last-update">Last update : {lastUpdate}</span>
      </p>
      {createTable(rows)}
    </div>
  );
};

export default PreviewTable;

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
