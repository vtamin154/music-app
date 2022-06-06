import React, { useState } from 'react';
import { baseUrl } from '../../config';
import './style.scss';
const Tabs = ({ data, selectTypeSong }) => {
  // console.log(data);

  const handleSelect = (type) => {
    selectTypeSong(type);
  }
  const [active, setActive] = useState('commercial');
  return (
    <div className="tabs-container ">
      <div className="tab-header flex">
        {data &&
          Object.keys(data).map((item, index) => (
            <a
              href={`#${item}`}
              onClick={() => setActive(Object.keys(data)[item])}
              key={index}
            >
              {data[item].label}
            </a>
          ))}
      </div>

      <div className="tab-contents">
        {data &&
          Object.keys(data).map((item, index) => (
            <div
              className={`tab-content ${active === item ? 'active' : ''}`}
              id={item}
              key={index}
            >
              <div className="content-wrapper flex justify-sb mlr-20">
                {data[item].items.map((i) => (
                  <div key={i.label} className="content-item " onClick={() => handleSelect(i.label.toLowerCase())}>
                    <img src={`${baseUrl}/music/${i.key}/${i.key}.jpg`} alt="" />
                    <p>{i.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tabs;
