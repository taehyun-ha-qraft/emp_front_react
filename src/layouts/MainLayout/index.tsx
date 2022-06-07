import MainLayoutCss from './MainLayoutCss';
import Header from './Header';
import LeftNav from './LeftNav';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div css={MainLayoutCss.container}>
      <Header />
      <LeftNav />
      <div css={MainLayoutCss.mainView}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
