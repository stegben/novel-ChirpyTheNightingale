/* eslint max-len: 0 */
import React from 'react';
import cn from 'classnames';

import style from './FirstParagraph.module.css';

const FirstParagraph = () => (
  <div className={style.textBlock}>
    <div className="row center-xs">
      <div className="col-xs-8">
        <div className={cn('box', style.text)}>
          「拜託不要」小啾心裡祈求著。他奮力鼓動翅膀，利用他作為『靈鳥』的特殊能力，順著地球磁場，高速向西北。在他得知消息後，經歷一番波折，他終於衝出都市叢林，回到高空中，向著熟悉的方向疾馳而去。
        </div>
      </div>
    </div>
    <div className="row center-xs">
      <div className="col-xs-8">
        <div className={cn('box', style.text)}>
          然而，隨著俯瞰的景色越趨荒涼，小啾的擔憂越是強烈。他還記得數十年前從家鄉離去，沿途是澎湃的綠。如今，他沿著相同的路線返回，卻只看見土黃色的一片。
        </div>
      </div>
    </div>
    <div className="row center-xs">
      <div className="col-xs-8">
        <div className={cn('box', style.text)}>
          飛行數小時，已然天黑了。他隱約瞧見「凝湖」。飛越這座大湖之後，就是家了，小啾心想。他降低高度，斜向前俯衝。湖面延伸到前方幾座山峰之間，小啾向左，通過第一個山谷，緊接向右，另一座山壁離他不到百公尺。兩座山都顯現出死寂的樣子，底下的湖也彷彿死去一般。
        </div>
      </div>
    </div>
    <div className="row center-xs">
      <div className="col-xs-8">
        <div className={cn('box', style.text)}>
          下一個轉角，就是「忘卻森林」，小啾加緊飛行。坐落在三座片型山脈交接所形成的三角形谷地中，一處儘管長年寒冷，針葉木仍茂密錯落，小溪潺潺流動，對於任何生物，都是天堂的──
        </div>
      </div>
    </div>
  </div>
);

export default FirstParagraph;
