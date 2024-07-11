import React from 'react';
import Navbar from '../components/Home/Navbar';
import Landingpage from '../components/Home/landingpage';
import Medicalservices from '../components/Home/Medicalservices';
import Ourdoctor from '../components/Home/ourdoctor';
import Footer from '../components/Home/footer';
import Patienttres from '../components/Home/patienttres';

const Homepage = () => {
    return (
        <div>
            <Navbar/>
            <Landingpage/>
            <div className="m-5">
            <Medicalservices/>
            </div>
            <Ourdoctor/>
            <Patienttres/>
            <Footer/>
          

        </div>
    );
}

export default Homepage;
