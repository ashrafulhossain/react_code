
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Service from './Components/Home/Service/Service';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import NotFound from './Components/NotFound.js/NotFound';
import CheckOut from './Components/CheckOut/CheckOut';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import FAQ from './Components/FAQ/FAQ';
import Menu from './Components/Home/Menu';
import Photography from './Components/Home/Photography';
import AllUser from "./Components/DashBoard/Admin/AllUser";
import { ToastContainer } from "react-toastify";
import Welcome from './Components/DashBoard/Welcome';
import DashBoard from './Components/DashBoard/DashBoard';
import MyProfile from './Components/MyProfile/MyProfile';
import RequireAdmin from './Components/RequireAuth/RequireAdmin';
import { useEffect, useState } from 'react';
import Loader from './Components/Loader/Loader'
import AddReview from './Components/DashBoard/User/AddReview';
import MyOrder from './Components/DashBoard/User/MyOrder'
import ManageOrder from './Components/DashBoard/Admin/ManageOrder';
import Discount from './Components/DashBoard/Admin/Discount';
import Payment from './Components/DashBoard/User/Payment';
import Chat from './Components/Home/Chat';

import AllClient from './Components/DashBoard/Admin/AllClient';
import AddPackage from './Components/DashBoard/Admin/AddPackage';
import MuslimStage from './Components/Home/MusLimStage/MuslimStage';
import Wedding from './Components/Home/Wedding/Wedding';
import NormalParty from './Components/Home/Birthday/NormalBirthday/NormalParty';
import BusinessMeeting from './Components/Home/BusinessMeeting/BusinessMeeting';
import WeddingMemory from './Components/Home/Memory/WeddingMemory';
import BirthdayMemory from './Components/Home/Memory/BirthdayMemory';
import BusinessMemory from './Components/Home/Memory/BusinessMemory';
import Reunion from './Components/Home/ReUnion/Reunion';
import ManagePackage from './Components/DashBoard/Admin/ManagePackage';
import UpdatePackage from './Components/DashBoard/Admin/UpdatePackage';
import Update from './Components/DashBoard/Admin/Update';
import "react-whatsapp-chat-widget/index.css";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import ScrollToTop from "react-scroll-to-top";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false)
    }, 1500);

  }, []);


  return (
    <>
      {
        isLoading === true ? <Loader /> :
          <div >
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/services' element={<Service />}></Route>

              <Route path='/about' element={<About />}></Route>
              <Route path='/signin' element={<Login />}></Route>
              <Route path="/signup" element={<Register />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/faq' element={<FAQ />}></Route>
              <Route path='/muslimstage' element={<MuslimStage />}></Route>
              <Route path='/wedding' element={<Wedding />}></Route>
              <Route path='/birthday' element={<NormalParty/>}></Route>
              <Route path='/wedding' element={<Wedding />}></Route>
              <Route path='/reunion' element={<Reunion />}></Route>
              <Route path='/weddingMemory' element={<WeddingMemory />}></Route>
              <Route path='/birthMemory' element={<BirthdayMemory />}></Route>
              <Route path='/busiMemory' element={<BusinessMemory />}></Route>
              <Route path='/businessMeeting' element={<BusinessMeeting />}></Route>
              <Route path="/package/:id" element={
                  <RequireAdmin><Update /></RequireAdmin>

                }></Route>
              <Route path='/menu' element={<Menu />}></Route>

              <Route path='/photography' element={<Photography />}></Route>

              <Route path='/dashboard' element={
                <RequireAuth>
                  <DashBoard />
                </RequireAuth>

              }>
                <Route index element={<Welcome />}></Route>
                <Route path="user" element={
                  <RequireAdmin><AllUser /></RequireAdmin>

                }></Route>
                <Route path="add" element={
                  <RequireAdmin><AddPackage /></RequireAdmin>

                }></Route>
                <Route path="manageTools" element={
                  <RequireAdmin><ManagePackage /></RequireAdmin>

                }></Route>
              

                <Route path="payment/:id" element={<Payment />}></Route>
                <Route path="profile" element={<MyProfile />}></Route>
                <Route path="review" element={<AddReview />}></Route>
                <Route path="myorder" element={<MyOrder />}></Route>
                <Route path="allClient" element={
                  <RequireAdmin>  <AllClient /></RequireAdmin>
                }></Route>
             
                <Route path="manageOrder" element={
                  <RequireAdmin> <ManageOrder /></RequireAdmin>

                }></Route>
                <Route path="discount" element={
                  <RequireAdmin> <Discount /></RequireAdmin>
                }>
                </Route>
                {/* 
           
          
            <Route path="payment/:id" element={<Payment/>}></Route>
            <Route path="my-profile/edit-profile/:id" element={<UpdateProfile/>}></Route> */}

                {/* 
           
  
              
           */}
                {/* <Route path="add" element={
                <RequireAdmin> <AddTools /></RequireAdmin>
             
            }></Route>
            <Route path='updateTool/:id' element={
                <RequireAdmin> <UpdateTool/></RequireAdmin>
             
            }></Route>
            <Route path="manageTools" element={
                <RequireAdmin> <ManageTools /></RequireAdmin>
             
            }></Route> */}

              </Route>
              <Route path='/checkout/:id' element={

                <RequireAuth>
                  <CheckOut />
                </RequireAuth>

              }></Route>
              <Route path='/checkout' element={

                <RequireAuth>
                  <CheckOut />
                </RequireAuth>

              }></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Routes>

            <Footer />
            <ScrollToTop
                smooth
                style={{
                    backgroundColor: "#1E1649",
                    borderRadius: "50%",
                    boxShadow: "none",
                    left: 20,
                    
                    // border:"1px solid #00C0FF"
                }}
                color="#00C0FF"
                viewBox="0 0 160 256"
            />
            <WhatsAppWidget
           
           headerIcon="https://logowik.com/content/uploads/images/278_crystal_palace_fc.jpg"
           companyName="Crystal_Palace"
           chatMessage="Hello, How can I help you?"
           phoneNo="8801636524352"
           autoOpenTimer={0}
           iconColor="#008000"
           chatPersonName="Crystal_Palace"
           position="center"
         style={{ border: "none" }}
        
       />
            <ToastContainer
              position="top-center" />
          </div>

      }
    </>

  );
}

export default App;
