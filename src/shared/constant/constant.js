import {
  Cancel,
  CheckCircle,
  EditNote,
  PendingActions
} from '@mui/icons-material'

export const APP_TOKEN = process.env.NEXT_PUBLIC_APP_TOKEN
export const API_URL = process.env.NEXT_PUBLIC_API_URL
export const DRAWER_BREAK_POINT = '(min-width:1000px)'
export const DRAWER_WIDTH = { xs: 260, md: 220, lg: 260 }
export const FLOW_SPACER = { md: 4, xs: 2 }

export let status = {
  Pending: { label: 'Pending', color: '#B0BEC5', icon: EditNote },
  "In Progress": {
    label: 'In Progress',
    color: '#FFD580',
    icon: PendingActions,
  },
  Completed: { label: 'Completed', color: '#90EE90', icon: CheckCircle },
  Cancelled: { label: 'Cancelled', color: '#FFB6C1', icon: Cancel },
}

export const orderStatus = [
  {
    label: 'Pending',
    value: 'Pending',
  },
  {
    label: 'In Progress',
    value: 'In Progress',
  },
  {
    label: 'Cancelled',
    value: 'Cancelled',
  },
  {
    label: 'Completed',
    value: 'Completed',
  },
]

export const ProfileMenus = [{ id: 2, path: '/login', label: 'Logout' }]

export const cardStyles = {
  card: {
    borderRadius: 6,
    p: 1,
    bgcolor: '#fdfdfd',
    '&:hover': {
      boxShadow: 20, // Using boxShadow instead of elevation for hover effect
    },
  },
}


export const faqsHome = [
  {
    id: 1,
    question: "How does Parcel2Go work?",
    answer: "Parcel2Go is the largest courier comparison site in the UK, with over 180 delivery services and free parcel comparison. <br /> <br />  If you need to send a parcel, just pop its measurements and destination into our quick quote tool and we will show you all of your cheapest shipping options, including next day delivery, 2+ day delivery and 3+ day delivery. <br /> <br /> Choose from couriers such as DPD, Evri and DHL and book your parcel delivery through us. We will send you a confirmation email once you complete your booking and you can track your parcel for free no matter what service you choose."
  },
  {
    id: 2,
    question: "How long does Parcel2Go take to deliver?",
    answer: "We can have your parcel where it needs to be as soon as this very same day or by tomorrow if you need us to! Our express delivery options mean we offer same day delivery with CitySprint and next day delivery through most of our UK couriers. With Parcelforce, your parcel could arrive before 9am, 10am or midday tomorrow. <br /><br /> And if you're not in a rush, we have a load of economy or standard 3 day delivery services from just £1.99 exc VAT too."
  },
  {
    id: 3,
    question: "Why is Parcel2Go cheaper?",
    answer: "We work with the UK's best couriers and international courier services to negotiate the cheapest prices for you. <br /><br /> Thousands of customers and businesses use us because our postage costs are unrivalled and if you find a cheaper price elsewhere on a comparable service, we will match it. We’re committed to finding you the cheapest postage while offering you the best parcel sending experience possible. That’s our mission"
  },
  {
    id: 4,
    question: "Who delivers for Parcel2Go?",
    answer: "We work with the UK’s best couriers, including Royal Mail, Evri, Parcelforce and more! We also have a huge selection of international courier services if you need global shipping. <br /><br /> When you send a parcel with us, you can choose from a wide variety of delivery services to suit your needs. And we’re always working on building relationships with even more couriers to bring you the cheapest parcel delivery."
  },
  {
    id: 5,
    question: "How do I get started with business shipping?",
    answer: "Delivery times can vary by location and by service you choose. It’s best to enter your parcel’s size, destination and expected collection date to get an exact time of delivery. Find more information about our delivery times."
  },
  {
    id: 6,
    question: "What is Parcel2Go PrePay?",
    answer: "PrePay is a way of adding credit to your Parcel2Go account. Having money preloaded onto your account can make booking your parcel delivery even quicker and easier. And when you add £100 to your PrePay balance, you’ll get an extra 2% from us for free! <br /><br /> PrePay is great if you're a regular sender or want to save money on business postage. To add money onto your Parcel2Go account, go to your account and click 'PrePay'."
  },
  {
    id: 7,
    question: "How do I get postage labels with Parcel2Go?",
    answer: "Whether you're sending a parcel from home or managing a small business, getting postage labels with Parcel2Go is quick and easy. Many of our courier services offer label free drop offs where you simply scan a QR code when you drop off your parcel. Alternatively, you can download and print the shipping label at home, or choose a collection service where the courier brings the label to you at collection."
  },
]