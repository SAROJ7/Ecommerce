import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { createAuction } from "../features/auction/auctionSlice";
import { useNavigate } from "react-router-dom";
import LoadingDisplay from "../components/LoadingDisplay";

let schema = yup.object().shape({
  title: yup.string().required("Title is Required"),
  description: yup.string().required("Description is Required"),
  startingPrice: yup.number().required("Price is Required"),
  duration: yup.number().required("Duration is Required"),
  category: yup.string().required("Category is Required"),
});
const CreateAuction = () => {
  const dispatch = useDispatch();
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("Choose your image file...");
  const [fileValid, setFileValid] = useState(true);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      startingPrice: null,
      duration: null,
      category: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createAuction(values));
      navigate("/auction");
    },
  });

  const fileSelected = (e) => {
    let filesize = (e.target.files[0].size / (1024 * 1024)).toFixed(3);
    let fileType = e.target.files[0].type.toString();
    let regex = /^image\/(png|jpg|jpeg|gif)$/;
    // if (fileType !== 'image/jpeg' && fileType !== 'image/png') {
    if (!regex.test(fileType)) {
      alert("Image must be of type JPEG, PNG or GIF");
      setFile("");
      setFileValid(false);
    } else if (filesize > 3) {
      alert("Image size must be less than 3 MB", "error");
      setFile("");
      setFileValid(false);
    } else {
      setFileValid(true);
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

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
                  placeholder="Product Name"
                  value={formik.values.title}
                  onChange={formik.handleChange("title")}
                  onBlur={formik.handleBlur("title")}
                />
                <div className="errors">
                  {formik.touched.title && formik.errors.title}
                </div>
                <div>
                  <textarea
                    id=""
                    className="w-100 form-control"
                    cols="30"
                    rows="5"
                    placeholder="Desciption"
                    name="description"
                    onChange={formik.handleChange("description")}
                    onBlur={formik.handleBlur("description")}
                    value={formik.values.description}
                  ></textarea>
                  <div className="errors">
                    {formik.touched.description && formik.errors.description}
                  </div>
                </div>
                <CustomInput
                  type="text"
                  name="startingPrice"
                  placeholder="Base Price"
                  value={formik.values.startingPrice}
                  onChange={formik.handleChange("startingPrice")}
                  onBlur={formik.handleBlur("startingPrice")}
                />
                <div className="errors">
                  {formik.touched.startingPrice && formik.errors.startingPrice}
                </div>
                <div>
                  <CustomInput
                    type="text"
                    name="duration"
                    placeholder="Duration in hours(max 24 hours)"
                    value={formik.values.duration}
                    onChange={formik.handleChange("duration")}
                    onBlur={formik.handleBlur("duration")}
                  />
                  <div className="errors">
                    {formik.touched.duration && formik.errors.duration}
                  </div>{" "}
                </div>
                <div>
                  <CustomInput
                    type="text"
                    name="category"
                    placeholder="Food, Electronics, Sports ..."
                    value={formik.values.category}
                    onChange={formik.handleChange("category")}
                    onBlur={formik.handleBlur("category")}
                  />
                  <div className="errors">
                    {formik.touched.category && formik.errors.category}
                  </div>
                </div>
                {/* {uploading ? (
                  <LoadingDisplay />
                ) : (
                  <Box>
                    <InputLabel>Upload image</InputLabel>
                    <Input
                      name="uploaded_file"
                      type="file"
                      id="imageFile"
                      onChange={fileSelected}
                      fullWidth
                    />
                    {file === "" && (
                      <Typography variant="caption">
                        jpg, png or gif maximum 3 MB
                      </Typography>
                    )}
                    {/* <label htmlFor='imageFile'>{fileName}</label> */}
                {/* </Box> */}

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
