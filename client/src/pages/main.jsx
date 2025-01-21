import React, { useState, useEffect } from "react";

const images = [
  `${process.env.PUBLIC_URL}/images/contrail/Images/Homepage_images/River-Fishing.webp`,
  `${process.env.PUBLIC_URL}/images/contrail/Images/Homepage_images/ShedHunting.webp`,
  // Add more image URLs here if needed
];

const Main = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-1">
              {/* Cycling Images */}
              <img
                className=""
                src={images[currentImageIndex]}
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* New Arrivals */}

        <div className="container mt-5">
          <div className="text-center fs-2 mb-3">NEW ARRIVALS</div>
          <div className="row d-flex justify-content-evenly">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src={`${process.env.PUBLIC_URL}/images/prod_images/100748-DEFAULT-m.jpg`}
                class="card-img-top"
                alt="..."
                style={{ width: "100%", height: "50%" }}
              />
              <div class="card-body">
                <h5 class="card-title text-danger text-center">KIMBER</h5>
                <p class="card-text">
                  This is a very beautiful gun that hits the target with
                  accuracy.
                </p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <span>Item # 12345</span>
                <span>$700.00</span>
              </div>
            </div>

            <div class="card" style={{ width: "18rem" }}>
              <img
                src={`${process.env.PUBLIC_URL}/images/prod_images/100760-DEFAULT-m.jpg`}
                class="card-img-top"
                alt="..."
                style={{ width: "100%", height: "50%" }}
              />
              <div class="card-body">
                <h5 class="card-title text-danger text-center">KIMBER</h5>
                <p class="card-text">
                  This is a very beautiful gun that hits the target with
                  accuracy.
                </p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <span>Item # 12345</span>
                <span>$700.00</span>
              </div>
            </div>

            <div class="card" style={{ width: "18rem" }}>
              <img
                src={`${process.env.PUBLIC_URL}/images/prod_images/106774-DEFAULT-m.jpg`}
                class="card-img-top"
                alt="..."
                style={{ width: "100%", height: "50%" }}
              />
              <div class="card-body">
                <h5 class="card-title text-danger text-center">KIMBER</h5>
                <p class="card-text">
                  This is a very beautiful gun that hits the target with
                  accuracy.
                </p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <span>Item # 12345</span>
                <span>$700.00</span>
              </div>
            </div>

            <div class="card" style={{ width: "18rem" }}>
              <img
                src={`${process.env.PUBLIC_URL}/images/prod_images/107062-DEFAULT-m.jpg`}
                class="card-img-top"
                alt="..."
                style={{ width: "100%", height: "50%" }}
              />
              <div class="card-body">
                <h5 class="card-title text-danger text-center">KIMBER</h5>
                <p class="card-text">
                  This is a very beautiful gun that hits the target with
                  accuracy.
                </p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <span>Item # 12345</span>
                <span>$700.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* deal of the day */}

        <div className="container mt-5">
          <div className="text-center fs-2 mb-3">DEAL OF THE DAY</div>
          <div className="row d-flex justify-content-evenly">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src={`${process.env.PUBLIC_URL}/images/prod_images/121254-DEFAULT-m.jpg`}
                class="card-img-top"
                alt="..."
                style={{ width: "100%", height: "50%" }}
              />
              <div class="card-body">
                <h5 class="card-title text-danger text-center">KIMBER</h5>
                <p class="card-text">
                  This is a very beautiful gun that hits the target with
                  accuracy.
                </p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <span>Item # 12345</span>
                <del>$700.00</del>
                <span className="text-danger">$500.00</span>
              </div>
            </div>

            <div class="card" style={{ width: "18rem" }}>
              <img
                src={`${process.env.PUBLIC_URL}/images/prod_images/116676-DEFAULT-m.jpg`}
                class="card-img-top"
                alt="..."
                style={{ width: "100%", height: "50%" }}
              />
              <div class="card-body">
                <h5 class="card-title text-danger text-center">KIMBER</h5>
                <p class="card-text">
                  This is a very beautiful gun that hits the target with
                  accuracy.
                </p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <span>Item # 12345</span>
                <del>$700.00</del>
                <span className="text-danger">$500.00</span>
              </div>
            </div>

            <div class="card" style={{ width: "18rem" }}>
              <img
                src={`${process.env.PUBLIC_URL}/images/prod_images/116671-DEFAULT-m.jpg`}
                class="card-img-top"
                alt="..."
                style={{ width: "100%", height: "50%" }}
              />
              <div class="card-body">
                <h5 class="card-title text-danger text-center">KIMBER</h5>
                <p class="card-text">
                  This is a very beautiful gun that hits the target with
                  accuracy.
                </p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <span>Item # 12345</span>
                <del>$700.00</del>
                <span className="text-danger">$500.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5 position-relative">
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              backgroundColor: "rgba(255, 193, 7, 0.5)", // Warning color with transparency
              zIndex: 1, // Ensure it appears above the image
            }}
          ></div>

          <img
            className="try"
            src={`${process.env.PUBLIC_URL}/images/mainbanner.webp`}
            style={{ height: "400px", width: "100%" }}
            alt="Main banner"
          />

          <div
            className="d-flex flex-column w-90 mt-5 mb-5"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)", // Centers the text
              zIndex: 2, // Ensure it appears above the overlay
            }}
          >
            <span className="text-white fs-3">
              JAY'S SPORTING GOODS: THE ORIGINAL OUTDOOR SUPERSTORE.
            </span>
            <span className="text-white fs-4">
              Starting from a one car garage Jay's has grown into a 90,000 sq.
              ft. building in Clare and as of 2015 a 90,000 sq. ft. building in
              Gaylord, MI. With a focus on the outdoor industry Jay's can supply
              your needs in multiple product categories such as Archery,
              Firearms, Fishing, Camping, and Clothing apparel that can take
              your look or hunt to the next level. We are celebrating over 45
              years as a Michigan family owned business.
            </span>
          </div>
        </div>

        {/* Top Brands */}
        <div className="container mt-5">
          <div className="text-center fs-2 mb-3">TOP BRANDS</div>
          <div className="row d-flex flex-row justify-content-evenly align-items-center">
            <img
              src={`${process.env.PUBLIC_URL}/images/contrail/Images/_SITKA_Gear_Color.jpg`}
              style={{ width: "20%", height: "25%" }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/contrail/Images/ax.png`}
              style={{ width: "20%", height: "25%" }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/contrail/Images/D-VEC_black.jpg`}
              style={{ width: "20%", height: "25%" }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/contrail/Images/Old_Town.png`}
              style={{ width: "20%", height: "25%" }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/contrail/Images/St_Croix_Logo.jpg`}
              style={{ width: "20%", height: "25%" }}
            />
          </div>
        </div>

        {/* Featured Products */}
        <div className="container mt-5">
          <div className="row d-flex flex-row justify-content-evenly align-items-center">
            <img
              src={`${process.env.PUBLIC_URL}/images/contrail/Images/Homepage_Sub_Banners/GC_570x360_WEB.jpg`}
              style={{ width: "50%", height: "50%" }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/contrail/Images/Homepage_Sub_Banners/Website.jpg`}
              style={{ width: "50%", height: "50%" }}
            />
          </div>
        </div>

        <div className="container mt-5">
          <div className="row d-flex flex-row justify-content-evenly align-items-center">
            <img
              src={`${process.env.PUBLIC_URL}/images/contrail/Images/Homepage_Subcategory_Images/Blue_Store.webp`}
              style={{ width: "50%", height: "50%" }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/images/contrail/upcoming_events.jpg`}
              style={{ width: "50%", height: "50%" }}
            />
          </div>
        </div>

        <div className="container mt-5">
          <div className="d-flex flex-column ">
            <span className="fs-1 ">
              Your Search for The Best Sporting Goods Stores Near Me Ends Here
            </span>
            <span className="fs-5">
              Welcome to Jay’s Sporting Goods -one of the leading sporting goods
              stores for all things outdoors. As Michigan’s original outdoor
              retail store, we have been serving the community for over five
              decades, offering top-of-the-shelf products and unparalleled
              customer service.
            </span>
            <br />
            <br />
            <span className="fs-5">
              Whether you are preparing for the hunting season, gearing up for a
              weekend camping trip, or looking for the latest in fishing,
              hunting, and outdoor gear -Jay’s Sporting Goods is the name you
              can trust.
            </span>
          </div>
        </div>

        <div className="container mt-5">
          <div className="d-flex flex-column ">
            <span className="fs-1 ">
              Stop Searching Sporting Goods Stores Near Me!
            </span>
            <span className="fs-5">
              At Jay’s, we take pride in being more than just your ordinary
              sporting goods store. We are a family-owned business with deep
              roots in the Michigan community, carrying an extensive selection
              of top-notch firearms, fishing, camping, archery products, and
              outdoor clothing. Our two massive 90,000 sq. feet retail
              facilities in Clare and Gaylord are stocked to the rafters to meet
              all your outdoor needs. For those searching for sporting goods
              near me, Jay's Sporting Goods stands out with its extensive
              selection of outdoor gear and apparel.
            </span>
          </div>
        </div>

        <div className="container mt-5">
          <div className="d-flex flex-column ">
            <span className="fs-1 ">
              Why Choose Jay’s Sporting Goods Store?
            </span>
            <span className="fs-5">
              When you are looking for a reputable sporting goods store near me,
              or sporting goods near me, we know that you are not just looking
              for a place to shop -you are looking for a partner in your outdoor
              adventures. Here’s what makes us every shooting and outdoor
              enthusiast’s #1 choice:
            </span>
            <br />
            <br />

            <span className="fs-5">
              <ul>
                <li className="fw-bold">A Family-Owned Legacy</li>
                <br />
                <p>
                  We have been family-owned and operated since day one, with
                  multiple generations of the Poet Family involved. Our team
                  ensures that we put customer satisfaction at the heart.
                </p>
              </ul>
            </span>

            <span className="fs-5">
              <ul>
                <li className="fw-bold">Wide Selection of Products</li>
                <br />
                <p>
                  From top-tier camping gear to the latest archery supplies, our
                  store offers products that cater to both seasoned outdoorsmen
                  and beginners alike.
                </p>
              </ul>
            </span>

            <span className="fs-5">
              <ul>
                <li className="fw-bold">Expert Guidance</li>
                <br />
                <p>
                  Our expert staff, many of whom are family members, are
                  passionate about everything outdoors and always ready to
                  assist you in finding what you need.
                </p>
              </ul>
            </span>

            <span className="fs-5">
              <ul>
                <li className="fw-bold">Community Centered</li>
                <br />
                <p>
                  We are more than just a store, we are part of a Michigan
                  outdoor community. Whether you are visiting from afar or a
                  local, you will always find a welcoming atmosphere at Jay’s.
                </p>
              </ul>
            </span>
          </div>
        </div>

        <div className="container mt-5">
          <div className="d-flex flex-column ">
            <span className="fs-1 ">Become a Jay’s Sporting Goods Insider</span>
            <span className="fs-5">
              Want to be the first to know about the latest additions to our
              fishing, hunting, camping, archery, firearms, and water sports
              categories? Sign up for our newsletter today and catch exclusive
              deals we have in store just for you.
            </span>
            <br />
            <br />
            <span className="fs-5">
              Whether you are stopping by one of our locations or browsing our
              online store, you can count on Jay’s to be your trusted sporting
              goods store for all your outdoor adventures.
            </span>
            <br />
            <br />
            <span className="fs-5">
            If you are having trouble finding the products you are looking for or need more information about your ordered items, connect with our staff via the ‘contact’ section. 
            </span>
            <br />
            <br />
            <span className="fs-5">
            Send us a message via our online contact form or give us a call at 989.705.1339 for Gaylord or 989.386.3475 for Clare
            </span>
            <br />
            <br />
            <span className="fs-5">
            We look forward to serving you. 
            </span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
