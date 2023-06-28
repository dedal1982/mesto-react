import HeaderLogo from '../images/header-logo.svg';

function Header() {
    return (
      <header className="header">
        <img className="header__logo" src={HeaderLogo} alt="Лого" />
      </header>
    );
  }

export default Header;