import React from 'react'
import Navbar from '../components/navbar/Navbar';
import './styles.css';
import './script';
import Footer from '../containers/footer/Footer';

const seatBooking = () => {

  let d = new Date();
  let day = d.getDay();
  
  let tomorrow = day+1;
  let nextday = day+2;

  let weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'] 

  tomorrow = weekday[tomorrow];
  nextday = weekday[nextday];

  return (
    <div>
        <Navbar/>
        <div className='container'>
            <div className="first-section">
                <h1>Book a Cinema</h1>

                <div className='date'>
                    <h3>Select a Date  </h3>
                  
                    <div className='section1'>
                          <h2>Today</h2>
                    </div>

                    <div className='section1'>
                          <h2>{tomorrow}</h2>
                    </div>

                    <div className='section1'>
                          <h2>{nextday}</h2>
                    </div>
                </div>

                <div className='date'>
                    <h3>Select a Time  </h3>

                    <div className='section1'>
                          <h2>10 am</h2>
                    </div>

                    <div className='section1'>
                          <h2>01 pm</h2>
                    </div>

                    <div className='section1'>
                          <h2>04 pm</h2>
                    </div>
                </div>

                <div className='date'>
                    <h3>Select cinema</h3>

                    <div className='section1'>
                          <h2>C01</h2>
                    </div>

                    <div className='section1'>
                          <h2>C02</h2>
                    </div>

                    <div className='section1'>
                          <h2>C03</h2>
                    </div>
                </div>
            </div>

            <div className="second-section">
                <h1>Your Details</h1>

                <div className='name'>
                    <h3>Enter Name</h3>

                    <div className='type'>
                        <input type="text" placeholder='Example :- Dimantha'></input>
                    </div>
                </div>

                <div className='name'>
                  <h3>Enter Email</h3>

                  <div className='type'>
                      <input type="text" placeholder='test@gmail.com'></input>
                  </div>
                </div>

                <div className='name'>
                  <h3>Contact No</h3>

                  <div className='type'>
                      <input type="text" placeholder='+94-XXXXXXXX'></input>
                  </div>
                </div>
            </div>
        </div>

        <div className="hero">
          <h1>Arange Seats</h1>
            <div className='movie-container'>
              <label>Pick a movie</label>

              <select id="movie">
                <option ticketPrice="10">WENDY</option>
                <option ticketPrice="10">ANTMAN-WASP</option>
                <option ticketPrice="10">GRAN-TURISMO</option>
                <option ticketPrice="10">BLUE-BEETLE</option>
                <option ticketPrice="10">EXPEND 4 BLES</option>
                <option ticketPrice="10">OPPENHEIMER</option>
                <option ticketPrice="10">MEG 2 (3D)</option>
              </select>
            </div>

            <div className='movie-container2'>
              <label>No of seats</label>

              <input type='text'></input>
            </div>

            <ul className="showcase">
              <li>
                <div className='seat'></div>
                <small>N/A</small>
              </li>

              <li>
                <div className='seat selected'></div>
                <small>Selected</small>
              </li>

              <li>
                <div className='seat occupied'></div>
                <small>Occupied</small>
              </li>
            </ul>

            <div className="screen-container">
              <div className="screen"></div>
              <div className="row">
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
              </div>

              <div className="row">
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>

              <div className="row">
                <div className="seat occupied"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
              </div>

              <div className="row">
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat"></div>
                <div className="seat occupied"></div>
                <div className="seat occupied"></div>
              </div>
            </div>

            <p className='text'>
                You have selected <span id='count'>0</span> seats for price of $ <span id="total">0</span>
            </p>
        </div>

        <div className='btn-submit'>
          <button>Pay Now</button>
        </div>

        <Footer/>
    </div>
  )
}

export default seatBooking