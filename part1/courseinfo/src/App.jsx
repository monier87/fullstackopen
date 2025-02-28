const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
    ]
  };

  // Calcular el total de ejercicios
  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map((part, index) => (
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