import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function CategoryBar() {
  // 활성화된 박스를 추적하는 상태 (null은 초기 상태로 아무것도 선택되지 않음)
  const [activeBox, setActiveBox] = useState(null);

  // 박스 클릭 시 activeBox를 해당 박스로 설정
  const handleClick = (index) => {
    if (activeBox === index) {
      setActiveBox(null); // 이미 활성화된 박스를 클릭하면 비활성화
    } else {
      setActiveBox(index); // 새로운 박스를 클릭하면 그 박스를 활성화
    }
  };

  return (
    <div className="CategoryBar">
      <div
        className={`box ${activeBox === 0 ? 'active' : ''}`}
        onClick={() => handleClick(0)}
      >
        <Link to="/Communication">Communication</Link>
      </div>
      <div
        className={`box ${activeBox === 1 ? 'active' : ''}`}
        onClick={() => handleClick(1)}
      >
        <Link to="/QnA">Q & A</Link>
      </div>
      <div
        className={`box ${activeBox === 2 ? 'active' : ''}`}
        onClick={() => handleClick(2)}
      >
        <Link to="/Sharing">Sharing</Link>
      </div>
      <div
        className={`box ${activeBox === 3 ? 'active' : ''}`}
        onClick={() => handleClick(3)}
      >
        <Link to="/ToDoList">To Do List</Link>
      </div>
      <div
        className={`box ${activeBox === 4 ? 'active' : ''}`}
        onClick={() => handleClick(4)}
      >
        <Link to="/Tools">Tools</Link>
      </div>
    </div>
  );
}
