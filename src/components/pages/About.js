import React from "react";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md" sx={{ mb: 8 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            ABOUT CONSTITUENCY DEVELOPMENT FUND (CDF)
          </Typography>
          <React.Fragment>
            <Typography variant="subtitle1" textAlign="justify">
              The Constituency Development Fund (CDF) was introduced in 1995
              after approval by the National Assembly as an "instrument" to
              facilitate the delivery of public goods and services to foster
              development for local communities. The objective of the CDF was to
              create an enabling environment for holistic development at
              Constituency level where Members of Parliament and the local
              community have the opportunity to make choices and implement
              projects which would improve the well-being of the people in the
              respective constituencies.
            </Typography>
            <Typography variant="subtitle1" textAlign="justify">
              Recognising the importance of the CDF in contributing to local
              development, the Fund was established by the Constitution of
              Zambia (Amendment) Act No. 2 of 2016 under Article 162.
              Consequently, the Constituency Development Fund Act No. 11 of 2018
              was enacted to provide for the management, disbursement,
              utilisation and accountability of the Fund. The Constitution and
              the Act therefore provide an important framework to facilitate
              effective and enhanced community participation in decision making
              on local social-economic development programs and challenges
              affecting their well-being.
            </Typography>
            <Typography variant="subtitle1" textAlign="justify">
              Over the years, the CDF has evolved in scope and extent with
              increased financial allocation. This requires enhanced prudence in
              the manner the Fund is managed and utilised. It also demands that
              the selection of projects and programs is done in accordance with
              the needs of the community while facilitating job creation with
              the community.
            </Typography>
            <Typography variant="subtitle1" textAlign="justify">
              These guidelines have been developed to ensure effective
              coordination among stakeholders during the implementation of CDF
              projects and programs. It is, therefore, Government's expectations
              that stakeholders, who include the Constituency Development Fund
              Committees, Members of Parliament, Local Authorities, Cooperating
              Partners and members of the communities shall adhere to the
              guidelines on the management, disbursement, utilisation and
              accountability of the Fund. Failure to adhere to these guidelines
              shall entail contravening the various laws governing the
              management and utilisation of public funds.
            </Typography>
            <Typography variant="h5" gutterBottom textAlign="center">
              MINISTER OF LOCAL GOVERNMENT AND RURAL DEVELOPMENT
            </Typography>
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default About;
