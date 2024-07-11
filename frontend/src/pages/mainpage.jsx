import React from 'react';
import { CssBaseline} from '@mui/material';
import { ColorModeContext, useMode } from '../theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import Dashboard from '../scenes/dashboard';
import Team from '../scenes/team';
import Form from "../scenes/form";
import Contacts from '../scenes/contacts';
import Invoices from '../scenes/invoices';
import Topbar from '../scenes/global/Topbar';
import Calendar from '../scenes/calendar/calendar';
import Sidebar from '../scenes/global/Sidebar';
import { SnackbarProvider } from 'notistack';
import { Suspense, lazy } from 'react';
import { ThemeProvider } from '@mui/material';
import styled from 'styled-components';
import Index from '../scenes/cliendetails';
 const  Homepage=  lazy(()=> import ('../pages/homepage'))
 const  Signup=  lazy(()=> import( '../components/Home/signup'))
 const  Signin=  lazy(()=> import ('../components/Home/signin'))
 const  Aboutus=  lazy(()=> import ('../components/Home/Aboutus'))
 const  Contactus=  lazy(()=> import ('../components/Home/contactus'))
 const Profileuser= lazy(()=>import ('../components/Home/profileuser'))

const LayoutWrapper = ({ children }) => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
 

    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SnackbarProvider maxSnack={3}>
  
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            {/* <div className="content-wrapper"> */}
            <ContentWrapper>
              <Topbar setIsSidebar={setIsSidebar} />
              {children}
            </ContentWrapper>
          </div>
          </SnackbarProvider>
          {/* </div> */}
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  };



const Mainpage = () => {
    return (
        
 <>
        <Suspense fallback={
          <div className='m-3 ' style={{height:"500px" ,width:"900px"}}>
        <div className="spinner-border "  role="status">
</div>
        </div>
    }>
        <BrowserRouter>
                            <Routes>         
                            <Route
                    path="/dashboard/*"
                    element={
                    <LayoutWrapper>
                        <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="team" element={<Team />} />
                        <Route path="contacts" element={<Contacts />} />
                        <Route path="invoices" element={<Invoices />} />
                        <Route path="form" element={<Form />} />
                        <Route path="calendar" element={<Calendar />} />                
                        <Route path="cliendetails" element={<Index />} />                
                        </Routes>
                    </LayoutWrapper>
                    
                    }
                />
                                <Route path="/" element={<Homepage />}></Route>
                                <Route path="/Signup" element={<Signup />}></Route>
                                <Route path="/Signin" element={<Signin />}></Route>
                                <Route path="/aboutus" element={<Aboutus />}></Route>
                                <Route path="/contactUs" element={<Contactus />}></Route> 
                                <Route path="/Profileuser" element={<Profileuser/>}></Route>
                                <Route path="/Profileuser/:params" element={<Profileuser/>}></Route>
                    
                                </Routes>
                                </BrowserRouter>
        </Suspense>
                    
 </>
    );
}

export default Mainpage;
const ContentWrapper = styled.div`
  margin-left: /* set the width of your Sidebar */;
  width:100% ;
`;