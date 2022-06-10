import { useInternalRouter } from '@pages/routing';
import leftNavCss from './leftNavCss';
import { useState } from 'react';
import logo2 from '@asset/logo2.png';
import joker from '@asset/joker.jpg';
import home_icon from '@asset/nav_icon/bx-home.png';
import list_icon from '@asset/nav_icon/bx-list.png';
import setting_icon from '@asset/nav_icon/bx-setting.png';
import contact_icon from '@asset/nav_icon/bx-help.png';
import dots_image from '@asset/bx-dots.png';
import logout_image from '@asset/bx-log-out.png';

const TAB_LIST = [
  { name: 'HOME', headerText: 'This is Home' },
  { name: 'LIST', headerText: 'This page shows all your funds' },
  { name: 'SETTING', headerText: 'This is Setting' },
  { name: 'CONTACT US', headerText: 'This is Contact Us' },
];
type URL_TYPES = 'home' | 'list' | 'setting' | 'contactus';

const LeftNav = () => {
  const router = useInternalRouter();
  const [selectedTab, setSelctedTab] = useState(Number(localStorage.getItem('currentTab')) || 0);

  const selectTabHandler = (i: number, name: string, headerText: string) => {
    setSelctedTab(i);
    localStorage.setItem('currentTab', String(i));
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
      <img css={leftNavCss.logo} src={logo2} alt="QRAFT_LOGO" />
      <div css={leftNavCss.nav}>
        <div css={leftNavCss.profile}>
          <div css={leftNavCss.photo}>
            <img css={leftNavCss.resizePhoto} src={joker} alt="joker" />
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
          <img src={dots_image} alt="edit my info" width="34px" height="34px" />
          <div className="logout" onClick={logout}>
            <img src={logout_image} alt="logout" className="logout-icon" />
            Log out
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;

const NAV_ICON_SRC_LIST: { [name: string]: string } = {
  HOME: home_icon,
  LIST: list_icon,
  SETTING: setting_icon,
  'CONTACT US': contact_icon,
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
