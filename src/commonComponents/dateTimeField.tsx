import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Dayjs } from 'dayjs';

interface iDateTimeField {
  label: string
  handleChange: Function
  disablePast?: boolean
  disableFuture?: boolean
  minDate?: Dayjs
  maxDate?: Dayjs
}

const DateTimeField = (props: iDateTimeField) => {
  const { label, handleChange, disableFuture, disablePast, minDate, maxDate } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']} >
        <DateTimePicker
          label={label}
          minDate={minDate}
          maxDate={maxDate}
          disableFuture={disableFuture}
          disablePast={disablePast}
          onChange={(newValue) => handleChange(newValue)}
          sx={{ width: "100%" }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
export default DateTimeField;
