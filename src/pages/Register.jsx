import React from 'react';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import ImageSlider from '../components/ImageSlider/ImageSlider';

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Fixed Image Slider on Left */}
      <div className="hidden lg:block fixed left-0 top-0 w-1/2 h-screen">
        <ImageSlider />
      </div>
      
      {/* Scrollable Register Form on Right */}
      <div className="w-full lg:w-1/2 lg:ml-auto">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;