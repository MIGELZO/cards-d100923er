import { Typography, Box } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Our Application"
        subtitle="Explore detailed explanations about the functionalities and usage of our application"
      />
      <Box sx={{ padding: 2 }}>
        <Typography variant="h4" gutterBottom>
          Overview
        </Typography>
        <Typography paragraph>
          Welcome to our content management platform! This website is built
          using React and allows users to create, manage, and interact with
          Business Cards easily and securely.
        </Typography>

        <Typography variant="h4" gutterBottom>
          Mission and Vision
        </Typography>
        <Typography paragraph>
          Our mission is to provide a seamless and secure platform for
          professionals and businesses to showcase their expertise and services.
          We envision a world where connections are easily made through
          comprehensive and interactive business cards.
        </Typography>

        <Typography variant="h4" gutterBottom>
          User Types and Functionalities
        </Typography>

        <Typography variant="h5" gutterBottom>
          Regular Users
        </Typography>
        <Typography paragraph>
          - <strong>Browse Business Cards:</strong> Explore various business
          cards showcasing different professionals, companies, or services.
          <br />- <strong>View Business Card Details:</strong> Access
          comprehensive information about individuals or businesses, including
          contact details, services offered, and other business details.
          <br />- <strong>Search:</strong> Utilize the search component to
          quickly find business cards of interest.
          <br />- <strong>Dark/Light Mode:</strong> Switch between dark and
          light themes for a comfortable viewing experience.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Non-Business Users
        </Typography>
        <Typography paragraph>
          - <strong>Like Feature:</strong> Show appreciation for business cards
          by liking them, improving their visibility and credibility.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Business Users
        </Typography>
        <Typography paragraph>
          - <strong>Create Business Cards:</strong> Publish your own
          professional profile or company information.
          <br />- <strong>Edit Business Cards:</strong> Modify your existing
          business card details at any time.
          <br />- <strong>Delete Business Cards:</strong> Remove any of your
          business cards that are no longer relevant.
          <br />- <strong>Like Feature:</strong> Express appreciation for a
          particular business card by liking it, enhancing its visibility and
          credibility.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Admin Users
        </Typography>
        <Typography paragraph>
          - <strong>Manage Users:</strong> Edit or remove user accounts.
          <br />- <strong>Manage Cards:</strong> Add, edit, or delete Business
          Cards.
        </Typography>

        <Typography variant="h4" gutterBottom>
          Key Features
        </Typography>

        <Typography variant="h5" gutterBottom>
          User Authentication
        </Typography>
        <Typography paragraph>
          - <strong>Secure Login:</strong> Access your account securely using
          token-based authentication.
          <br />- <strong>Privacy Protection:</strong> Your personal data is
          stored securely and never shared without permission.
          <br />- <strong>Hacking Protection:</strong> Users who repeatedly fail
          to enter the application after several attempts will be automatically
          blocked for security purposes.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Content Management
        </Typography>
        <Typography paragraph>
          - <strong>Dynamic CRUD Operations:</strong> Easily create, read,
          update, and delete business card details with intuitive controls.
          <br />- <strong>Form Validation:</strong> All input forms include
          validation to ensure accurate and reliable data representation.
        </Typography>

        <Typography variant="h5" gutterBottom>
          User Interface
        </Typography>
        <Typography paragraph>
          - <strong>Responsive Design:</strong> Enjoy a seamless experience on
          both desktop and mobile devices.
          <br />- <strong>Theme Customization:</strong> Personalize your viewing
          experience with dark and light modes.
        </Typography>

        <Typography variant="h4" gutterBottom>
          Future Enhancements
        </Typography>
        <Typography paragraph>
          We are constantly working on new features and improvements to enhance
          your experience. Stay tuned for updates on exciting new
          functionalities!
        </Typography>

        <Typography variant="h4" gutterBottom>
          Frequently Asked Questions (FAQ)
        </Typography>
        <Typography paragraph>
          <strong>Q: How do I create a business card?</strong>
          <br />
          A: Once registered as a business user, navigate to the 'MY Cards',
          click on + and fill in the necessary details.
          <br />
          <strong>Q: Can I edit my business card after publishing?</strong>
          <br />
          A: Yes, business users can edit their business cards at any time. In
          case of any issue - please contact us.
          <br />
          <strong>Q: Can I view all the cards that I liked?</strong>
          <br />
          A: Yes, business cards that you liked will appear under 'Favorite
          Cards' when you logged in to system.
        </Typography>

        <Typography variant="h4" gutterBottom>
          Contact Information
        </Typography>
        <Typography paragraph>
          Have questions or need support? Contact us at{" "}
          <strong> daniel.amzaleg25@gmail.com </strong> or call us on Mobile{" "}
          <strong>054-8105258 </strong>.
        </Typography>
      </Box>
    </div>
  );
}
