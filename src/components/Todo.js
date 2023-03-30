import {useState} from 'react';
import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false); {/*리액트 컴포넌트 내부에서 리액트 훅을 사용할 수 있음 react hook */}

    // 함수 이름은 대문자로 설정
    // html코드와 분리되어야함
    function deleteHandler() {
      console.log('click!');
      console.log(props.text);
      setModalIsOpen(true);
    }

    function closeModalhandler() {
      setModalIsOpen(false);
    }

    return ( //JSX CODE
          <div className='card'>
            <h2>{props.text}</h2> {/* javaScript 코드로 실행됨 */} 
            <div className='actions'>
            <button className='btn' onClick={deleteHandler}>Delete</button>
            </div>
            { modalIsOpen && <Modal onCancel={closeModalhandler} onConfirm={closeModalhandler}/>} {/* components함수는 항상 true { modalIsOpen ? <Modal /> : null } 과 동일함 */}
            { modalIsOpen && <Backdrop onClick={closeModalhandler}/>} {/* <Backdrop onClick={closeModalhandler}/> 내장된 컴포넌트가 아니어서 onClick 프로퍼티를 인식하지 않음 */}
          </div>
      );
}

export default Todo;