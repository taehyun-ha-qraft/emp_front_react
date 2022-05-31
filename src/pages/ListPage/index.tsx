import React, { useEffect, useState } from 'react';
import listCss from './listPageCss';
import Header from './Header';
import LeftNav from './LeftNav';
import { Outlet, useLocation } from 'react-router-dom';

import SearchContainer from './SearchContainer';
import Contents from './Contents';

const ListPage = () => {
  const location = useLocation();
  const [header, setHeader] = useState('This page shows all your funds');
  const isListPage = location.pathname === '/list' || location.pathname === '/list/';

  useEffect(() => {
    let _header = 'This page shows all your funds';
    if (!isListPage) {
      _header = 'asdsadsad';
    }
    setHeader(_header);
  }, [location]);
  return (
    <div css={listCss.container}>
      <Header description={header} />
      <LeftNav />
      <div css={listCss.mainView}>
        {isListPage && (
          <>
            <SearchContainer />
            <Contents />
          </>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default ListPage;
