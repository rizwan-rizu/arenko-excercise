import { Checkbox, FormControlLabel } from "@mui/material"

interface iCheckBoxProp {
  label: string
  defaultChecked: boolean
  size: 'small' | 'medium'
  handleChange: Function
}

const CheckBox = (props: iCheckBoxProp) => {
  const { label, size, defaultChecked, handleChange } = props
  return (
    <FormControlLabel
      control={
        <Checkbox
          defaultChecked={defaultChecked}
          size={size}
          onChange={(e) => handleChange(e.target.checked)}
        />
      }
      label={label}
    />
  )
}
export default CheckBox