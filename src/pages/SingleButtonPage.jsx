// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Wand2 } from 'lucide-react';export default function SingleButtonPage(props) {const [clickCount, setClickCount] = useState(0);const [isClicked, setIsClicked] = useState(false);const handleClick = () => {const newCount = clickCount + 1;setClickCount(newCount);setIsClicked(true);setTimeout(() => {setIsClicked(false);}, 1000);};return <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="text-center">
        <button onClick={handleClick} className={`${isClicked ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'} text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300 hover:animate-pulse`}>
          <div className="flex items-center bg-transparent font-thin text-fuchsia-800">
            {isClicked ? <>
                <Wand2 className="mr-2" />
                Clicked {clickCount} time{clickCount !== 1 ? 's' : ''}
              </> : <>
                <Wand2 className="mr-2" />
                Click Me aaa
              </>}
          </div>
        </button>
      </div>
    </div>;}