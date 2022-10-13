import { BrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
// import Header from "./components/Header/Header";
// import Header from "./components/Molecules/Header"
import Routers from "./routers/Routers";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        {/* <Header /> */}
        {/* <Routers /> */}
        {/* <MainLayout /> */}
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
