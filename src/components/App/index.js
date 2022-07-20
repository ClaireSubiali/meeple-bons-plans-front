// == Import
import { Route, Routes } from 'react-router-dom';

import './style.scss';

// Components import
import Header from '../Header';
import Footer from '../Footer';
import SignIn from '../SignIn';
import DealList from '../DealList';
import Deal from '../Deal';
import AddDeal from '../AddDeal';
import Team from '../Team';
import CGU from '../CGU';
import LegalMentions from '../LegalMentions';
import SearchResults from '../SearchResults';
import Error from '../Error';
import ContactForm from '../ContactForm';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<DealList />} />
        <Route path="/bons-plans" element={<DealList />} />
        <Route path="/bon-plan/:dealId" element={<Deal />} />
        <Route path="/bons-plans/:categorySlug" element={<DealList />} />
        <Route path="/ajouter-bon-plan" element={<AddDeal />} />
        <Route path="/inscription" element={<SignIn />} />
        <Route path="/team" element={<Team />} />
        <Route path="/cgu" element={<CGU />} />
        <Route path="/mentions-legales" element={<LegalMentions />} />
        <Route path="/recherche?s=:searchWord" element={<SearchResults />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

// == Export
export default App;
