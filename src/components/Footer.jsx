import React from "react";

function Footer() {
  return (
    <>
      <div>
        <footer className="bg-dark text-center text-lg-start text-white">
          <div className="container p-4">
            <div className="row my-4">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <div
                  className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
                  style={{ width: "150px", height: "150px" }}
                >
                  <img
                    src="https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?cs=srgb&dl=pexels-jonathan-petersson-1166120.jpg&fm=jpg&_gl=1*be8tkk*_ga*MjA4MzMyNTczMC4xNjYzNzU3MzEz*_ga_8JE65Q40S6*MTY2ODY4NDQxMy44LjEuMTY2ODY4NDQzNy4wLjAuMA.."
                    height="200"
                    width="200"
                    className="rounded-circle"
                  />
                </div>

                <p className="text-center mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                  numquam magni delectus obcaecati iste atque quibusdam quidem
                  provident mollitia eaque, consectetur voluptates eligendi quod
                  libero adipisci exercitationem alias saepe assumenda.
                </p>

                <ul className="list-unstyled d-flex flex-row justify-content-center">
                  <li>
                    <a className="text-white px-2" href="#!">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a className="text-white px-2" href="#!">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a className="text-white ps-2" href="#!">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">pızza</h5>

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3"></i>When your pet is
                      missing
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3"></i>Recently found
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3"></i>How to adopt?
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3"></i>Pets for adoption
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3"></i>Material gifts
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3"></i>Help with walks
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3"></i>Volunteer activities
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">extra pızza</h5>

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3"></i>General information
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3"></i>About the shelter
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3"></i>Statistic data
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3"></i>Job
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3"></i>Tenders
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-white">
                      <i className="fas fa-paw pe-3"></i>İletişim
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">İletİşİm</h5>

                <ul className="list-unstyled">
                  <li>
                    <p>
                      <i className="fas fa-map-marker-alt pe-2"></i>Warsaw, 57
                      Street, Poland
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-phone pe-2"></i>+ 01 234 567 89
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-envelope pe-2 mb-0"></i>
                      contact@example.com
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2020 Copyright :
            <a className="text-white ms-1" href="https://github.com/ogulcandgn">
              github/ogulcandgn
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
