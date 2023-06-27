import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import Riwayat from "./pages/Riwayat";
import Verifikasi from "./pages/Verifikasi";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Notifikasi from "./pages/Notifikasi";
import Profile from "./pages/Profile";
import CariPenerbangan from "./pages/CariPenerbangan";
import Protected from "./components/Protected";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./redux/store";

// import CariPenerbangan from "./pages/CariPenerbangan";
// import Notifikasi from "./pages/Notifikasi";

function App() {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider
        clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/Riwayat" element={<Riwayat />} />
            <Route path="/Verifikasi" element={<Verifikasi />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Payment" element={<Payment />} />
            <Route path="/Notifikasi" element={<Notifikasi />} />
            <Route path="/CariPenerbangan" element={<CariPenerbangan />} />
            <Route
              path="/Profile"
              element={
                <Protected>
                  <Profile />
                </Protected>
              }
            />

            <Route path="Register" element={<Register />} />
            <Route path="ResetPassword" element={<ResetPassword />} />
            <Route
              path="/Riwayat"
              element={
                <Protected>
                  <Riwayat />
                </Protected>
              }
            />
            <Route path="Verifikasi" element={<Verifikasi />} />
            <Route path="Checkout" element={<Checkout />} />
            <Route path="Payment" element={<Payment />} />

            <Route path="Notifikasi" element={<Notifikasi />} />

            <Route path="CariPenerbangan" element={<CariPenerbangan />} />
          </Routes>
          <ToastContainer theme="colored" />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
