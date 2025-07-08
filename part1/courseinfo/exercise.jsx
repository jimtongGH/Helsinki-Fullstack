import React from 'react'

const Header = (props) => {
    // console.log(props)
    return (
        <h1>{props.course.name}</h1>
    )
}

const Part = (props) => {
    console.log(props)
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )
}

const Content = (props) => {
    // console.log(props)
    return (
        <div>
            <Part part={props.part[0].part} exercises={props.part[0].exercises}></Part>
            <Part part={props.part[1].part} exercises={props.part[1].exercises}></Part>
            <Part part={props.part[2].part} exercises={props.part[2].exercises}></Part>
        </div>
    )
}

const Total = (props) => {
    return (
        <p>{props.total}</p>
    )
}

const App = () => {
    // const-definitions
    //const course = 'Half Stack application development'
    // exercise 1.1-1.2
    // const part1 = 'Fundamentals of React'
    // const exercises1 = 10
    // const part2 = 'Using props to pass data'
    // const exercises2 = 7
    // const part3 = 'State of a component'
    // const exercises3 = 14

    // exercise 1.3
    // const part1 = {
    //     name: 'Fundamentals of React',
    //     exercises: 10
    // }
    //
    // const part2 = {
    //     name: 'Using props to pass data',
    //     exercises: 7
    // }
    //
    // const part3 = {
    //     name: 'State of a component',
    //     exercises: 14
    // }

    // exercise 1.4
    // const parts = [
    //     {
    //         part: 'Fundamentals of React',
    //         exercises: 10
    //     },
    //     {
    //         part: 'Using props to pass data',
    //         exercises: 7
    //     },
    //     {
    //         part: 'State of a component',
    //         exercises: 14
    //     }
    // ]

    // exercise 1.5
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                part: 'Fundamentals of React',
                exercises: 10
            },
            {
                part: 'Using props to pass data',
                exercises: 7
            },
            {
                part: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course} />
            <Content part={course.parts} />
            <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
        </div>
    )
}

export default App
