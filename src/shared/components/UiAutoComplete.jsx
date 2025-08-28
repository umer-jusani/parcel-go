'use client'
import React, { useState, useEffect } from 'react'
import {
  Autocomplete,
  TextField,
  CircularProgress,
  debounce,
} from '@mui/material'
import { Controller } from 'react-hook-form'
import ApiManager from '../hoc/useApiManager'

export default function UiAutoComplete({
  url: path = '/country?page=1&per_page=250',
  control,
  name,
  defaultValue,
  variant,
  secondaryValue,
  minWidth = '150px',
  opt = [],
  optionRenderKeys = {
    label: 'label',
    value: 'value',
  },
  ...props
}) {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])

  const getData = async (search) => {
    if (opt?.length) {
      setData(
        opt?.map((e) => ({
          id: e[optionRenderKeys?.value],
          name: e[optionRenderKeys?.label],
        }))
      )
      return
    }
    if (!path) return
    if (search) path += `&search=${search}`
    setIsLoading(true)
    try {
      const { data } = await ApiManager({ path })
      console.log(data)
      if (data.status == 200 && data?.response) {
        let filteredData = data?.response?.details
        if (!Array.isArray(filteredData)) filteredData = filteredData?.items
        setData(
          filteredData?.map((each) => ({
            id: each.id,
            name:
              each?.name ||
              each?.title ||
              each?.dealName ||
              each?.label ||
              each?.range ||
              each?.first_name + ' ' + each?.last_name,
            ...(each?.code && { code: each?.code }),
            ...(each?.country_code && { country_code: each?.country_code }),
          }))
        )
      }
    } catch (error) {
      console.log('🚀 ~ getData ~ error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData('')
  }, [])

  const debouncedGetData = debounce((searchValue) => {
    // Update the search state
    getData(searchValue) // Fetch data based on the search value
  }, 500)

  const renderAutocomplete = (onChange = null, fieldState = null) => (
    <Autocomplete
      {...props}
      onChange={(_, newValue) => {
        onChange?.(newValue)
        props?.onChange?.(newValue)
      }}
      onOpen={() => getData('')}
      loading={isLoading}
      options={path ? data : options}
      getOptionLabel={(option) => option?.name || ''}
      isOptionEqualToValue={(option, value) => option?.id === value?.id}
      renderInput={(params) => (
        <TextField
          {...params}
          error={Boolean(fieldState?.error)}
          helperText={fieldState?.error?.message}
          variant={variant}
          label={props?.label}
          InputLabelProps={{
            style: { color: 'GrayText' },
          }}
          sx={{
            '& .MuiInputBase-input': { color: 'black' },
            minWidth: minWidth,
          }}
          placeholder={props?.label}
          onChange={(e) => debouncedGetData(e.target.value)}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {props.loading && <CircularProgress size={20} />}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      sx={{
        '& .MuiAutocomplete-noOptions': { color: 'black !important' }, // No options text
        '& .MuiAutocomplete-option': { color: 'black !important' }, // Dropdown options
        '& .MuiAutocomplete-loading': { color: 'black !important' }, // Loading text
        '& .MuiCircularProgress-root': { color: 'black !important' }, // Loading spinner
      }}
    />
  )

  return control ? (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || null}
      render={({ field, fieldState }) => {
        return renderAutocomplete(field?.onChange, field?.value, fieldState)
      }}
    />
  ) : (
    renderAutocomplete(null, null)
  )
}
