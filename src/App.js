import s from './App.module.css';
import Header from './Blocks/Header/Header';
import Main from './Page/Main/Main';

const App = (props) => {

  return (
    <div className={s.container}>
      <Main store={props.store} />
    </div>
  );
}

export default App;
