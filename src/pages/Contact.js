import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiInfoCircle, BiPhoneCall } from "react-icons/bi";
const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7063.391280808727!2d85.32634752337475!3d27.726682078080064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19168de06f8b%3A0xcfa1995cfd8b4e8d!2sBaluwatar%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1674388600144!5m2!1sen!2snp"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                title="myaddress"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Mobile Number"
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
                    <button className="button border-0 send-button ">
                      Send
                    </button>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          Baluwatar, Kathmandu 44600
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+977 98XXXXXXXX">+977 98XXXXXXXX</a>
                      </li>

                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:xxxxx@xxxxxxx.com">xxxxx@xxxxxxx.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Sunday - Saturday 10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
