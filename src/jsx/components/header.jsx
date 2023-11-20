function Header() {
    return (
        <>

            <header className="header">
                <div className="header__inner">
                    <a href="/" className="logo">
                        <span className="logo__img" />
                        <span className="logo__text">Car</span>
                        <span className="logo__text logo__text--highlight">Sharing</span>
                    </a>
                    <nav className="menu">
                        <a href="" className="menu__item menu__item--active">
                            Home
                        </a>
                        <a href="" className="menu__item">
                            BLOG
                        </a>
                        <a href="" className="menu__item">
                            SERVICE
                        </a>
                        <a href="" className="menu__item">
                            Contact
                        </a>
                    </nav>
                </div>
            </header>

        </>
    );
}

export default Header;

