import { useState, useEffect } from 'react';
import Slide from './Slide';

const pics = [
  './images/photo-1.jpg',
  './images/photo-2.jpg',
  './images/photo-3.jpg',
  './images/photo-4.jpg',
  './images/photo-5.jpg',
  './images/photo-6.jpg',
  './images/photo-7.jpg',
];

function App() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx < 0) {
      setIdx(pics.length - 1);
    }

    if (idx > pics.length - 1) {
      setIdx(0);
    }

    const i = setInterval(() => {
      setIdx(idx + 1);
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, [idx]);

  return (
    <>
      <div className="container">
        {pics.map((pic, i) => {
          let place = 'next';

          if (i === idx) {
            place = 'active';
          }

          if (i === idx - 1 || (idx === 0 && i === pics.length - 1)) {
            place = 'last';
          }

          return <Slide key={i} pic={pic} place={place} />;
        })}
      </div>
      <div className="btns">
        <button
          className="prev-btn"
          onClick={() => {
            setIdx(idx - 1);
          }}
        >
          prev
        </button>
        <button className="next-btn" onClick={() => setIdx(idx + 1)}>
          next
        </button>
      </div>
    </>
  );
}

export default App;
