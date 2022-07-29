import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function SkillsTrainingBursaryDetailForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                PART A: TO BE COMPLETED BY APPLICANT
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="surname"
                        name="surname"
                        label="1. Surname"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="otherNames"
                        name="otherNames"
                        label="2. Other Names"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="gender"
                        name="gender"
                        label="3. Sex (Male/Female)"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="nationality"
                        name="nationality"
                        label="Nationality"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="nrc"
                        name="nrc"
                        label="4. N.R.C No:"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="dateOfBirth"
                        name="dateOfBirth"
                        label="5. Date of birth"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="placeOfBirth"
                        name="placeOfBirth"
                        label="Place of Birth"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        id="state"
                        name="state"
                        label="(a) District"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        id="state"
                        name="state"
                        label="(b) Constituency"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        id="state"
                        name="state"
                        label="(c) Ward"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        id="state"
                        name="state"
                        label="(d) Zone"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="postalAddress"
                        name="postalAddress"
                        label="7. Postal Address"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="mobilePhone"
                        name="mobilePhone"
                        label="8. Mobile Phone"
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="orphanStatus"
                        name="orphanStatus"
                        label="(a)Single Orphan/Double Orphan/Other (please Specify)"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="disability"
                        name="disability"
                        label="(b) Are you disabled? Yes/No, If yes, specify nature of disability:"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="financialChallenge"
                        name="financialChallenge"
                        label="(c) Financial Challenge (Specify):"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom>
                PART B: SCHOOL AND COURSE DETAILS
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="schoolLeaver"
                        name="schoolLeaver"
                        label="10. School Leaver/Non School Leaver"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastGradeAttended"
                        name="lastGradeAttended"
                        label="Last grade attended"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastSchoolAttended"
                        name="lastSchoolAttended"
                        label="11. Last School attended"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="lastSchoolAttendedDistrict"
                        name="lastSchoolAttendedDistrict"
                        label="District"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="fromDate"
                        name="fromDate"
                        label="12. From Date"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="toDate"
                        name="toDate"
                        label="To Date"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="highestCertificate"
                        name="highestCertificate"
                        label="13. Highest Certificate attained"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="receivedAcceptanceLetter"
                        name="receivedAcceptanceLetter"
                        label="14. Have you received an acceptance letter?"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="nameOfAcceptingInstitution"
                        name="nameOfAcceptingInstitution"
                        label="15. If your answer to (14) above was yes, name the institution you have been accepted:"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="programmeOfStudy"
                        name="programmeOfStudy"
                        label="16. What programme of study do you wish to pursue?"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="programmeDuration"
                        name="programmeDuration"
                        label="17. Duration of programme."
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="receivedSponsorshipBefore"
                        name="receivedSponsorshipBefore"
                        label="18. Have you applied for or received any scholarship, bursary from any other organization or authority before?"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="otherSponsorshipDetails"
                        name="otherSponsorshipDetails"
                        label="17. If your answer to 18 above was yes, give details."
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="cdfSponsorship"
                        name="cdfSponsorship"
                        label="20. Have you ever benefitted from the CDF Skills Development Bursary sponsorship before?"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="cdfSponsorshipDetails"
                        name="cdfSponsorshipDetails"
                        label="21. If your answer to 20 above was yes, give details of when and how you benefited"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom>
                PART C: PERSONAL DETAILS OF PARENT/GUARDIAN
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="gurdianSurname"
                        name="gurdianSurname"
                        label="22. Surname"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="gurdianOtherName"
                        name="gurdianotherName"
                        label="23. Other names"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="gurdianGender"
                        name="gurdianGender"
                        label="24. Gender"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="gurdianDateOfBirth"
                        name="gurdianDateOfBirth"
                        label="25. Date of birth"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="gurdianNationality"
                        name="gurdianNationality"
                        label="26. Nationality"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="guardianNRC"
                        name="guardianNRC"
                        label="27. N.R.C Number"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="relationshipToApplicant"
                        name="relationshipToApplicant"
                        label="28. Relationship to applicant"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="guardianVillage"
                        name="guardianVillage"
                        label="29. village"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="guardianChief"
                        name="guardianChief"
                        label="30. Chief"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="guardianDistrict"
                        name="guardianDistrict"
                        label="31. District"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="guardianAddress"
                        name="guardianAddress"
                        label="32. Residential Address"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="guardianConstituency"
                        name="guardianConstituency"
                        label="33. Residential Address"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="guardianDistrictDistrict"
                        name="guardianDistrictDistrict"
                        label="34. District"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="guardianProvince"
                        name="guardianProvince"
                        label="35. Province"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="guardianPostalAddress"
                        name="guardianPostalAddress"
                        label="36. Postal Address"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="guardianPhoneNumber"
                        name="guardianPhoneNumber"
                        label="37. Phone Number"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="guardianEmail"
                        name="guardianEmail"
                        label="38. Email Address"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
            </Grid>
            <Typography variant="h6" gutterBottom>
                PART D: EMPLOYMENT DETAILS OF PARENT/GUARDIAN (WHERE APPLICABLE)
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="inherit">
                        39. Occupation of:
                    </Typography>
                    <TextField
                        id="occupationFather"
                        name="occupationFather"
                        label="a. Father"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="occupationMother"
                        name="occupationMother"
                        label="b. Mother"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="occupationGuardian"
                        name="occupationGuardian"
                        label="c. Guardian"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="inherit">
                        40. Name of Employer of:
                    </Typography>
                    <TextField
                        id="employerFather"
                        name="employerFather"
                        label="a. Father"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="employerMother"
                        name="employerMother"
                        label="b. Mother"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="employerGuardian"
                        name="employerGuardian"
                        label="c. Guardian"
                        fullWidth
                        variant="standard"
                    />
                </Grid>


                <Grid item xs={12}>
                    <Typography variant="inherit">
                        41. Position/Rank of:
                    </Typography>
                    <TextField
                        id="positionFather"
                        name="positionFather"
                        label="a. Father"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="positionMother"
                        name="positionMother"
                        label="b. Mother"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="positionGuardian"
                        name="positionGuardian"
                        label="c. Guardian"
                        fullWidth
                        variant="standard"
                    />
                </Grid>


            </Grid>
            <Typography variant="h6" gutterBottom>
                PART E: DECLARATION
            </Typography>
            <Typography>
                I................................................................................................................................of
                NRC number..................................................... do declare that to the best of my
                knowledge, the
                information I have given is the absolute truth. I also understand that any false information on this
                form will
                lead to immediate forfeiture of this assistance and possible prosecution or both.
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="applicantSignature"
                        name="guardianChief"
                        label="Signature of Applicant"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="signingDate"
                        name="signingDate"
                        label="Date"
                        fullWidth
                        variant="standard"
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        id="parentGuardianSignature"
                        name="parentGuardianSignature"
                        label="Signature of Parent/Guardian"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="signingDateParentGuardian"
                        name="signingDateParentGuardian"
                        label="Date"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
