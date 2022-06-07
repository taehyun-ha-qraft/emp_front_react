import { css } from '@emotion/react';

const labelStyle = css`
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #404cb6;
  margin-bottom: 5px;
`;
type DetailLabelProps = {
  label: string;
};
const DetailLabel = ({ label }: DetailLabelProps) => {
  return <p css={labelStyle}>{label}</p>;
};

export default DetailLabel;
