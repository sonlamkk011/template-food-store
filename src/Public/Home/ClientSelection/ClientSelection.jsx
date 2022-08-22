const ClientSelection = () => {
  return (
    <>
      <section className="client_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2>What Says Our Customers</h2>
          </div>
          <div className="carousel-wrap row ">
            <div className="owl-carousel client_owl-carousel">
              <div className="item">
                <div className="box">
                  <div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <h6>Moana Michell</h6>
                    <p>magna aliqua</p>
                  </div>
                  <div className="img-box">
                    <img src="images/client1.jpg" alt="" className="box-img" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box">
                  <div className="detail-box">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam
                    </p>
                    <h6>Mike Hamell</h6>
                    <p>magna aliqua</p>
                  </div>
                  <div className="img-box">
                    <img src="images/client2.jpg" alt="" className="box-img" />
                  </div>
                </div>
                
              </div>
              
            </div>
          </div>
          <div className="carousel-wrap row ">
          <div className="owl-carousel client_owl-carousel owl-loaded owl-drag">
            <div className="owl-stage-outer">
              <div
                className="owl-stage"
                style={{
                  transform: "translate3d(-1755px, 0px, 0px)",
                  transition: "all 0.25s ease 0s",
                  width: 3510,
                }}
              >
                <div className="owl-item cloned" style={{ width: 585 }}>
                  <div className="item">
                    <div className="box">
                      <div className="detail-box">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <h6>Moana Michell</h6>
                        <p>magna aliqua</p>
                      </div>
                      <div className="img-box">
                        <img
                          src="images/client1.jpg"
                          alt=""
                          className="box-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item cloned" style={{ width: 585 }}>
                  <div className="item">
                    <div className="box">
                      <div className="detail-box">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <h6>Mike Hamell</h6>
                        <p>magna aliqua</p>
                      </div>
                      <div className="img-box">
                        <img
                          src="images/client2.jpg"
                          alt=""
                          className="box-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: 585 }}>
                  <div className="item">
                    <div className="box">
                      <div className="detail-box">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <h6>Moana Michell</h6>
                        <p>magna aliqua</p>
                      </div>
                      <div className="img-box">
                        <img
                          src="images/client1.jpg"
                          alt=""
                          className="box-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item active" style={{ width: 585 }}>
                  <div className="item">
                    <div className="box">
                      <div className="detail-box">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <h6>Mike Hamell</h6>
                        <p>magna aliqua</p>
                      </div>
                      <div className="img-box">
                        <img
                          src="Assets/images/client2.jpg"
                          alt=""
                          className="box-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item cloned active" style={{ width: 585 }}>
                  <div className="item">
                    <div className="box">
                      <div className="detail-box">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <h6>Moana Michell</h6>
                        <p>magna aliqua</p>
                      </div>
                      <div className="img-box">
                        <img
                          src="Assets/images/client1.jpg"
                          alt=""
                          className="box-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item cloned" style={{ width: 585 }}>
                  <div className="item">
                    <div className="box">
                      <div className="detail-box">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <h6>Mike Hamell</h6>
                        <p>magna aliqua</p>
                      </div>
                      <div className="img-box">
                        <img
                          src="Assets/images/client2.jpg"
                          alt=""
                          className="box-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="owl-nav disabled">
              <button type="button" role="presentation" className="owl-prev">
                <i className="fa fa-angle-left" aria-hidden="true" />
              </button>
              <button type="button" role="presentation" className="owl-next">
                <i className="fa fa-angle-right" aria-hidden="true" />
              </button>
            </div>
            <div className="owl-dots disabled" />
          </div>
        </div>
        </div>
       
      </section>
    </>
  );
};
export default ClientSelection;
