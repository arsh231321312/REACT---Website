import { Marmot_heaven } from './Gallery.js';
import { Profile } from './Gallery.js';
import { useState } from 'react';

import React from 'react';
import jsonData from './data.json';
const ReactComponent = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          {item.buttons.map((button, buttonIndex) => (
            <a key={buttonIndex} href="https://www.educative.io/answers/how-to-pass-json-values-into-react-components" target="_blank" rel="noopener noreferrer">
              <button>
                {button.label}
              </button>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};
export default function App(){
  return (
    <div>
      <Marmot_heaven />
      <ReactComponent data={jsonData} />
    </div>
    
  );

  
}

// export default function App() {
//   const [number, setNumber] = useState(0);
//   return (
    
//         <div>
//           <h1>{number}</h1>
//       <button onClick={() => {
//         setNumber();
//         setNumber(n => n + 1);
//         setNumber(n => n + 1);
//       }}>+3</button>
          
//         </div>
      
    
//   );
// }