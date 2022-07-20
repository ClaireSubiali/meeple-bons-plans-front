// == Import
import Header from '../Header';
import Footer from '../Footer';
import './style.scss';
import SignIn from '../SignIn';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <SignIn />
      <Footer />
    </div>
  );
}

// == Export
export default App;
