'use client'

import { useState } from 'react'

import { InputLabel, Stack, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import * as PropTypes from 'prop-types'
import { Controller, useForm } from 'react-hook-form'
import InputField from './InputField'

const UIDatePicker = ({
  name = 'datePicker',
  control,
  errorMessage,
  label,
  disabled,
  disablePast = true,
  labelTop,
  highlightError,
  placeholder,
  ...rest
}) => {
  const { control: fallblckControl } = useForm()
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    if (!disabled) {
      setOpen(true)
    }
  }

  const labelTypo = labelTop && (
    <Typography
      sx={{
        // marginBottom: "5px",
        color: 'text.primary',
        fontWeight: 'Medium',
      }}
    >
      {labelTop}
    </Typography>
  )

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        name={name}
        control={control || fallblckControl}
        render={({
          field: { value, ...field },
          fieldState: { error: fieldError },
        }) => {
          return (
            <Stack gap={1 / 2}>
              {labelTypo}
              <DatePicker
                label={label}
                open={open}
                // disableOpenPicker
                disableMaskedInput
                disablePast={disablePast}
                place
                onOpen={handleOpen}
                readOnly={disabled}
                error={errorMessage || fieldError}
                inputFormat="DD/MM/YYYY"
                onClose={() => setOpen(false)}
                value={value != null ? value : null}
                slotProps={{
                  textField: {
                    placeholder: placeholder,
                    helperText: errorMessage || fieldError?.message,
                    error: Boolean(errorMessage || fieldError),
                    fullWidth: true,
                    size: 'small',
                  },
                }}
                sx={{ backgroundColor: 'background.default', ...rest.sx }}
                {...field}
                {...rest}
                renderInput={(params) => (
                  <InputField
                    sx={{
                      '& .MuiFormHelperText-root': {
                        marginLeft: 0,
                        color: 'red',
                      },
                    }}
                    fullWidth
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    errorMessage="ssssss"
                    onClick={handleOpen}
                    {...params}
                    {...rest}
                  />
                )}
              />
            </Stack>
          )
        }}
      />
    </LocalizationProvider>
  )
}

export default UIDatePicker

UIDatePicker.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  control: PropTypes.object,
  errorMessage: PropTypes.string,
  highlightError: PropTypes.bool,
}
