import React, { useState } from 'react';
import MusicJS from './js';
import { injectGlobal } from 'styled-components';

injectGlobal`
   body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      -webkit-tap-highlight-color: rgba(0,0,0,0);
   }
`;

const PlayMusic = ({ url }) => {
   return (
      <div>
         {url ? (
            <audio controls>
               <source src={url} type="audio/mpeg" />
               Your browser does not support the audio element.
            </audio>
         ) : (
            <p>Enter a URL to play music</p>
         )}
      </div>
   );
};

const App = () => {
   const [url, setUrl] = useState('');

   return (
      <div className="App">
         <MusicJS />
         <div>
            <input
               type="text"
               value={url}
               onChange={(e) => setUrl(e.target.value)}
               placeholder="Enter music URL"
               required
            />
         </div>
         <PlayMusic url={url} />
      </div>
   );
};

document.addEventListener('touchstart', function() {}, true);

export default App;
