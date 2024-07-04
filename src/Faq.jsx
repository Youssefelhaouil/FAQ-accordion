import React, { useState } from 'react';
import minusIcon from './assets/images/icon-minus.svg';
import plusIcon from './assets/images/icon-plus.svg';
import starIcon from './assets/images/icon-star.svg';

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What is Frontend Mentor, and how will it help me?",
            answer: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
        },
        {
            question: "Is Frontend Mentor free?",
            answer: "Frontend Mentor offers free and premium plans. With the free plan, you get access to a selection of challenges with design files and a project brief. The premium plan includes access to all challenges, design files in Figma, Sketch, and Adobe XD, as well as additional resources like premium Slack channels, design tips, and the ability to request design reviews. You can start with the free plan and decide if you want to upgrade to the premium plan for more resources and challenges."
        },
        {
            question: "Can I use Frontend Mentor projects in my portfolio?",
            answer: "Yes, you can use Frontend Mentor projects in your portfolio. Completing and showcasing these projects is a great way to demonstrate your skills and experience to potential employers or clients. Just make sure to follow any guidelines provided by Frontend Mentor regarding the use of their designs in your portfolio."
        },
        {
            question: "How can I get help if I'm stuck on a challenge?",
            answer: "If you're stuck on a challenge, you can seek help from the Frontend Mentor community. There are forums and a Slack channel where you can ask for guidance and tips from other developers who have completed the challenges. Additionally, premium members have access to additional resources like design tips and the ability to request design reviews."
        }
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

    return (
        <div className='relative grid grid-rows-[20%_80%] gap-y-2 md:gap-y-1 h-[400px] w-[450px] md:w-[350px] md:h-[500px] bg-white rounded-xl px-7'>
            <div className='flex justify-start items-center gap-x-4 mt-10'>
                <img src={starIcon} alt="" className='h-6 w-6' />
                <h1 className='font-bold font-sans text-4xl text-dark-purple'>FAQs</h1>
            </div>
            <div className='grid grid-cols-1  py-7 md:py-7 h-auto'>
                {faqs.map((faq, index) => (
                    <div key={index}>
                        <button onClick={() => handleToggle(index)} className='flex justify-between items-center gap-x-6 w-full border-t-2'>
                            <h4 className='text-start font-sans font-bold text-[13px] md:text-[14px] text-dark-purple hover:text-purple-500 '>
                                {faq.question}
                            </h4>
                            {activeIndex === index ? (
                                <img src={minusIcon} alt="" />
                            ) : (
                                <img src={plusIcon} alt="" />
                            )}
                        </button>
                        {activeIndex === index && (
                            <p className='text-[12px] font-sans font-normal  text-gray-400 '>
                                {faq.answer}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
