import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

interface iDateTimeField {
  label: string
  handleChange: Function
}

const DateTimeField = (props: iDateTimeField) => {
  const { label, handleChange } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker label={label} onChange={(newValue) => handleChange(newValue)} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
export default DateTimeField;
