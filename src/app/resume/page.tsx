'use client';
import { useState } from 'react';

import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
 
export default function ResumePage(){
    const [isFading, setIsFading] = useState(false);
    const handleClick = (section:
        string) => {
            setIsFading(true);
            setTimeout(() =>{
                setActiveSection(section);
                setIsFading(false);

            }, 800);
        };
const [activeSection, setActiveSection] = useState('experience');
const renderContent = () => {
    switch(activeSection) {
        case 'education':
            return(
                <>
                <h2 className='text-xl font-semibold mb-2 text-gray-800'>Education</h2>
                <ul className='text-gray-800'>
                    <li>Beng. Mechanical, Production & Energy; 2023-2028</li>
                    <li>Front-end Dev Training - Online Bootcamp - 2024</li>
                    <li>Kenya Certificate of Secondary Education - 2021</li>
                    <li>Kenya Certificate of Primary Education - 2017</li>
                </ul>
                </>
            );
            case 'skills':
                return(
                    <>
                    <h2 className='text-xl font-semibold mb-2 text-gray-800'>
                        Skills
                    </h2>
                    <ul className='list-none space-y-2 text-gray-800'>
                        <li className='flex items-center gap-2'><SiHtml5 className='text-orange-500' />HTML5</li>
                        <li className='flex items-center gap-2'><SiCss3 className='text-blue-500' />CSS3</li>
                        <li className='flex items-center gap-2'><SiJavascript className='text-yellow-400' />JavaScript</li>
                        <li className='flex items-center gap-2'><SiTypescript className='text-blue-600' />TypeScript</li>
                        <li className='flex items-center gap-2'><SiReact className='text-cyan-500' />React</li>
                        <li className='flex items-center gap-2'><SiNextdotjs className='text-black' />Next.js</li>
                        <li className='flex items-center gap-2'><SiTailwindcss className='text-teal-400' />Tailwind CSS</li>
                    </ul>
                    </>
                );

                case 'experience':
                    default:
                        return(
                            <>
                            <h2 className='text-xl font-semibold mb-2 text-gray-800'>
Experience
                            </h2>
                            <ul className='text-gray-800'>
                                <li>Development of user interfaces</li>
                                <li>Intergration of APIs and web services</li>
                                <li>Development of intuitive and user-friendly applications</li>
                                <li>Performance optimization</li>
                                <li>Reddit posting and commenting</li>
                                <li>Content writing - sustainability and engineering</li>
                            </ul>
                            </>
                        );
    }
}

    return(
        <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
<div className="flex flex-col md:flex-row gap-6 max-w-5xl w-full">
    <div className="flex-1 bg-white p-6 shadow rounded text-center">
<h2 className="text-xl font-bold mb-4 text-gray-800">Why Hire Me</h2>
<div className="flex flex-col gap-4">
    <button onClick={() => handleClick('experience')} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition">Experience</button>
    <button onClick={() => handleClick('education')} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition">Education</button>
    <button onClick={() => handleClick('skills')} className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition">Skills</button>
</div>
    </div>
    




    <div className={`flex-1 bg-white p-6 shadow rounded transition-opacity duration-500
    ${isFading ? 'opacity-0' : 'opacity-100'}`}>
{renderContent()}
    </div>

</div>
        </main>
    );
}





