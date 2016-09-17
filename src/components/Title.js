import React from 'react';

import style from './Title.module.css';

const Title = () => (
  <div>
    <video
      className={style.backgroundVid}
      autoPlay
      muted
      loop
    >
      <source src="https://s3-ap-southeast-1.amazonaws.com/novel-videos/aurora.mp4" type="video/mp4" />
    </video>
    <div className={style.title}>
      靈鳥小啾
    </div>
    <div className={style.authors}>
      文：凝人  圖：Shaii
    </div>
  </div>
);

export default Title;
