import React from "react";

const Terms = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          TERMS OF SERVICES
        </h1>

        {/* Introduction */}
        <p className="text-gray-700 text-base leading-7 mb-6">
          The website <a href="http://www.alfurqan.academy" className="text-blue-500 underline">www.alfurqan.academy</a> (“website”) is provided by Al Furqan Academy (“we,” “us” or “our”). We advise that the user read the Terms and Conditions carefully as they govern your use of the website whether as a guest or registered user, explain the policies governing your use of this website, and provide other information regarding your rights.
        </p>

        {/* Sections */}
        <div className="space-y-6">
          {/* Admission & Registration */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Admission & Registration</h2>
            <p className="text-gray-700 text-base leading-7">
              The academy’s selection is solely based on the information provided in the application form. If the academy finds out that you have merely provided misleading information or overlooked important information, it maintains the right to deny admission.
            </p>
          </div>

          {/* Fees & Payments */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Fee & Payments</h2>
            <ul className="text-gray-700 text-base leading-7 list-disc pl-6 space-y-2">
              <li>
                All fee payments made to the academy, be it the course fee or the application fee, are non-refundable.
              </li>
              <li>
                The fee is also non-refundable if the student decides to drop out of the course in the middle. This is exactly why we have created a monthly payment structure so that people who change their minds just have to forfeit one month’s price.
              </li>
              <li>
                The academy has the authority to raise the fee at any time during the course. A fee increase will, however, be notified one month in advance.
              </li>
              <li>
                Students are required to pay the monthly fee before the 28th of each month.
              </li>
              <li>
                A student can elect to leave the Academy at any time. However, the management must be given prior notice at least one week before the start of the following month.
              </li>
              <li>
                Our payment system does not allow us to reverse the transaction, so only complete your payment if you are certain you will not back out.
              </li>
            </ul>
          </div>

          {/* Communications */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Communications</h2>
            <p className="text-gray-700 text-base leading-7">
              Since we are an online Academy, we offer all our services through the internet. We communicate with you through emails and WhatsApp.
            </p>
          </div>

          {/* Cancellation or Compensation of Classes */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Cancellation or Compensation of Classes
            </h2>
            <p className="text-gray-700 text-base leading-7 mb-4">
              If due to any reason, the student is not able to attend a class, in NO manner will this class be compensated. Unforeseen events may emerge during the student’s course of study, and these should be treated with constructive understanding and patience.
            </p>
            <p className="text-gray-700 text-base leading-7">
              However, if it’s a miss from our side, then we’ll compensate the class for you based on mutual agreement. Technical limitations are a part of online learning. A student might be unable to attend a class due to technical difficulty (either on the student’s or the teacher’s end). In such situations, send us an email or a WhatsApp message and leave the class. If there was a technical problem on the part of the teacher, the missed class will be compensated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
