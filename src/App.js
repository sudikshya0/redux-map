import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
      </div>
    </Provider>
  );
}

export default App;
