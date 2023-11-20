
import './scss/main.scss';
import Header from './jsx/components/header'; // Import the Header component
import Intro from './jsx/components/intro'; // Import the Header component

function App() {
    return (
        <>
            <section className="intro">
                {/* Include the Header component */}
                <Header />
                {/* Include the Intro component */}
                <Intro />
            </section>
        </>
    );
}

export default App;

