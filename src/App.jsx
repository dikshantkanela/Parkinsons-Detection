import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <div className='bg-[#090101] bg-gradient-to-t from-black via-black h-[100vh] relative text-white overflow-hidden'>

        {/* Green Tubelight Glow with Animation */}
        <div className="absolute top-[-612px] transform -translate-x-1/2 w-[100%] h-[700px] bg-green-500 opacity-20 blur-[120px] rounded-full animate-pulse-slow"></div>

        {/* Main Content */}
        <div className='flex flex-col justify-center items-center h-full'>

          {/* Heading + Badge */}
          <div className='flex flex-col items-center mb-10'>
            <h1 className='text-6xl font-bold text-center'>
              Do you have the{' '}
              <span className='bg-clip-text text-transparent bg-gradient-to-tr from-[#12c238] via-[#9ce64e] to-[#12c238]'>
                Parkinson's Disease?
              </span> 🤔
            </h1>

            <span className="mt-4 bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full dark:bg-green-900 dark:text-green-300">
              Find out Now!
            </span>
          </div>

          {/* Upload Box */}
          <div className="flex items-center justify-center w-[30%]">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>

          {/* Check Button */}
          <button className='mt-10 bg-gradient-to-tr from-[#12c238de] via-[#44b34d] to-[#0cb531] px-10 py-2 rounded-md hover:bg-gradient-to-t hover:from-[#10a430] hover:via-[#3ca349] hover:to-[#10a430]'>
            Check
          </button>

        </div>
      </div>
    </>
  );
}

export default App;
