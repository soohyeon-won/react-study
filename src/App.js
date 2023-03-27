import './App.css';
import Todo from './components/Todo'

function App() {
  return (
    <div>
    <h1>My Todos</h1>
      <Todo text='Learn React'/> {/* 셀프 클로징 테그  */} 
      <Todo text='Learn Swift'/>
    </div>
  );
}

export default App;
