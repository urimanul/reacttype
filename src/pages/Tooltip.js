import React from 'react';


export default function TooltipTemplate(info) {
  if (info.value < 5) {
    return (
        <div className="state-tooltip">
          <h4 className="state" style={{color: 'red'}}>{info.argument}:{info.value}℃</h4>
        </div>
      );
  }
  else {
  return (
    <div className="state-tooltip">
      <h4 className="state">{info.argument}:{info.value}℃</h4>
    </div>
  );
  }
}

