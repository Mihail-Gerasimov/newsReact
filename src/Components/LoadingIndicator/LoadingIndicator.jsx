import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import "./LoadingIndicator.css";

const LoadingIndicator = (props) => {
  const { promiseInProgress } = usePromiseTracker();
    
  return (
    <div>
      {promiseInProgress === true ? (
        <h1 className="classno">Подождите новости загружаются!!!</h1>
      ) : null}
    </div>
  );
};

export default LoadingIndicator;
