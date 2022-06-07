import { useInternalRouter } from '@pages/routing';
import leftNavCss from './leftNavCss';
import { useState, useEffect } from 'react';

const TAB_LIST = [
  { name: 'HOME', headerText: 'This is Home' },
  { name: 'LIST', headerText: 'This page shows all your funds' },
  { name: 'SETTING', headerText: 'This is Setting' },
  { name: 'CONTACT US', headerText: 'This is Contact Us' },
];
type URL_TYPES = 'home' | 'list' | 'setting' | 'contactus';

const LeftNav = () => {
  const router = useInternalRouter();
  const [selectedTab, setSelctedTab] = useState(0);

  const selectTabHandler = (i: number, name: string, headerText: string) => {
    setSelctedTab(i);
    const _name = name.replace(' ', '').toLocaleLowerCase() as URL_TYPES;
    router.push(`/emp/${_name}`, { state: { headerText: headerText } });
  };

  // 추후 API 함수로 대체
  const logout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };
  return (
    <div css={leftNavCss.container}>
      <img css={leftNavCss.logo} src={`/asset/logo2.png`} alt="QRAFT_LOGO" />
      <div css={leftNavCss.nav}>
        <div css={leftNavCss.profile}>
          <div css={leftNavCss.photo}>
            <img css={leftNavCss.resizePhoto} src={`/asset/joker.jpg`} alt="joker" />
          </div>
          <div css={leftNavCss.status} />
          <div css={leftNavCss.info}>
            <div className="name">Joker</div>
            <div className="position">Frontend</div>
          </div>
        </div>
        {TAB_LIST.map((tab, i) => (
          <NavTab
            key={tab.name}
            onSelect={() => selectTabHandler(i, tab.name, tab.headerText)}
            selected={selectedTab === i}
            imgSrc={NAV_ICON_SRC_LIST[tab.name]}
            text={tab.name}
          />
        ))}

        <div css={leftNavCss.bottom}>
          <img src={`/asset/bx-dots.png`} alt="edit my info" width="34px" height="34px" />
          <div className="logout" onClick={logout}>
            <img src={`/asset/bx-log-out.png`} alt="logout" className="logout-icon" />
            Log out
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;

const NAV_ICON_SRC_LIST: { [name: string]: string } = {
  HOME: '/asset/nav_icon/bx-home.png',
  LIST: '/asset/nav_icon/bx-list.png',
  SETTING: '/asset/nav_icon/bx-setting.png',
  'CONTACT US': '/asset/nav_icon/bx-help.png',
};
type NavTabProps = {
  imgSrc: string;
  text: string;
  selected: boolean;
  onSelect: () => void;
};
const NavTab = ({ imgSrc, text, selected, onSelect }: NavTabProps) => {
  return (
    <div css={leftNavCss.tab(selected)} onClick={onSelect}>
      <img src={imgSrc} alt={`nav_icon_${text}`} />
      {text}
    </div>
  );
};
