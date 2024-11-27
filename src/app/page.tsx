
import React from 'react';
import Navbar from '@/app/components/Navbar';
import Image from 'next/image';

function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className=" lg:hidden w-full bg-gradient-to-r from-[#2e173d] via-[#b52fea] to-[#51375c] pl-[20px] sm:pl-[50px] pt-6 pb-6 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              Lorem, ipsum dolor sit amet veritatis consectetur adipisicing elit.
              <br />
              Repudiandae veritatis explicabo earum saepe provident laudantium
              <br />
              cupiditate adipisci, nemo sapiente facere? Odio, praesentium velit?
              <br />
              ea voluptates natus sapiente sint. Eligendi enim ex,
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Nobis, excepturi possimus? Delectus, voluptatum culpa
              <br />
              aspernatur dolores ab cumque vitae architecto voluptates dolor
              <br />
              ipsam magnam iusto reiciendis? Tempora sit necessitatibus totam.
              <br />
            </div>

            <div className="flex justify-center mt-4 lg:mt-0 lg:pr-10">
              <Image
                src={'/bird.webp'}
                alt={'picture'}
                height={200}
                width={300}
                className="border-4 border-orange-400"
              />
            </div>
          </div>
        </div>

        <div className="lg:mt-12 flex flex-col lg:flex-row flex-wrap lg:flex-nowrap ">
          <div className="flex flex-col bg-gradient-to-r from-[#32855d] to-[#829c9c] w-full lg:w-1/2 p-4 sm:p-6 border-4 border-yellow-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Delectus amet commodi exercitationem,
            <br />
            ea voluptates natus sapiente sint. Eligendi enim ex,
            <br />
            rem perferendis, sapiente iure quis perspiciatis libero modi earum
            nam!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Quaerat tenetur iste commodi eligendi. Saepe, consequatur mollitia.
            <br />
            Alias nobis dolores ducimus consequuntur iure iusto, quam et cumque
            officiis dolorem.
            <br />
          </div>

          <div className="flex flex-col bg-gradient-to-r from-[#ec8f5a] to-[#8d66c0] w-full lg:w-1/2 p-4 sm:p-6 border-4 border-yellow-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br />
            Suscipit numquam, nam, nostrum a alias incidunt temporibus quis
            laudantium,
            <br />
            reprehenderit ipsum maiores fuga culpa vitae voluptates.
            <br />
            Cupiditate libero quisquam minima atque?
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
            distinctio ullam
            <br />
            qui libero velit sed atque adipisci inventore repudiandae ne
            <br />
            aspernatur dolores ab cumque vitae architecto voluptates dolor
            <br />
          </div>

          <div className="hidden lg:flex flex-col  bg-gradient-to-r from-[#ec8f5a] to-[#8d66c0] w-full lg:w-1/2 p-4 sm:p-6 border-4 border-yellow-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             <br />
            Suscipit numquam, nam, nostrum a alias incidunt temporibus quis
             laudantium,
             <br />
             reprehenderit ipsum maiores fuga culpa vitae voluptates.
             <br />
            Cupiditate libero quisquam minima atque?
             <br />             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
            distinctio ullam
            <br />
            qui libero velit sed atque adipisci inventore repudiandae ne
            <br />
            aspernatur dolores ab cumque vitae architecto voluptates dolor
             <br />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;









   






