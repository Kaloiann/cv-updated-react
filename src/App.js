import './reset.css';
import './App.scss';

import { GlobalProvider } from './context/GlobalContext'

import Sidebar from './components/Sidebar/Sidebar';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <div className="main">
          <Sidebar />
          <div className="container">
            <Experience />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
