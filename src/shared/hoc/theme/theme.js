import { createTheme, responsiveFontSizes } from '@mui/material'
import { Inter, Roboto } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  display: 'swap',
})
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display:'swap',
})

let theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // ✅ Fix applied
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          textAlign: 'center',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'rgba(245, 245, 245, 1)', // Change this to your desired color
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      dialogScreen: 720,
      md: 900,
      normal: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: `'Livvic', ${inter.style.fontFamily}, ${roboto.style.fontFamily}`,
    Regular: 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 900,
    fontSize: 14, // Default font size
    sizes: {
      100: '13px',
      sm: '14px',
      md: '16px',
      lg: '17px',
      lg: '18px',
      xl: '20px',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#038e00',
      light: '#27ce5a',
    },
    secondary: {
      main: '#0254ad',
      light: "#ffff",
      dark: "#19547c",
      "100": "#19547c"
    },
    text: {
      primary: "#15537d",
      // light: '#15537d',
      secondary: 'rgba(0, 0, 0, 1)',
      white: 'white',
      disabled: 'rgba(118, 118, 118, 1)',
    },
    success: {
      main: '#4caf50', // Add this line to fix the error
    },
    warning: {
      main: '#ff9800',
    },
    background: {
      default: '#ebebeb',
      paper: 'rgba(245, 245, 245, 1)',
      lightBlue: '#f1f6fe',
      white: 'white',
      footer: '#323c46',
      "100": '#f0dbe0ff',
      "200": '#000032',
    },
    divider: 'rgba(232, 232, 232, 1)',
  },
})

theme = responsiveFontSizes(theme)

export default theme
