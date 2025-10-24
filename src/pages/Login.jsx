import React from 'react';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import LoginForm from '../components/LoginForm/LoginForm';

const Login = () => {
  return (
    <div className="min-h-screen flex">
      {/* Fixed Image Slider on Left */}
      <div className="hidden lg:block fixed left-0 top-0 w-1/2 h-screen">
        <ImageSlider />
      </div>
      
      {/* Login Form on Right with explicit margin */}
      <div className="w-full lg:ml-[50%]">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;