import { Typography } from '@mui/material'
import React from 'react'
import InputField from './InputField'
import UiAutoComplete from '../components/UiAutoComplete'
import SelectBox from './select-box'

export default function EditableField({
  edit,
  value,
  name = '',
  size = 'small',
  control,
  type,
  items = [],
  url,
  secondaryValue,
  // variant='contained',
  ...props
}) {
  return (
    <>
      {edit ? (
        type === 'autocomplete' ? (
          <UiAutoComplete
            // variant={variant}
            value={secondaryValue || value}
            name={name}
            size={size}
            secondaryValue={secondaryValue}
            {...props}
            control={control}
            url={url}
          />
        ) : type === 'select_box' ? (
          <SelectBox
            name={name}
            items={items}
            {...props}
            sx={{ width: '100%' }}
            size={size}
            control={control}
          />
        ) : (
          <InputField
            value={value}
            name={name}
            size={size}
            {...props}
            type
            control={control}
          />
        )
      ) : (
        <Typography variant="body2">
          {value || secondaryValue || '--'}
        </Typography>
      )}
    </>
  )
}
