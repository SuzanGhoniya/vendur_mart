import React, { Component } from "react";
import { useState } from "react";
import { serveyData } from "./serveyData";
import { db } from "../../Firebase/firebase";
import { Link } from "gatsby";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

const Servey = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    number: "",
    gender: "",
    oRating: "",
    m3t1: "",
    m3t2: "",
    m3t3: "",
    t3bobna1: "",
    t3bobna2: "",
    t3bobna3: "",
    storeNearYou: "",
    localSRating: "",
    butOnline: "",
    permonthShoping: "",
    preferChoice: "",
    cap: "false",
  });
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await serveyData(form);
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
        <div className="text-center mt-3 display-4 text-fluid">Survey</div>
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
            <label for="InputGender">
              Gender<span className="text-danger"> *</span>
            </label>
            <div className="form-check">
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="Gender"
                  value="Male"
                  className="form-check-input"
                  onChange={(e) => setForm({ ...form, gender: e.target.value })}
                  required
                />
                <label for="genderSelection">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="Gender"
                  value="Female"
                  className="form-check-input ml-4"
                  onChange={(e) => setForm({ ...form, gender: e.target.value })}
                  required
                />
                <label for="genderSelection">Female</label>
              </div>
            </div>
            <div className="form-group">
              <label for="InputName">
                Rate online Shoping <span className="text-danger"> *</span>
              </label>
              <div className="mb-3">
                <select
                  className="custom-select m-1 borderRounded"
                  onChange={(e) =>
                    setForm({ ...form, oRating: e.target.value })
                  }
                  required
                >
                  <option value="">Choose...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <div className="invalid-feedback">please rate online shoping.</div>
              </div>
            </div>
            <div className="form-group">
              <label for="InputName">
                Three things you buy most on a daily basis
                <span className="text-danger"> *</span>
              </label>
              <input
                type="text"
                className="form-control col borderRounded"
                placeholder="1st Thing"
                onChange={(e) => setForm({ ...form, m3t1: e.target.value })}
                minLength={3}
                required
              />
              <input
                type="text"
                className="form-control col mt-1 borderRounded"
                onChange={(e) => setForm({ ...form, m3t2: e.target.value })}
                placeholder="2nd Thing"
                minLength={3}
              />
              <input
                type="text"
                className="form-control col mt-1 borderRounded"
                placeholder="3rd Thing"
                onChange={(e) => setForm({ ...form, m3t3: e.target.value })}
                minLength={3}
              />
            </div>

            <div className="form-group">
              <label for="InputName">
                Top three things you want to buy online but not easily available
                <span className="text-danger"> *</span>
              </label>
              <input
                type="text"
                className="form-control col borderRounded"
                placeholder="1st Thing"
                onChange={(e) => setForm({ ...form, t3bobna1: e.target.value })}
                minLength={3}
                required
              />
              <input
                type="text"
                className="form-control col mt-1 borderRounded"
                placeholder="2nd Thing"
                onChange={(e) => setForm({ ...form, t3bobna2: e.target.value })}
                minLength={3}
              />
              <input
                type="text"
                className="form-control col mt-1 borderRounded"
                placeholder="3rd Thing"
                onChange={(e) => setForm({ ...form, t3bobna3: e.target.value })}
                minLength={3}
              />
            </div>
            <div className="form-group">
              <label for="InputName">
                Is a store near you?<span className="text-danger"> *</span>
              </label>
              <div className="mb-3">
                <select
                  className="custom-select m-1 borderRounded"
                  onChange={(e) =>
                    setForm({ ...form, storeNearYou: e.target.value })
                  }
                  required
                >
                  <option value="">Choose...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <div className="invalid-feedback">
                  Example invalid custom select feedback
                </div>
              </div>
            </div>
            <div className="form-group">
              <label for="InputName">
                Rate shopping experience in local store local store
                <span className="text-danger"> *</span>
              </label>
              <input
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                type="number"
                className="form-control borderRounded"
                placeholder="Rate between 1 to 10 (1: Worst to 10: Best)"
                onChange={(e) =>
                  setForm({ ...form, localSRating: e.target.value })
                }
                maxLength="10"
                minLength="0"
                required
              />
            </div>

            <div className="form-group">
              <label for="InputName">
                Would you buy from an online store if easily accessible?
                <span className="text-danger"> *</span>
              </label>
              <div className="mb-3">
                <select
                  className="custom-select m-1 borderRounded"
                  onChange={(e) =>
                    setForm({ ...form, butOnline: e.target.value })
                  }
                  required
                >
                  <option value="">Choose...</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <div className="invalid-feedback">
                  Example invalid custom select feedback
                </div>
              </div>
              <div className="form-group">
                <label for="InputName">
                  How many times do you Buy from a retail store in a month?
                  <span className="text-danger"> *</span>
                </label>
                <input
                  type="number"
                  className="form-control borderRounded"
                  placeholder="in number"
                  onChange={(e) =>
                    setForm({ ...form, permonthShoping: e.target.value })
                  }
                  minLength={1}
                  required
                />
              </div>
              <div className="form-group">
                <label for="InputName">
                  What do you prefer?<span className="text-danger"> *</span>
                </label>
                <br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input borderRounded"
                    name="prefer"
                    type="radio"
                    id="inlineCheckbox1"
                    value="shop online with fast delivery"
                    onChange={(e) =>
                      setForm({ ...form, preferChoice: e.target.value })
                    }
                  />
                  <label className="form-check-label" for="inlineCheckbox1">
                    shop online with fast delivery
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input borderRounded"
                    name="prefer"
                    type="radio"
                    id="inlineCheckbox2"
                    value="Shop offline by going physically to the local store"
                    onChange={(e) =>
                      setForm({ ...form, preferChoice: e.target.value })
                    }
                  />
                  <label className="form-check-label" for="inlineCheckbox2">
                    Shop offline by going physically to the local store
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn bg-primary mt-4 text-light d-block mx-auto col-11 col-md-5 borderRounded"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"your response has been recorded"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            press close if you want to edit your response <br /> <br />
            <center>Follow us on <a href="https://www.instagram.com/VendurMart/" target="_blank" className="bi bi-instagram border-0 borderRounded bg-light mt-1 icon text-danger ml-2"></a>
            <a href="https://www.facebook.com/VendurMart" target="_blank" className="bi bi-facebook border-0 borderRounded bg-light mt-1 icon text-primary ml-3"></a><br/><br/>
            Explore more to <br/><a href="http://vendur-mart.web.app/">VendurMart</a></center>
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

export default Servey;
