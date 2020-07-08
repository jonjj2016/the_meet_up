import React from 'react';

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.1239068378745!2d44.51450094267315!3d40.17508400555362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abc563de1b3ef%3A0x58644258dc216173!2sDoubleTree%20by%20Hilton%20Hotel%20Yerevan%20City%20Centre!5e0!3m2!1sen!2sus!4v1594214108982!5m2!1sen!2sus'
        width='100%'
        height='500px'
        frameborder='0'
        allowfullscreen></iframe>

      <div className='location_tag'>
        <div> Location </div>{' '}
      </div>
    </div>
  );
};

export default Location;
