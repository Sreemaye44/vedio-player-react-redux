import React from 'react';
import Footer from '../components/footer/Footer';
import RelatedVideoList from '../components/list/RelatedVideoList';
import Navbar from '../components/navbar/Navbar';
import Player from '../components/vedioDescription/Player';
import VedioDescription from '../components/vedioDescription/VedioDescription';

const Video = () => {
    return (
        <div>
            <Navbar/>
            <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <Player/>
          

            <VedioDescription/>
            
          </div>

        <RelatedVideoList/>
         
        </div>
      </div>
    </section>
            <Footer/>
        </div>
    );
};

export default Video;