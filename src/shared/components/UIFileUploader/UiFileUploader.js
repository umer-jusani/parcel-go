'use client'

import { useState, useEffect } from 'react'
import { Upload, Delete, QrCodeScannerOutlined } from '@mui/icons-material'
import { Box, Typography, IconButton, CircularProgress } from '@mui/material'
import Image from 'next/image'
import * as PropTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'

import { StyledCardDropzone } from './ui'
import { pdfPreview } from '@/assests'
import UIFileUploaderSkeleton from './UIFileUploaderSkeleton'

const UIFileUploader = ({
  accept = 'application/pdf',
  multiple = false,
  onChange = () => {},
  title = 'Attachments',
  label = '',
  initialImages = [],
  onDel = () => {},
  errorMessage = '',
  loading = false,
  loader = false,
  showDelBtn = false,
  isPreview = true,
  height = '11em',
  maxfiles = 80,
  disabled = false,
}) => {
  const [previews, setPreviews] = useState([])
  const [removedPreviews, setRemovedPreviews] = useState([])
  const [error, setError] = useState('')
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    multiple,
    maxFiles: multiple ? maxfiles : 1,
    disabled, // Add disabled prop here
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (disabled) return // Prevent file handling if disabled
      setError('')
      if (multiple && previews.length + acceptedFiles.length > maxfiles) {
        setError(`Maximum ${maxfiles} files allowed`)
        return
      }

      if (
        rejectedFiles?.length > 0 &&
        rejectedFiles[0]?.errors[0]?.code === 'too-many-files'
      ) {
        setError(`Maximum ${multiple ? maxfiles : 1} files allowed`)
        return
      }

      console.log(acceptedFiles, "acceptedFiles")

      const invalidFiles = acceptedFiles?.filter(
        (file) => !accept.includes(file.type)
      )
      if (invalidFiles.length > 0) {
        setError(
          accept?.includes('pdf')
            ? 'Only pdf files are allowed.'
            : 'Only images are allowed.'
        )
        return
      }

      const newPreviews = acceptedFiles.map((file) => {
        return {
          file,
          preview: URL.createObjectURL(file),
          type: file.type.startsWith('video/')
            ? 'video'
            : file.type.startsWith('image/')
            ? 'image'
            : 'pdf',
        }
      })

      if (multiple) {
        setPreviews((prev) => [...prev, ...newPreviews])
      } else {
        setPreviews(newPreviews)
      }
    },
  })

  useEffect(() => {
    if (previews.length > 0) {
      onChange(previews.map((item) => item.file || item))
    }
  }, [previews])

  const handleRemoveImage = (index) => {
    if (disabled) return // Prevent removal if disabled

    setPreviews((prev) => {
      const updatedPreviews = prev.filter((_, i) => i !== index)
      onChange(updatedPreviews?.map((item) => item.file || item))
      return updatedPreviews
    })

    if (previews[index]?.preview) {
      setRemovedPreviews((prev) => [...prev, previews[index].preview])
    }
  }

  useEffect(() => {
    if (initialImages?.length) {
      const initialPreviews = initialImages.map((image) => ({
        ...image,
      }))
      setPreviews(initialPreviews)
    }
  }, [initialImages])

  useEffect(() => {
    removedPreviews.forEach((url) => {
      URL.revokeObjectURL(url)
    })

    if (removedPreviews.length > 0) {
      setRemovedPreviews([])
    }
  }, [removedPreviews])

  if (loader) {
    return <UIFileUploaderSkeleton multiple={multiple} height={height} />
  }

  return (
    <Box m={0}>
      <Typography fontWeight="800" variant="h5">
        {label}
      </Typography>
      <input
        type="file"
        disabled={disabled}
        multiple={multiple}
        hidden
        {...getInputProps()}
      />
      <StyledCardDropzone
        sx={(theme) => ({
          ...((errorMessage || error) && {
            border: `1px solid ${theme.palette.error.main}`,
            '&:hover': {
              border: `1px solid ${theme.palette.error.main}`,
            },
          }),
          ...(disabled && {
            opacity: 0.5,
            cursor: 'not-allowed',
            pointerEvents: 'none',
          }),
        })}
        disabled={disabled}
        height={height}
        isDragActive={isDragActive}
        {...getRootProps()}
      >
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <Upload style={{ opacity: disabled ? 0.5 : 1 }} />
            <Typography fontWeight={700}>{title}</Typography>
            <Typography color="text.main" variant="caption">
              {accept?.includes('pdf')
                ? 'Only PDF files are acceptable.'
                : 'Only Images are acceptable.'}
            </Typography>
          </>
        )}
      </StyledCardDropzone>
      <Typography color="error" variant="caption">
        {error || errorMessage}
      </Typography>

      {isPreview && previews.length > 0 ? (
        <Box mt={2} display="flex" flexWrap="wrap" gap={2}>
          {previews.map((filePreview, index) => {
            let checker = {}
            return (
              <Box
                key={index}
                display="flex"
                flexDirection="column"
                alignItems="center"
                position="relative"
              >
                {filePreview?.type === 'video' ? (
                  <video
                    src={filePreview.preview}
                    width={100}
                    height={100}
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      opacity: disabled ? 0.5 : 1,
                      cursor: disabled ? 'not-allowed' : 'pointer',
                    }}
                    controls
                  />
                ) : filePreview?.type === 'image' ? (
                  <Image
                    src={filePreview?.url || filePreview?.preview}
                    alt={`Preview ${index}`}
                    width={100}
                    height={100}
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      opacity: disabled ? 0.5 : 1,
                    }}
                    priority
                  />
                ) : filePreview?.type === 'pdf' ? (
                  <Image
                    src={pdfPreview}
                    alt={`Preview ${index}`}
                    width={100}
                    height={100}
                    style={{
                      width: '100px',
                      height: '100px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      opacity: disabled ? 0.5 : 1,
                    }}
                    priority
                  />
                ) : null}
                {showDelBtn && !disabled && (
                  <IconButton
                    size="small"
                    style={{
                      position: 'absolute',
                      top: -10,
                      right: -10,
                      background: 'rgba(0,0,0,0.5)',
                    }}
                    onClick={() => handleRemoveImage(index)}
                  >
                    <Delete style={{ color: '#fff' }} />
                  </IconButton>
                )}
              </Box>
            )
          })}
        </Box>
      ) : null}
    </Box>
  )
}

export default UIFileUploader

UIFileUploader.propTypes = {
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
  onDel: PropTypes.func,
  label: PropTypes.string,
  initialImages: PropTypes.array,
  disabled: PropTypes.bool,
}
