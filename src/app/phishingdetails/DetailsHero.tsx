// "use client"
// import React, { useState , useRef , useEffect } from 'react';
// import { Spotlight } from '@/src/components/ui/Spotlight';
// import { FaCheckCircle } from 'react-icons/fa';
// import { FiMoreVertical } from 'react-icons/fi'; 
// import { FaSearch, FaUpload , FaUser} from 'react-icons/fa';
// import { Button } from "@/src/components/ui/MovingBorder";
// import Link from "next/link"

// interface GraphWithAnimationProps {
//   value: number;
//   redFillPercentage: number;
// }

// const DetailsHero : React.FC<GraphWithAnimationProps> = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [value, setValue] = useState(1);
//   const fileInputRef = useRef<HTMLInputElement | null>(null);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = Number(e.target.value);
//     if (newValue >= 0 && newValue <= 96) {
//       setValue(newValue);
//     }
//   };

//   const handleIconClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleReanalyzeClick = () => {
//     window.location.reload();
//   };

//   const redFillPercentage = Math.min(value / 96, 1) * 100;

 
//   const handleSearch = () => {
//     // Update the address bar 
//     if (inputValue.trim()) {
//       const newUrl = `${window.location.pathname}?search=${encodeURIComponent(inputValue)}`;
//       window.history.pushState(null, '', newUrl);
//     }
//   };

//   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter') {
//       handleSearch();
//     }
//   };


//   const [isOpen, setIsOpen] = useState(false);
//   const modalRef = useRef<HTMLDivElement>(null);

//   const toggleModal = () => {
//     setIsOpen(!isOpen);
//   };

//   // const handleClickOutside = (event: MouseEvent) => {
//   //   if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
//   //     setIsOpen(false);
//   //   }
//   // };

//   // useEffect(() => {
//   //   if (isOpen) {
//   //     document.addEventListener("mousedown", handleClickOutside);
//   //   } else {
//   //     document.removeEventListener("mousedown", handleClickOutside);
//   //   }
//   //   return () => {
//   //     document.removeEventListener("mousedown", handleClickOutside);
//   //   };
//   // }, [isOpen]);

//   // const handleReanalyzeClick = () => {
//   //   // Reload the page and update the address bar with the search input
//   //   const newUrl = `${window.location.pathname}?search=${encodeURIComponent(inputValue)}`;
//   //   window.location.assign(newUrl);
//   // };

  
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   // const [activePage, setActivePage] = useState<string>('Detection');

//   // const handleButtonClick = (page: string) => {
//   //   setActivePage(page);
//   // };
  
  

//   return (
//     <div className="pb-20 pt-36">
//       <div>
//         <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
//         <Spotlight className="top-20 left-full h-[80vh] w-[50vw]" fill="purple" />
//         <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
//       </div>

//       <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
//         <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
//       </div>

//       <div className="flex justify-center relative my-10 flex-col">
//         <div className="flex items-start my-10 gap-20 transform -translate-x-[35px] -translate-y-[50px]">
//           <Button className="bg-[#1E043F] text-white py-4 px-8 rounded-full text-center text-[18px] transition hover:bg-black-100 flex items-center justify-center mr-5 flex items-center justify-center mr-5" onClick={handleReanalyzeClick}>
//             Reanalyze
//           </Button>
//         </div>

//         <div className="status-bar flex-col space-y-6 p-5 rounded-lg shadow-md mb-5 border border-gray-400 w-[650px] h-[160px] transform translate-x-[200px] -translate-y-[200px]">
//           <div className="flex items-center space-x-2 text-green-500">
//             <span className="icon">
//               <FaCheckCircle />
//             </span>
//             <span>No security tools have classified this URL as a threat</span>
//           </div>
//           <div className="url text-white">
//             <p>https://www.webfox.com/gui/home</p>
//             <p>www.webfox.com</p>
//           </div>

//           <div className="flex items-center justify-center w-[40px] h-[40px] bg-transparent border-[3px] border-[#FFFFFF] rounded-full transform translate-x-[550px] -translate-y-[100px] cursor-pointer" onClick={toggleModal} > 
//             <FiMoreVertical className="w-[20px] h-[20px] text-[#FFFFFF]" />
//           </div>
//               {/* Popup Modal */}
//       {isOpen && (
//         <div className="absolute bg-black bg-opacity-50 flex justify-center items-center transform translate-x-[600px] -translate-y-[250px]">
//           <div
//             ref={modalRef}
//             className="bg-white p-5 rounded-lg shadow-lg"
//             style={{
//               width: "300px", 
//               height: "240px", 
//               opacity: "0.9", 
//             }}
//           >
//             {/* Close button */}
//             {/* <button
//               onClick={toggleModal}
//               className="text-gray-500 absolute top-2 right-2"
//             >
//               &times;
//             </button> */}

//             {/* Editable content */}
//             <div
//               contentEditable={false}
//               className="text-gray-700 border border-gray-300 p-3 rounded focus:outline-none"
//             >
//               Status :
//               200
//            </div>
//            <div
//               contentEditable={false}
//               className="text-gray-700 border border-gray-300 p-3 rounded focus:outline-none"
//             >
//               Content type :
//               text/html

//             </div>
//             <div
//               contentEditable={false}
//               className="text-gray-700 border border-gray-300 p-3 rounded focus:outline-none"
//             >
//               Last Analysis Date :
//               1 day ago

//             </div>
//             <div
//               contentEditable={false}
//               className="text-gray-700 border border-gray-300 p-3 rounded focus:outline-none"
//             >
//               external-resources
//             </div>
//             </div>
//         </div>
//          )}
//         </div>
        
//         <div>
//           {/* <div className="relative flex items-center justify-center w-[150px] h-[150px] transform translate-x-[1120px] -translate-y-[450px]">
//             <div className="absolute w-[150px] h-[150px] bg-transparent border-[8px] border-[#0000FF] rounded-full"></div>
//             <div
//               className="absolute w-[150px] h-[150px] bg-transparent border-[8px] border-[#00FFFF] rounded-full"
//               style={{
//                 background: `conic-gradient(red 0% ${redFillPercentage}%, transparent ${redFillPercentage}% 100%)`,
//                 maskImage: 'linear-gradient(white, white)',
//                 transition: 'background 0.3s ease-out',
//               }}
//             ></div>
//             <div className="relative flex flex-col items-center justify-center w-[150px] h-[150px]">
//               <div className="absolute top-[50%] transform -translate-y-[50%] inline-block break-words font-['ABeeZee'] font-normal text-[30px] text-[#FFFFFF]">
//                 {value}
//               </div>
//               <span className="absolute bottom-[10px] break-words font-['ABeeZee'] font-normal text-[30px] text-[#FFFFFF]">
//                 / 96
//               </span>
//             </div>
//           </div> */}
//            <div
//       className={`relative flex items-center justify-center w-[150px] h-[150px] transform translate-x-[1120px] -translate-y-[380px] transition-transform duration-500 ease-in-out ${isHovered ? 'scale-110' : 'scale-100'}`}
//       onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}
//     >
//       {/* Outer ring */}
//       <div className="absolute w-[150px] h-[150px] bg-transparent border-[8px] border-[#0000FF] rounded-full"></div>
      
//       {/* Inner filled ring */}
//       <div
//         className="absolute w-[150px] h-[150px] bg-transparent border-[8px] border-[#00FFFF] rounded-full"
//         style={{
//           background: `conic-gradient(red 0% ${redFillPercentage}%, transparent ${redFillPercentage}% 100%)`,
//           maskImage: 'linear-gradient(white, white)',
//           transition: 'background 0.3s ease-out',
//         }}
//       ></div>

//       {/* Inner content */}
//       <div className="relative flex flex-col items-center justify-center w-[150px] h-[150px]">
//         <div className="absolute top-[50%] transform -translate-y-[50%] inline-block break-words font-['ABeeZee'] font-normal text-[30px] text-[#FFFFFF]">
//           {value}
//         </div>
//         <span className="absolute bottom-[10px] break-words font-['ABeeZee'] font-normal text-[30px] text-[#FFFFFF]">
//           / 96
//         </span>
//       </div>
//     </div>

//           <div className="mt-5 flex justify-center transform translate-x-[560px] -translate-y-[360px]">
//             <input
//               type="number"
//               min="0"
//               max="96"
//               value={value}
//               onChange={handleInputChange}
//               className="p-2 border border-gray-300 rounded"
//             />
//           </div>
//         </div>

//         <div className="relative left-[30%] top-[40%] w-[370px] h-[50px] bg-transparent border-[3px] border-[#FFFFFF] rounded-full transform translate-x-[30px] -translate-y-[360px]">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             onKeyDown={handleKeyPress}
//             className="w-full h-full bg-transparent outline-none text-white pl-4 pr-14 caret-white"
//             style={{ whiteSpace: 'nowrap' }}
//           />
//         </div>
      
        
//         <div className="absolute left-[49.5%] top-[100%] w-[50px] h-[50px] bg-[#030029] bg-opacity-0 rounded-full flex items-center justify-center transform translate-x-[100px] -translate-y-[410px] cursor-pointer" onClick={handleSearch} >
//           <FaSearch className="text-white text-2xl" />
//         </div>
        

//         <div className="absolute left-[53%] top-[100%] flex items-center justify-center w-[90px] h-[50px] transform translate-x-[100px] -translate-y-[410px] cursor-pointer" onClick={handleIconClick}>
//           <FaUpload className="text-white text-xl" />
//           <input type="file" ref={fileInputRef} style={{ display: 'none' }} />
//         </div>
//       </div>


            // <div className="relative flex flex-col transform translate-x-[80px] -translate-y-[340px]">
            //   <div className="bg-[#460695] w-[800px] ">
            //     <span className="break-words font-['Times_New_Roman','Roboto_Condensed'] font-bold text-[20px] text-[#FFFFFF]">
            //       Categories
            //     </span>
            //   </div>
            //   <div className="m-[0_0_13px_6px] inline-block self-center break-words font-['Times_New_Roman','Roboto_Condensed'] font-normal text-[16px] text-[#FFFFFF]">
            //     computers and software<br />
            //     Information technology<br />
            //     Computer security<br />
            //     information security
            //   </div>
            //   <div>
            //     <span className="absolute left-[1px] top-[35px] break-words font-['Times_New_Roman','Roboto_Condensed'] font-normal text-[16px] text-[#FFFFFF]">
            //       BitDefender<br />
            //       Sophos<br />
            //       Forcepoint ThreatSeeker<br />
            //       Xcitium Verdict Cloud<br />
            //     </span>
            //   </div>
            //   <div className="bg-[#460695] w-[800px] box-sizing-border">
            //     <span className="break-words font-['Times_New_Roman','Roboto_Condensed'] font-bold text-[20px] text-[#FFFFFF]">
            //       History
            //     </span>
            //   </div>
            //   <div className="m-[0_1px_2px_1px] inline-block self-start break-words font-['Times_New_Roman','Roboto_Condensed'] font-normal text-[16px] text-[#FFFFFF]">
            //     First Submission 2019-01-29 05:04:55 UTC<br />
            //     Last Submission 2024-08-29 10:02:31 UTC<br />
            //     Last Analysis 2024-08-29 10:02:31 UTC
            //   </div>
            //   <div className="bg-[#460695] w-[800px] box-sizing-border">
            //     <span className="break-words font-['Times_New_Roman','Roboto_Condensed'] font-bold text-[20px] text-[#FFFFFF]">
            //       HTTP Response
            //     </span>
            //   </div>
            //   <div className="m-[0_1px_2px_1px] inline-block self-start break-words font-['Times_New_Roman','Roboto_Condensed'] font-normal text-[16px] text-[#FFFFFF]">
            //     Final url<br />
            //     https://www.virustotal.com/gui/home/url<br />
            //     Serving IP Address<br />
            //     74.125.34.46<br />
            //     Status Code<br />
            //     200<br />
            //     Body length<br />
            //     7.21 Kb<br />
            //     Body Sha-256<br />
            //     706782e84dec3fa579476f62d5d2d3c7c16e69d4c42cb385bfd46a9d3e0a0ea8
            //   </div>
            // </div>
          
        
      

//       <div className="absolute bottom-20 right-10 flex flex-col gap-10 transform translate-x-[0px] -translate-y-[570px]">
//         <Link href="/">
//         <Button className="bg-[#1E043F] text-white py-4 px-8 rounded-full text-center text-[18px] transition hover:bg-black-100 flex items-center justify-center mr-5" >Detection</Button></Link>
//         <Button className="bg-[#1E043F] text-white py-4 px-8 rounded-full text-center text-[18px] transition hover:bg-black-100 flex items-center justify-center mr-5">Details</Button>
//         <Link href="./phishingcomments">
//         <Button className="bg-[#1E043F] text-white py-4 px-8 rounded-full text-center text-[18px] transition hover:bg-black-100 flex items-center justify-center mr-5">Comments</Button></Link>
//       </div>
//     </div>
//   );
// };

// export default DetailsHero;


"use client"
import React, { useState, useRef } from 'react';
import { Spotlight } from '@/src/components/ui/Spotlight';
import { FaCheckCircle, FaVirus } from 'react-icons/fa';
import { FiMoreVertical } from 'react-icons/fi';
import { FaSearch, FaUpload, FaUser } from 'react-icons/fa';
import { Button } from "@/src/components/ui/MovingBorder";
import Link from 'next/link';
// import { BentoGrid , BentoGridItem } from './ui/BentoGrid';
import jsonData from '@/src/components/data.json'


interface GraphWithAnimationProps {
  value: number;
  redFillPercentage: number;
}

const Hero: React.FC<GraphWithAnimationProps> = () => {
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState(1);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (newValue >= 0 && newValue <= 96) {
      setValue(newValue);
    }
  };

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleReanalyzeClick = () => {
    window.location.reload();
  };

  // const redFillPercentage = Math.min(value / 96, 1) * 100;

  const handleSearch = () => {
    // Update the address bar 
    if (inputValue.trim()) {
      const newUrl = `${window.location.pathname}?search=${encodeURIComponent(inputValue)}`;
      window.history.pushState(null, '', newUrl);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };


  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };



  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };



  // table config
  interface ScanResult {
    category: string;
    engine_name: string;
    result: string;
  }

  // Split the data into pairs for display  table
  const pairedData: Array<[ScanResult?, ScanResult?]> = [];
  for (let i = 0; i < jsonData.results.length; i += 2) {
    pairedData.push([jsonData.results[i], jsonData.results[i + 1]]);
  }




  //  circle fill
  // Calculate how many results are not "clean"
  const notCleanCount = jsonData.results.filter(result => result.result !== 'clean').length;

  // Calculate the fill percentage based on the number of not "clean" results and total of 96
  const redFillPercentage = (notCleanCount / 96) * 100;


  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-20 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex justify-center relative my-10 flex-col">
        
        <div className="flex items-start my-10 gap-10 sm:gap-14 md:gap-16 lg:gap-20 transform sm:translate-x-[0px] lg:translate-x-[-35px] sm:-translate-y-[100px] lg:translate-y-[-50px]">
  
  <Button className="bg-[#1E043F] text-white py-4 px-8 rounded-full text-center text-[14px] sm:text-[16px] md:text-[18px] transition hover:bg-black-100 flex items-center justify-center mr-5"
    onClick={handleReanalyzeClick}>
    Reanalyze
  </Button>
  
</div>




        <div className="status-bar flex-col space-y-6 p-5 rounded-lg shadow-md mb-5 border border-gray-400 w-[90%] md:w-[650px] h-auto md:h-[160px] transform md:translate-x-[200px] md:-translate-y-[200px]">
          <div className="flex items-center space-x-2 text-green-500">
            <span className="icon">
              <FaCheckCircle />
            </span>
            <span>No security tools have classified this URL as a threat</span>
          </div>
          <div className="url text-white">
            <p>https://www.webfox.com/gui/home</p>
            <p>www.webfox.com</p>
          </div>

          <div
            className="flex items-center justify-center w-[40px] h-[40px] bg-transparent border-[3px] border-[#FFFFFF] rounded-full transform md:translate-x-[550px] md:-translate-y-[100px] cursor-pointer"
            onClick={toggleModal}
          >
            <FiMoreVertical className="w-[20px] h-[20px] text-[#FFFFFF]" />
          </div>

          {/* Popup Modal */}
          {isOpen && (
            <div className="absolute bg-black bg-opacity-50 flex justify-center items-center transform md:translate-x-[600px] md:-translate-y-[250px] sm:translate-x-[50px] sm:-translate-y-[50px]">
              <div
                ref={modalRef}
                className="bg-white p-5 rounded-lg shadow-lg"
                style={{
                  width: "90%", // Make it responsive to smaller screens
                  maxWidth: "300px",
                  height: "auto", // Make height flexible
                  maxHeight: "260px",
                  opacity: "0.9",
                }}
              >
                {/* Editable content */}
                <div
                  contentEditable={false}
                  className="text-gray-700 border border-gray-300 p-3 rounded focus:outline-none"
                >
                  Status : 200
                </div>
                <div
                  contentEditable={false}
                  className="text-gray-700 border border-gray-300 p-3 rounded focus:outline-none"
                >
                  Content type : text/html
                </div>
                <div
                  contentEditable={false}
                  className="text-gray-700 border border-gray-300 p-3 rounded focus:outline-none"
                >
                  Last Analysis Date : 1 day ago
                </div>
                <div
                  contentEditable={false}
                  className="text-gray-700 border border-gray-300 p-3 rounded focus:outline-none"
                >
                  external-resources
                </div>
              </div>
            </div>
          )}
        </div>


       


        <div>
          <div
            className={`relative flex items-center justify-center w-[150px] h-[150px] transform lg:translate-x-[1120px] lg:-translate-y-[380px] md:translate-x-[500px] md:-translate-y-[100px] sm:translate-x-[300px] sm:-translate-y-[450px] transition-transform duration-500 ease-in-out ${isHovered ? 'scale-110' : 'scale-100'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Outer ring */}
            <div className="absolute w-[150px] h-[150px] bg-transparent border-[8px] border-[#0000FF] rounded-full"></div>

            {/* Inner filled ring */}
            <div
              className="absolute w-[150px] h-[150px] bg-transparent border-[8px] border-[#00FFFF] rounded-full"
              style={{
                background: `conic-gradient(red 0% ${redFillPercentage}%, transparent ${redFillPercentage}% 100%)`,
                maskImage: 'linear-gradient(white, white)',
                transition: 'background 0.3s ease-out',
              }}
            ></div>

            {/* Inner content */}
            <div className="relative flex flex-col items-center justify-center w-[150px] h-[150px]">
              <div className="absolute top-[50%] transform -translate-y-[50%] inline-block break-words font-['ABeeZee'] font-normal text-[30px] text-[#FFFFFF]">
                {notCleanCount}
              </div>
              <span className="absolute bottom-[10px] break-words font-['ABeeZee'] font-normal text-[30px] text-[#FFFFFF]">
                / 96
              </span>
            </div>
          </div>
        </div>




        <div className="relative left-[50%] sm:left-[30%] top-[40%] w-[90%] sm:w-[370px] h-[50px] bg-transparent border-[3px] border-[#FFFFFF] rounded-full transform translate-x-[-50%] sm:translate-x-[30px] -translate-y-[360px]">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full h-full bg-transparent outline-none text-white pl-4 pr-14 caret-white"
            style={{ whiteSpace: 'nowrap' }}
          />
        </div>





<div className="absolute left-[80%] sm:left-[49.5%] md:left-[45%] lg:left-[40%] top-[100%] w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] bg-[#030029] bg-opacity-0 rounded-full flex items-center justify-center transform translate-x-[-50%] sm:translate-x-[100px] md:translate-x-[220px] lg:translate-x-[220px] -translate-y-[410px] cursor-pointer" onClick={handleSearch}>
          <FaSearch className="text-white text-xl sm:text-2xl md:text-3xl lg:text-3xl" />
        </div>

        <div className="absolute left-[85%] sm:left-[53%] md:left-[50%] lg:left-[45%] top-[100%] flex items-center justify-center w-[50px] sm:w-[90px] md:w-[100px] lg:w-[120px] h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] transform translate-x-[-50%] sm:translate-x-[100px] md:translate-x-[230px] md:-translate-y-[415px] lg:translate-x-[200px] -translate-y-[410px] cursor-pointer" onClick={handleIconClick}>
          <FaUpload className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl" />
          <input type="file" ref={fileInputRef} style={{ display: 'none' }} />
        </div>
      </div>

<div className="relative flex flex-col transform translate-x-[80px] -translate-y-[340px]">
              <div className="bg-[#460695] w-[800px] ">
                <span className="break-words font-['Times_New_Roman','Roboto_Condensed'] font-bold text-[20px] text-[#FFFFFF]">
                  Categories
                </span>
              </div>
              <div className="m-[0_0_13px_6px] inline-block self-center break-words font-['Times_New_Roman','Roboto_Condensed'] font-normal text-[16px] text-[#FFFFFF]">
                computers and software<br />
                Information technology<br />
                Computer security<br />
                information security
              </div>
              <div>
                <span className="absolute left-[1px] top-[35px] break-words font-['Times_New_Roman','Roboto_Condensed'] font-normal text-[16px] text-[#FFFFFF]">
                  BitDefender<br />
                  Sophos<br />
                  Forcepoint ThreatSeeker<br />
                  Xcitium Verdict Cloud<br />
                </span>
              </div>
              <div className="bg-[#460695] w-[800px] box-sizing-border">
                <span className="break-words font-['Times_New_Roman','Roboto_Condensed'] font-bold text-[20px] text-[#FFFFFF]">
                  History
                </span>
              </div>
              <div className="m-[0_1px_2px_1px] inline-block self-start break-words font-['Times_New_Roman','Roboto_Condensed'] font-normal text-[16px] text-[#FFFFFF]">
                First Submission 2019-01-29 05:04:55 UTC<br />
                Last Submission 2024-08-29 10:02:31 UTC<br />
                Last Analysis 2024-08-29 10:02:31 UTC
              </div>
              <div className="bg-[#460695] w-[800px] box-sizing-border">
                <span className="break-words font-['Times_New_Roman','Roboto_Condensed'] font-bold text-[20px] text-[#FFFFFF]">
                  HTTP Response
                </span>
              </div>
              <div className="m-[0_1px_2px_1px] inline-block self-start break-words font-['Times_New_Roman','Roboto_Condensed'] font-normal text-[16px] text-[#FFFFFF]">
                Final url<br />
                https://www.virustotal.com/gui/home/url<br />
                Serving IP Address<br />
                74.125.34.46<br />
                Status Code<br />
                200<br />
                Body length<br />
                7.21 Kb<br />
                Body Sha-256<br />
                706782e84dec3fa579476f62d5d2d3c7c16e69d4c42cb385bfd46a9d3e0a0ea8
              </div>
            </div>

      <div className="absolute bottom-20 right-10 flex flex-col gap-10  md:-translate-y-[100px] lg:translate-y-[-2900px] xl:translate-y-[-2900px] 2xl:translate-y-[-450px]">
      <Link href="/">
        <Button className="bg-[#1E043F] text-white py-4 px-8 rounded-full text-center text-[14px] sm:text-[16px] md:text-[18px] transition hover:bg-black-100 flex items-center justify-center mr-5">
          Detection
        </Button></Link>

       
          <Button className="bg-[#1E043F] text-white py-4 px-8 rounded-full text-center text-[14px] sm:text-[16px] md:text-[18px] transition hover:bg-black-100 flex items-center justify-center mr-12">
            Details
          </Button>
        

        <Link href="./phishingcomments">
          <Button className="bg-[#1E043F] text-white py-4 px-8 rounded-full text-center text-[14px] sm:text-[16px] md:text-[18px] transition hover:bg-black-100 flex items-center justify-center mr-5">
            Comments
          </Button>
        </Link>

      </div>

    </div>
  );
};

export default Hero;