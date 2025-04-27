import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginnPage from "./pages/login/LoginPage";
import ErrorPage from "./pages/error/ErrorPage";
import KintaiInputPage from "./pages/kintai_input/KintaiInputPage";
import { ThemeProvider } from "@mui/material";
import { kintaitheme } from "./theme";
import KintaiList from "./pages/kintai_list/KintaiList";

function App() {
  return (
    <ThemeProvider theme={kintaitheme}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LoginnPage />}></Route>
          <Route path={"/home"} element={<KintaiInputPage />}></Route>
          <Route path={"/kintailist"} element={<KintaiList />}></Route>
          {/* pathに＊を設定すると、用意されてないURLにアクセスがあったときに自動的に飛ばされるページ設定ができる */}
          <Route path={"*"} element={<ErrorPage />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
