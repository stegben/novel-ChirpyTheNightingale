import React from 'react';

import style from './Title.module.css';

const Title = () => (
  <div>
    <video
      className={style.titleBackgroundVid}
      autoPlay
      loop
    >
      <source src="https://s3-ap-southeast-1.amazonaws.com/novel-videos/aurora-medium.mp4" type="video/mp4" />
    </video>
  </div>
);

export default Title;
