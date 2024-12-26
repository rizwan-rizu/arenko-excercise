import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { setIntensityType } from '../pages/carbonIntensity/action';
import { Dispatch } from 'react';
import { Action } from '../pages/carbonIntensity/reducer';

interface RadioBtnProps {
  title: string
  value: string
  dispatch: Dispatch<Action>
  isRow?: boolean
  data: { value: string, label: string }[]
}

const RadioBtn = (props: RadioBtnProps) => {
  const { value, dispatch, data, title, isRow } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setIntensityType(e.target.value))
  };

  return (
    <FormControl>
      <FormLabel id="radio-btn-group">{title}</FormLabel>
      <RadioGroup
        aria-labelledby="radio-btn-group"
        row={isRow}
        name="radio-btn-group"
        value={value}
        onChange={handleChange}
      >
        {data.map(i =>
          <FormControlLabel
            aria-label={`Select ${i.label}`}
            key={i.label}
            value={i.value}
            control={<Radio size='small' />}
            label={i.label}
          />
        )}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioBtn;