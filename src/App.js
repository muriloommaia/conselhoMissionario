import './App.css';
import Aulas from './Components/Aulas';
import ButtonSubscribe from './Components/ButtonSubscribe';
import Header from './Components/Header';
import Information from './Components/Information';

function App() {
  return (
    <div className='d-flex flex-column align-items-center'>
    <Header />
    <ButtonSubscribe />
    <Information />
    <Aulas />
    </div>
  );
}

export default App;
