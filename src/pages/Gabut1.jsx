import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getOrderDetails } from "../redux/actions/postActions";
import qs from "qs";
import axios from "axios";
import { toast } from "react-toastify";

const ResponsivePage = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // const dispatch = useDispatch();
  // const { orders } = useSelector((state) => state.post);
  // useEffect(() => {
  //   dispatch(getOrderDetails());
  // }, [dispatch]);
  // console.log(orders);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setShowDetails(windowWidth > 1200);
  }, [windowWidth]);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // useEffect(() => {
  //   // async function getTicketDetails() {
  //   //   try {
  //   //     let data = qs.stringify({
  //   //       dep_airport: "SUB",
  //   //       arr_airport: "DPS",
  //   //       departure_time: "2023-06-25",
  //   //       seatclass: "Economy",
  //   //       person: "2",
  //   //     });
  //   //     let config = {
  //   //       method: "post",
  //   //       maxBodyLength: Infinity,
  //   //       url: `https://airtix-develop.up.railway.app/flight_schedulles_detail?sort=duration_asc&page=1`,
  //   //       headers: {
  //   //         "Content-Type": "application/json",
  //   //       },
  //   //       data: data,
  //   //     };
  //   //     const response = await axios.post(config);
  //   //     console.log(response);
  //   //     // setTickets(response.data);
  //   //   } catch (error) {
  //   //     if (axios.isAxiosError(error)) {
  //   //       toast.error(error.response.data.message);
  //   //       return;
  //   //     }
  //   //     toast.error(error.message);
  //   //   }
  //   // }
  //   async function fetchAPI() {
  //     try {
  //       // const data = qs.stringify({
  //       //   dep_airport: "SUB",
  //       //   arr_airport: "DPS",
  //       //   departure_time: "2023-06-25",
  //       //   seatclass: "Economy",
  //       //   person: "2",
  //       // });

  //       // const config = {
  //       //   method: "post",
  //       //   maxBodyLength: Infinity,
  //       //   url: "https://airtix-develop.up.railway.app/flight_schedulles_detail",
  //       //   headers: {
  //       //     "Content-Type": "application/x-www-form-urlencoded",
  //       //     // "Content-Type": "application/json",
  //       //   },
  //       //   data: data,
  // params: {
  //   sort: "duration_asc",
  //   page: "1",
  // },
  //       // };

  //       // const response = await axios(config);
  //       // console.log(JSON.stringify(response.data));

  //     } catch (error) {
  //       if (axios.isAxiosError(error)) {
  //         toast.error(error.response.data.message);
  //         return;
  //       }
  //       toast.error(error.message);
  //     }
  //   }
  //   // fetchAPI();
  //   // getTicketDetails();
  // }, []);

  useEffect(() => {
    const postData = async () => {
      try {
        const data = JSON.stringify({
          dep_airport: "SUB",
          arr_airport: "DPS",
          departure_time: "2023-06-25",
          seatclass: "Economy",
          person: "2",
        });
        let config = {
          method: "post",
          url: `https://airtix-develop.up.railway.app/flight_schedulles_detail?sort=duration_asc&page=1`,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            // "Content-Type": "application/json",
          },
          body: data,
          params: {
            sort: "duration_asc",
            page: 1,
          },
        };

        const response = await axios(config);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    postData();
  }, []);

  return (
    <div>
      <h1>Responsive Page</h1>
      {windowWidth <= 1200 && (
        <button onClick={toggleDetails}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      )}
      {windowWidth > 1200 || showDetails ? (
        <div>
          {/* Render your details here */}
          <p>Details go here...</p>
        </div>
      ) : null}
    </div>
  );
};

export default ResponsivePage;
