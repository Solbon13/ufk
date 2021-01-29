import s from'./App.module.css';
import Header from './Blocks/Header/Header';
import Main from './Page/Main/Main';

const App = (props) => {
  return (
    <div className={s.container}> 
      <Main newsData={props.newsData}/>
    </div>
  );
}

export default App;
