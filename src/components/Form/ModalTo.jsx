import React, { useEffect, useState } from "react";
import { Form} from "react-bootstrap";
import Select from "react-select";
import axios from "axios";
import "../../assets/css/Banner.css";

const ModalTo = (props) => {
  const [dataTo, setDataTo] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await axios.get("https://airtix-develop.up.railway.app/airports");
      setDataTo(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const [inputValue, setInputValue] = useState();
  const inputHandleChange = (selectedOption) => {
    setInputValue(selectedOption);
    props.setDataTo(selectedOption);
  };

  const handleClick = (event) => {
    event.preventDefault();
    props.dataSelect(inputValue);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // Transform the airport data into options array for react-select
  const selectOptions = dataTo.map((airport) => ({
    value: airport.code,
    label: airport.city,
  }));

  return (
    <Form.Group>
      <Form onSubmit={handleClick}>
        <Select options={selectOptions} onChange={inputHandleChange} isClearable={true} />
      </Form>
    </Form.Group>
  );
};

export default ModalTo;
