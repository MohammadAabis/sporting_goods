import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container">
            <div class="d-flex flex-column align-items-center w-100">
              {/* Logo and Search Form Container */}
              <div class="d-flex justify-content-between align-items-center w-100 mb-3">
                <div>
                  {/* Logo Container */}
                  <img
                    className="images"
                    src={`${process.env.PUBLIC_URL}/images/contrail/company-logo.png`}
                    alt="img1"
                    style={{ height: "50px", width: "150px" }}
                  />
                </div>

                <div>
                  {/* Search Form Container */}
                  <form class="search-form" role="search">
                    <div class="d-flex">
                      <input
                        class="form-control me-2"
                        type="search"
                        placeholder="Search..."
                        aria-label="Search"
                      />
                      <button class="btn btn-outline-success" type="submit">
                        <i class="bi bi-search"></i>
                      </button>
                    </div>
                  </form>
                </div>

                <div class="d-flex">
                  {/* Navbar Links Container */}
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">
                        LOCATIONS <i class="bi bi-geo-alt-fill"></i>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        LOGINS <i class="bi bi-person-fill"></i>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        CART <i class="bi bi-cart-fill"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Dropdowns Container */}
              <div class="dropdowns w-100">
                <div class="d-flex justify-content-evenly w-100">
                  <ul class="navbar-nav">SHOP BY DEPARTMENT</ul>
                  <ul class="navbar-nav">SHOP BY BRAND</ul>
                  <ul class="navbar-nav">GIFT CARDS</ul>
                  <ul class="navbar-nav">EXPLORE</ul>
                  <ul class="navbar-nav">ABOUT</ul>
                  <ul class="navbar-nav">CONNECT</ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
