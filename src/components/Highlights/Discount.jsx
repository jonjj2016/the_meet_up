import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton.jsx';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30,
  };

  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1,
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 30);
  }

  render() {
    return (
      <div className='center_wrapper'>
        <div className='discount_wrapper'>
          <Fade onReveal={() => this.porcentage()}>
            <div className='discount_porcentage'>
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className='discount_description'>
              <h3>Purchase tickets before 20th JUNE</h3>

              <p>
                A full-day, two-track conference on all things React, gathering Front-end and Full-stack engineers across the globe in the tech heart of Europe.Mark your calendars for the biggest React community event.Next to the main conference day, be prepared for a number of hands-on workshops,
                pre-party meetups, and mini conferences throughout the week of the event.{' '}
              </p>

              <MyButton text='Purchase tickets' bck='#ffa800' color='#ffffff' link='http://google.com' />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;
