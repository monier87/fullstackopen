const App = () => {
  const course = 'Half Stack application development';
  
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  // Calcular el total de ejercicios
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <h1>{course}</h1>
      <ul>
        {parts.map((part, index) => (
          <li key={index}>
            {part.name}: {part.exercises} exercises
          </li>
        ))}
      </ul>
      <p><strong>Total exercises: {totalExercises}</strong></p>
    </div>
  );
};

export default App;