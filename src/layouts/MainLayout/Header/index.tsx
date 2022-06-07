import { useLocation } from 'react-router-dom';
import headerCss from './headerCss';

const Header = () => {
  const location = useLocation();
  const { state } = location as any;

  const headerText = state ? state.headerText : 'This is Home';
  return (
    <div css={headerCss.top}>
      <img css={headerCss.alarm} src={'/asset/alarm.png'} alt="alarm-icon" />
      <div css={headerCss.status}></div>
      <div css={headerCss.title}>QRAFT AI Asset Management System</div>
      <div css={headerCss.subtitle}>Transforming Investing with AI</div>
      <div css={headerCss.description}>{headerText}</div>
    </div>
  );
};
export default Header;
