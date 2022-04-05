import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import IcAgile from "./Components/CapabilityBuildingPrograms/IcAgile";
import Dasa from "./Components/CapabilityBuildingPrograms/Dasa";
import Safe from "./Components/CapabilityBuildingPrograms/Safe";
import Assessments from "./Components/Assessments/Assessments";
import "./App.scss";
import SafeFlipbook from "./Components/CapabilityBuildingPrograms/SafeFlipbook";
import DasaFlipbook from "./Components/CapabilityBuildingPrograms/DasaFlipbook";
import Mentoring from "./Components/Mentoring/Mentoring";
import YoutubeVideos from "./Components/Resources/YoutubeVideos";
import Blogs from "./Components/Blogs/Blog";
import ReusableTemplates from "./Components/Resources/ReusableTemplates";
import Workbook from "./Components/Resources/Workbook";
import CustomSlider from "./Components/Includes/CustomSlider";
import IcAgileIcpAcc from "./Components/CapabilityBuildingPrograms/IcAgileIcpAcc";
import IcAgileIcpCat from "./Components/CapabilityBuildingPrograms/IcAgileIcpCat";
import IcAgileIcpEnt from "./Components/CapabilityBuildingPrograms/IcAgileIcpEnt";
import IcAgileIcpOrg from "./Components/CapabilityBuildingPrograms/IcAgileIcpOrg";
import IcAgileIcpPdv from "./Components/CapabilityBuildingPrograms/IcAgileIcpPdv";
import IcAgileIcpAtf from "./Components/CapabilityBuildingPrograms/IcAgileIcpAtf";
import SafeSsm from "./Components/CapabilityBuildingPrograms/SafeSsm";
import SafeSasm from "./Components/CapabilityBuildingPrograms/SafeSasm";
import SafePopm from "./Components/CapabilityBuildingPrograms/SafePopm";
import SafeLpm from "./Components/CapabilityBuildingPrograms/SafeLpm";
import ExperientialLeraningPrograms from "./Components/ExperimentalLearningPrograms/ExperientialLeraningPrograms";
import DaiDal from "./Components/ExperimentalLearningPrograms/DaiDal";
import DaiEsm from "./Components/ExperimentalLearningPrograms/DaiEsm";
import DaiEac from "./Components/ExperimentalLearningPrograms/DaiEac";
import Blog1 from "./Components/Blogs/Blog1";
import Blog2 from "./Components/Blogs/Blog2";
import Blog3 from "./Components/Blogs/Blog3";
import Blog4 from "./Components/Blogs/Blog4";
import Blog5 from "./Components/Blogs/Blog5";
import Blog6 from "./Components/Blogs/Blog6";
import Blog7 from "./Components/Blogs/Blog7";
import CourseTimingUpdate from "./Components/CourseTimingUpdate.js/CourseTimingUpdate";
import Blog8 from "./Components/Blogs/Blog8";
import Blog9 from "./Components/Blogs/Blog9";
import CustomModalImageUpload from "./Components/Includes/CustomModalImage";
import Blog10 from "./Components/Blogs/Blog10";
import Blog11 from "./Components/Blogs/Blog11";
import ELearning from "./Components/ELearning/ELearning";
import AgileFundamentals from "./Components/ELearning/AgileFundamentals";
import AgileCoachingFundamentals from "./Components/ELearning/AgileCoachingFundamentals";
import PrivacyPolicy from "./Components/Policy/PrivacyPolicy";
import RefundPolicy from "./Components/Policy/RefundPolicy";
import TermsofPolicy from "./Components/Policy/TermsofPolicy";
import AgileTeamAssessment from "./Components/Assessments/AgileTeamAssessment";
import AgileCoachingAssessment from "./Components/Assessments/AgileCoachingAssessment";
import AgileLeadershipAssessment from "./Components/Assessments/AgileLeadershipAssessment";
import CookiePolicy from "./Components/Policy/CoockiePolicy";
import Coaching from "./Components/Coaching/Coaching";
import Success from "./Components/Success/Success";
import Blog12 from "./Components/Blogs/Blog12";
import Blog13 from "./Components/Blogs/Blog13";
import Blog14 from "./Components/Blogs/Blog14";
import HomeModal from "./Components/Modals/HomeModal";
import PromotionalVideoUpload from "./Components/Resources/PromotionalVideoUpload/PromotionalVideoUpload";
import MentoringPromotion from "./Components/Resources/PromotionalVideoUpload/MentoringPromotion";
import CommunityEvents from "./Components/Includes/CommunityEvents";
import Manifesto from "./Components/Includes/Manifesto";
import Login from "./Components/LoginSystem/Login";
import Register from "./Components/LoginSystem/Register";
import Assessments1 from "./Components/Assessments/assessments1";
import Dashboard from "./Components/Dashboard/Dashboard";
import PromotionalImages from "./Components/Dashboard/PromotionalImages/PromotionalImages";
import EditPromotionalImage from "./Components/Dashboard/PromotionalImages/EditPromotionalImage";
import HomeSlider from "./Components/Dashboard/HomeSlider/HomeSlider";
import AddPromotionalImage from "./Components/Dashboard/PromotionalImages/AddPromotionalImage";
import AddHomeSlider from "./Components/Dashboard/HomeSlider/AddHomeSlider";
import PopSlider from "./Components/Dashboard/PopupSlider/PopSlider";
import AddPopSlider from "./Components/Dashboard/PopupSlider/AddPopSlider";
import EditHomeSlider from "./Components/Dashboard/HomeSlider/EditHomeslider";
import EditPopSlider from "./Components/Dashboard/PopupSlider/EditPopslider";
import MentoringSlider from "./Components/Dashboard/MentoringSlider/MentoringSlider";
import EditMentoringSlider from "./Components/Dashboard/MentoringSlider/EditMentoringslider";
import AddMentoringSlider from "./Components/Dashboard/MentoringSlider/AddMentoringSlider";
import CoachingSlider from "./Components/Dashboard/CoachingSlider/CoachingSlider";
import AddCoachingSlider from "./Components/Dashboard/CoachingSlider/AddCoachingSlider";
import EditCoachingSlider from "./Components/Dashboard/CoachingSlider/EditCoachingslider";
import CourseSchedule from "./Components/Dashboard/CourseSchedule/CourseSchedule";
import AddCourseSchedule from "./Components/Dashboard/CourseSchedule/AddCourseSchedule";
import EditCourseSchedule from "./Components/Dashboard/CourseSchedule/EditCourseSchedule";
import ProtectedRoute from "./Components/Routes/ProtectedRoute";
import LoginProtectedRoute from "./Components/Routes/LoginProtectedRoute";
import RegisterProtectedRoute from "./Components/Routes/RegisterProtectedRoute";
import Payment from "./Components/Dashboard/Payment/Payment";

function App() {
  // console.log("routes", routes);
  return (
    <div>
      <Router>
        {/* <TopMenubar /> */}
        {/* <HomeModal /> */}

        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/dashboard/promotional-images"
              element={<PromotionalImages />}
            />
            <Route
              path="/dashboard/add-promotional-image"
              element={<AddPromotionalImage />}
            />
            <Route
              path="/dashboard/edit-promotional-image/:id"
              element={<EditPromotionalImage />}
            />

            <Route path="/dashboard/home-slider" element={<HomeSlider />} />
            <Route
              path="/dashboard/home-slider-image"
              element={<AddHomeSlider />}
            />
            <Route
              path="/dashboard/edit-homeslider-image/:id"
              element={<EditHomeSlider />}
            />

            <Route path="/dashboard/popup-slider" element={<PopSlider />} />
            <Route
              path="/dashboard/popup-slider-image"
              element={<AddPopSlider />}
            />
            <Route
              path="/dashboard/edit-popupslider-image/:id"
              element={<EditPopSlider />}
            />

            <Route
              path="/dashboard/mentoring-slider"
              element={<MentoringSlider />}
            />
            <Route
              path="/dashboard/mentoring-slider-image"
              element={<AddMentoringSlider />}
            />
            <Route
              path="/dashboard/edit-mentoringslider-image/:id"
              element={<EditMentoringSlider />}
            />

            <Route
              path="/dashboard/coaching-slider"
              element={<CoachingSlider />}
            />
            <Route
              path="/dashboard/coaching-slider-image"
              element={<AddCoachingSlider />}
            />
            <Route
              path="/dashboard/edit-coachingslider-image/:id"
              element={<EditCoachingSlider />}
            />

            <Route
              path="/dashboard/course-schedule"
              element={<CourseSchedule />}
            />
            <Route
              path="/dashboard/add-course-schedule"
              element={<AddCourseSchedule />}
            />
            <Route
              path="/dashboard/edit-course-schedule/:id"
              element={<EditCourseSchedule />}
            />

            <Route path="/dashboard/payment" element={<Payment></Payment>} />
          </Route>

          <Route element={<LoginProtectedRoute />}>
            <Route path="/login" element={<Login />}></Route>
          </Route>

          <Route element={<RegisterProtectedRoute />}>
            <Route path="/register" element={<Register />}></Route>
          </Route>

          <Route path="/agility" element={<Home />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
          <Route
            path="/capability-building-programs/ic-agile"
            element={<IcAgile />}
          ></Route>
          <Route path="/ic-agile/icp-acc/" element={<IcAgileIcpAcc />}></Route>
          <Route path="/ic-agile/icp-cat/" element={<IcAgileIcpCat />}></Route>
          <Route path="/ic-agile/icp-ent/" element={<IcAgileIcpEnt />}></Route>
          <Route path="/ic-agile/icp-org/" element={<IcAgileIcpOrg />}></Route>
          <Route path="/ic-agile/icp-pdv/" element={<IcAgileIcpPdv />}></Route>
          <Route path="/ic-agile/icp-atf/" element={<IcAgileIcpAtf />}></Route>
          <Route
            path="/capability-building-programs/safe"
            element={<Safe />}
          ></Route>
          <Route path="/safe5-sa" element={<SafeFlipbook />}></Route>
          <Route path="/safe5-ssm" element={<SafeSsm />}></Route>
          <Route path="/safe5-sasm" element={<SafeSasm />}></Route>
          <Route path="/safe5-popm" element={<SafePopm />}></Route>
          <Route path="/safe5-lpm" element={<SafeLpm />}></Route>
          <Route
            path="/capability-building-programs/dasa"
            element={<Dasa />}
          ></Route>
          <Route path="/assessments" element={<Assessments />}></Route>
          <Route
            path="/sample-assessment-test"
            element={<Assessments1 />}
          ></Route>
          <Route
            path="/assessments-coaching"
            element={<AgileCoachingAssessment />}
          ></Route>
          <Route
            path="/agility-team-assessments"
            element={<AgileTeamAssessment />}
          ></Route>
          <Route path="/dasa-flipbook" element={<DasaFlipbook />}></Route>
          <Route
            path="/experiential-learning-programs"
            element={<ExperientialLeraningPrograms />}
          ></Route>
          <Route path="/dai-dal" element={<DaiDal />}></Route>
          <Route path="/dai-esm" element={<DaiEsm />}></Route>
          <Route path="/dai-eac" element={<DaiEac />}></Route>
          <Route path="/coaching" element={<Coaching />}></Route>
          <Route path="/mentoring" element={<Mentoring />}></Route>
          <Route path="/youtube-videos" element={<YoutubeVideos />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route
            path="/agile-transformation-a-bloo-or-a-dom"
            element={<Blog1 />}
          ></Route>
          <Route
            path="/lessons-in-leadership-succession-planning"
            element={<Blog2 />}
          ></Route>
          <Route
            path="/2019-extending-the-horizons"
            element={<Blog3 />}
          ></Route>
          <Route
            path="/how-to-As-your-limiting-benefits"
            element={<Blog4 />}
          ></Route>
          <Route
            path="/why-unlearning-studio-meetup"
            element={<Blog5 />}
          ></Route>
          <Route path="/self-reflection" element={<Blog6 />}></Route>
          <Route
            path="/unlearning-is-a-challenge-or-opportunity"
            element={<Blog7 />}
          ></Route>
          <Route path="/self-coaching" element={<Blog8 />}></Route>
          <Route path="/why-do-i-need-a-coach" element={<Blog9 />}></Route>
          <Route path="/disruption" element={<Blog10 />}></Route>
          <Route path="/active-questioning" element={<Blog11 />}></Route>
          <Route
            path="/self-assessment-contionous"
            element={<Blog12 />}
          ></Route>
          <Route path="/feed-back-to-feed-forward" element={<Blog13 />}></Route>
          <Route path="/agile-to-agility" element={<Blog14 />}></Route>
          <Route
            path="/reusable-templates"
            element={<ReusableTemplates />}
          ></Route>
          <Route path="/assessments" element={<Assessments />}></Route>
          <Route path="/work-books" element={<Workbook />}></Route>
          <Route path="/custom-slider" element={<CustomSlider />}></Route>
          <Route
            path="/course-schedule"
            element={<CourseTimingUpdate />}
          ></Route>
          <Route
            path="/modal-image-upload"
            element={<CustomModalImageUpload />}
          ></Route>
          <Route path="/e-learning-programs" element={<ELearning />}></Route>
          <Route
            path="/e-learning/agile-fundamentals"
            element={<AgileFundamentals />}
          ></Route>
          <Route
            path="/e-learning/agile-coaching-fundamentals"
            element={<AgileCoachingFundamentals />}
          ></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/refund-policy" element={<RefundPolicy />}></Route>
          <Route path="/terms-of-service" element={<TermsofPolicy />}></Route>
          <Route path="/community-events" element={<CommunityEvents />}></Route>

          <Route path="/manifesto" element={<Manifesto />}></Route>

          <Route
            path="/agile-team-assessment"
            element={<AgileTeamAssessment />}
          ></Route>
          <Route
            path="/agile-coach-assessment"
            element={<AgileCoachingAssessment />}
          ></Route>
          <Route
            path="/agile-Leadership-assessment"
            element={<AgileLeadershipAssessment />}
          ></Route>
          <Route path="/cookies-policy" element={<CookiePolicy />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route
            path="/promotional-coaching-image-upload"
            element={<PromotionalVideoUpload />}
          ></Route>
          <Route
            path="/promotional-mentoring-image-upload"
            element={<MentoringPromotion />}
          ></Route>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
