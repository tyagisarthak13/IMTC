import React from "react";
import { Link } from "react-router";

import refundPolicy from "../assets/refundPolicy.jpg";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <div className="w-full bg-indigo-900">
        <div className="w-full px-4 sm:px-8 lg:px-12 py-8">
          <div className="text-center">
            <h1
              className="text-3xl md:text-4xl font-bold text-white"
              data-aos="fade-up"
            >
              REFUND POLICY
            </h1>
          </div>
        </div>
      </div>

      {/* Single Image - Full Width */}
      <div className="w-full px-4 sm:px-8 lg:px-12 py-8">
        <img
          src={refundPolicy}
          alt="Refund Policy"
          className="w-full h-64 object-contain rounded-lg"
          data-aos="fade-up"
        />
      </div>

      {/* Full Content - More Width */}
      <div className="w-full px-4 sm:px-8 lg:px-12 py-8">
        <div className="max-w-none prose prose-lg">
          <p className="text-gray-700 mb-6" data-aos="fade-up">
            Once a User chooses to avail any service plan/offer announced by{" "}
            <strong>IMTC</strong> and agrees to buy that plan/offer by due
            payment for that plan/offer to <strong>IMTC</strong>, such payment
            by User shall not be refunded by <strong>IMTC</strong> under any
            circumstances whatsoever. Please note that such act of buying{" "}
            <strong>IMTC</strong> plan is irreversible process under the
            applicable law.
          </p>

          <p className="text-gray-700 mb-6" data-aos="fade-up">
            Post receipt of payment from the User for the above-mentioned plan,{" "}
            <strong>IMTC</strong> shall create User ID in its system ONLY post
            successful KYC verification of such User. If the User is unable to
            get successful KYC done, <strong>IMTC</strong> shall not be able to
            create User ID of such User. Thus, in order to avail{" "}
            <strong>IMTC</strong> services on its portal, User has to
            mandatorily get his successful KYC verification done.
          </p>

          <p className="text-gray-700 mb-8" data-aos="fade-up">
            Post User Id creation, while availing various services on{" "}
            <strong>IMTC</strong> portal, a transactions which have failed for
            any reason directly attributable to <strong>IMTC</strong> and{" "}
            <strong>IMTC</strong> has received corresponding confirmation from
            the payment gateway, will be automatically refunded to User's bank
            account within 3-21 working days from the date of transaction and a
            confirmation mail will be sent to User's email id registered with{" "}
            <strong>IMTC</strong>. Please note that only the actual transaction
            amount will be refunded excluding payment gateway charges and all
            applicable taxes. However, for cases where User has received a
            successful completion confirmation but not received services, User
            is required to submit a complaint by sending an e-mail to customer
            care Email ID given on this website. <strong>IMTC</strong> shall
            enquire the matter after receiving the complaint from the User and
            based on the enquiry <strong>IMTC</strong> may refund the payment.
            In all cases, <strong>IMTC</strong> liability will be restricted to
            providing User a valid refund to the extent of corresponding payment
            received by <strong>IMTC</strong> with respect to a particular
            transaction. <strong>IMTC</strong> shall not be responsible for any
            other claim or consequential liability arising out of failed
            services on our system.
          </p>

          <div className="bg-gray-100 rounded-lg p-6" data-aos="fade-up">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Need Help with Refunds?
            </h3>
            <p className="text-gray-700 mb-4">
              If you have any questions about our refund policy or need
              assistance with a transaction, please contact our customer care
              team.
            </p>
            <Link
              to={"/contact"}
              className="bg-indigo-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors inline-block"
            >
              Contact Customer Care
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
