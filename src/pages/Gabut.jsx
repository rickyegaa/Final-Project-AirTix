import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

// Filter Component for Code
const CodeFilterComponent = ({ onCodeFilterChange }) => {
  const [codeFilter, setCodeFilter] = useState("");
  

  const handleCodeFilterChange = (event) => {
    const value = event.target.value;
    setCodeFilter(value);
    onCodeFilterChange(value);
  };

  return (
    <div>
      <label>Code Filter:</label>
      <input type="text" value={codeFilter} onChange={handleCodeFilterChange} />
    </div>
  );
};

// Filter Component for Date
const DateFilterComponent = ({ onDateFilterChange }) => {
  const [dateFilter, setDateFilter] = useState("");

  const handleDateFilterChange = (event) => {
    const value = event.target.value;
    setDateFilter(value);
    onDateFilterChange(value);
  };

  return (
    <div>
      <label>Date Filter:</label>
      <input type="text" value={dateFilter} onChange={handleDateFilterChange} />
    </div>
  );
};

// Parent Component
const ParentComponent = () => {
  const [codeFilter, setCodeFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    async function getTicketDetails() {
      try {
        const response = await axios.get(
          `https://648313a9f2e76ae1b95be96f.mockapi.io/tiket`
        );
        setTickets(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    }
    getTicketDetails();
  }, []);

  const handleCodeFilterChange = (value) => {
    setCodeFilter(value);
  };

  const handleDateFilterChange = (value) => {
    setDateFilter(value);
  };
  const dayFormatter = new Intl.DateTimeFormat("id-id", { dateStyle: "long" });

  // Apply filters to the data
  const filteredData = tickets.filter((item) => {
    const codeMatch = item.booking_code
      .toLowerCase()
      .includes(codeFilter.toLowerCase());
    const dateMatch = item.flightDate_dep.includes(dateFilter);
    return codeMatch && dateMatch;
  });

  return (
    <div>
      <h1>Parent Component</h1>
      <CodeFilterComponent onCodeFilterChange={handleCodeFilterChange} />
      <DateFilterComponent onDateFilterChange={handleDateFilterChange} />

      <h2>Filtered Data:</h2>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            {item.booking_code} -{" "}
            {dayFormatter.format(new Date(item.flightDate_dep))} &{" "}
            {dayFormatter.format(new Date(item.flightDate_arr))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ParentComponent;
