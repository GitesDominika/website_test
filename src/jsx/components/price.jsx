function Price() {
    return (
        <>
            <div className='main-div'>
                <div className='main-div__left-box'>
                    <h2 className='left-box__title'>UZYSKAJ WYCENĘ</h2>
                    <h2 className='left-box__subtitle'>SKORZYSTAJ Z KALKULATORA CEN!</h2>
                    <p className='left-box__description'>
                        Wprowadź miejsce rozpoczęcia podróży, cel, a następnie podaj rodzaj pojazdu.
                    </p>
                </div>
                <div className="main-div__price-row">
                    <a className="price-row__btn btn btn-large">Przelicz koszty transportu</a>
                </div>
            </div>

        </>
    );
}

export default Price;