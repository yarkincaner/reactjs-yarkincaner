import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="text-center justify-center fixed top-0 left-0 flex flex-col w-64 h-screen bg-black bg-opacity-90">
        <img
          src="/img/self_image.jpg"
          alt="Ali Yarkın Caner"
          className="mx-auto h-auto max-w-xs max-h-40 border-4 border-solid rounded-full border-white border-opacity-80"
        />
        <h1 className="text-white font-bold text-xl p-3">
          Hey there! It's Yarkın
        </h1>
      </div>
    );
  }
}
