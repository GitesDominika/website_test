
function Intro() {
    return (
        <>
            <div className="hero">
                <div className="hero__bg">
                    <div className="hero__inner">
                        <h4 className="hero__hdl">
                            <span className="hero__span yellow">HOL</span>
                            <span className="hero__span"> TAXI</span>
                            <span className="hero__span yellow"> 112</span>
                            <br/> POMOC DROGOWA</h4>
                        <p className="hero__lead">
                            Kompleksowa pomoc drogowa na terenie
                            Warszawy, okolic jak i na obszarze całego kraju.
                            Jesteśmy do twojej dyspozycji
                            24 godziny na dobę, 7 dni w tygodniu.
                        </p>
                        <div className="hero__row">
                            <a className="hero__btn btn btn-large" href="tel:+48661173557">ZADZWOŃ 000-000-000</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Intro;