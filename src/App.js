import NavBar2 from "./components/layout/NavBar2";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Guide from "./components/pages/Guide";
import Missing from "./components/pages/Missing";
import { Route, Routes } from "react-router-dom";
import CommunityProject from "./components/forms/community-propject/CommunityProject";
import SkillsTrainingBursary from "./components/forms/skills-development-bursary/SkillsTrainingBursary";
import EmpowermentGrant from "./components/forms/empowerment-grant/EmpowermentGrant";
import EmpowermentLoan from "./components/forms/empowerment-loan/EmpowermentLoan";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Features from "./components/pages/Features";
import RenderOnRole from "./security/RenderOnRole";
import DashBoard from "./admin/DashBoard";

function App() {
  return (
    <div className="">
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <NavBar2 />
      {/* Admin */}
      <RenderOnRole roles={['Admin']}>
        <Routes>
          <Route path="/" element={<DashBoard />}></Route>
          <Route path="About" element={<About />}></Route>
        </Routes>
      </RenderOnRole>
      <RenderOnRole roles={['Applicant']}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Guide" element={<Guide />}></Route>
        <Route path="About" element={<About />}></Route>
        <Route path="community-project" element={<CommunityProject />}></Route>
        <Route
          path="skills-training"
          element={<SkillsTrainingBursary />}
        ></Route>
        <Route path="empowerment-loan" element={<EmpowermentLoan />}></Route>
        <Route path="empowerment-grant" element={<EmpowermentGrant />}></Route>
        <Route path="features" element={<Features />}></Route>
        <Route path="/*" element={<Missing />}></Route>
      </Routes>
      </RenderOnRole>
      <Footer />
    </div>
  );
}

export default App;
