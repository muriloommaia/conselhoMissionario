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
    <Aulas />
    <Information />
    <ButtonSubscribe />
    <Footer />
    </div>
  );
}

export default App;
