// import 'src/App.css';
import { createTheme, colors, ThemeProvider } from '@mui/material';



function Home() {
    return (
        <div className="App">
        <NavBar></NavBar>
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
    </div>    
    );
}

export default Home;