import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import { IoArrowBack } from "react-icons/io5";
import Navbar from "../components/Navbar";
import "../assets/css/Verifikasi.css";

const OTPVerification = () => {
  const [otp, setOTP] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  const handleVerifyOTP = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const data = {
        otp: otp,
      };
      const response = await axios.post(
        `${process.env.REACT_APP_API}/auth/verify-otp`,
        data,
        config
      );
      setLoading(false);
      // Cek Kondisi Verifikasi Sukses
      console.log(response.data);
      toast.success("OTP Verification Successful!");
    } catch (error) {
      setLoading(false);
      // Cek Kondisi Verifikasi Gagal
      console.error(error);
      toast.error("OTP Verification Failed!");
    }
  };

  const handleResendOTP = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        `${process.env.REACT_APP_API}/auth/resend-otp`,
        config
      );
      setLoading(false);
      // Cek Kondisi Resend OTP Sukses
      console.log(response.data);
      toast.success("OTP Resend Successfully!");
    } catch (error) {
      setLoading(false);
      // // Cek Kondisi Resend OTP Gagal
      console.error(error);
      toast.error("Failed to Resend OTP!");
    }
  };

  return (
    <>
      <Navbar />
      <Container fluid>
        <Link to="/Register">
          <p className="ms-5 fs-1 text-color">
            <IoArrowBack />
          </p>
        </Link>
        <h2 className="text-center mb-5 fw-bold">Masukkan OTP</h2>
        <div className="d-flex flex-row justify-content-center mt-2">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Text>
                Ketik 6 digit kode yang dikirimkan ke <b>r*****@gmail.com</b>
              </Form.Text>
              <div className="mt-4 mb-5 text-center">
                <Form.Control
                  type="text"
                  value={otp}
                  maxLength={6}
                  onChange={handleOTPChange}
                  // onChange={(e) => setOTP(e.target.value)}
                />
              </div>
              <div className="ms-2 text-center">
                <Link
                  className="text-colorr"
                  disabled={loading}
                  onClick={handleResendOTP}
                >
                  Kirim ulang OTP dalam 60 detik
                </Link>
              </div>
            </Form.Group>
            <Button
              type="submit"
              onClick={handleVerifyOTP}
              className="button w-100"
              disabled={loading}
            >
              Simpan
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default OTPVerification;
