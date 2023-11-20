function Header() {
    return (
        <>

            <header className="header">
                <div className="header__inner">
                    <a href="/" className="logo">
                        <span className="logo__img" />
                        <span className="logo__text">HOL</span>
                        <span className="logo__text logo__text--highlight">Taxi</span>
                    </a>
                    <nav className="menu">
                        <a href="" className="menu__item menu__item--active">
                            POMOC
                        </a>
                        <a href="" className="menu__item">
                            CENNIK
                        </a>
                        <a href="" className="menu__item">
                            MAPA
                        </a>
                        <a href="" className="menu__item">
                            KONTAKT
                        </a>
                    </nav>
                    <a className="hero__btn btn btn-large btn-secondary">ZADZWOŃ 000-000-000</a>
                </div>
            </header>

        </>
    );
}

export default Header;

