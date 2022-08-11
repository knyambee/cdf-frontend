import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

const tiers = [
  {
    title: "Community Projects",
    year: "2023",
    description: [
      "Projects which are identified by the communities in their Wards for the benefit of the wider community.",
    ],
    buttonText: "Apply",
    buttonVariant: "contained",
    ref: "/community-project",
  },
  {
    title: "Skills Development Bursary",
    year: "2023",
    description: [
      "Bursaries to provide vulnerable learners access to Skills Training Institutions offering technical education, vocational and entrepreneurship programmes",
    ],
    buttonText: "Apply",
    buttonVariant: "contained",
    ref: "/skills-training",
  },
  {
    title: "Empowerment Grants",
    year: "2023",
    description: [
      "Youths, Women, people living with disability and other vulnerable persons. Seed money in form of grants given to Organised Groups, Clubs and Cooperatives.",
    ],
    buttonText: "Apply",
    buttonVariant: "contained",
    ref: "/empowerment-grant",
  },
  {
    title: "Empowerment Loan",
    year: "2023",
    description: [
      "Cooperatives and Individuals with established small and medium scale businesses wishing to grow their businesses within the Constituency.",
    ],
    buttonText: "Apply",
    buttonVariant: "contained",
    ref: "/empowerment-loan",
  },
];

const Home = () => {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          CDF ZAMBIA
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Access to Community Development Funding (CDF) has never been bigger
          and easy. Apply for funding in your Constituency.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={3}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Community Projects" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      {tier.year}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                    ></Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} href={tier.ref}>
                    {tier.buttonText} 
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      ></Container>
    </React.Fragment>
  );
};

export default Home;
