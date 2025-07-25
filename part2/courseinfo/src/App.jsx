import Course from './components/Course.jsx'

const App = () => {
    const course = [
        {
            id: 1,
            name: 'Half Stack application development',
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    // exercise 2.2
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            id: 2,
            name: 'Node.js',
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        },
    ]

    return (
        <div>
            {course.map(course =>
                <Course key={course.id} course={course} />
            )}
        </div>
    )
}

export default App
