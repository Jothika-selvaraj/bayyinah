import React from "react";

const Privacy = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-md p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          PRIVACY POLICY
        </h1>

        {/* Introduction */}
        <p className="text-gray-700 text-base leading-7 mb-6">
          Al Furqan Academy takes privacy very seriously and is committed to protecting the personal information of our students. Our privacy policy explains the types of personal information we gather, how we use it, and the security measures we employ.
        </p>

        {/* Sections */}
        <div className="space-y-6">
          {/* Information We Gather */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Information we gather</h2>
            <p className="text-gray-700 text-base leading-7">
              Our users provide us with numerous forms of Personal Information. We may use these personal details to personalize and improve our services, to enable our users to create a user account and profile, to contact users, to meet your requests for specific products and services, to analyze how users use the Website, and for other purposes specified in this Privacy Policy. Some kind of Personal Data may be shared with third parties.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Information we collect</h2>
            <p className="text-gray-700 text-base leading-7">
              All information you knowingly provide to us is collected and preserved by us. We collect personal details from our students when they register for our courses or contact us through our website. This information includes name, address, email address, phone number, payment information (if applicable), or any other information necessary to provide our services.
            </p>
          </div>

          {/* How We Use It */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">How we use it</h2>
            <p className="text-gray-700 text-base leading-7">
              The information provided to us through the various forms on the site enables us to help our users, provide them with useful information, communicate with them, and at the same time help us improve the site’s content in line with their needs.
            </p>
            <p className="text-gray-700 text-base leading-7">
              We may also use personal information to send promotional materials or updates about our courses. However, you can unsubscribe from these emails at any time by following the instructions in the email.
            </p>
          </div>

          {/* Security Measures */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Security measures</h2>
            <p className="text-gray-700 text-base leading-7">
              We employ suitable measures to secure our user’s personal information. This involves putting technical and organizational safeguards in place to prevent unauthorized access, use, or disclosure of personal information.
            </p>
            <p className="text-gray-700 text-base leading-7">
              However, we cannot guarantee complete security. Unapproved access or usage, either software or hardware failure, and other issues can all jeopardize user information security at any time.
            </p>
          </div>

          {/* Sharing of Personal Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Sharing of personal information
            </h2>
            <p className="text-gray-700 text-base leading-7">
              We do not share your personal information with a third party unless required by law or to deliver our services.
            </p>
            <p className="text-gray-700 text-base leading-7">
              We may share your personal information with a reliable third-party service provider who helps us provide our services, such as payment processors and website hosting companies.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your rights</h2>
            <p className="text-gray-700 text-base leading-7">
              You have the right to see, modify, or erase any personal information we have on record about you. You may also object to the processing of your personal information or request that we limit its usage. You can do so by contacting us via email.
            </p>
          </div>

          {/* Cookies and Analytics */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Cookies and Analytics
            </h2>
            <p className="text-gray-700 text-base leading-7 mb-4">
              We use cookies and similar tracking technologies to improve the user experience on our website and to analyze website usage. When you interact with our Website, we automatically receive and record data from your browser, including your IP address, “cookie” information, and the page you requested, in our server logs.
            </p>
            <p className="text-gray-700 text-base leading-7">
              You may be able to modify your browser’s choices to avoid or restrict your computer’s acceptance of cookies, but this may prevent you from using our website’s best features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
