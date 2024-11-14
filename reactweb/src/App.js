import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import MyPage from './component/MyPage';
import Member from './component/Member';
import Communication from './component/Communication';
import QnA from './component/QnA';
import Sharing from './component/Sharing';
import ToDoList from './component/ToDoList';
import Tools from './component/Tools';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Member" element={<Member />} />
          <Route path="/Communication" element={<Communication />} />
          <Route path="/QnA" element={<QnA />} />
          <Route path="/Sharing" element={<Sharing />} />
          <Route path="/ToDoList" element={<ToDoList />} />
          <Route path="/Tools" element={<Tools />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;