function Todo(props) {
    // 함수 이름은 대문자로 설정
    // html코드와 분리되어야함
    return ( //JSX CODE
        <div>
          <h1>My Todos</h1>
          <div className='card'>
            <h2>{props.text}</h2> // javaScript 코드로 실행됨
            <button className='btn'>Delete</button>
          </div>
        </div>
      )
}

export default Todo;