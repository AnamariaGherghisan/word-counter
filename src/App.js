import React from 'react';
import { Header } from './components/Header';
import {WordCounter} from "./components/WordCounter"; 
import "./index.css";

export  const App = () => {
  return (
  <div>
    <Header title="Word Counter" subTitle="Paste or type your text here"/>
    <WordCounter/>
  </div>
  );
};
