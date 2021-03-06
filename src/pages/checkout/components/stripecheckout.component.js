import React, { useContext } from "react";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import StripeCheckout from "react-stripe-checkout";

import { CartContext } from "../../../services/cart/cart.context";

import { db } from "../../../services/firebase/firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { auth } from "../../../services/authentication/authentication.services";

const StripecheckoutComponent = ({
  handleNext,
  email,
  firstname,
  lastname,
  address,
  city,
  country,
  phonenumber,
}) => {
  const { total } = useContext(CartContext);

  const publishableKey =
    "pk_test_51IpB8QSJ0E6JjThJ6zIZTPFnV8ixCeLv8X8Y8zymIItpqNJLXvrBuH6rSGdM9pEmPn23hZPLc7JWZ0VQYsFYpGWG00dzy5PWbR";

  const { items } = useContext(CartContext);

  const onToken = (token) => {
    items.map(async (item) => {
      const date = new Date().toLocaleDateString();
      const { name, imageurl, quantity } = item;
      const userId = auth.currentUser.uid;
      const data = {
        name,
        imageurl,
        quantity,
        date,
        userId,
        username: `${firstname} ${lastname}`,
        address,
        city,
        country,
        phonenumber,
        total,
      };

      const colRef = collection(db, "orders");
      const docRef = await addDoc(colRef, data);
    });

    handleNext();
  };

  return (
    <Box sx={{ width: "100%", minHeight: 400, display: "flex" }}>
      <Box sx={{ flex: 1 }}>
        <Typography variant={"h3"} fontWeight={"lighter"}>
          Payment
        </Typography>
        <Box sx={{ textAlign: "center", marginTop: 12, alignSelf: "center" }}>
          <Typography variant={"h6"} color={"red"}>
            *Use the following test card for payments*
          </Typography>
          <Typography variant={"h6"} color={"red"}>
            4242 4242 4242 4242 - Exp: 01/30 - CVV: 123
          </Typography>
        </Box>
      </Box>
      <Paper
        sx={{
          width: 300,
          height: "fit-content",
          padding: 2,
          marginLeft: "auto",
        }}
      >
        <Typography variant={"h5"} sx={{ marginBottom: 4 }}>
          Order Summary
        </Typography>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
          }}
        >
          <Typography variant={"h6"} color={"dimgrey"}>
            Subtotal
          </Typography>
          <Typography variant={"h6"}>{`??? ${total}`}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            marginTop: 2,
            marginBottom: 2,
          }}
        >
          <Typography variant={"h6"} color={"dimgrey"}>
            Shipping
          </Typography>
          <Typography variant={"h6"}>+ ??? 40</Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            display: "flex",
            flex: 1,
            justifyContent: "space-between",
            marginTop: 2,
            marginBottom: 2,
            alignItems: "flex-end",
          }}
        >
          <Typography variant={"h6"} color={"grey"}>
            Total
          </Typography>
          <Typography variant={"h6"}>{`??? ${total + 40}`}</Typography>
        </Box>
        <Divider />
        <StripeCheckout
          label={"Pay Now"}
          name={"The Shoe Store"}
          description={`Your total amount is ???${total + 40}`}
          currency={"INR"}
          amount={(total + 40) * 100}
          token={onToken}
          stripeKey={publishableKey}
          email={email.toString()}
        >
          <Button
            sx={{ marginTop: 2, height: 56 }}
            variant={"contained"}
            size={"large"}
            fullWidth
          >
            Pay Now
          </Button>
        </StripeCheckout>
      </Paper>
    </Box>
  );
};

export default StripecheckoutComponent;
