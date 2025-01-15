import React from 'react'

const Footer = () => {
  return (
     <section id='footer' className=' bg-[#141C13] w-full h-[fit-content] flex justify-between px-[14%] py-9  '>
         
        <div className=" ">
           <h1 className='text-2xl'>اهل الخير</h1>
           <p className='opacity-80 my-6  w-80 text-sm '>روى ابن ماجة وصححه الألباني عن عثمان بن عفان قال: سمعت رسول الله صلى الله عليه وسلم يقول: من بنى مسجدًا بنى الله له مثله في الجنة</p>
           <a className='py-2 px-4 bg-[#31751D] rounded-lg text-white w' href="">ابني بيتك في جنة</a>
        </div>
        <div className="">
           <h2 className='bold text-2xl '>التواصل</h2>
           <span>+201008967244</span>
         </div>
    </section>
  )
}

export default Footer
