import React from "react";
import FeatureImg from '../../assets/images/feature.jpeg';
import Image from '../../assets/images/voice-message.png';
import SMS from '../../assets/images/sms.png';
import Help from '../../assets/images/help-desk.png';
    import {
      MDBCard,
      MDBCardBody,
      MDBCol,
      MDBContainer,
      MDBIcon,
      MDBRow,
      MDBTypography,
    } from "mdb-react-ui-kit";

export const Dashboard = () =>{
  return(
    
        <section className="vh-50">
          <MDBContainer className="h-100">
            <MDBRow className="h-100">
              <MDBCol md="8" lg="6" xl="4">
                <MDBCard style={{ color: "#4B515D", borderRadius: "35px" }}>
                  <MDBCardBody className="p-4">
                    <div className="d-flex">
                      <MDBTypography tag="h6" className="flex-grow-1">
                        Warsaw
                      </MDBTypography>
                      <MDBTypography tag="h6">15:07</MDBTypography>
                    </div>
    
                    <div className="d-flex flex-column text-center mt-5 mb-4">
                      <MDBTypography
                        tag="h6"
                        className="display-4 mb-0 font-weight-bold"
                        style={{ color: "#1C2331" }}
                      >
                        {" "}
                        13°C{" "}
                      </MDBTypography>
                      <span className="small" style={{ color: "#868B94" }}>
                        Stormy
                      </span>
                    </div>
    
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1" style={{fontSize: '1rem'}}>
                        <div>
                          <MDBIcon
                            fas
                            icon="wind fa-fw"
                            style={{ color: "#868B94" }}
                          />{" "}
                          <span className="ms-1"> 40 km/h</span>
                        </div>
                        <div>
                          <MDBIcon
                            fas
                            icon="tint fa-fw"
                            style={{ color: "#868B94" }}
                          />{" "}
                          <span className="ms-1"> 84% </span>
                        </div>
                        <div>
                          <MDBIcon
                            fas
                            icon="sun fa-fw"
                            style={{ color: "#868B94" }}
                          />{" "}
                          <span className="ms-1"> 0.2h </span>
                        </div>
                      </div>
                      <div>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                          width="100px"
                        />
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol >
              {/* <MDBCol md="8" lg="12" xl="4">
              <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                          width="100px"
                        />

              </MDBCol> */}
          
            </MDBRow>
          </MDBContainer>

          <div class="bg-container grid place-items-center my-6">
            <div class="container ">
              <div class="row">
                <div class="col-md-12">
                  <h1 className="text-center heading text-2xl  font-bold text-white uppercase mb-4">Farmer Help center</h1>
                  <p className="text-2xl font-bold text-center text-white">
            #WeAreFarmers'Voice
          </p>
                </div>
                <p className="text-6xl font-medium text-center text-green-600 max-w-md mb-4">
            KRISHI.AI
          </p>
              </div>
            </div>

          </div>
          <section className="flex flex-col py-5">
        <div className="grid place-items-center my-14 ">
          <p className="text-3xl font-bold text-center text-gray-900 uppercase mb-2">
            FEATURES EXPLORED
          </p>
          <p className="text-xl font-medium text-center text-gray-500 max-w-md">
            {" "}
            Take a look at our features
          </p>
        </div>
        <img src={FeatureImg} alt="features"></img>
      </section>




      <section className="body__section py-10">
        <div className="grid place-items-center mt-5">
          <p className="text-3xl font-bold text-center text-green-900 uppercase mb-2">
            HOW KRISHI HELPS
          </p>
          <p className="text-xl font-medium text-center text-gray-500 ">
            Being a part of KRISHI.AI, these are our mainstays
          </p>
        </div>
        <div className="grid place-items-center mt-14 mb-20">
          <div className="inline-flex space-x-36 items-center justify-end">
            <div className="w-1/4 h-full">
              <div className="inline-flex flex-col space-y-6 items-center justify-end flex-1 h-full pl-9 pr-8 pt-8 pb-11 bg-white border rounded border-black border-opacity-10">
                <img className="w-1/5 h-12 rounded-lg" src={Help} alt="help" />
                <p className="w-56 h-7 text-lg font-semibold text-gray-900 text-center">
                  24*7 calls and help desk
                </p>
                <p className="opacity-70 w-56 h-1/5 text-base text-center">
                  Providing solutions through calls
                </p>
              </div>
            </div>
            <div className="w-1/4 h-full">
              <div className="inline-flex flex-col space-y-6 items-center justify-end flex-1 h-full pl-9 pr-8 pt-8 pb-11 bg-white border rounded border-black border-opacity-10">
                <img className="w-14 h-14 rounded-lg" src={SMS} alt="SMS" />
                <p className="w-56 h-7 text-lg font-semibold text-gray-900 text-center">
                  SMS services for contact
                </p>
                <p className="opacity-70 w-56 h-1/5 text-base text-center">
                  Send your queries through SMS
                </p>
              </div>
            </div>
            <div className="w-1/4 h-full">
              <div className="inline-flex flex-col space-y-6 items-center justify-end flex-1 h-full pl-9 pr-8 pt-8 pb-11 bg-white border rounded border-black border-opacity-10">
                <img
                  src={Image}
                  className="w-14 h-14 rounded-lg"
                  alt="voice assistance"
                />
                <p className="w-56 h-7 text-lg font-semibold text-gray-900 text-center">
                  Voice assistant System
                </p>
                <p className="opacity-70 w-56 h-1/5 text-base text-center">
                  Get voice assisted solution
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>




        
        </section>
        




      );
}