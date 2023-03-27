import './App.css';
import Todo from './components/Todo'

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo test='Learn React'/> // 셀프 클로징 테그 
      <Todo test='Learn Swift'/>
    </div>
  );
}

export default App;
