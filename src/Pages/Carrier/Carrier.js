import React, { useState } from "react";
import Layout from "../Layout/Layout";
import './carrier.scss';
import axios from 'axios';

const Carrier = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [stateDropDownActive, setStateDropDownActive] = useState(false);
    const [countryDropDownActive, setCountryDropDownActive] = useState(false);


    const toggleState = () => {
        console.log('toggle state running');
        setStateDropDownActive(!stateDropDownActive);
    }

    console.log(stateDropDownActive);

    const toggleCountry = () =>{
      console.log('toggle country running');
      setCountryDropDownActive(!countryDropDownActive);
    }

    const states = [
      {
        code: 'AL',
        name: 'Alabama'
      },
      {
        code: 'AK',
        name: 'Alaska'
      },
      {
        code: 'AZ',
        name: 'Arizona'
      },
      {
        code: 'NY',
        name: 'New York'
      }
    ];
    
    const countries = [
      {
        code:'af',
        name: 'Afghanistan'
      },
      {
        code: 'ax',
        name: 'Aland Island'
      },
      {
        code: 'al',
        name: 'Albania'
      },
      {
        code: 'mm',
        name: 'Myanmar'
      },
      {
        code: 'us',
        name: 'United State'
      }
    ];

    const setActiveState =(state)=>{
      setState(state);
      console.log('setActiveState hey it is working',state);
    }

    const setActiveCountry =(country) =>{
      setCountry(country);
    }

    //for State // 
    const renderStateList = (states) =>{
      return states.map((state)=>{
        return <div key={state.code}onClick={()=>{setActiveState(state.name)}}className="item" data-value={state.code}>{state.name}</div>
      })
    }

    //for Country//
    const renderCountryList = (countries) => {
      return countries.map((country) => {
      return <div  key={country.code} className="item" data-value={country.code} onClick={() => setActiveCountry(country.name)}><i className="af flag"></i>{country.name}</div>
      })
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      const formData = {
        name: name,
        contact: {
          ph: phone,
          email: email,
          address:{
            street: street,
            city: city,
            state: state,
            country: country
          }
        }
      }
      axios.post('http://localhost:3000/carriers',formData)
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      })
    }


  return (
    <Layout>
      <div className="carrier ui text container">
            <h2 className="ui header">
            Add Carrier
            <div className="sub header">Enter your detail carrier information.</div>
            </h2>

            <form onSubmit={handleSubmit} className="ui form">
              <div className="field">
                <label>Name</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Enter your name." 
                    value={name}
                    onChange={ (e) => {
                        setName(e.target.value)
                    }}
                />
              </div>
              <div className="field">
                <div className="two fields">
                  <div className="field">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={ (e) => {
                          setPhone(e.target.value)
                      }}
                    />
                  </div>

                  <div className="field">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={ (e) => {
                          setEmail(e.target.value)
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="field">
                <div className="two fields">
                  <div className="field">
                  <label>Street</label>
                    <input
                      type="text"
                      name="street"
                      placeholder="Enter Street Address"
                      value={street}
                      onChange={ (e) => {
                          setStreet(e.target.value)
                      }}
                    />
                  </div>
                  <div className="field">
                  <label>City</label>
                    <input
                      type="text"
                      name="city"
                      placeholder="Enter City"
                      value={city}
                      onChange={ (e) => {
                          setCity(e.target.value)
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="two fields">
        <div className="field">
          <label>State</label>
            <div onClick={toggleState} className="ui fluid dropdown selection" tabindex="0">
              <input type="hidden" name="state" />
              <i className="dropdown icon"></i>
              <input className="search" autocomplete="off" tabIndex="0" /><div className={state == 'state' ? 'default text' : 'text'}>{state}</div>
                {( stateDropDownActive &&
                  <div className="menu" tabindex="-1">
                    {renderStateList(states)}
                  </div>
                )}
            </div>
        </div>

        <div class="field">
          <label>Country</label>
          <div onClick={toggleCountry} class="ui fluid search selection dropdown">
            <input type="hidden" name="country" />
            <i class="dropdown icon"></i>
            <input class="search" autocomplete="off" tabindex="0" /><div class="default text">Select Country</div>
            {( countryDropDownActive && 
                <div class="menu" tabindex="-1">
                  {renderCountryList(countries)}
              </div>
            )}
            
          </div>
        </div>
      </div>

        <input className="add-carrier__btn ui button" type="submit" value="submit" />
            </form>
  
      </div>
    </Layout>
  );
}
export default Carrier;
