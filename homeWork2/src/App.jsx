import {UserCard} from "./components/UserCard.jsx";

function App() {
    const users = [
        {
            name: "John",
            age: 35,
            city: "New York",
            active: true,
            img: '../public/john.jpg',
        },
        {
            name: "Natasha",
            age: 41,
            city: "Moscow",
            active: false,
            img: '../public/natasha.jpg',
        },
        {
            name: "Alice",
            age: 15,
            city: "California",
            active: true,
            img: '../public/alice.webp'
        },
        {
            name: "Mike",
            age: 57,
            city: "Chicago",
            active: true,
            img: '../public/mike.jpg'
        },
        {
            name: "Bob",
            age: 45,
            city: "Colorado",
            active: false,
            img: '../public/bob.jpg'
        },
    ]
    return (
        <div className="container">
            {
                users.map((user) => <UserCard name={user.name} img={user.img} age={user.age} city={user.city} active={user.active} />)
            }
        </div>
    )
}

export default App
