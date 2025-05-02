
// Muestra el nombre del curso
const Header = ({ name }) => <h1>{name}</h1>;

// Muestra una parte individual
const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

// Muestra todas las partes del curso
const Content = ({ parts }) => (
  <div>
    {parts.map(part => (
      <Part key={part.id} part={part} />
    ))}
  </div>
);

// Muestra el curso completo, incluyendo el total de ejercicios
const Course = ({ course }) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0); // Paso 2.3

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <p><strong>Total de ejercicios: {total}</strong></p> {/* Paso 2.2 */}
    </div>
  );
};

export default Course;
