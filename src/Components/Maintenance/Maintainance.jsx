// import React from "react";

// const Maintenance = () => {
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>We're Currently Under Maintenance</h1>
//       <p>Sorry for the inconvenience. Please check back later.</p>
//     </div>
//   );
// };

// export default Maintenance;

import React from "react";

const MaintenanceModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Maintenance Mode</h2>
        <p>We are currently under maintenance. Please check back later.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

// Styles for the modal and overlay
const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
};

export default MaintenanceModal;
