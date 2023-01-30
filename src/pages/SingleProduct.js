import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(false);
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 500,
    img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2hlc3xlbnwwfHwwfHw%3D&w=1000&q=80",
  };

  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title=" Product Name" />

      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <ReactImageZoom {...props} />
                <div></div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15 ">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2hlc3xlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2hlc3xlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2hlc3xlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2hlc3xlbnwwfHwwfHw%3D&w=1000&q=80"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className=" main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Kid Watch in Sale with discounted price
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value="3"
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review"> (2 reviews)</p>
                  </div>
                  <a href="#review" className="review-btn">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type :</h3>
                    <p className="product-data">Watch </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand :</h3>
                    <p className="product-data"> Casio</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product-data"> Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data ">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability :</h3>
                    <p className="product-data ">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size :</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary ">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary ">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary ">
                        XL
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary ">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color :</h3>
                    <Color />
                  </div>

                  <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                    <h3 className="product-heading">Quantity :</h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        className="form-control"
                        style={{ width: "70px" }}
                        id=""
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ">
                      <button className="button border-0" type="submit">
                        Add to Cart
                      </button>
                      <button className="button ">Buy It Now</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="">
                        <TbGitCompare className="fs-5 me-2" /> Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <AiOutlineHeart className="fs-5 me-2" /> Add to WishList
                      </a>
                    </div>
                  </div>
                </div>
                <div className="d-flex gap-10  flex-column mt-4 mb-3">
                  <h3 className="product-heading">Shipping and Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br /> We
                    ship all Nepal orders within <b>5-10 business days</b>{" "}
                  </p>
                </div>
                <div className="d-flex gap-10  flex-row mt-2 mb-3">
                  <h3 className="product-heading"> Product Link :</h3>

                  <a
                    href="javascript:void(0)"
                    onClick={() => {
                      copyToClipboard(
                        "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2hlc3xlbnwwfHwwfHw%3D&w=1000&q=80"
                      );
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>

              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione, culpa! Ut odit quas dolorum adipisci placeat
                  doloribus voluptatum consequatur provident cupiditate totam
                  aliquid vitae quo ad magnam eius minima rerum natus optio in
                  exercitationem officiis enim, error beatae ea. Aut!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="review" className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Reviews</h4>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>

                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="5"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6>Alish</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Perspiciatis, cum fuga qui ducimus et ex vitae tempora
                      harum enim iure autem ullam, culpa facere nulla minima.
                      Esse id voluptatibus maxime cumque, corporis, adipisci,
                      vero quae corrupti aliquam natus excepturi expedita
                      aspernatur earum eos eius quisquam in minus ipsa. Impedit
                      voluptates, id quae qui delectus consectetur? Eaque
                      deleniti est voluptatum iusto reiciendis nostrum quas,
                      delectus, tempora hic numquam doloremque! Ipsum autem
                      eligendi labore veritatis vitae perferendis eius ratione,
                      animi repellendus esse!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
