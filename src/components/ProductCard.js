import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <div className="product-card position-relative ">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
            {/* <img
            src="images/watch-1.avif"
            className="img-fluid"
            alt="product image"
          /> */}
          </div>
          <div className="product-details">
            <h6 className="brand"> Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students.
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description  ${grid === 12 ? "d-block" : "d-none"}`}>
              This is not the end This is not the beginning just voice This is
              This is not the end This is not the beginning just voice not the
              This is not the end This is not the beginning just voice end This
              This is not the end This is not the beginning just voice is not
              This is not the end This is not the beginning just voice the This
              is not the end This is not the beginning just voice beginning just
              voice
            </p>
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <div className="product-card position-relative ">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product" />
            {/* <img
            src="images/watch-1.avif"
            className="img-fluid"
            alt="product image"
          /> */}
          </div>
          <div className="product-details">
            <h6 className="brand"> Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students.
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <div className="product-card position-relative ">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" className="img-fluid" alt="product " />
            {/* <img
            src="images/watch-1.avif"
            className="img-fluid"
            alt="product image"
          /> */}
          </div>
          <div className="product-details">
            <h6 className="brand"> Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students.
            </h5>
            <ReactStars
              count={5}
              size={24}
              value="3"
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column">
              <Link>
                <img src="images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;