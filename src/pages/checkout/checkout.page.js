import React, { useState } from "react";
import { Box, IconButton, Step, StepLabel, Stepper } from "@mui/material";
import { ArrowBack, ArrowForward, Check } from "@mui/icons-material";

import ReviewItemsComponent from "./components/reviewItems.component";
import FilldetailsComponent from "./components/filldetails.component";

const steps = ["Review Items", "Fill Address", "Payment", "Done"];

const CheckoutPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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
        {activeStep + 1 === 2 && <FilldetailsComponent />}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {activeStep !== 0 && (
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

          <IconButton
            color="inherit"
            size={"large"}
            disabled={activeStep >= steps.length}
            onClick={handleNext}
            sx={{ border: 1, borderColor: "#cccccc", marginLeft: "auto" }}
          >
            {activeStep >= steps.length - 1 ? (
              <Check fontSize={"large"} />
            ) : (
              <ArrowForward fontSize={"large"} />
            )}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutPage;
