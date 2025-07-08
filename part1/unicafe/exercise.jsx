import { useState } from 'react'

// exercise 1.6
const Header = ({ title }) => <h1>{title}</h1>

// exercise 1.7 / 1.8 / 1.10
const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad
    const average = (good - bad) / total
    const positivePercentage = (good / total) * 100

    if (total === 0) { return <p>No feedback given</p> }

    return (
        // <div>
        //     <StatisticLine text="good" value={good} />
        //     <StatisticLine text="neutral" value={neutral} />
        //     <StatisticLine text="bad" value={bad} />
        //     <StatisticLine text="all" value={total} />
        //     <StatisticLine text="average" value={average} />
        //     <StatisticLine text="positive" value={positivePercentage} />
        // </div>

        // exercise 1.11
        <table>
            <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positivePercentage} />
            </tbody>
        </table>
    )
}

// exercise 1.10
const StatisticLine = ({ text, value }) => (
    <tr>
        <td>{text}</td>
        <td>
            {text === 'positive'? value + ' %' : value}
        </td>
    </tr>
)


// exercise 1.10
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

// exercise 1.6
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <Header title='give feedback'/>

            <Button text='good' handleClick={() => setGood(good + 1)}/>
            <Button text='neutral' handleClick={() => setNeutral(neutral + 1)}/>
            <Button text='bad' handleClick={() => setBad(bad + 1)}/>

            {/*exercise 1.9*/}
            <Header title='statistics'/>

            {/*exercise 1.10*/}
            <Statistics good={good} neutral={neutral} bad={bad}/>

            {/*{total === 0 ? (*/}
            {/*    <p>No feedback given</p>*/}
            {/*) : (*/}
            {/*    <div>*/}
            {/*        <Statistics value={good}/>*/}
            {/*        <Statistics value={neutral}/>*/}
            {/*        <Statistics value={bad}/>*/}
            {/*        <Statistics value={total}/>*/}
            {/*        <Statistics value={(good - bad) / total}/>*/}
            {/*        <Statistics value={(good / total) * 100 + ' %'}/>*/}
            {/*    </div>*/}
            {/*)}*/}
        </div>
    )
}

export default App