import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';
import { IconSetProvider } from './context/IconSetProvider';
import { ThemeProviver, useTheme } from './context/ThemeContext';
import { WeatherProvider } from './context/WeatherContext';
import { colors } from './data/colors'

function App() {
  return (
    <div style={{ 'backgroundColor': '#f5f6fa' }}>
      <WeatherProvider>
        <div className="container">
          <IconSetProvider>
            <Header />
            <hr />
            <Weather />
          </IconSetProvider>
        </div>
      </WeatherProvider>

    </div >
  );
}

export default App;
