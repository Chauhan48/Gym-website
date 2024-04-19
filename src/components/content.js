import React, { useState } from "react";
import image from "./pic.jpg";

const Content = () => {
  const [showForm, setShowForm] = useState(false);

  const handleJoinButtonClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    // Process form submission here
    console.log("Form submitted!");
    // Reset the form after submission
    setShowForm(false);
  };

  const plans = [
    {
      name: "Basic",
      price: "₹1000/month",
      features: ["Access to basic features", "Limited support"],
    },
    {
      name: "Standard",
      price: "₹1500/month",
      features: ["Access to standard features", "Priority support"],
    },
    {
      name: "Premium",
      price: "₹2000/month",
      features: ["Access to premium features", "24/7 support"],
    },
  ];

  return (
    <div className="m-0 p-0 font-monospace">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>
              Welcome to
              <h1 className="text-info">
                  Get Jacked
              </h1>
              Your Fitness Destination!
            </h2>
            <br />
            <br />
            <p className="lead text-start">
              Get fit, stay healthy, and achieve your fitness goals with us!
            </p>
            <br />
            <p className="text-start">
              Our gym offers state-of-the-art facilities, experienced trainers,
              and a friendly atmosphere to help you on your fitness journey.
            </p>
            <br />
            <br />
            <br />
            <button className="btn btn-outline-primary" onClick={handleJoinButtonClick}>
              Start your fitness journey
            </button>
            {/* {showForm && (
              <div className="mt-4 bg-warning-subtle rounded-5 border border-5 border-dark-subtle overflow-x-hidden p-5 text-start">
                <h2 className="text-center">Join Us Now!</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control border border-3 border-success-subtle"
                      id="firstName"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control border border-3 border-success-subtle"
                      id="lastName"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control border border-3 border-success-subtle"
                      id="email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control border border-3 border-success-subtle"
                      id="phone"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary m-4">
                    Submit
                  </button>
                </form>
              </div>
            )} */}
          </div>
          <div className="col-md-6">
            <img
              src={image}
              className="img-fluid rounded-5"
              alt="Gym"
              height="200px"
              width="400px"
            />
          </div>
        </div>
      </div>
      <br />
      <h2>Membership Plans</h2>
      <div className="container">
        <div className="row">
          {plans.map((plan) => (
            <div
              className="col border border-danger-subtle border-3 rounded-pill m-4 p-3"
              key={plan.name}
            >
              <h3>{plan.name}</h3>
              <p>{plan.price}</p>
              <ul type="none">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button className="btn btn-outline-primary" onClick={handleJoinButtonClick}>Join Us</button>
            </div>
          ))}
        </div>
      </div>
      {showForm && (
        <div 
          className="mt-4 bg-light rounded-5 overflow-x-hidden p-5 text-start font-monospace"
          style={{margin:'470px', width:'600px', height:'600px'}}
          >
          <h2 className="text-center">Join Us Now!</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                required
              />
            </div>
            <button type="submit" className="btn btn-outline-primary m-4">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Content;
