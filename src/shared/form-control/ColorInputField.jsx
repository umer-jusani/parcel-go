'use client'

import { Controller } from 'react-hook-form'
import { MuiColorInput } from 'mui-color-input'
import { FormHelperText, FormControl } from '@mui/material'

export default function ColorInputField({
    name,
    control,
    label = 'Pick a color',
    defaultValue = '#000000',
    rules = {},
    format = 'hex',
    size = 'medium',
    fullWidth = true,
    variant = 'outlined',
    sx = {},
}) {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            rules={rules}
            render={({ field, fieldState: { error } }) => (
                <FormControl fullWidth={fullWidth}>
                    <MuiColorInput
                        {...field}
                        label={label}
                        format={format}
                        size={"small"}
                        fullWidth={fullWidth}
                        variant={variant}
                        sx={sx}
                        error={!!error}
                    />
                    {error && (
                        <FormHelperText error>
                            {error.message}
                        </FormHelperText>
                    )}
                </FormControl>
            )}
        />
    )
}
