import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  getAProduct,
  addRating,
} from "../features/products/productSlice";
import { toast } from "react-toastify";
import { addProdToCart, getUserCart } from "../features/user/userSlice";
import { Link } from "react-router-dom";
import watch from "../images/watch.jpg";

const SingleProduct = () => {
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [orderedProduct, setOrderedProduct] = useState(false);
  const [alreadyAdded, setAlreadyAdded] = useState(false);

  const [star, setStar] = useState(null);
  const [comment, setComment] = useState(null);
  const location = useLocation();
  const getCustomerfromLocalStorage = JSON.parse(
    localStorage.getItem("loggedcustomer")
  );

  const navigate = useNavigate();
  const productId = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  const productState = useSelector((state) => state?.product["singleProduct"]);
  console.log(productState);

  const cartState = useSelector((state) => state?.auth?.cartProducts || []);

  useEffect(() => {
    dispatch(getAProduct(productId));
    dispatch(getUserCart());
  }, []);

  useEffect(() => {
    for (let i = 0; i < cartState.length; i++) {
      if (productId === cartState[i]?.productId?._id) {
        setAlreadyAdded(true);
      }
    }
  });

  const addRatingToProduct = () => {
    console.log(`here`);
    if (star === null) {
      toast.error("Please Add Star Rating.");
      return false;
    } else if (comment === null) {
      toast.error("Please Write Review About the Product.");
      return false;
    } else {
      dispatch(addRating({ start: star, comment: comment, prodId: productId }));
    }
    return false;
  };

  const uploadToCart = (e) => {
    e.preventDefault();
    if (color === null) {
      toast.error("Please Choose Color.");
      return false;
    } else {
      dispatch(
        addProdToCart({
          productId: productState?._id,
          quantity,
          color,
          price: productState?.price,
        })
      );
      navigate("/cart");
    }
  };

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
    toast.info("Product added to Wishlist.");
  };

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
      <Meta title={productState?.title} />
      <BreadCrumb title={productState?.title} />

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
                  <h3 className="title">{productState?.title}</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ {productState?.price}</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={parseInt(productState?.totalrating)}
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
                    <p className="product-data">{productState?.category}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand :</h3>
                    <p className="product-data"> {productState?.brand}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product-data"> {productState?.category}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data ">{productState?.tags}</p>
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

                  {alreadyAdded === false && (
                    <>
                      <div className="d-flex gap-10 flex-column mt-2 mb-3">
                        <h3 className="product-heading">Color: </h3>
                        <Color
                          setColor={setColor}
                          colorData={productState?.color}
                        />
                      </div>
                    </>
                  )}

                  {getCustomerfromLocalStorage && (
                    <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                      {alreadyAdded === false && (
                        <>
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
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                            />
                          </div>
                        </>
                      )}
                      <div
                        className={`d-flex align-items-center gap-30 ${
                          alreadyAdded ? "ms-0" : "ms-5"
                        }`}
                      >
                        <button
                          className="button border-0"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          type="button"
                          onClick={(e) => {
                            alreadyAdded ? navigate("/cart") : uploadToCart(e);
                          }}
                        >
                          {alreadyAdded ? "Go to Cart" : "Add to Cart"}
                        </button>
                        {/* <button className="button ">Buy It Now</button> */}
                      </div>
                    </div>
                  )}
                  {getCustomerfromLocalStorage && (
                    <div className="d-flex align-items-center gap-15">
                      <div>
                        <a
                          href=""
                          onClick={(e) => {
                            e.preventDefault();
                            addToWish(productState?._id);
                          }}
                        >
                          <AiOutlineHeart className="fs-5 me-2" /> Add to
                          WishList
                        </a>
                      </div>
                    </div>
                  )}
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
                      copyToClipboard(window.location.href);
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
                <p
                  dangerouslySetInnerHTML={{
                    __html: productState?.description,
                  }}
                />
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
                        value={productState?.totalrating?.toString()}
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

                {getCustomerfromLocalStorage && (
                  <div className="review-form py-4">
                    <h4>Write a Review</h4>

                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value="3"
                        edit={true}
                        activeColor="#ffd700"
                        onChange={(e) => setStar(e)}
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
                        onChange={(e) => {
                          setComment(e.target.value);
                        }}
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                      <button
                        onClick={addRatingToProduct}
                        className="button border-0"
                        type="button"
                      >
                        Submit Review
                      </button>
                    </div>
                  </div>
                )}
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
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">
              <div className="modal-header py-0 border-0">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body py-0">
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1 w-50">
                    <img
                      src={watch}
                      className="img-fluid"
                      alt="product imgae"
                    />
                  </div>
                  <div className="d-flex flex-column flex-grow-1 w-50">
                    <h6 className="mb-3">Apple Watch</h6>
                    <p className="mb-1">Quantity: asgfd</p>
                    <p className="mb-1">Color: asgfd</p>
                    <p className="mb-1">Size: asgfd</p>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0 py-0 justify-content-center gap-30">
                <button
                  type="button"
                  className="button"
                  data-bs-dismiss="modal"
                >
                  View My Cart
                </button>
                <button type="button" className="button signup">
                  Checkout
                </button>
              </div>
              <div className="d-flex justify-content-center py-3">
                <Link className="text-dark" to="/product" onClick={() => {}}>
                  Continue To Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
