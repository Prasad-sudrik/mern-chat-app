import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Homepage} exact />
        <Route path="/chats" component={ChatPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
