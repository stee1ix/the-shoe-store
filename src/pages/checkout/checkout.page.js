import React, { useContext, useEffect, useState } from "react";
import { Box, IconButton, Step, StepLabel, Stepper } from "@mui/material";
import { ArrowBack, ArrowForward, Check } from "@mui/icons-material";

import ReviewItemsComponent from "./components/reviewItems.component";
import FilldetailsComponent from "./components/filldetails.component";

import StripecheckoutComponent from "./components/stripecheckout.component";
import ConfirmComponent from "./components/confirm.component";

import { CartContext } from "../../services/cart/cart.context";

import { useNavigate } from "react-router-dom";

import ReactConfetti from "react-confetti";

const steps = ["Review Items", "Fill Details", "Payment", "Done"];

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const { items, setItems } = useContext(CartContext);

  const [arrowsDisabled, setArrowsDisabled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (activeStep === 0 || activeStep === 3) {
      setArrowsDisabled(false);
    } else if (activeStep === 2) {
      setArrowsDisabled(true);
    } else if (activeStep > steps.length - 1) {
      setItems([]);
      navigate("/");
    }
  }, [activeStep]);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 6,
      }}
    >
      <Box sx={{ width: "70%" }}>
        <Stepper
          activeStep={activeStep}
          sx={{
            marginBottom: 8,
          }}
        >
          {steps.map((label, index) => {
            return (
              <Step key={`step${index}`}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep + 1 === 1 && <ReviewItemsComponent />}
        {activeStep + 1 === 2 && (
          <FilldetailsComponent
            firstname={firstname}
            lastname={lastname}
            email={email}
            phonenumber={phonenumber}
            address={address}
            pincode={pincode}
            city={city}
            country={country}
            setFirstname={setFirstname}
            setLastname={setLastname}
            setEmail={setEmail}
            setPhonenumber={setPhonenumber}
            setAddress={setAddress}
            setPincode={setPincode}
            setCity={setCity}
            setCountry={setCountry}
            setArrowsDisabled={setArrowsDisabled}
          />
        )}
        {activeStep + 1 === 3 && (
          <StripecheckoutComponent
            handleNext={handleNext}
            firstname={firstname}
            lastname={lastname}
            email={email}
            phonenumber={phonenumber}
            address={address}
            pincode={pincode}
            city={city}
            country={country}
          />
        )}
        {activeStep + 1 === 4 && <ConfirmComponent handleNext={handleNext} />}
        {activeStep + 1 === 4 && (
          <ReactConfetti
            style={{ left: "50%", transform: "translate(-50%,0)" }}
            width={1000}
            height={500}
          />
        )}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {items.length > 0 && (
            <>
              {(activeStep === 1 || activeStep === 2) && (
                <IconButton
                  color="inherit"
                  size={"large"}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ border: 1, borderColor: "#cccccc" }}
                >
                  <ArrowBack fontSize={"large"} />
                </IconButton>
              )}
              {activeStep !== 2 && activeStep !== 3 && (
                <IconButton
                  color="inherit"
                  size={"large"}
                  disabled={activeStep >= steps.length || arrowsDisabled}
                  onClick={handleNext}
                  sx={{ border: 1, borderColor: "#cccccc", marginLeft: "auto" }}
                >
                  {activeStep >= steps.length - 1 ? (
                    <Check fontSize={"large"} />
                  ) : (
                    <ArrowForward fontSize={"large"} />
                  )}
                </IconButton>
              )}
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutPage;
