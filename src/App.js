import s from'./App.module.css';
import Header from './Blocks/Header/Header';
import Main from './Page/Main/Main';

const App = () => {
  return (
    <div className={s.container}> 
      <Main />
    </div>
  );
}

export default App;
