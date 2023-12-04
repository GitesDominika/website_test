import {useState} from "react";
export default function Login() {

    const [enteredValues, setEnteredValues] = useState({
        fullName: "", email:'', tel:'', fromPlace:'', toPlace:'', vehicle:'', date:''
    });

    const [didEdit, setDidEdit] = useState( {
        fullName: false, email: false, tel: false, fromPlace: false, toPlace: false, vehicle: false, date: false
    });

    const emailIsInvalid = didEdit.email && !enteredValues.email.includes('@');
    const fullNameIsInvalid = didEdit.fullName && !/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*(\s[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)*$/.test(enteredValues.fullName);
    // const telIsInvalid = didEdit.tel && /^\+48(\s?|-?|\d){9}$/.test(enteredValues.tel);
    const telIsInvalid = didEdit.tel && !/^\+48\s?(\d{3}[-\s]?\d{3}[-\s]?\d{3}|\d{9})$/.test(enteredValues.tel);
    const fromPlaceIsInvalid = didEdit.fromPlace && !/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*(\s[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)*$/.test(enteredValues.fromPlace);
    const toPlaceIsInvalid = didEdit.toPlace && !/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*(\s[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*)*$/.test(enteredValues.toPlace);
    const dateIsInvalid = didEdit.date && isNaN(Date.parse(enteredValues.date));
    const vehicleIsInvalid = didEdit.vehicle && !/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*(\s[A-ZĄĆĘŁŃÓŚŹŻa-ząćęłńóśźż][a-ząćęłńóśźż]*)*$/.test(enteredValues.vehicle);


    function handleSubmit(event) {
        event.preventDefault();

        console.log(enteredValues)

        for (const key in enteredValues) {
            if (!enteredValues[key]) {
                console.error(`Please enter ${key}`);
                return; // Prevent form submission
            }
        }

    }

    function handleInputChange(identifier, event) {
        setEnteredValues(prevValues => ({
            ...prevValues, [identifier]: event.target.value
        }));
        setDidEdit((prevEdit) => ({
            ...prevEdit, [identifier]: false,
        }));
    }

    function handleInputBlur (identifier) {
        setDidEdit(prevEdit => ({
            ...prevEdit, [identifier]: true,
        }));
    }

    function handleReset() {
        setEnteredValues({
            fullName: "", email: '', tel:'', fromPlace:'', toPlace:'', vehicle:'', date:''
        });
    }

    return (
        <div className="container-1">
            <div className="inner-1">
                <h2 className="title-1">Wycena indywidualna</h2>
                <p className="paragraph-1">
                    Planujesz przewóz nietypowych, przedmiotów? Samochodu, lub innych
                    gabarytowych rzeczy?
                </p>
                <p className="big-1">Jesteśmy do Twojej dyspozycji!</p>
                <div className="form-inner-1">


                    <form onSubmit={handleSubmit}>
                        <div className="input-gr">

                            <div className="">
                                <label htmlFor="fullName"></label>
                                <input
                                    id="fullName" type="text" name="fullName" placeholder="Imie i Nazwisko"
                                    onBlur={() => handleInputBlur("fullName")}
                                    onChange={(event) => handleInputChange("fullName", event)}
                                    value={enteredValues.fullName}/>
                                <div className="control-error">{fullNameIsInvalid && <p>Wprowadź pełne imię i nazwisko</p>}</div>
                            </div>


                            <div className="x">
                                <label htmlFor="email"></label>
                                <nput id="email" type="email" name="email" placeholder="e-mail adress"
                                       onBlur={() => handleInputBlur('email') }
                                       onChange={(event) => handleInputChange('email', event)}
                                       value={enteredValues.email}/>
                                <div className="control-error">{emailIsInvalid && <p>Wproawdz adres e-mail</p>}</div>
                            </div>

                            <div className="">
                                <label htmlFor="tel"></label>
                                <input id="tel" type="tel" name="tel" placeholder="Telefon"
                                       onBlur={() => handleInputBlur('tel') }
                                       onChange={(event) => handleInputChange('tel', event)}
                                       value={enteredValues.tel}/>
                                <div className="control-error">{telIsInvalid && <p>Wprawadz numer telefonu</p>}</div>
                            </div>

                            <div className="">
                                <label htmlFor="fromPlace"></label>
                                <input
                                    id="fromPlace" type="text" name="fromPlace" placeholder="Miejsce odbioru"
                                    onBlur={() => handleInputBlur("fromPlace")}
                                    onChange={(event) => handleInputChange("fromPlace", event)}
                                    value={enteredValues.fromPlace}/>
                                <div className="control-error">{fromPlaceIsInvalid && <p>Błąd</p>}</div>
                            </div>

                            <div className="">
                                <label htmlFor="toPlace"></label>
                                <input
                                    id="toPlace" type="text" name="toPlace" placeholder="Miejsce docelowe"
                                    onBlur={() => handleInputBlur("toPlace")}
                                    onChange={(event) => handleInputChange("toPlace", event)}
                                    value={enteredValues.toPlace}/>
                                <div className="control-error">{toPlaceIsInvalid && <p>Błąd</p>}</div>
                            </div>

                            <div className="">
                                <label htmlFor="date"></label>
                                <input
                                    id="date" type="date" name="date" placeholder="Wybierz datę"
                                    onBlur={() => handleInputBlur("date")}
                                    onChange={(event) => handleInputChange("date", event)}
                                    value={enteredValues.date}/>
                                <div className="control-error">{dateIsInvalid && <p>Wybierz datę</p>}</div>
                            </div>

                            <div className="">
                                <label htmlFor="vehicle"></label>
                                <input
                                    id="vehicle" type="text" name="vehicle" placeholder="Typ pojazdu"
                                    onBlur={() => handleInputBlur("vehicle")}
                                    onChange={(event) => handleInputChange("vehicle", event)}
                                    value={enteredValues.vehicle}/>
                                <div className="control-error">{vehicleIsInvalid && <p>Błąd</p>}</div>
                            </div>




                            <p className="form-actions">
                                <button className="button">Login</button>
                                <button className="button button-flat" type="reset" onClick={handleReset}>Reset</button>
                            </p>

                            <div className="basket">
                                <input className="check" type="checkbox" id="stagment-1" name="stagment" />
                                <div className="txt">
                                    {" "}
                                    *Oświadczam, iż wyrażam zgodę na przetwarzanie moich danych osobowych
                                    udostępnionych HolTaxi Pomoc Drogowa w niniejszym formularzu w celu
                                    otrzymania bezpłatnej wyceny transportu.
                                </div>
                            </div>
                        </div>

                    </form>

                </div></div></div>
    );
}
