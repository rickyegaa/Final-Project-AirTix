import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import Verifikasi from "./pages/Verifikasi";
import Riwayat from "./pages/Riwayat";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Notifikasi from "./pages/Notifikasi";
import Profile from "./pages/Profile";
import NoTokenAuth from "./components/NoTokenAuth";
import Protected from "./components/Protected";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./redux/store";
import EmailRequest from "./pages/EmailRequest";
import Gabut from "./pages/Gabut";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider
        clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Login"
              element={
                <NoTokenAuth>
                  <Login />
                </NoTokenAuth>
              }
            />

            <Route
              path="/Register"
              element={
                <NoTokenAuth>
                  <Register />
                </NoTokenAuth>
              }
            />
            <Route
              path="/ResetPassword"
              element={
                <NoTokenAuth>
                  <ResetPassword />
                </NoTokenAuth>
              }
            />
            <Route
              path="/Verifikasi"
              element={
                <NoTokenAuth>
                  <Verifikasi />
                </NoTokenAuth>
              }
            />
            <Route
              path="/Riwayat"
              element={
                <Protected>
                  <Riwayat />
                </Protected>
              }
            />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Gabut" element={<Gabut />} />
            <Route path="/EmailRequest" element={<EmailRequest />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/Notifikasi" element={<Notifikasi />} />
            {/* <Route path="/SearchPage" element={<SearchPage />} /> */}

            <Route path="/SearchPage" element={<SearchPage />} />
            <Route
              path="/Profile"
              element={
                <Protected>
                  <Profile />
                </Protected>
              }
            />
          </Routes>
          <ToastContainer theme="colored" />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
