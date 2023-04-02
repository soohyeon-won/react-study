import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Todo from './components/Todo'
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
    <div>
      <Switch>
      <Route path='/' exact> {/* exat = {true}와 같음*/}
        <NewMeetupPage />
      </Route>
      <Route path='/todo'>
        <h1>My Todos</h1>
        <Todo text='Learn React'/> {/* 셀프 클로징 테그  */} 
        <Todo text='Learn Swift'/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
