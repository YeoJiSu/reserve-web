import React from "react";

interface CircularProgressProps {
  className: string;
}
const CircularProgress = ({
  className,
}: CircularProgressProps): JSX.Element => (
  <div className={`loader ${className}`}>
    <img src="/assets/loading.png" alt="loader" style={{ height: 320 }} />
  </div>
);
export default CircularProgress;
CircularProgress.defaultProps = {
  className: "",
};
