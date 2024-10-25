import React from 'react';
import './Press.css';
import { data } from './data';

function Press() {
  return (
    <div className='press'>
      <h1 className="titlePress">PRESS</h1>
      <div className="dataContainer">
        {data.map((item) => (
          <section key={item.id} className='press'>
            <div className='pressData'>
              <a className="imageContainer" href={item.url}>
                <img src={item.imgUrl} alt='articulo de prensa' className='imagePress'></img>
                <div className="overlay">
                  <div className="eventText">
                    <h4 className='title'>{item.title}</h4>
                  </div>
                </div>
              </a>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Press;
