import React from "react";
import {
  Users,
  Target,
  TrendingUp,
  HeartHandshake,
  Rocket,
} from "lucide-react";
import { Link } from "react-router";

const Company = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-500 text-white py-18 px-6 md:px-16 text-center">
        <h1 className="text-5xl font-bold mb-4">
          About IMTC Payment Solution LLP
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Empowering digital finance through innovation, trust, and
          accessibility for every Indian.
        </p>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
          <Target className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p>
            To be the go-to digital financial platform for 1 billion Bharat
            consumers, simplifying payments and solving everyday challenges for
            merchants. We aim to empower businesses, drive financial inclusion ,
            and fuel growth in a connected digital economy.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
          <Rocket className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p>
            To empower 10 million rural entrepreneurs with a super app and web
            platform, enabling seamless transactions, higher earnings , and
            growth in the digital economy .
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-16 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-8">
          Why Choose IMTC?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Trusted Platform",
              desc: "Our secure and reliable infrastructure ensures your transactions are always safe.",
              icon: (
                <HeartHandshake className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              ),
            },
            {
              title: "Innovative Solutions",
              desc: "We continuously evolve to bring smarter and more efficient fintech services.",
              icon: (
                <TrendingUp className="w-10 h-10 text-blue-600 mx-auto mb-4" />
              ),
            },
            {
              title: "Dedicated Support",
              desc: "Our expert team is available round the clock to assist our partners and users.",
              icon: <Users className="w-10 h-10 text-blue-600 mx-auto mb-4" />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition text-center"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About the Founder & CEO */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img
              src="/services/Rasheed T. Sir.png"
              alt="Founder & CEO"
              className="w-120 h-120 object-cover "
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              About the Founder & CEO
            </h2>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Rasheed Thanari
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Rasheed Thanari is a seasoned entrepreneur with over 25 years of
              hands-on experience in export-import, business incubation, and
              transformation. As the visionary behind Simple Mudra, he brings a
              wealth of expertise gained from building a diverse group of
              companies, including KR Babu Business Group, Bakeo Business
              Enterprises, KR Traders, IMTC Tourism, BTC Logistics, and Beko
              Trading Company.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a proven track record of success across multiple verticals,
              Mr. Thanari is committed to empowering businesses and driving
              innovation in the digital financial services space.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-blue-50 py-16 px-6 md:px-16">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">
          Meet Our Team
        </h2>

        <div className="overflow-x-auto team-scroll">
          <div className="flex gap-8 px-4 md:px-8 w-max">
            {[
              {
                name: "Priya Singh",
                role: "Chief Technology Officer",
                img: "/team/member2.jpg",
                desc: "Leads our tech innovation with a focus on scalable fintech solutions.",
              },
              {
                name: "Amit Verma",
                role: "Head of Operations",
                img: "/team/member3.jpg",
                desc: "Ensures smooth daily operations and partner satisfaction.",
              },
              {
                name: "Neha Gupta",
                role: "Customer Relations Manager",
                img: "/team/member4.jpg",
                desc: "Bridges customer needs with our services to ensure delightful experiences.",
              },
              {
                name: "Ravi Kumar",
                role: "Marketing Head",
                img: "/team/member5.jpg",
                desc: "Strategizes campaigns and brand growth across digital platforms.",
              },
              {
                name: "Sonia Mehta",
                role: "Finance Manager",
                img: "/team/member6.jpg",
                desc: "Manages company accounts and financial integrity with precision.",
              },
              {
                name: "Vikas Patel",
                role: "Lead Developer",
                img: "/team/member7.jpg",
                desc: "Oversees backend systems ensuring top-notch security and scalability.",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="w-72 h-[420px] perspective hover:cursor-pointer flex-shrink-0"
              >
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-md flex flex-col items-center justify-center backface-hidden p-6">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-28 h-28 rounded-full object-cover border-4 border-blue-600 mb-4"
                    />
                    <h3 className="text-lg font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-blue-700 font-medium">{member.role}</p>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 bg-blue-600 text-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center rotate-y-180 backface-hidden">
                    <h3 className="text-lg font-semibold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sm text-blue-100 mb-3">{member.role}</p>
                    <p className="text-center text-blue-50 text-sm">
                      {member.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white text-center rounded-t-3xl">
        <h2 className="text-3xl font-bold mb-4">Join the Fintech Revolution</h2>
        <p className="max-w-xl mx-auto mb-8 text-lg opacity-90">
          Become a part of IMTC Payment Solution LLP’s journey towards a
          digitally empowered India.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition "
        >
          Become a Partner
        </Link>
      </section>
    </div>
  );
};

export default Company;
