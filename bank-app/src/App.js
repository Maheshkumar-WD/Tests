import { useSelector } from "react-redux";
import "./App.css";
import AllRoutes from "./Routes/RootRouter";
function App() {
  let user = useSelector(state=>state.auth);
  console.log(user);
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
