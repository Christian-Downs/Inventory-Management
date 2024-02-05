import React from "react";
import { useParams } from "react-router-dom";

const Theme = () => {
  const { themeName } = useParams();

  // Now you can use the themeName variable to render content based on the theme

  return (
    <div>
      <h2>Theme Page</h2>
      <p>Theme Name: {themeName}</p>
      {/* Render content specific to the theme */}
    </div>
  );
};

export default Theme;
