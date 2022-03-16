import Sidebar from "./components/Sidebar";
import BottomBar from "./components/BottomBar";
import Content from "./components/Content";
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <BottomBar />
    </BrowserRouter>
  );
}

export default App;
 