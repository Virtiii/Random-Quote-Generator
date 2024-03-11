// import React, { useState } from "react";
// import ReactCardFlip from "react-card-flip";
// import axios from 'axios';
// import './App.css'; // Import the CSS file
// import vid from './image/vid.mp4';
// import img from './image/Brain_.jpg';

// function App() {
//   const [flip, setFlip] = useState(false);
//   const [advice, setAdvice] = useState('');

//   const fetchAdvice = () => {
//     axios.get('https://api.adviceslip.com/advice')
//       .then((response) => {
//         const { advice } = response.data.slip;
//         setAdvice(advice);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   const handleButtonClick = () => {
//     setFlip(!flip);
//     fetchAdvice();
//   }

//   return (
//     <div className='app'>
//       <video autoPlay loop muted className='background-video'>
//         <source src={vid} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className='center-image'>
//         <img src={img} alt="Center Image" />
//         <div className='card-container'>
//           <ReactCardFlip isFlipped={flip}
//             flipDirection="vertical">
//             <div style={{
//               background: 'transparent',
//               width: '100%',
//               height: '200px',
//               borderRadius: '10px',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               alignItems: 'center',
//               left: '0',
//               transition: 'transform 0.5s',
//               padding: '2%',
//               boxShadow: '2px 2px',
//               borderRadius: '25px'
//             }}>

//               <div className='card-content'>
//                 {advice}
//               </div>                <br />
//               <br />

//             </div>
//             <div style={{
//               background: 'transparent',
//               width: '100%',
//               height: '200px',
//               borderRadius: '10px',
//               display: 'flex',
//               flexDirection: 'column',
//               justifyContent: 'center',
//               alignItems: 'center',
//               left: '0',
//               transition: 'transform 0.5s',
//               padding: '2%',
//               boxShadow: '2px 2px',
//               borderRadius: '25px'
//             }}>
//               <div className='card-content'>
//                 {advice}
//               </div>                <br />

//             </div>
//           </ReactCardFlip>
//         </div>
//       </div>
//       <button
//         className='button'
//         onClick={handleButtonClick}
//       >
//         Flip
//       </button>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import axios from 'axios';
import './App.css'; // Import the CSS file
import vid from './image/vid.mp4'; // Import the MP4 video file
import img from './image/Brain_.jpg'; // Import the MP4 video file

function App() {
    const [flip, setFlip] = useState(false);
    const [advice, setAdvice] = useState('');

    const fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                setAdvice(advice);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const handleButtonClick = () => {
        setFlip(!flip);
        fetchAdvice();
    }

    return (
        <div className='app'>
            <video autoPlay loop muted className='background-video'>
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='center-image'>
                <img src={img} alt="Center Image" />
                <div className='card-container'>
                    <ReactCardFlip isFlipped={flip} flipDirection="vertical">
                        <div className='card' key='front'>
                            <div className='card-content'>
                                {advice}
                            </div>
                        </div>
                        <div className='card' key='back'>
                            <div className='card-content'>
                                {advice}
                            </div>
                        </div>
                    </ReactCardFlip>
                </div>
            </div>
            <button
                className='button'
                onClick={handleButtonClick}
            >
                MOTIVATE ME!
            </button>
        </div>
    );
}

export default App;
