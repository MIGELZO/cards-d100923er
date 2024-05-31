import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routs/routsModel";
import { useUser } from "../users/providers/UserProvider";
import { Carousel } from "react-responsive-carousel";
import CardComponent from "../cards/components/card/CardComponent";
import useCards from "../cards/hooks/useCards";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  const { value, getAllCards, handleCardLike, handleCardDelete } = useCards();

  const { filteredCards = [] } = value;

  useEffect(() => {
    getAllCards();
  }, [getAllCards]);
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", mt: 4 }}>
      {/* Free, Beautiful Wedding Websites Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" gutterBottom>
          Free and fun website for businesses advertising
        </Typography>
      </Box>

      {/* Over 100 Gorgeous Designs Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Over 100 Gorgeous Designs
        </Typography>
        <Box justifyContent="center" display="flex">
          <Box width="100%">
            <Carousel
              showThumbs={false}
              infiniteLoop
              showStatus={false}
              showIndicators={false}
              centerMode
              centerSlidePercentage={33.33}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <IconButton
                    onClick={onClickHandler}
                    title={label}
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: "calc(50% - 20px)",
                      zIndex: 2,
                    }}
                  >
                    <ArrowBackIos />
                  </IconButton>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <IconButton
                    onClick={onClickHandler}
                    title={label}
                    sx={{
                      position: "absolute",
                      right: 0,
                      top: "calc(50% - 20px)",
                      zIndex: 2,
                    }}
                  >
                    <ArrowForwardIos />
                  </IconButton>
                )
              }
            >
              {(filteredCards ?? []).length > 0 ? (
                filteredCards.map((item, index) => (
                  <Box key={index} sx={{ marginLeft: 6 }}>
                    <CardComponent
                      key={item._id}
                      card={item}
                      handleCardDelete={handleCardDelete}
                      handleCardLike={handleCardLike}
                    />
                  </Box>
                ))
              ) : (
                <Typography variant="body1">No cards available</Typography>
              )}
            </Carousel>
          </Box>
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => {
            navigate(ROUTES.CARDS);
          }}
        >
          Explore Designs
        </Button>
      </Box>

      {/* Why You'll Love Our Wedding Websites Section */}
      <Box sx={{ my: 4, py: 4, backgroundColor: "#f0f0f0" }}>
        <Typography variant="h4" gutterBottom>
          Why You’ll Love Our BizCard Websites
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: "So Easy",
              description:
                "With our user-friendly builder, you can create and update your business card in minutes.",
              icon: "../../public/assets/imgs/screen.png",
            },
            {
              title: "Super Customizable",
              description:
                "Add photos, FAQs, schedule, and even password protection.",
              icon: "settings",
            },
            {
              title: "Guest-Approved",
              description:
                "They’ll love getting all your wedding details and RSVPing on your site.",
              icon: "thumb_up",
            },
          ].map((item, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <CardMedia src={item.icon} />
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body1">{item.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        {/* {(user && user.isBusiness === true){
         
        }} */}

        {user && user.isBusiness === false ? (
          <Box sx={{ paddingTop: 5 }}>
            <Typography>
              <strong>
                you must be registerd as a business to create your BizCards
              </strong>
            </Typography>
          </Box>
        ) : null}

        {user && user.isBusiness === true ? (
          <Button
            onClick={() => {
              navigate(ROUTES.CREATE_CARD);
            }}
            variant="contained"
            color="primary"
            sx={{ mt: 4 }}
          >
            Create you own business BizCards
          </Button>
        ) : null}
        {!user ? (
          <Button
            onClick={() => {
              navigate(ROUTES.SIGNUP);
            }}
            variant="contained"
            color="primary"
            sx={{ mt: 4 }}
          >
            Register to create your BizCards
          </Button>
        ) : null}
      </Box>

      {/* Business Cards Section */}
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Our Featured Business Cards
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {[
            {
              name: "Jane Doe",
              title: "Wedding Planner",
              image: "https://via.placeholder.com/150?text=Jane+Doe",
              description: "Expert in making your wedding day perfect.",
            },
            {
              name: "John Smith",
              title: "Photographer",
              image: "https://via.placeholder.com/150?text=John+Smith",
              description: "Capturing your moments beautifully.",
            },
            {
              name: "Alice Johnson",
              title: "Caterer",
              image: "https://via.placeholder.com/150?text=Alice+Johnson",
              description: "Delicious food for your special day.",
            },
          ].map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt={item.name}
                  height="140"
                  image={item.image}
                  title={item.name}
                />
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
