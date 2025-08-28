import { Controller, useForm } from 'react-hook-form'
import * as PropTypes from 'prop-types'
import { Checkbox, FormControlLabel, Stack, Typography } from '@mui/material'

const UICheckbox = ({
  name = 'checkbox',
  control = null,
  size = 'small',
  onChange = () => {},
  label = 'Label',
  ...otherProps
}) => {
  const { control: fallbackControl } = useForm()

  if (!control) {
    return (
      <Checkbox
        onChange={(e, checked) => onChange(checked)}
        size={size}
        {...otherProps}
      />
    )
  }

  return (
    <Controller
      name={name}
      control={control || fallbackControl}
      render={({ field: { onChange, ...field } }) => (
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e, checked) => onChange(checked)}
              size={size}
              checked={!!field.value}
              {...field}
              {...otherProps}
            />
          }
          label={label}
        />
      )}
    />
  )
}

export default UICheckbox

UICheckbox.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  control: PropTypes.object,
}
