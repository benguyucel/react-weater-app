import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';
import { useTheme } from './context/ThemeContext';
import { WeatherProvider } from './context/WeatherContext';
import { colors } from './data/colors'

function App() {
  const { theme } = useTheme();
  return (
    <div style={{ 'backgroundColor': colors[theme] }}>
      <WeatherProvider>
        <div className="container-fluid">
          <Header />
          <hr />
          <Weather />
        </div>
      </WeatherProvider>

    </div >
  );
}

export default App;
