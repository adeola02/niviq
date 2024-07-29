const UserCard = () => {
  return (
      <div className="w-full h-full flex items-center justify-center">
          <div className="container">
              <div className="card">
                  <div className="card-inner">
                      <div className="front">
                          <img
                              src="https://i.ibb.co/PYss3yv/map.png"
                              className="map-img"
                          />
                          <div className="row">
                              <img
                                  src="https://i.ibb.co/G9pDnYJ/chip.png"
                                  width="60px"
                              />
                              <img
                                  src="https://i.ibb.co/WHZ3nRJ/visa.png"
                                  width="60px"
                              />
                          </div>
                          <div className="row card-no">
                              <p>5244</p>
                              <p>2150</p>
                              <p>8252</p>
                              <p>6420</p>
                          </div>
                          <div className="row card-holder">
                              <p>CARD HOLDER</p>
                              <p>VALID TILL</p>
                          </div>
                          <div className="row name">
                              <p>AKINTUNDE ABDULQUADRI</p>
                              <p>10 / 25</p>
                          </div>
                      </div>
                      <div className="back">
                          <img
                              src="https://i.ibb.co/PYss3yv/map.png"
                              className="map-img"
                          />
                          <div className="bar"></div>
                          <div className="row card-cvv">
                              <div>
                                  <img src="https://i.ibb.co/S6JG8px/pattern.png" />
                              </div>
                              <p>824</p>
                          </div>
                          <div className="row card-text">
                              <p>
                                  By using this card, the holder agrres to all
                                  the terms under which it was issued
                              </p>
                              <p>
                                  This card is issued and remains the property
                                  of Niviq Inc
                              </p>
                          </div>
                          <div className="row signature">
                              <p>CUSTOMER SIGNATURE</p>
                              <img
                                  src="https://i.ibb.co/WHZ3nRJ/visa.png"
                                  width="80px"
                              />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default UserCard;
