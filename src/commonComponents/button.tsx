import { Button } from '@mui/material'
import { MouseEventHandler, ReactNode } from 'react'

interface iButtonComponentProps {
  variant?: 'contained' | 'outlined' | 'text'
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning"
  size?: "small" | "medium" | "large"
  fullWidth?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  label: string
  disabled?: boolean
  handleClick: MouseEventHandler
}

const MuiButton = (props: iButtonComponentProps) => {
  return (
    <Button
      color={props.color}
      variant={props?.variant}
      fullWidth={props?.fullWidth}
      size={props?.size}
      startIcon={props?.startIcon}
      endIcon={props?.endIcon}
      onClick={props?.handleClick}
      disabled={props?.disabled}
    >
      {props.label}
    </Button>
  )
}

export default MuiButton;