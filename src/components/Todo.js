function Todo(props) {
    // 함수 이름은 대문자로 설정
    // html코드와 분리되어야함

    function deleteHandler() {
      console.log('click!');
      console.log(props.text);
    }
    return ( //JSX CODE
          <div className='card'>
            <h2>{props.text}</h2> {/* javaScript 코드로 실행됨 */} 
            <div className='actions'>
            <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
          </div>
      );
}

export default Todo;