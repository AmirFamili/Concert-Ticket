import React from "react";
import { Chair } from "./Chair";

export const Section = ({ chairs, section }) => {

  
 
  return (
    <div
      className={`box-${section} flex justify-center items-center flex-wrap `}
    >
      {chairs &&
        chairs.map(
          (chair) =>
            chair.section === section && (
              <Chair key={chair.number} chair={chair} />
            )
        )}
    </div>
  );
};
