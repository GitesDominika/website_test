function Info_box() {
    return (
        <>
            <div className="info__main">
                <div className="info__inner">
                    <div className="info__left">
                        <img className="info__left__img" alt="" />
                    </div>

                    <div className="info__inside">
                        <h2 className="info__inside__hdl">TAXI DLA TWOJEGO AUTA</h2>
                        <br/><br/>
                        <p className="info__inside__title">Zapewniamy szybkie, bezpieczne i&nbsp;niedrogie usługi holowania w&nbsp;Warszawie i okolicach. Jesteśmy gotowi odpowiedzieć na wszystkie potrzeby awaryjne pojazdu 24 godziny na dobę, siedem dni w&nbsp;tygodniu.</p>
                        <br/>
                    </div>
                    <div className="info__right">
                        <h2 className="info__right__hdl">SKONTAKTUJ SIĘ Z NAMI </h2><br/><br/>
                        <p className="info__right__mail"><a href="pomocdrogowa@holtaxi.pl">pomocdrogowa@holtaxi.pl</a></p><br/>
                        <p className="info__right__tel"><a href="tel:+48500660389">+48 500 660 389</a></p><br/>
                        <p className="info__right__lead">24 godziny na dobę, 7 dni w tygodniu</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Info_box;