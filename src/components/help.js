import React, { useState } from 'react';

const Help = () => {
  const [displayContent, setDisplayContent] = useState(null);

  const handleButton1Click = () => {
    const textArray = [
      { question: "What are your membership options?", answer: "We offer a variety of membership options tailored to fit your lifestyle and fitness goals. From month-to-month memberships to annual plans, we have a solution that suits you best. Visit our Membership page for more details." },
      { question: "Do you offer personal training sessions?", answer: "Yes, we provide personalized one-on-one training sessions with our certified fitness trainers. Whether you're new to fitness or looking to take your workouts to the next level, our trainers will create a customized program to help you achieve your goals efficiently and safely." },
      { question: "What fitness classes do you offer?", answer: "Our gym offers a wide range of fitness classes to cater to different interests and fitness levels. From high-intensity interval training (HIIT) and yoga to spinning and dance cardio, we have something for everyone. Check out our Class Schedule for the latest offerings." },
      { question: "Do you offer personal training sessions?", answer: "Yes, we provide personalized one-on-one training sessions with our certified fitness trainers. Whether you're new to fitness or looking to take your workouts to the next level, our trainers will create a customized program to help you achieve your goals efficiently and safely." },
    ];
    setDisplayContent(textArray);
  };

  const handleButton2Click = () => {
    // Generate form with name and email inputs
    const formContent = (
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
    setDisplayContent([formContent]); // Ensure formContent is wrapped in an array
  };

  return (
    <div className="container font-monospace">
      <br />
      <h3 className="text-center mb-4">Welcome to <span className='text-info'>Get Jacked</span> Help Center</h3>
      <br />
      <p className="text-start">At <span className='text-info'>Get Jacked</span>, we're committed to helping you achieve your fitness goals and make the most out of our platform. If you have any questions or need assistance, you've come to the right place. Below are some common topics to guide you through your fitness journey</p>
      <br />
      <div className="row justify-content-center">
        <div className="col-md-4 mb-3">
          <button className="btn btn-outline-danger" onClick={handleButton1Click}>FAQ</button>
        </div>
        <div className="col-md-4 mb-3">
          <button className="btn btn-outline-danger" onClick={handleButton2Click}>Ask Question</button>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          {displayContent && displayContent.map((item, index) => (
            <div key={index} className="alert alert-info mb-3">
              <h4>{item.question}</h4>
              <p className='text-start'>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
