import React from 'react'

const formatLinkText = (text) => {
  const urlRegex = /((https?:\/\/[^\s]+))/g

  const parts = text?.split(urlRegex)

  return parts?.map((part, index) => {
    if (part?.match(urlRegex)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#1976d2', textDecoration: 'underline' }}
        >
          {part}
        </a>
      )
    }
    return <React.Fragment key={index}>{part}</React.Fragment>
  })
}

export default formatLinkText
