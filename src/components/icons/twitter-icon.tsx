import React from "react";
import { iIconTypes } from "../../utills/types/icon-types";

export const TwitterIcon: React.FC<iIconTypes> = ({
  color,
  height,
  width,
  fill,
}) => {
  return (
    <>
      <svg
        width="21"
        height="24"
        viewBox="0 0 21 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.75 1.5H2.25C1.00781 1.5 0 2.50781 0 3.75V20.25C0 21.4922 1.00781 22.5 2.25 22.5H18.75C19.9922 22.5 21 21.4922 21 20.25V3.75C21 2.50781 19.9922 1.5 18.75 1.5ZM16.4578 8.94375C16.4672 9.075 16.4672 9.21094 16.4672 9.34219C16.4672 13.4062 13.3734 18.0891 7.72031 18.0891C5.97656 18.0891 4.35938 17.5828 3 16.7109C3.24844 16.7391 3.4875 16.7484 3.74063 16.7484C5.17969 16.7484 6.50156 16.2609 7.55625 15.4359C6.20625 15.4078 5.07188 14.5219 4.68281 13.3031C5.15625 13.3734 5.58281 13.3734 6.07031 13.2469C4.66406 12.9609 3.60938 11.7234 3.60938 10.2281V10.1906C4.01719 10.4203 4.49531 10.5609 4.99687 10.5797C4.5752 10.2992 4.22952 9.91869 3.99069 9.4721C3.75186 9.02552 3.6273 8.52675 3.62813 8.02031C3.62812 7.44844 3.77813 6.92344 4.04531 6.46875C5.55938 8.33437 7.83281 9.55313 10.3828 9.68438C9.94687 7.59844 11.5078 5.90625 13.3828 5.90625C14.2688 5.90625 15.0656 6.27656 15.6281 6.87656C16.3219 6.74531 16.9875 6.4875 17.5781 6.13594C17.3484 6.84844 16.8656 7.44844 16.2281 7.82812C16.8469 7.7625 17.4469 7.58906 18 7.35C17.5828 7.96406 17.0578 8.50781 16.4578 8.94375Z"
          fill="#E9ECED"
        />
      </svg>
    </>
  );
};