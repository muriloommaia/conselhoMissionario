import './App.css';
import Aulas from './Components/Aulas';
import ButtonSubscribe from './Components/ButtonSubscribe';
import ClockDay from './Components/ClockDay';
import DataInformacoes from './Components/DataInformacoes';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header';
import Information from './Components/Information';

function App() {
  return (
    <div >
      <Header />
      <div className='my-5'>
        <ClockDay />
        <ButtonSubscribe />
      </div>
      <div className='my-5'>
        <DataInformacoes />
      </div>
      <div className='my-5'>
        <Aulas />
      </div>
      <div className='my-5'>
        <Information />
      </div>
      <div className='my-5'>
        <ButtonSubscribe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
