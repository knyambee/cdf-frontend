import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export default function SkillsTrainingBursaryDetailForm({ formFields, setFormFields }) {

    const handleOnChange = (e) => {
        setFormFields((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <React.Fragment>
            <form>
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
                            value={formFields.surname}
                            onChange={handleOnChange}
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
                            value={formFields.otherNames}
                            onChange={handleOnChange}
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
                            value={formFields.gender}
                            onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="nationality"
                            name="nationality"
                            label="Nationality"
                            fullWidth
                            variant="standard"
                            value={formFields.nationality}
                            onChange={handleOnChange}
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
                            value={formFields.nrc}
                            onChange={handleOnChange}
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
                            value={formFields.dateOfBirth}
                            onChange={handleOnChange}
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
                            value={formFields.placeOfBirth}
                            onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            id="state"
                            name="district"
                            label="(a) District"
                            fullWidth
                            variant="standard"
                            value={formFields.district}
                            onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            id="constituency"
                            name="constituency"
                            label="(b) Constituency"
                            fullWidth
                            variant="standard"
                            value={formFields.constituency}
                            onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            id="ward"
                            name="ward"
                            label="(c) Ward"
                            fullWidth
                            variant="standard"
                            value={formFields.ward}
                            onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <TextField
                            id="zone"
                            name="zone"
                            label="(d) Zone"
                            fullWidth
                            variant="standard"
                            value={formFields.zone}
                            onChange={handleOnChange}
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
                            value={formFields.postalAddress}
                            onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="mobilePhone"
                            name="mobilePhone"
                            label="8. Mobile Phone"
                            fullWidth
                            variant="standard"
                            value={formFields.mobilePhone}
                            onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email"
                            fullWidth
                            variant="standard"
                            value={formFields.email}
                            onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="orphanStatus"
                            name="orphanStatus"
                            label="(a) Single Orphan / Double Orphan / Other (please Specify)"
                            fullWidth
                            variant="standard"
                            value={formFields.opharnStatus}
                            onChange={handleOnChange}
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
                            value={formFields.disability}
                            onChange={handleOnChange}
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
                            value={formFields.financialChallenge}
                            onChange={handleOnChange}
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
                            value={formFields.schoolLeaver}
                            onChange={handleOnChange}
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
                            value={formFields.lastGradeAttended}
                            onChange={handleOnChange}
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
                            value={formFields.lastSchoolAttended}
                            onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="lastSchoolAttendedDistrict"
                            name="lastSchoolAttendedDistrict"
                            label="District"
                            fullWidth
                            variant="standard"
                            value={formFields.lastSchoolAttendedDistrict}
                            onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="fromDate"
                            name="fromDate"
                            label="12. From Date"
                            fullWidth
                            variant="standard"
                            value={formFields.fromDate}
                            onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="toDate"
                            name="toDate"
                            label="To Date"
                            fullWidth
                            variant="standard"
                            value={formFields.toDate}
                            onChange={handleOnChange}
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
                            value={formFields.highestCertificate}
                            onChange={handleOnChange}
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
                            value={formFields.receivedAcceptanceLetter}
                            onChange={handleOnChange}
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
                            value={formFields.nameOfAcceptingInstitution}
                            onChange={handleOnChange}
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
                            value={formFields.programmeOfStudy}
                            onChange={handleOnChange}
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
                            value={formFields.programmeDuration}
                            onChange={handleOnChange}
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
                            value={formFields.receivedSponsorshipBefore}
                            onChange={handleOnChange}
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
                            value={formFields.otherSponsorshipDetails}
                            onChange={handleOnChange}
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
                            value={formFields.cdfSponsorship}
                            onChange={handleOnChange}
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
                            value={formFields.cdfSponsorshipDetails}
                            onChange={handleOnChange}
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
                            value={formFields.gurdianSurname}
                            onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="gurdianOtherName"
                            name="gurdianOtherName"
                            label="23. Other names"
                            fullWidth
                            variant="standard"
                            value={formFields.gurdianOtherName}
                            onChange={handleOnChange}
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
                            value={formFields.gurdianGender}
                            onChange={handleOnChange}
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
                            value={formFields.gurdianDateOfBirth}
                            onChange={handleOnChange}
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
                            value={formFields.gurdianNationality}
                            onChange={handleOnChange}
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
                            value={formFields.guardianNRC}
                            onChange={handleOnChange}
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
                            value={formFields.relationshipToApplicant}
                            onChange={handleOnChange}
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
                            value={formFields.guardianVillage}
                            onChange={handleOnChange}
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
                            value={formFields.guardianChief}
                            onChange={handleOnChange}
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
                            value={formFields.guardianDistrict}
                            onChange={handleOnChange}
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
                            value={formFields.guardianAddress}
                            onChange={handleOnChange}
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
                            value={formFields.guardianConstituency}
                            onChange={handleOnChange}
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
                            value={formFields.guardianDistrictDistrict}
                            onChange={handleOnChange}
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
                            value={formFields.guardianProvince}
                            onChange={handleOnChange}
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
                            value={formFields.guardianPostalAddress}
                            onChange={handleOnChange}
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
                            value={formFields.guardianPhoneNumber}
                            onChange={handleOnChange}
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
                            value={formFields.guardianEmail}
                            onChange={handleOnChange}
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
                            value={formFields.occupationFather}
                            onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="occupationMother"
                            name="occupationMother"
                            label="b. Mother"
                            fullWidth
                            variant="standard"
                            value={formFields.occupationMother}
                            onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="occupationGuardian"
                            name="occupationGuardian"
                            label="c. Guardian"
                            fullWidth
                            variant="standard"
                            value={formFields.occupationGuardian}
                            onChange={handleOnChange}
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
                            value={formFields.employerFather}
                            onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="employerMother"
                            name="employerMother"
                            label="b. Mother"
                            fullWidth
                            variant="standard"
                            value={formFields.employerMother}
                            onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="employerGuardian"
                            name="employerGuardian"
                            label="c. Guardian"
                            fullWidth
                            variant="standard"
                            value={formFields.employerGuardian}
                            onChange={handleOnChange}
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
                            value={formFields.positionFather}
                            onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="positionMother"
                            name="positionMother"
                            label="b. Mother"
                            fullWidth
                            variant="standard"
                            value={formFields.positionMother}
                            onChange={handleOnChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="positionGuardian"
                            name="positionGuardian"
                            label="c. Guardian"
                            fullWidth
                            variant="standard"
                            value={formFields.positionGuardian}
                            onChange={handleOnChange}
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
                            id="applicantSigningDate"
                            name="applicantSigningDate"
                            label="Date"
                            fullWidth
                            variant="standard"
                            value={formFields.applicantSigningDate}
                            onChange={handleOnChange}
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
                            id="parentGurdianSigningDate"
                            name="parentGurdianSigningDate"
                            label="Date"
                            fullWidth
                            variant="standard"
                            value={formFields.parentGurdianSigningDate}
                            onChange={handleOnChange}
                            
                        />
                    </Grid>
                </Grid>
            </form>
        </React.Fragment>
    );
}
