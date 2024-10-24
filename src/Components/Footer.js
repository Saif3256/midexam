import React from 'react';


export default function Footer() {
  return (
    <Footer bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <p>Terms and Conditions applied</p>
        
          
       
      </div>
    </Footer>
  );
}