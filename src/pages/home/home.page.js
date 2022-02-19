import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductcardComponent from "./components/productcard.component";
import { GitHub, SportsBasketball, Twitter } from "@mui/icons-material";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingBlock: 16,
          alignItems: "center",
          backgroundColor: "#e5fae5",
        }}
      >
        <Box sx={{ marginRight: 16 }}>
          <Typography variant={"h6"} color={"#319836"} sx={{ marginBottom: 2 }}>
            BRING POWER TO YOUR STEPS
          </Typography>
          <Typography variant={"h1"}>The Shoe Store</Typography>
          <Typography variant={"h1"} fontWeight={"bold"} gutterBottom>
            Get it on.
          </Typography>
          <Button
            variant={"contained"}
            size={"large"}
            onClick={() => navigate("collection/mens")}
          >
            SHOP NOW
          </Button>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <img
            src={require("../../assets/homeshoe1.png")}
            alt="Green Shoe"
            style={{
              height: "450px",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingBlock: 16,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          <Typography variant={"h4"} fontWeight={"bold"} gutterBottom>
            Our Latest Products
          </Typography>
          <Typography
            variant={"subtitle1"}
            fontWeight={"normal"}
            color={"text.secondary"}
            sx={{ width: "70%" }}
          >
            To reach the goals you have set, you need the right gear to assist
            you in that journey. Get the best there is in our collection.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "60%",
            justifyContent: "space-between",
          }}
        >
          <ProductcardComponent
            name={"Nike Orange Splash"}
            imageurl="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
            rating={5}
            price={9000}
          />
          <ProductcardComponent
            name={"K-Swiss Mix"}
            imageurl={
              "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=279&q=80"
            }
            rating={4}
            price={7450}
          />
          <ProductcardComponent
            name={"New Balance Track"}
            imageurl={
              "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
            }
            rating={3}
            price={2300}
          />
        </Box>
      </Box>
      <Box
        sx={{
          paddingBlock: 12,
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#e5fae5",
        }}
      >
        <Box sx={{ display: "flex", width: "60%", alignItems: "center" }}>
          <Box sx={{ marginRight: 16 }}>
            <Typography variant={"h4"} fontWeight={"bold"} gutterBottom>
              The best shoes for the best people.
            </Typography>
            <Typography
              variant={"subtitle1"}
              fontWeight={"normal"}
              color={"text.secondary"}
            >
              A shoe is an item of footwear intended to protect and comfort the
              human foot. Shoes are also used as an item of decoration and
              fashion. The design of shoes has varied enormously through time
              and from culture to culture, with form originally being tied to
              function.
            </Typography>
          </Box>
          <img
            src="https://images.unsplash.com/photo-1562183241-b937e95585b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=512&q=80"
            alt="flying shoe"
            width={"400px"}
            style={{ borderRadius: "5px" }}
          />
        </Box>
      </Box>
      <Box sx={{ paddingBlock: 12, display: "flex", justifyContent: "center" }}>
        <Box sx={{ display: "flex", width: "60%", alignItems: "center" }}>
          <img
            src={
              "https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=512&q=80"
            }
            alt="flying shoe"
            width={"400px"}
            style={{ borderRadius: "5px" }}
          />
          <Box sx={{ marginLeft: 16 }}>
            <Typography variant={"h4"} fontWeight={"bold"} gutterBottom>
              Football unites the world.
            </Typography>
            <Typography
              variant={"subtitle1"}
              fontWeight={"normal"}
              color={"text.secondary"}
            >
              People who played would wear their heavy and hard work boots to
              play. These were the first ever boots with the steel toe cap at
              the front, long laces and high topped. These boots also had metal
              studs or tacks put on the bottom so the players would have more
              grip and stability.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingBlock: 16,
        }}
      >
        <Box
          sx={{
            width: "60%",
            paddingInline: 16,
            paddingBlock: 4,
            backgroundColor: "#e5fae5",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant={"h4"} fontWeight={"bold"} gutterBottom>
            Explore the collection now.
          </Typography>
          <Typography
            sx={{ width: "40%", marginBottom: 4 }}
            variant={"subtitle1"}
            fontWeight={"normal"}
            color={"text.secondary"}
          >
            Get ready to put them on and embark on the most amazing journey
            ever.
          </Typography>
          <Button
            variant={"contained"}
            onClick={() => navigate("collection/mens")}
          >
            Explore now
          </Button>
        </Box>
      </Box>
      <Box component={"footer"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingBlock: 2,
            paddingInline: 12,
          }}
        >
          <Typography variant={"h6"} fontFamily={"Work Sans"}>
            THE SHOE STORE
          </Typography>
          <Typography variant={"h6"}>Made with ❤️ by Rituraj Ranjan</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant={"h6"} sx={{ marginRight: 6 }}>
              Social Links:
            </Typography>
            <IconButton
              component={"a"}
              href={"https://github.com/stee1ix"}
              target={"_blank"}
            >
              <GitHub color={"success"} fontSize={"large"} />
            </IconButton>
            <IconButton
              component={"a"}
              href={"https://dribbble.com/stee1ix"}
              target={"_blank"}
            >
              <SportsBasketball color={"success"} fontSize={"large"} />
            </IconButton>
            <IconButton
              component={"a"}
              href={"https://twitter.com/imriturajranjan"}
              target={"_blank"}
            >
              <Twitter color={"success"} fontSize={"large"} />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ height: 20, backgroundColor: "#319836" }} />
      </Box>
    </Box>
  );
};

export default HomePage;
