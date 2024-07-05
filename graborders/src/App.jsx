import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "src/view/shared/routes/RoutesComponent";
import { Provider } from "react-redux";
import { configureStore, } from "src/modules/store";
const store = configureStore();
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <RoutesComponent />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
