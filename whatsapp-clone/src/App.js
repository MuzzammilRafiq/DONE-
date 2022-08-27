import "./App.css";
import Chat from "./Chat/Chat";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
        <Sidebar />
        <Chat />
    </div>
  );
}

export default App;
