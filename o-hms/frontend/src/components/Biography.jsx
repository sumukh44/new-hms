import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          At ZEECARE, we are dedicated to
           providing exceptional healthcare services to our community.
            Our team of experienced professionals is committed to delivering personalized care
             that meets the unique needs of each patient. We believe in treating not 
             just the symptoms but the whole person, ensuring a holistic approach
              to health and wellness
          </p>
          <p>
          Established in 2024, we have quickly become a trusted healthcare provider
          </p>
         
        </div>
      </div>
    </>
  );
};

export default Biography;
