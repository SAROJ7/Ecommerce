import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuctions, resetState } from "../features/auction/auctionSlice";
import watch from "../images/watch.jpg";

const Auction = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetState());
    dispatch(getAuctions());
  }, []);
  const auctionState = useSelector((state) => state?.auction?.auctions);

  return (
    <>
      <Meta title="Auction" />
      <BreadCrumb title="Auction" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="button-container">
          <Link to="/create-auction" className="button auction">
            Create Auction
          </Link>
        </div>
        <div className="row">
          {auctionState &&
            auctionState?.map((item, index) => {
              if (item?.status === "In Progress") {
                return (
                  <div key={index} className={"col-3"}>
                    <div className="product-card position-relative">
                      <div className="product-image">
                        <img
                          src="images/watch.jpg"
                          className="img-fluid"
                          alt="product image"
                        />
                      </div>
                      <div className="product-details">
                        <h5 className="product-title">{item?.title}</h5>
                        <div className="product-details">
                          <button className="button border-0" type="submit">
                            Bid
                          </button>
                        </div>
                        <p className="price">
                          Starting Price: &nbsp; ${item?.startingPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>
    </>
  );
};

export default Auction;
