// import 'src/App.css';
import logo from '.././assets/deepracer.png';



function Home() {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Deepracer Dash
        </p>
        <a
            className="App-link"
            href="https://github.com/IP-299-Deepracer/Deepracer-Dashboard"
            target="_blank"
            rel="noopener noreferrer"
        >
            GitHub
        </a>
        </header>
    );
}

export default Home;