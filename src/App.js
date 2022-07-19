import {BrowserRouter as Router, Route, Routes}from 'react-router-dom'
import './App.css';
import ListQuestionsComponent from './component/ListQuestionsComponent'; 
import AddQuestionComponent from './component/AddQuestionComponent'; 
import UpdateQuestionComponent from './component/UpdateQuestionComponent'; 
function App() {
  return (
      <Router>
        <div className='App'>
        <Routes>
          <Route exact path='/questions' element={<ListQuestionsComponent/>}></Route>
          <Route path='/questions/question' component={<AddQuestionComponent/>}></Route>
          <Route path='/questions/:id' component={<UpdateQuestionComponent/>}></Route>
        </Routes>
        </div>
      </Router>
  );
}

export default App;
