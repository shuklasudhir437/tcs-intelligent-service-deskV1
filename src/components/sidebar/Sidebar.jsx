// src/components/Sidebar.jsx
import React from 'react';
import './Sidebar.css';
 
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="plus-sign">
        <div className="vertical-line">
          |
          |
        </div>

        <div className="horizontal-line">___________________</div>

        <div className="vertical-line-down">
          |
          |
        </div>
        
        <div className="value top-left">A</div>
        <div className="value bottom-left">B</div>
        <div className="value top-right">C</div>
        <div className="value bottom-right">D</div>
      </div>
    </div>
  );
};
 
export default Sidebar;