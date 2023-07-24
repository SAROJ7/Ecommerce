import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { createAuction } from "../features/auction/auctionSlice";
import { useNavigate } from "react-router-dom";

let schema = yup.object().shape({
  title: yup.string().required("Title is Required"),
  startingPrice: yup.number().required("Price is Required"),
});
const CreateAuction = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      startingPrice: 0,
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createAuction(values));
      navigate("/auction");
    },
  });
  return (
    <>
      <Meta title={"Create Aution"} />
      <BreadCrumb title="Create Auction" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Create Auction</h3>
              <form
                action=""
                className="d-flex flex-column gap-15"
                onSubmit={formik.handleSubmit}
              >
                <CustomInput
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={formik.values.title}
                  onChange={formik.handleChange("title")}
                  onBlur={formik.handleBlur("title")}
                />
                <div className="errors">
                  {formik.touched.title && formik.errors.title}
                </div>
                <CustomInput
                  type="text"
                  name="startingPrice"
                  placeholder="Starting Price"
                  value={formik.values.startingPrice}
                  onChange={formik.handleChange("startingPrice")}
                  onBlur={formik.handleBlur("startingPrice")}
                />
                <div className="errors">
                  {formik.touched.startingPrice && formik.errors.startingPrice}
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Create Auction</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CreateAuction;
