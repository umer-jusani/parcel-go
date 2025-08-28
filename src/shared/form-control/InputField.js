'use client'

import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'

const InputField = React.forwardRef(
  (
    {
      labelTop = '',
      label = '',
      styles,
      error = '',
      helperText = '',
      icon,
      startIcon = null,
      fullWidth = true,
      value: propsValue,
      onChange: propsOnChange,
      size = 'medium',
      variant = 'outlined',
      min = '',
      max = '',
      type = '',
      // min
      multiline = false,
      minRows=0,
      maxRows=0,
      onBlur,
      sx = {},
      control = null, // react-hook-form control
      name = 'fallback',
      errors = {},
      onEndIconPress = () => {},
      InputProps = {},
      options = [], // Array of options for select
      select = type === 'select', // Flag to determine if it's a select field
      ...props
    },
    ref
  ) => {
    const matches = useMediaQuery('(min-width:600px)')
    const _id = `myInput__`

    const errorMessageToShow = error || errors[name]?.message
    const isError = Boolean(errorMessageToShow)

    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show)

    const handleMouseDownPassword = (event) => {
      event.preventDefault()
    }

    const passwordAdornment =
      type === 'password'
        ? {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }
        : {}

    const finalInputProps =
      type === 'password' ? { ...passwordAdornment, ...InputProps } : InputProps

    const commonProps = {
      id: _id,
      inputRef: ref,
      error: isError,
      label,
      variant,
      fullWidth,
      size: size,
      autoComplete: 'off',
      value: propsValue,
      onBlur,
      onChange: propsOnChange,
      inputProps: { min, max },
      sx: {  ...sx },
      ...props,
    }

    const renderField = (fieldProps) => {
      if (select) {
        return (
          <FormControl sx={{ ...styles }} size="medium" error={isError}>
            {label && (
              <InputLabel sx={{ color: 'GrayText' }}>{label}</InputLabel>
            )}
            <Select
              {...fieldProps}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 300,
                    maxWidth: 300,
                  },
                },
              }}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
            {helperText && !isError && (
              <FormHelperText
                sx={{ mt: '0 !important', color: '#6C6A6A', fontWeight: 500 }}
              >
                {helperText}
              </FormHelperText>
            )}
          </FormControl>
        )
      }

      return (
        <TextField
          {...fieldProps}
          multiline={multiline}
          minRows={minRows}
          maxRows={maxRows}
          type={
            type === 'password'
              ? showPassword
                ? 'text'
                : 'password'
              : type || ''
          }
          InputProps={{
            ...(startIcon
              ? {
                  startAdornment: (
                    <InputAdornment position="start">
                      {startIcon}
                    </InputAdornment>
                  ),
                }
              : {}),
            ...(icon
              ? {
                  endAdornment: (
                    <InputAdornment position="end">{icon}</InputAdornment>
                  ),
                }
              : {}),
            ...finalInputProps,
          }}
        />
      )
    }

    return (
      <FormControl sx={{ ...styles, width: 1 }} error={isError}>
        {labelTop && (
          <Typography
            sx={{
              marginBottom: '5px',
              color: 'text.primary',
              fontWeight: 'Medium',
            }}
          >
            {labelTop}
          </Typography>
        )}

        {control ? (
          <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error: fieldError } }) =>
              renderField({
                ...commonProps,
                ...field,
                InputLabelProps: { sx: { color: 'GrayText' } },
                error: !!fieldError,
                helperText: fieldError?.message || helperText,
              })
            }
          />
        ) : (
          renderField({
            ...commonProps,
            placeholder: props.placeholder,
            color: 'primary',
            InputLabelProps: { sx: { color: 'GrayText' } },
            error: !!error,
            helperText: error || helperText,
            name: { name },
          })
        )}

        {helperText && !isError && (
          <FormHelperText
            sx={{ mt: '0 !important', color: '#6C6A6A', fontWeight: 500 }}
          >
            {helperText}
          </FormHelperText>
        )}

        {isError && errorMessageToShow == 'Role is required' && (
          <FormHelperText sx={{ mt: '0 !important', pl: 0, ml: 0 }}>
            {errorMessageToShow}
          </FormHelperText>
        )}
      </FormControl>
    )
  }
)

InputField.displayName = 'InputField'

export default InputField
