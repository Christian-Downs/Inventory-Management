import * as React from 'react';
// import datefns from 'date-fns';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function disableDatesArray(datesToDisable) {
  return (date) => {
    // Convert Dayjs object to Date object for comparison
    const dateToCheck = date.toDate();
    return datesToDisable.some(disabledDate =>
      disabledDate.getDate() === dateToCheck.getDate() &&
      disabledDate.getMonth() === dateToCheck.getMonth() &&
      disabledDate.getFullYear() === dateToCheck.getFullYear()
    );
  };
}

export default function CustomCalendar() {
  const [value, setValue] = React.useState(dayjs());

  const disabledDates = [
    new Date(2024, 1, 8),  // Dates to disable, month is 0-indexed
    new Date(2024, 1, 15),
    // ... more dates
  ];

  console.log(value.toDate().getDate() + " " + (value.toDate().getMonth()+1) + " " + value.toDate().getFullYear());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        openTo="day"
        value={value}
        shouldDisableDate={disableDatesArray(disabledDates)}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        disablePast = {true}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
