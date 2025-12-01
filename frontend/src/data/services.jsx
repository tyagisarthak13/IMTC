import AadharIcon from "../assets/AadhaarIcon.png";
import AePSIcon from "../assets/AePSIcon.png";
import BusIcon from "../assets/BusIcon.png";
import CMSIcon from "../assets/CMSIcon.png";
import CorporateCardIcon from "../assets/CorporateCardIcon.png";
import FastagIcon from "../assets/FastagIcon.png";
import FlightIcon from "../assets/FlightIcon.png";
import HotelIcon from "../assets/HotelIcon.png";
import InsuranceIcon from "../assets/InsuranceIcon.png";
import mATMIcon from "../assets/mATMIcon.png";
import POSIcon from "../assets/POSIcon.png";
import QRIcon from "../assets/QRIcon.png";
import RechargeIcon from "../assets/RechargeIcon.png";
import TourPackageIcon from "../assets/TourPackageIcon.png";
import UtilitiesBillPaymentIcon from "../assets/UtilitiesBillPaymentIcon.png";

import aadharDeposit from "../assets/aadharDeposit.webp";
import aepsService from "../assets/aepsService.png";
import bus from "../assets/bus.jpeg";
import corporateCard from "../assets/corporateCard.webp";
import fastag from "../assets/fastag.webp";
import flight from "../assets/flight.avif";
import hotelBooking from "../assets/hotelBooking.webp";
import insuranceLife from "../assets/insuranceLife.webp";
import microATM from "../assets/microATM.webp";
import pos from "../assets/pos.webp";
import QR from "../assets/QR.webp";
import rechargeSolution from "../assets/rechargeSolution.webp";
import travel from "../assets/travel.webp";
import cms from "../assets/cms.png";
import utility from "../assets/utility.jpg";

const raw = [
  {
    name: "Aeps",
    icon: AePSIcon,
    description: "AEPS: Aadhaar Enabled Payment System for cash-in/cash-out.",
    info: `IMTC has made a significant leap in supporting the government's initiative to drive financial inclusion across India through its Aadhaar banking services.
With IMTC, customers can now easily access services such as Cash Withdrawal, Balance Enquiry, Mini-Statements, Aadhaar Pay, and Cash Deposits. These services are available through the IMTC platform, benefiting not only the customers but also retailers, particularly in rural areas.`,
    image: aepsService,
    featuresTitle: "Why retailers prefer to become IMTC AePS Service Provider",
    features: [
      "Higher Commission",
      "Grow Your Business And Earn Extra Income",
      "Regular Product Training",
      "Best In Industry Sales Support",
      "Dedicated Customer Service Team",
    ],
  },
  {
    name: "CMS",
    icon: CMSIcon,
    description: "Cash Management Services for merchants.",
    info: `Cash Management Service (CMS) with IMTC
Redefining Banking for Merchants! At IMTC, we are transforming the way merchants manage their finances with our Cash Management Service (CMS). Our CMS portal allows agents and merchants to pay all their CMS bills in one convenient place, ensuring efficient, hassle-free financial management. By using our platform, you can streamline your business operations while earning a substantial commission on every transaction.`,
    image: cms,
    featuresTitle: "Why Choose IMTC for CMS Payments?",
    features: [
      "One-Stop Solution",
      "Earn High Commissions",
      "Easy, Fast, and Secure",
      "Redefining Banking for Merchants",
      "24x7 Customer Support",
    ],
  },
  {
    name: "Flight Booking",
    icon: FlightIcon,
    description: "Book Your Flights with IMTC!",
    info: `At IMTC, we understand that traveling should be easy and enjoyable. That’s why we offer a seamless flight booking service designed to provide you with the best travel options while saving you time and effort.Whether you’re planning a business trip, a family vacation, or a spontaneous getaway, we’ve got you covered!`,
    image: flight,
    featuresTitle: "Why Choose IMTC for Flight Booking?",
    features: [
      "Wide Range of Options",
      "User-Friendly Interface",
      "Exclusive Offers",
      "24/7 Customer Support",
      "Secure Transactions",
      "Highest commission",
    ],
  },
  {
    name: "mATM",
    icon: mATMIcon,
    description: "Empowering Merchants with Micro ATM Services",
    info: `Transform Your Business with Our Micro ATM Solutions
At IMTC, we are revolutionizing the way merchants conduct transactions. Our Micro ATM service empowers businesses to offer seamless banking services right at their storefronts, providing convenience and enhancing customer experience.`,
    image: microATM,
    featuresTitle: "Why Choose IMTC Micro ATM Service ?",
    features: [
      "Convenient Access",
      "Secure Transactions",
      "Increase Revenue Streams",
      "24/7 Customer Support",
      "Instant Settlement",
    ],
  },
  {
    name: "Recharge",
    icon: RechargeIcon,
    description: "Your One-Stop Solution for Mobile and DTH Recharge Services",
    info: `At IMTC, we are committed to making your life easier with our comprehensive mobile and DTH recharge services. Whether you need to top up your mobile phone or recharge your DTH connection, we’ve got you covered. Our user-friendly platform and seamless transactions ensure that you can recharge anytime, anywhere.`,
    image: rechargeSolution,
    featuresTitle: "Services We Provide",
    features: [
      "Convenience at Your Fingertips",
      "Wide Range of Options",
      "Instant Recharge",
      "24/7 Customer Support",
    ],
  },
  {
    name: "Aadhar Deposit",
    icon: AadharIcon,
    description: "Transforming Banking with Aadhaar Deposit Services",
    info: "IMTC Aadhaar Deposit Service allows customers to deposit cash directly into their bank accounts using their Aadhaar number and biometric authentication. This service, facilitated through micro-ATMs, provides a convenient and secure way for individuals, especially in rural and underserved areas, to access banking services without needing to visit a physical bank branch. It's a simple and efficient solution for those looking to manage their finances quickly and easily, enhancing financial inclusion across Tier 2 and Tier 3 cities.",
    image: aadharDeposit,
    featuresTitle: "Benefits of Aadhaar Deposit",
    features: [
      "Accessible Anywhere",
      "Quick & Easy",
      "Empowering Rural Areas",
      "24/7 Customer Support",
    ],
  },
  {
    name: "Corporate Card",
    icon: CorporateCardIcon,
    description: "Corporate card solutions.",
    info: "IMTC Corporate Card is here to transform the way businesses manage expenses and gifting. Whether for clients, customers, or merchants, our card brings unparalleled ease, control, and rewards — all in one powerful solution.",
    image: corporateCard,
    featuresTitle: "Why Choose a IMTC Corporate Card ?",
    features: [
      "Simplified Gifting for Clients & Customers",
      "Intuitive Expense Controls",
      "Instant Reporting & Analytics",
      "Boosted Merchant Relationships",
    ],
  },
  {
    name: "Hotel Booking",
    icon: HotelIcon,
    description:
      "Book Hotels Worldwide with IMTC your Gateway to Global Hospitality!",
    info: "IMTC offers agents the power to book hotels online with ease, providing a seamless experience for clients no matter where they’re headed. With our extensive network of hotels, from luxury to budget-friendly stays, we have the perfect option for every traveler.",
    image: hotelBooking,
    featuresTitle: "Why Choose IMTC for Hotel Booking?",
    features: [
      "Quality Assurance",
      "Affordable Prices",
      "24/7 Customer Support",
    ],
  },
  {
    name: "POS",
    icon: POSIcon,
    description: "UPI or Card, Simplified in One Device, One App!",
    info: "IMTC POS machines offer a complete payment solution that accepts both UPI and card payments through a single device and application. Our advanced POS systems provide seamless transaction processing, real-time reporting, and secure payment handling for businesses of all sizes. Whether it's debit cards, credit cards, or UPI payments, our unified platform ensures smooth and efficient payment experiences for both merchants and customers.",
    image: pos,
    featuresTitle: "The ultimate card machine for all your business needs",
    features: [
      "Unmatched Payment Success",
      "Reliable System Uptime",
      "Excellent Operational Efficiency",
      "Powerful Affordability Suite",
    ],
  },
  {
    name: "Travel Package",
    icon: TourPackageIcon,
    description: "Empowering Merchants to Offer Unmatched Travel Experiences",
    info: "IMTC offers a comprehensive B2B travel package booking service that lets agents and merchants provide a wide array of travel options, from custom packages to group adventures. Through our app and web portal, you can book exclusive travel packages, tailored to every client’s need—from family vacations and adventure getaways to religious tours and corporate travel (FIT & MICE).",
    image: travel,
    featuresTitle: "Why Choose IMTC for Travel Package Bookings?",
    features: [
      "Diverse Range of Packages",
      "Competitive Pricing",
      "Revenue Growth for Merchants",
      "User-Friendly Portal & App",
      "Reliable Support",
    ],
  },
  {
    name: "Bus Booking",
    icon: BusIcon,
    description: "Book Your Bus Tickets with IMTC - Fast, Easy & Affordable!",
    info: "With IMTC, you can provide your customers with seamless bus booking services across India while earning a solid commission on every booking. Our platform offers a wide network of bus routes, easy-to-use booking tools, and exclusive rewards for merchants who want to grow their income by meeting the travel needs of their community.",
    image: bus,
    featuresTitle: "Why Choose IMTC for Bus Booking?",
    features: [
      "Vast Network of Routes",
      "Instant Bookings & Confirmations",
      "Best Discounts & Commissions",
      "24/7 Customer Support",
    ],
  },
  {
    name: "Fastag",
    icon: FastagIcon,
    description: "Recharge Your FasTAG Online with IMTC",
    info: "Welcome to IMTC, your one-stop solution for convenient and hassle-free FasTAG recharge! Say goodbye to long queues and tedious processes—now you can recharge your FasTAG quickly and securely from the comfort of your home.",
    image: fastag,
    featuresTitle: "Benefits of Using Fast Tag",
    features: ["Avoid Traffic Jams", "Save Money", "Track Your Expenses"],
  },
  {
    name: "Insurance",
    icon: InsuranceIcon,
    description: "Secure Your Future, Boost Your Earnings!",
    info: "At IMTC, we believe that financial security should be accessible to everyone. Our new general insurance service allows merchants to offer a wide range of insurance products, ensuring your customers are well-protected while you maximize your earnings through high commissions.",
    image: insuranceLife,
    featuresTitle: "Why Choose IMTC for Insurance?",
    features: [
      "Comprehensive Insurance Options",
      "Earn More with Every Policy Sold",
      "Simple and User-Friendly Portal",
      "Training and Support",
    ],
  },
  {
    name: "QR Collection",
    icon: QRIcon,
    description: "Accept Payments Seamlessly with QR Collection!",
    info: "Upgrade your payment process with our QR Collection system, designed specifically for merchants who use a system setup. Make receiving payments fast, secure, and easy with QR codes directly on your screen — ideal for in-store, on-desk, or checkout payments.",
    image: QR,
    featuresTitle: "Why Choose IMTC QR Collection?",
    features: [
      "Instant Payment Collection",
      "User-Friendly System",
      "Effortless Setup",
      "Enhanced Security",
      "Daily Settlements",
    ],
  },
  {
    name: "Utility Bill Payment",
    icon: UtilitiesBillPaymentIcon,
    description: "Welcome to the future of effortless bill payments with IMTC!",
    info: "As a retailer, offering bill payment services is not just a convenience—it's a strategic way to enhance your profitability. With IMTC, you can seamlessly integrate the Bharat Bill Payment System (BBPS) into your operations. This allows you to boost your revenue while providing an enhanced customer experience.",
    image: utility,
    featuresTitle: "Why Choose IMTC for Utility Bill Payments?",
    features: [
      "One-Stop Bill Payment Solution",
      "Wide Range of Billers Supported",
      "Instant Payment Processing",
      "24/7 Service Availability",
    ],
  },
];

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

const services = raw.map((s) => ({ ...s, slug: slugify(s.name) }));

export default services;
