import './App.css';
import Aulas from './Components/Aulas';
import ButtonSubscribe from './Components/ButtonSubscribe';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header';
import Information from './Components/Information';

function App() {
  return (
    <div >
    <Header />
    <ButtonSubscribe />
    <Information />
    <Aulas />
    <Footer />
    </div>
  );
}

export default App;
