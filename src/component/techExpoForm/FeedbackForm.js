import React, { Component } from "react";
import { useState } from "react";
import { FeedbackData } from "./FeedbackData";
import { db } from "../../Firebase/firebase";
import { Link } from "gatsby";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

const FeedbackServey = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    number: "",
    associate: "",
    likeConcept:"",
    rate:"",
    purchase:"",
    listYourBusiness:"",
    suggestions:""
  });
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await FeedbackData(form);
    handleClickToOpen();
  };

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="card min-vh-100 m-2 m-md-5 bg-light">
        <div className="text-center mt-3 display-4 text-fluid">
          Feedback Form
        </div>
        <form onSubmit={handleSubmit} className="mx-auto mt-4 col-11 col-md-5">
          <div className="form-group">
            <label for="InputName">
              Name<span className="text-danger"> *</span>
            </label>
            <input
              type="text"
              className="form-control borderRounded"
              placeholder="Enter your full name"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              minLength={3}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="form-group">
            <label for="InputName">
              Email ID<span className="text-danger"> *</span>
              <span className="text-danger"> </span>
            </label>
            <input
              type="email"
              className="form-control borderRounded"
              placeholder="Enter your Email Id"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              minLength={3}
              required
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="form-group">
            <label for="InputName">
              Contact Number<span className="text-danger"> *</span>
              <span className="text-danger"> </span>
            </label>
            <input
              type="tel"
              className="form-control borderRounded"
              placeholder="Enter your Number"
              onChange={(e) => setForm({ ...form, number: e.target.value })}
              required
              minLength={10}
              maxLength={10}
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="form-group">
            <label for="InputName">
              How would you like to associate with VendurMart?
              <span className="text-danger"> *</span>
            </label>
            <br />
            <div className="mb-3">
              <select
                className="custom-select m-1 borderRounded"
                onChange={(e) => setForm({ ...form, associate: e.target.value })}
                required
              >
                <option value="">Choose...</option>
                <option value="Customer">Customer</option>
                <option value="Business owner">Business owner</option>
              </select>
              <div className="invalid-feedback">
                please Select correct option.
              </div>
            </div>
          </div>

          <div className="form-group">
            <label for="InputName">
              Did you like our concept?
              <span className="text-danger"> *</span>
            </label>
            <br />
            <div className="mb-3">
              <select
                className="custom-select m-1 borderRounded"
                onChange={(e) => setForm({ ...form, likeConcept: e.target.value })}
                required
              >
                <option value="">Choose...</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <div className="invalid-feedback">
                please Select correct option.
              </div>
            </div>
          </div>

          <div className="form-group">
            <label for="InputName">
              How would you rate VendurMart?
              <span className="text-danger"> *</span>
            </label>
            <br />
            <div className="mb-3">
              <select
                className="custom-select m-1 borderRounded"
                onChange={(e) => setForm({ ...form, rate: e.target.value })}
                required
              >
                <option value="">Choose...</option>
                <option value="Awesome">Awesome</option>
                <option value="Good">Good</option>
                <option value="Didn’t like it">Didn’t like it</option>
                <option value="Didn’t understand the concept">
                  Didn’t understand the concept
                </option>
              </select>
              <div className="invalid-feedback">
                please Select correct option.
              </div>
            </div>
          </div>

          <div className="form-group">
            <label for="InputName">
              Would you purchase from VendurMart?
              <span className="text-danger"> *</span>
            </label>
            <br />
            <div className="mb-3">
              <select
                className="custom-select m-1 borderRounded"
                onChange={(e) => setForm({ ...form, purchase: e.target.value })}
                required
              >
                <option value="">Choose...</option>
                <option value="Yes, definitely">Yes, Definitely</option>
                <option value="Maybe">Maybe </option>
                <option value="No, i prefer going to shops and malls">
                  No, I prefer going to shops and malls
                </option>
                <option value="No, i will not">No, I will not</option>
              </select>
              <div className="invalid-feedback">
                please Select correct option.
              </div>
            </div>
          </div>

          <div className="form-group">
            <label for="InputName">
              Would you list your business on Vendurmart?
            </label>
            <br />
            <div className="mb-3">
              <select
                className="custom-select m-1 borderRounded"
                onChange={(e) => setForm({ ...form, listYourBusiness: e.target.value })}
              >
                <option value="">Choose...</option>
                <option value="Yes, definitely">Yes, Definitely</option>
                <option value="Maybe">Maybe </option>
                <option value="No, i will not">No, I will not</option>
              </select>
              <div className="invalid-feedback">
                please Select correct option.
              </div>
            </div>
          </div>

          <div className="form-group">
            <label for="InputName">
              Any suggestions or comments you would like to share with us?
            </label>
            <br />
            <div className="mb-3">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Enter Your Suggestions"
                onChange={(e) => setForm({ ...form, suggestions: e.target.value })}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="btn bg-primary mt-4 text-light d-block mx-auto col-11 col-md-5 borderRounded mb-4"
          >
            Submit
          </button>
        </form>
      </div>
      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"your response has been recorded"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <center><b>Thank You!!</b><br/>
            <p>press close if you want to edit your response</p></center>
            <center>
              Follow us on{" "}
              <a
                href="https://www.instagram.com/VendurMart/"
                target="_blank"
                className="bi bi-instagram border-0 borderRounded bg-light mt-1 icon text-danger ml-2"
              ></a>
              <a
                href="https://www.facebook.com/VendurMart"
                target="_blank"
                className="bi bi-facebook border-0 borderRounded bg-light mt-1 icon text-primary ml-3"
              ></a>
              <br />
              <br />
              Explore more to <br />
              <a href="http://vendur-mart.web.app/">VendurMart</a>
            </center>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FeedbackServey;
