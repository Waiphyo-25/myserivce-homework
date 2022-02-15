import React from "react";
import Layout from "../Layout/Layout";

const Price = () => {
  return (
    <Layout>
      <div className="main_menu">
        <div className="statistics_001">
          <div className="statistic">
            <div className="city">New York, NY</div>
            <div className="label">PACKX CARGO</div>
            <br />
            <div className="drop_item">Last Drop-Off</div>
            <div className="drop_date">Aug 5th 2020</div>
          </div>
          {/* <div class="statistic">
            <div class="icon_label">
              <i class="plane icon"></i>
            </div>
          </div> */}
          <div className="statistic">
            <div className="city">Yangon</div>
            <div className="price">7.5 USD/lb</div>
            <br />
            <br />
            <br />
            <div className="button_detail">
              <button class="ui grey button">DETAIL</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Price;
