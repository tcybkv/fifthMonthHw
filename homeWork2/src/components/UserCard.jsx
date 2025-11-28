import { Card } from 'antd';

export function UserCard({ name, img, age, city, active }) {
    if (active === true)
    return (
        <div>
            <Card title={name} style={{ width: 300, backgroundColor: '#10141b'}}>
                <img src={img} alt={name}/>
                <p>Age: {age}</p>
                <p>City: {city}</p>
            </Card>
        </div>
    );
}
