import DetailLabel from '@components/DetailLabel';
import basicPerformanceCss from './basicPerformanceCss';

const BasicPerformance = () => {
  return (
    <div css={basicPerformanceCss.container}>
      <DetailLabel label="Basic Performance" />
      <div className="overview-container">
        <p className="small-label">Overview</p>
        <div className="list">
          <p className="item-row">
            <span className="item-left">MP Code</span>
            <span className="item-right">UxWealth_1_1</span>
          </p>
          <p className="item-row">
            <span className="item-left">MP Name</span>
            <span className="item-right">UxWealth 60/40</span>
          </p>
          <p className="item-row">
            <span className="item-left">Initial Value</span>
            <span className="item-right">100</span>
          </p>
          <p className="item-row">
            <span className="item-left">Trading Cost</span>
            <span className="item-right">0.005%</span>
          </p>
          <p className="item-row">
            <span className="item-left">Start Date</span>
            <span className="item-right">2017-01-02</span>
          </p>
          <p className="item-row">
            <span className="item-left">Update Date</span>
            <span className="item-right">2022-02-11</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasicPerformance;
