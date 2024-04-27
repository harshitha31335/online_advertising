import React from 'react';

function ManagerBlock() {
  return (
    <div className="manager-block">
      <h2>Manager</h2>
      <p>Manages ad campaigns and oversees user accounts.</p>
      <button onClick={() => console.log("Selected: Manager")}>Select</button>
    </div>
  );
}

export default ManagerBlock;
