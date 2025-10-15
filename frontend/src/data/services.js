const raw = [
  {
    name: "Aeps",
    icon: "/services/_AePS.png",
    description: "AEPS: Aadhaar Enabled Payment System for cash-in/cash-out.",
    info: `Aadhar Enabled Payment Solutions (AePS)
IMTC has made a significant leap in supporting the government's initiative to drive financial inclusion across India through its Aadhaar banking services.
With IMTC, customers can now easily access services such as Cash Withdrawal, Balance Enquiry, Mini-Statements, Aadhaar Pay, and Cash Deposits. These services are available through the Simple Mudra platform, benefiting not only the customers but also retailers, particularly in rural areas. Retailers earn a commission on each transaction they complete, providing them with an additional income stream and contributing to the overall growth of their businesses.`,
    image: "/services/aeps service.webp",
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
    icon: "/services/_CMS.png",
    description: "Cash Management Services for merchants.",
    info: `Cash Management Service (CMS) with IMTC
Redefining Banking for Merchants! At IMTC, we are transforming the way merchants manage their finances with our Cash Management Service (CMS). Our CMS portal allows agents and merchants to pay all their CMS bills in one convenient place, ensuring efficient, hassle-free financial management. By using our platform, you can streamline your business operations while earning a substantial commission on every transaction.`,
    image: "/services/unnamed.png",
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
    icon: "/services/_Flight.png",
    description: "Book Your Flights with IMTC!",
    info: `At IMTC, we understand that traveling should be easy and enjoyable. That’s why we offer a seamless flight booking service designed to provide you with the best travel options while saving you time and effort.Whether you’re planning a business trip, a family vacation, or a spontaneous getaway, we’ve got you covered!`,
    image: "/services/flight.avif",
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
    icon: "/services/mATM.png",
    description: "Empowering Merchants with Micro ATM Services",
    info: `Transform Your Business with Our Micro ATM Solutions
At IMTC, we are revolutionizing the way merchants conduct transactions. Our Micro ATM service empowers businesses to offer seamless banking services right at their storefronts, providing convenience and enhancing customer experience.`,
    image: "/services/microATM.webp",
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
    icon: "/services/recharge_icon.png",
    description: "Your One-Stop Solution for Mobile and DTH Recharge Services",
    info: `At IMTC, we are committed to making your life easier with our comprehensive mobile and DTH recharge services. Whether you need to top up your mobile phone or recharge your DTH connection, we’ve got you covered. Our user-friendly platform and seamless transactions ensure that you can recharge anytime, anywhere.`,
    image: "/services/recharge-solution.webp",
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
    icon: "/services/_Aadhaar Deposite.png",
    description: "Transforming Banking with Aadhaar Deposit Services",
    info: "IMTC Aadhaar Deposit Service allows customers to deposit cash directly into their bank accounts using their Aadhaar number and biometric authentication. This service, facilitated through micro-ATMs, provides a convenient and secure way for individuals, especially in rural and underserved areas, to access banking services without needing to visit a physical bank branch. It's a simple and efficient solution for those looking to manage their finances quickly and easily, enhancing financial inclusion across Tier 2 and Tier 3 cities.",
    image: "/services/aadhar-deposit.webp",
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
    icon: "/services/Corporate Card.png",
    description: "Corporate card solutions.",
    info: "IMTC Corporate Card is here to transform the way businesses manage expenses and gifting. Whether for clients, customers, or merchants, our card brings unparalleled ease, control, and rewards — all in one powerful solution.",
    image: "/services/Corporate_Card.webp",
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
    icon: "/services/Hotel.png",
    description:
      "Book Hotels Worldwide with IMTC your Gateway to Global Hospitality!",
    info: "IMTC offers agents the power to book hotels online with ease, providing a seamless experience for clients no matter where they’re headed. With our extensive network of hotels, from luxury to budget-friendly stays, we have the perfect option for every traveler.",
    image: "/services/hotelbooking.webp",
    featuresTitle: "Why Choose IMTC for Hotel Booking?",
    features: [
      "Quality Assurance",
      "Affordable Prices",
      "24/7 Customer Support",
    ],
  },
  {
    name: "POS",
    icon: "/services/POS.png",
    description: "UPI or Card, Simplified in One Device, One App!",
    image: "/services/pos.webp",
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
    icon: "/services/Tour Package.png",
    description: "Empowering Merchants to Offer Unmatched Travel Experiences",
    info: "IMTC offers a comprehensive B2B travel package booking service that lets agents and merchants provide a wide array of travel options, from custom packages to group adventures. Through our app and web portal, you can book exclusive travel packages, tailored to every client’s need—from family vacations and adventure getaways to religious tours and corporate travel (FIT & MICE). As a trusted partner, our mission is to empower merchants with high-quality, affordable travel options that drive increased revenue.",
    image: "/services/travel.webp",
    featuresTitle: "Why Choose Simple Mudra for Travel Package Bookings?",
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
    icon: "/services/_Bus.png",
    description:
      "Book Your Bus Tickets with Simple Mudra Fast, Easy & Affordable!",
    info: "With IMTC, you can provide your customers with seamless bus booking services across India while earning a solid commission on every booking. Our platform offers a wide network of bus routes, easy-to-use booking tools, and exclusive rewards for merchants who want to grow their income by meeting the travel needs of their community.",
    image: "/services/bus.jpeg",
    featuresTitle: "Why Choose Simple Mudra for Bus Booking?",
    features: [
      "Vast Network of Routes",
      "Instant Bookings & Confirmations",
      "Best Discounts & Commissions",
      "24/7 Customer Support",
    ],
  },
  {
    name: "Fastag",
    icon: "/services/Fastag.png",
    description: "Recharge Your FasTAG Online with IMTC",
    info: "Welcome to IMTC, your one-stop solution for convenient and hassle-free FasTAG recharge! Say goodbye to long queues and tedious processes—now you can recharge your FasTAG quickly and securely from the comfort of your home.",
    image: "/services/fastag.webp",
    featuresTitle: "Benefits of Using Fast Tag",
    features: ["Avoid Traffic Jams", "Save Money", "Track Your Expenses"],
  },
  {
    name: "Insurance",
    icon: "/services/Insurance.png",
    description: "Secure Your Future, Boost Your Earnings!",
    info: "At IMTC, we believe that financial security should be accessible to everyone. Our new general insurance service allows merchants to offer a wide range of insurance products, ensuring your customers are well-protected while you maximize your earnings through high commissions.",
    image: "/services/insurance-life.webp",
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
    icon: "/services/_QR.png",
    description: "Accept Payments Seamlessly with QR Collection!",
    info: "Upgrade your payment process with our QR Collection system, designed specifically for merchants who use a system setup. Make receiving payments fast, secure, and easy with QR codes directly on your screen — ideal for in-store, on-desk, or checkout payments.",
    image: "/services/QR.webp",
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
    icon: "/services/_Utilities Bill Payment (1).png",
    description: "Welcome to the future of effortless bill payments with IMTC!",
    info: "As a retailer, offering bill payment services is not just a convenience—it's a strategic way to enhance your profitability. With IMTC, you can seamlessly integrate the Bharat Bill Payment System (BBPS) into your operations. This allows you to boost your revenue while providing an enhanced customer experience.",
  },
];

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

const services = raw.map((s) => ({ ...s, slug: slugify(s.name) }));

export default services;
