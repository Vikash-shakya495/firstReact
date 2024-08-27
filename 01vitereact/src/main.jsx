import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>My App</h1>
        </div>
        )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'CLick me to visit google'
// }

const AnotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = 'this is new user'

const ReactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank'},
    'Click me to visit google by react custom library',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // <MyApp />
    // MyApp()
    // <ReactElement/> object ko hum aise use nhi kr sakte 
    ReactElement  // iss wale object react syntax nhi samjh 
    // paa rha h isliye convert nhi ho paa rha
    // AnotherElement
    // AnotherElement // yeh wala JSX syntax h isliye convert ho paa rha h

    // <App/>

)
