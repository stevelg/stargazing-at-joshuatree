import React, { useState } from "react";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import TextField from "@mui/material/TextField";

const DatePicker = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
    onDateChange(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker displayStaticWrapperAs="desktop" value={selectedDate} onChange={handleDateChange} renderInput={(params) => <TextField {...params} />} />
    </LocalizationProvider>
  );
};

export default DatePicker;
