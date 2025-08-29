'use client'
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'

export default function SelectBox({
  initValue = null,
  name,
  labelTop,
  label,
  items = [],
  error = '',
  addNew = false,
  styles = {},
  minWidth = '150px',
  sx = {},
  required,
  addHandle = () => {},
  search = () => {},
  handleChange = () => {},
  disabled = false,
  control = null,
  ...props
}) {
  const [selected, setSelected] = useState(initValue)
  const rand = `select__${Math.ceil(Math.random())}`

  useEffect(() => {
    setSelected(initValue)
  }, [initValue])

  const handleSelect = (e) => {
    setSelected(e.target.value)
    handleChange(e)
  }

  const printError = () => {
    if (error) {
      return (
        <FormHelperText sx={{ color: '#d32f2f', mt: '0 !important' }}>
          {error}
        </FormHelperText>
      )
    }
  }

  const renderSelect = (value, onChange) => (
    <Select
      id={rand}
      onChange={(e) => {
        onChange(e)
      }}
      value={value}
      sx={{ ...sx, backgroundColor: 'white' }}
      name={name}
      required={required}
      error={Boolean(error)}
      disabled={disabled}
    >
      {addNew && (
        <MenuItem value="" onClick={() => addHandle(true)}>
          Add New
        </MenuItem>
      )}
      {!items || !items.length ? (
        <MenuItem disabled>{'No Options'}</MenuItem>
      ) : (
        items.map((_v, _i) => (
          <MenuItem key={_i} value={_v.value}>
            {_v.label}
          </MenuItem>
        ))
      )}
    </Select>
  )

  return (
    <Box sx={styles}>
      {labelTop && (
        <InputLabel
          id={rand}
          error={Boolean(error)}
          sx={{
            marginBottom: '5px',
            color: 'text.primary',
            fontWeight: 'Medium',
          }}
        >
          {labelTop}
        </InputLabel>
      )}
      <FormControl
        sx={{ minWidth: minWidth }}
        error={Boolean(error)}
        {...props}
      >
        {label && (
          <InputLabel
            id={rand}
            sx={{
              backgroundColor: 'background.white',
              color: 'GrayText',
              px: 0,
            }}
          >
            {label}
          </InputLabel>
        )}
        {control ? (
          <Controller
            name={name}
            control={control}
            defaultValue={initValue}
            render={({ field }) => renderSelect(field.value, field.onChange)}
          />
        ) : (
          renderSelect(selected, handleSelect)
        )}
      </FormControl>
    </Box>
  )
}
