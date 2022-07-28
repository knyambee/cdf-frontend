import React, { useState, useEffect} from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CommunityProject from "../forms/CommunityProject";
import EmpowermentGrant from "../forms/EmpowermentGrant";
import SkillsTrainingBursary from "../forms/SkillsTrainingBursary";
import EmpowermentLoan from "../forms/EmpowermentLoan";
import SecondaryBoardingBursary from "../forms/SecondaryBoardingBursary";

const Apply = () => {
  const [applicationForm, setApplicationForm] = useState(
    "selectApplicationForm"
  );

  const [communityProjectFormVisible, setCommunityProjectFormVisible] =
    useState(false);
  const [emporwerentGrantFormVisible, setEmporwerentGrantFormVisible] =
    useState(false);
  const [empowermentLoanFormVisible, setEmpowermentLoanFormVisible] =
    useState(false);
  const [
    SecondaryBoardingBursaryFormVisible,
    setSecondaryBoardingBursaryFormVisible,
  ] = useState(false);
  const [
    skillsTrainingBursaryFormVisible,
    setSkillsTrainingBursaryFormVisible,
  ] = useState(false);

  useEffect(() => {
    applicationForm === "communityProject"
      ? setCommunityProjectFormVisible(true)
      : setCommunityProjectFormVisible(false);
    applicationForm === "empowermentGrant"
      ? setEmporwerentGrantFormVisible(true)
      : setEmporwerentGrantFormVisible(false);
    applicationForm === "empowermentLoan"
      ? setEmpowermentLoanFormVisible(true)
      : setEmpowermentLoanFormVisible(false);
    applicationForm === "secondaryBoardingBursary"
      ? setSecondaryBoardingBursaryFormVisible(true)
      : setSecondaryBoardingBursaryFormVisible(false);
    applicationForm === "skillsDevelopmentBursary"
      ? setSkillsTrainingBursaryFormVisible(true)
      : setSkillsTrainingBursaryFormVisible(false);
  }, [applicationForm]);

  const handleFormChange = (e) => {
    setApplicationForm(e.target.value);
  };

  const renderSelectionResult = () => {
    let result;
    applicationForm === "selectApplicationForm"
      ? (result = "Select Application Form")
      : (result = applicationForm);
    return result;
  };

  return (
    <main>
      <h2>Types of Projects For Funding</h2>
      <p>These are the main categories of funding under CDF</p>
      <ul>
        <li>Community Projects</li>
        <li>Emporwerent Grant</li>
        <li>Empowerment Loan</li>
        <li>Secondary Boarding School Bursaries</li>
        <li>Skills Development Bursaries</li>
      </ul>
      <p>
        Detailed information about each category can be found in the guide
        section.
      </p>
      <p>You are applying for {renderSelectionResult()}</p>

      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={applicationForm}
          onChange={handleFormChange}
        >
          <MenuItem value="selectApplicationForm">
            Select Application Form
          </MenuItem>
          <MenuItem value="communityProject">
            Community Project Application Form
          </MenuItem>
          <MenuItem value="empowermentGrant">
            Emporwerent Grant Application Form
          </MenuItem>
          <MenuItem value="empowermentLoan">
            Empowerment Loan Application Form
          </MenuItem>
          <MenuItem value="secondaryBoardingBursary">
            Secondary Boarding School Bursaries
          </MenuItem>
          <MenuItem value="skillsDevelopmentBursary">
            Skills Development Bursaries
          </MenuItem>
        </Select>
      </FormControl>

      {communityProjectFormVisible && <CommunityProject />}
      {emporwerentGrantFormVisible && <EmpowermentGrant />}
      {empowermentLoanFormVisible && <EmpowermentLoan />}
      {SecondaryBoardingBursaryFormVisible && <SecondaryBoardingBursary />}
      {skillsTrainingBursaryFormVisible && <SkillsTrainingBursary />}
    </main>
  );
};

export default Apply;
