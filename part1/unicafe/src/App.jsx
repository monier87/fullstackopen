import { useState } from 'react';
import './App.css';
import Button from './Button';
import Statistics from './Statistics';
import Anecdotes from './ Anecdotes';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const [view, setView] = useState('feedback'); 

  return (
    <div>
      {/* Selector de vista */}
      <nav style={{ marginBottom: '20px' }}>
        <Button onClick={() => setView('feedback')} text="Feedback App" />
        <Button onClick={() => setView('anecdotes')} text="Anecdotes App" />
      </nav>

    
      {view === 'feedback' && (
        <>
          <h1>Give Feedback</h1>
          <Button onClick={() => setGood(good + 1)} text="Good" />
          <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
          <Button onClick={() => setBad(bad + 1)} text="Bad" />

          <h2>Statistics</h2>
          <Statistics good={good} neutral={neutral} bad={bad} />
        </>
      )}

      {view === 'anecdotes' && (
        <>
          <Anecdotes />
        </>
      )}
    </div>
  );
};

export default App;
