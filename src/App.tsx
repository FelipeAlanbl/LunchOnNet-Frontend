import './App.css';
import Router from './routes/Router';
import AuthContextProvider from './context/AuthContext'
import GlobalStyle from './globalStyles';

function App() {

  return (
    <>
      <GlobalStyle />
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </>
  );
}

export default App;
