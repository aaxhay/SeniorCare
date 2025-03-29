import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    // <Layout title={'About E-Commerce'}>
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg?t=st=1743266253~exp=1743269853~hmac=a4a4037c4fc627cb1c6ebb6c0b7513a2c17b49c5d7059e855b248ffe064beda6&w=1380"
            
            style={{ width: "65%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to <b>SeniorCare</b>, your trusted partner in enhancing the lives of senior citizens. We provide a wide range of products designed to improve comfort, independence, and well-being for older adults. From mobility aids to daily living tools, we offer high-quality, affordable solutions to help seniors live safely and comfortably.

Our carefully selected products are designed to meet the unique needs of seniors, with a focus on ease of use and reliability. At SeniorCare, we’re dedicated to supporting seniors and their families, ensuring they have the resources they need for a fulfilling, independent life.

Thank you for choosing SeniorCare. we are here to help every step of the way.
          </p>
        </div>
      </div>
    </Layout>
  );
};

// Layout.defaultProps = {
//   title : 'Ecommerce App - shop now sale is on',
//   description : "Mern Stack App",
//   keywords : "Mern , react , node , mongodb ",
//   author : "Aalok",
// }

export default About;
