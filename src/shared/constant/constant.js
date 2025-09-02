import {
  Cancel,
  CheckCircle,
  EditNote,
  PendingActions,
} from "@mui/icons-material";

export const APP_TOKEN = process.env.NEXT_PUBLIC_APP_TOKEN;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const DRAWER_BREAK_POINT = "(min-width:1000px)";
export const DRAWER_WIDTH = { xs: 260, md: 220, lg: 260 };
export const FLOW_SPACER = { md: 4, xs: 2 };

export let status = {
  Pending: { label: "Pending", color: "#B0BEC5", icon: EditNote },
  "In Progress": {
    label: "In Progress",
    color: "#FFD580",
    icon: PendingActions,
  },
  Completed: { label: "Completed", color: "#90EE90", icon: CheckCircle },
  Cancelled: { label: "Cancelled", color: "#FFB6C1", icon: Cancel },
};

export const orderStatus = [
  {
    label: "Pending",
    value: "Pending",
  },
  {
    label: "In Progress",
    value: "In Progress",
  },
  {
    label: "Cancelled",
    value: "Cancelled",
  },
  {
    label: "Completed",
    value: "Completed",
  },
];

export const Quantity = [
  {
    label: "1",
    value: "1",
  },
  {
    label: "2",
    value: "2",
  },
  {
    label: "3",
    value: "3",
  },

  {
    label: "4",
    value: "4",
  },

  {
    label: "5",
    value: "5",
  },

  {
    label: "6",
    value: "6",
  },

  {
    label: "7",
    value: "7",
  },

  {
    label: "8",
    value: "8",
  },

  {
    label: "9",
    value: "9",
  },

  {
    label: "10",
    value: "10",
  },
  {
    label: "11",
    value: "11",
  },
  {
    label: "12",
    value: "12",
  },
  {
    label: "13",
    value: "13",
  },
  {
    label: "14",
    value: "14",
  },
  ,
  {
    label: "15",
    value: "15",
  },
  {
    label: "16",
    value: "16",
  },
  {
    label: "17",
    value: "17",
  },
  {
    label: "18",
    value: "18",
  },
  {
    label: "19",
    value: "19",
  },
  {
    label: "20",
    value: "20",
  },
  {
    label: "21",
    value: "21",
  },
  {
    label: "22",
    value: "22",
  },
  {
    label: "23",
    value: "23",
  },
  {
    label: "24",
    value: "24",
  },
  {
    label: "25",
    value: "25",
  },
  {
    label: "26",
    value: "26",
  },
  {
    label: "27",
    value: "27",
  },
  {
    label: "28",
    value: "28",
  },
  {
    label: "29",
    value: "29",
  },
  {
    label: "30",
    value: "30",
  },
  {
    label: "31",
    value: "31",
  },
  {
    label: "32",
    value: "32",
  },
  {
    label: "33",
    value: "33",
  },
  {
    label: "34",
    value: "34",
  },
  {
    label: "35",
    value: "35",
  },
  {
    label: "36",
    value: "36",
  },
  {
    label: "37",
    value: "37",
  },

  {
    label: "38",
    value: "38",
  },
  {
    label: "39",
    value: "39",
  },
  {
    label: "40",
    value: "40",
  },
  {
    label: "41",
    value: "41",
  },
  {
    label: "42",
    value: "42",
  },
  {
    label: "43",
    value: "43",
  },
  {
    label: "44",
    value: "44",
  },
  {
    label: "45",
    value: "45",
  },
  {
    label: "46",
    value: "46",
  },
  {
    label: "47",
    value: "47",
  },
  {
    label: "48",
    value: "48",
  },

  {
    label: "49",
    value: "49",
  },
  {
    label: "50",
    value: "50",
  },
];

export const SendFrom = [
  {
    label: "UK",
    value: "UK",
  },
  {
    label: "America",
    value: "America",
  },
  {
    label: "Canada",
    value: "Canada",
  },
  {
    label: "Europe",
    value: "Europe",
  },
  {
    label: "Australia",
    value: "Australia",
  },
  {
    label: "Other",
    value: "Other",
  },
];

export const SendTo = [
  {
    label: "UK",
    value: "UK",
  },
  {
    label: "America",
    value: "America",
  },
  {
    label: "Canada",
    value: "Canada",
  },
  {
    label: "Europe",
    value: "Europe",
  },
  {
    label: "Australia",
    value: "Australia",
  },
  {
    label: "Other",
    value: "Other",
  },
];

export const ProfileMenus = [{ id: 2, path: "/login", label: "Logout" }];

export const cardStyles = {
  card: {
    borderRadius: 6,
    p: 1,
    bgcolor: "#fdfdfd",
    "&:hover": {
      boxShadow: 20, // Using boxShadow instead of elevation for hover effect
    },
  },
};

export const faqsHome = [
  {
    id: 1,
    question: "How does Parcel2Go work?",
    answer:
      "Parcel2Go is the largest courier comparison site in the UK, with over 180 delivery services and free parcel comparison. <br /> <br />  If you need to send a parcel, just pop its measurements and destination into our quick quote tool and we will show you all of your cheapest shipping options, including next day delivery, 2+ day delivery and 3+ day delivery. <br /> <br /> Choose from couriers such as DPD, Evri and DHL and book your parcel delivery through us. We will send you a confirmation email once you complete your booking and you can track your parcel for free no matter what service you choose.",
  },
  {
    id: 2,
    question: "How long does Parcel2Go take to deliver?",
    answer:
      "We can have your parcel where it needs to be as soon as this very same day or by tomorrow if you need us to! Our express delivery options mean we offer same day delivery with CitySprint and next day delivery through most of our UK couriers. With Parcelforce, your parcel could arrive before 9am, 10am or midday tomorrow. <br /><br /> And if you're not in a rush, we have a load of economy or standard 3 day delivery services from just £1.99 exc VAT too.",
  },
  {
    id: 3,
    question: "Why is Parcel2Go cheaper?",
    answer:
      "We work with the UK's best couriers and international courier services to negotiate the cheapest prices for you. <br /><br /> Thousands of customers and businesses use us because our postage costs are unrivalled and if you find a cheaper price elsewhere on a comparable service, we will match it. We’re committed to finding you the cheapest postage while offering you the best parcel sending experience possible. That’s our mission",
  },
  {
    id: 4,
    question: "Who delivers for Parcel2Go?",
    answer:
      "We work with the UK’s best couriers, including Royal Mail, Evri, Parcelforce and more! We also have a huge selection of international courier services if you need global shipping. <br /><br /> When you send a parcel with us, you can choose from a wide variety of delivery services to suit your needs. And we’re always working on building relationships with even more couriers to bring you the cheapest parcel delivery.",
  },
  {
    id: 5,
    question: "How do I get started with business shipping?",
    answer:
      "Delivery times can vary by location and by service you choose. It’s best to enter your parcel’s size, destination and expected collection date to get an exact time of delivery. Find more information about our delivery times.",
  },
  {
    id: 6,
    question: "What is Parcel2Go PrePay?",
    answer:
      "PrePay is a way of adding credit to your Parcel2Go account. Having money preloaded onto your account can make booking your parcel delivery even quicker and easier. And when you add £100 to your PrePay balance, you’ll get an extra 2% from us for free! <br /><br /> PrePay is great if you're a regular sender or want to save money on business postage. To add money onto your Parcel2Go account, go to your account and click 'PrePay'.",
  },
  {
    id: 7,
    question: "How do I get postage labels with Parcel2Go?",
    answer:
      "Whether you're sending a parcel from home or managing a small business, getting postage labels with Parcel2Go is quick and easy. Many of our courier services offer label free drop offs where you simply scan a QR code when you drop off your parcel. Alternatively, you can download and print the shipping label at home, or choose a collection service where the courier brings the label to you at collection.",
  },
];

export const faqsQuickQuote = [
  {
    id: 1,
    question: "What is the cheapest way to send a parcel?",
    answer:
      "The cheapest way to send a parcel is with Parcel2Go from just £1.99 exc VAT. Our cheapest courier service is currently provided by Evri, but we have a range of affordable delivery prices with a variety of couriers, including Yodel Direct, FedEx, and DPD. <br /><br /> Whether you need next day delivery or to send a parcel abroad, filter our quote results page by price to find the cheapest delivery service for you. <br /><br /> All of Parcel2Go’s cheapest prices are based on the cost of sending a 1kg parcel, but enter your parcel’s weight and dimensions into the quick quote tool above to get an accurate price.",
  },
  {
    id: 2,
    question: "Which courier service is the best in the UK?",
    answer:
      "The best courier service in the UK depends on your needs. Use Parcel2Go’s quick quote tool to easily compare a range of courier services by price, speed and customer rating. Book your parcel delivery in minutes! <br /><br /> And if you’re looking for the cheapest courier service, Parcel2Go is guaranteed to be your cheapest option. And with free tracking available with every order, you can rest assured your parcel will arrive where and when you need it to.",
  },
  {
    id: 3,
    question: "How to send multiple parcels?",
    answer:
      "To send multiple parcels at once, use our quick quote tool as usual but change the quantity of parcels you’d like to send. If you're sending parcels with different sizes or weights, alter this in just seconds when you get a Parcel2Go quote. <br /><br /> Choose your preferred courier service and follow the booking process as usual - you can enter the different values, contents and delivery addresses for your parcels before you book. <br /><br /> And if bulk parcel delivery is something you manage regularly, you could benefit from using Smart Send. Our free shipping management tool allows you to oversee parcel delivery from multiple sales channels all from one place, as well as automating your orders. Smart Send can save you bags of time on admin and allows you to streamline your parcel delivery.",
  },
];
