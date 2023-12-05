
import './scss/main.scss';
import Header from './jsx/components/header'; // Import the Header component
import Intro from './jsx/components/intro'; // Import the Header component
import Price from './jsx/components/price'; // Import the Header component
import Form from './jsx/components/form'; // Import the Header component
import Red_area from './jsx/components/Red_area';
import Info_box from "./jsx/components/info_box.jsx";
import Footer from "./jsx/components/footer.jsx"; // Import the Header component
import Calculator  from "./jsx/components/calc.jsx"; // Import the Header component


function App() {
    return (
        <>
            <section className="intro">
                {/* Include the Header component */}
                <Header />
                {/* Include the Intro component */}
                <Intro />
                {/* Include the Intro component */}
                <Form />
            </section>
            <section className="prices">
                {/* Include the Intro component */}
                <Price />
            </section>
            <section>
                {/* Inne elementy interfejsu użytkownika */}
                <Calculator />
            </section>
            <section>
                {/* Include the Intro component */}
                <Red_area />
            </section>
            <section>
                {/* Include the Intro component */}
                <Info_box />
                {/* Include the Intro component */}
                <Footer />
            </section>
        </>
    );
}

export default App;

