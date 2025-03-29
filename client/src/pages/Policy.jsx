import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://img.freepik.com/free-vector/unemployment-insurance-abstract-concept-vector-illustration-unemployment-benefits-lost-job-tired-stressed-businessman-claim-form-workers-compensation-paper-work-interview-abstract-metaphor_335657-1355.jpg?t=st=1743265966~exp=1743269566~hmac=3e7864fac41c10130225b2b2b0826118f129638c67615e50da626fd1c5eda21d&w=826"
            alt="contactus"
            style={{ width: "65%" }}
          />
        </div>
        <div className="col-md-4">
          <p>We collect personal information, such as your name, contact details, payment information, and other data necessary for processing orders and providing customer support.</p>
          <p>The information we collect is used to process transactions, deliver products, offer customer service, and improve your overall experience with our app.</p>
          <p>We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.</p>
          <p>We may share your information with trusted third-party services that assist in processing transactions or delivering products. These third parties are obligated to maintain the confidentiality of your data.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
