import React from "react";

export default function Loader({ style, loading }) {
  if (loading) {
    return (
      <div>
        <h1 className="err" style={style}>
          Loading...
        </h1>
      </div>
    );
  } else {
    return <div></div>;
  }
}
