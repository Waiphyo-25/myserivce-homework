import React, { Fragment } from "react";
import Layout from "../Layout/Layout";
import Carrier from "../Carrier/Carrier";


const Home = () => {
  return (
   <Layout>
     <Fragment>
     <div className="city_form">
       <div className="logo_001">
       <i class="plane icon"></i>
       </div>
       <div className="city_wrapper">
       <div className="city city_from"> Select City(from)
        <input type='text'></input>
       </div>
        <div className="city"> Select City(To)
        <input type='text'></input>
        </div>
       </div><br/><br/>
       <button class="positive ui button">Search</button>
     </div>
  
     </Fragment>
   </Layout>
      
  );
};
export default Home;
