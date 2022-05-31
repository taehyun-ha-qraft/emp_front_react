import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import headerCss from './headerCss';

type HeaderProps = {
  description?: string;
};
const Header = ({ description }: HeaderProps) => {
  // const Header = () => {

  return (
    <div css={headerCss.top}>
      <img css={headerCss.alarm} src={'/asset/alarm.png'} alt="alarm-icon" />
      <div css={headerCss.status}></div>
      <div css={headerCss.title}>QRAFT AI Asset Management System</div>
      <div css={headerCss.subtitle}>Transforming Investing with AI</div>
      <div css={headerCss.description}>{description}</div>
    </div>
  );
};
export default Header;
