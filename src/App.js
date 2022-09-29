import './App.css';
import Courses from './component/courses/Courses';
import Header from './component/header/Header';
import Question from './component/question/Question';

function App() {
  return (
    <div className='App'>
      <Header ></Header>
      <Courses></Courses>
      <Question></Question>
    </div>
  );
}

export default App;
