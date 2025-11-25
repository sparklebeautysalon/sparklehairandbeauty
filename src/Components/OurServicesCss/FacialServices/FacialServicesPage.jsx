import { Card } from "primereact/card";
import React from "react";
import FacialbannerOne from "../../../Images/banners/facialbanner.png";
import FacialbannerTwo from "../../../Images/banners/facialbanner2.png";
import "./FacialServicesGrid.css";

function FacialServicesPage() {
  return (
    <div className="" style={{ marginTop: "100px" }}>
      <section>
        <div className="bannerparent">
          <img src={FacialbannerOne} alt="facialbanner"  />
        </div>
      </section>
      <section class="">
        <div className="containerD">
          <div class="cardF">
            <div class="contentD">
              <img
                src="https://mssalon.co.uk/wp-content/uploads/2025/08/4246.jpg"
                alt=""
              />
              <p class="logo">EXPRESS MINI FACIAL</p>
              <div class="hover_content">
                <div class="h6">approx 20 mins &amp; E22</div>
                <p>(inc. cleanse, tone, mask & moisturiser)</p>
                <button className="buttonCommon">Avail Now</button>
              </div>
            </div>
          </div>
          <div class="cardF">
            <div class="contentD">
              <img
                src="https://mssalon.co.uk/wp-content/uploads/2025/08/4246.jpg"
                alt=""
              />
              <p class="logo">GOLD FACIAL</p>
              <div class="hover_content">
                <div class="h6">Approx 30 mins &amp; E35</div>
                <p>
                  (inc. cleanse, exfoliation, steam, extraction, massage, mask &
                  moisturiser)
                </p>
                <button className="buttonCommon">Avail Now</button>
              </div>
            </div>
          </div>
          <div class="cardF">
            <div class="contentD">
              <img
                src="https://mssalon.co.uk/wp-content/uploads/2025/08/4246.jpg"
                alt=""
              />
              <p class="logo">DIAMOND FACIAL</p>
              <div class="hover_content">
                <div class="h6">(approx 45 mins) &amp; E32</div>
                <p>
                  (inc. cleanse, exfoliation, steam, extraction, massage, toner,
                  mask & moisturiser)
                </p>
                <button className="buttonCommon">Avail Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="containerD">
          <div class="cardF">
            <div class="contentD">
              <img
                src="https://mssalon.co.uk/wp-content/uploads/2025/08/4246.jpg"
                alt=""
              />
              <p class="logo">RELAXING FACIAL</p>
              <div class="hover_content">
                <div class="h6">(approx 45 mins) &amp; E32</div>
                <p>
                  (inc. cleanse, exfoliation, steam, extraction, massage, toner,
                  mask & moisturiser)
                </p>
                <button className="buttonCommon">Avail Now</button>
              </div>
            </div>
          </div>
          <div class="cardF">
            <div class="contentD">
              <img
                src="https://mssalon.co.uk/wp-content/uploads/2025/08/4246.jpg"
                alt=""
              />
              <p class="logo">LUXURY FACIAL</p>
              <div class="hover_content">
                <div class="h6">1hr &amp; E42</div>
                <p>
                  (inc. cleanse, exfoliation, steam, extraction, massage, toner,
                  mask, moisturiser & serum. face bleach included but optional)
                </p>
                <button className="buttonCommon">Avail Now</button>
              </div>
            </div>
          </div>
          <div class="cardF">
            <div class="contentD">
              <img
                src="https://mssalon.co.uk/wp-content/uploads/2025/08/4246.jpg"
                alt=""
              />
              <p class="logo">VITAMIN C FACIAL</p>
              <div class="hover_content">
                <div class="h6">Approx 30 min &amp; E40</div>
                <p>
                  (inc. cleanse, exfoliation, steam, extraction, massage, toner,
                  mask & serum)
                </p>
                <button className="buttonCommon">Avail Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="containerD">
          <div class="cardF">
            <div class="contentD">
              <img
                src="https://mssalon.co.uk/wp-content/uploads/2025/08/4246.jpg"
                alt=""
              />
              <p class="logo">oxy FACIAL</p>
              <div class="hover_content">
                <div class="h6">Approx 20 mins &amp; E45</div>
                <p>
                  (inc. cleanse, exfoliation, steam, extraction, massage, toner,
                  mask & serum)
                </p>
                <button className="buttonCommon">Avail Now</button>
              </div>
            </div>
          </div>
          <div class="cardF">
            <div class="contentD">
              <img
                src="https://mssalon.co.uk/wp-content/uploads/2025/08/4246.jpg"
                alt=""
              />
              <p class="logo">FACE BLEACH</p>
              <div class="hover_content">
                <div class="h6">Approx 15 mins &amp; E15</div>
                <p>(inc. bleach, cleanse & moisturiser)</p>
                <button className="buttonCommon">Avail Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FacialServicesPage;
