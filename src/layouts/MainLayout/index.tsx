import MainLayoutCss from './MainLayoutCss';
import Header from './Header';
import LeftNav from './LeftNav';
import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';

const MainLayout = () => {
  return (
    <div css={MainLayoutCss.container}>
      <Header />
      <LeftNav />
      <div css={MainLayoutCss.mainView}>
        <div css={MainLayoutCss.responsiveCenter}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
