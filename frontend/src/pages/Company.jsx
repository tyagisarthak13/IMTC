import React from "react";
import {
  Users,
  Target,
  TrendingUp,
  HeartHandshake,
  Rocket,
} from "lucide-react";
import { Link } from "react-router";

import AmanSharma from "../assets/AmanSharma.jpg";
import AmarendraKumar from "../assets/AmarendraKumar.jpg";
import PrakharChaturvedi from "../assets/PrakharChaturvedi.png";
import SarthakTyagi from "../assets/SarthakTyagi.jpg";
import SumitChauhan from "../assets/SumitChauhan.jpg";
import CEO from "../assets/CEO.jpg";

const Company = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-14 px-6 md:px-16 text-center">
        <h1 className="text-5xl font-bold mb-4" data-aos="fade-up">
          About IMTC Payment Solution LLP
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90" data-aos="fade-up">
          Empowering digital finance through innovation, trust, and
          accessibility.
        </p>
      </section>

      {/* Our Mission & Vision */}
      <section
        className="py-16 px-6 md:px-16 grid md:grid-cols-2 gap-10 items-stretch"
        data-aos="fade-up"
      >
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition h-full">
          <Target className="w-12 h-12 text-indigo-900 mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p>
            To be the go-to digital financial platform for 1 billion Bharat
            consumers, simplifying payments and solving everyday challenges for
            merchants. We aim to empower businesses, drive financial inclusion,
            and fuel growth in a connected digital economy.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition h-full">
          <Rocket className="w-12 h-12 text-indigo-900 mb-4" />
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p>
            To empower 10 million rural entrepreneurs with a super app and web
            platform, enabling seamless transactions, higher earnings, and
            growth in the digital economy.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-16 px-6 md:px-16 text-center">
        <h2
          className="text-3xl font-bold text-blue-900 mb-8"
          data-aos="fade-up"
        >
          Why Choose IMTC?
        </h2>
        <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up">
          {[
            {
              title: "Trusted Platform",
              desc: "Our secure and reliable infrastructure ensures your transactions are always safe.",
              icon: (
                <HeartHandshake className="w-10 h-10 text-indigo-900 mx-auto mb-4" />
              ),
            },
            {
              title: "Innovative Solutions",
              desc: "We continuously evolve to bring smarter and more efficient fintech services.",
              icon: (
                <TrendingUp className="w-10 h-10 text-indigo-900 mx-auto mb-4" />
              ),
            },
            {
              title: "Dedicated Support",
              desc: "Our expert team is available round the clock to assist our partners and users.",
              icon: (
                <Users className="w-10 h-10 text-indigo-900 mx-auto mb-4" />
              ),
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
        <div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
          data-aos="fade-up"
        >
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={CEO}
              alt="Founder & CEO"
              className="w-full max-w-sm rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">
              About the Founder & CEO
            </h2>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Gurmeet Singh
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Gurmeet Singh is a seasoned entrepreneur with over 25 years of
              hands-on experience in export-import, business incubation, and
              transformation. As the visionary behind IMTC, he brings a wealth
              of expertise gained from building a diverse group of companies,
              including KR Babu Business Group, Bakeo Business Enterprises, KR
              Traders, IMTC Tourism, BTC Logistics, and Beko Trading Company.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a proven track record of success across multiple verticals,
              Mr. Singh is committed to empowering businesses and driving
              innovation in the digital financial services space.
            </p>
          </div>
        </div>
      </section>

      {/* About the Director */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
          data-aos="fade-up"
        >
          {/* Content (left on mobile, left on desktop) */}
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-indigo-900 mb-4">
              About the Director
            </h2>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Sabhajeet Shukla
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sabhajeet Shukla is a seasoned entrepreneur with over 25 years of
              experience in export-import, business incubation, and business
              transformation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As Director at IMTC, he leverages his multi-industry expertise to
              strengthen the company’s operational strategy and growth. His
              leadership plays a key role in advancing IMTC’s mission within the
              rapidly evolving fintech landscape.
            </p>
          </div>

          {/* Image (right side on desktop) */}
          <div className="flex justify-center order-1 md:order-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
              alt="Director"
              className="w-full max-w-sm rounded-xl object-cover opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-blue-50 py-16 px-6 md:px-16" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-indigo-900 text-center mb-10">
          Meet Our Team
        </h2>

        <div className="overflow-x-auto team-scroll">
          <div className="flex gap-8 px-4 md:px-8 w-max">
            {[
              {
                name: "Amarendra Kumar",
                role: "IT HEAD",
                img: AmarendraKumar,
                desc: "Leads our tech innovation with a focus on scalable fintech solutions.",
              },
              {
                name: "Sumit Chauhan",
                role: "Head of Operations",
                img: SumitChauhan,
                desc: "Ensures smooth daily operations and partner satisfaction.",
              },
              {
                name: "Aman Sharma",
                role: "Senior Software Developer",
                img: AmanSharma,
                desc: "Leads complex development tasks, architects scalable systems, and mentors the engineering team.",
              },
              {
                name: "Sarthak Tyagi",
                role: "Junior Software Developer",
                img: SarthakTyagi,
                desc: "Builds and maintains core application features while contributing to efficient backend and frontend development.",
              },
              {
                name: "Prakhar Chaturvedi",
                role: "Junior App Developer",
                img: PrakharChaturvedi,
                desc: "Develops intuitive mobile app interfaces and ensures smooth, high-performance user experiences.",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="w-72 h-[420px] perspective hover:cursor-pointer flex-shrink-0"
              >
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-indigo-100 rounded-2xl shadow-md flex flex-col items-center justify-center backface-hidden p-6">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-40 h-40 rounded-full object-cover border-4 border-indigo-900 mb-4"
                    />
                    <h3 className="text-lg font-semibold text-gray-800">
                      {member.name}
                    </h3>
                    <p className="text-indigo-700 font-medium">{member.role}</p>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 bg-indigo-900 text-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center rotate-y-180 backface-hidden">
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
      <section
        className="py-20 px-6 md:px-16 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white text-center rounded-t-3xl"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold mb-4">Join the Fintech Revolution</h2>
        <p className="max-w-xl mx-auto mb-8 text-lg opacity-90">
          Become a part of IMTC Payment Solution LLP’s journey towards a
          digitally empowered India.
        </p>
        <Link
          to="/contact"
          className="bg-white text-indigo-800 px-8 py-3 rounded-full font-semibold transition transform duration-200 hover:scale-120"
        >
          Become a Partner
        </Link>
      </section>
    </div>
  );
};

export default Company;
