import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import tw, { styled } from 'twin.macro';
import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';

// still works despite importing from twin.macro
const StyledButton = styled.button`
  background: red;
  color: white;
  font-size: 1em;
  text-align: center;
  padding: 0.25em 1em;
  border: 2px solid black;
  margin: 8px 0;
`;

const TailwindButton = tw.button`
  bg-red-500
  hover:bg-red-700
  text-white
  font-bold
  py-2
  px-4
  border
  border-black
  rounded
  mx-4
`;

interface ConditionalButtonProps {
  isRed?: boolean;
}

const ConditionalButton = styled.button(({ isRed }: ConditionalButtonProps) => [
  isRed ? tw`bg-red-500 hover:bg-red-700` : tw`bg-blue-500 hover:bg-blue-500`,
  tw`
    text-white
    font-bold
    py-2
    px-4
    border
    border-black
    rounded
    mx-4
  `,
]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="text-3xl font-bold underline mb-2">Hello world!</h1>
          <TailwindButton>Tailwind Button</TailwindButton>
          <StyledButton>Styled Button</StyledButton>
          <ConditionalButton isRed>Conditional Button</ConditionalButton>
        </div>
        <div>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="about">
            <p>About</p>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
