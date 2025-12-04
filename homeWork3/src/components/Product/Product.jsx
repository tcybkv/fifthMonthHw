import { Card, Button } from 'antd';

export function Product({product, img}) {
    return (
        <div>
            <Card
                hoverable
                style={{ width: 350 }}
            >
                <div className="image" style={{width: 300, height: 200, backgroundImage: `url(${img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}></div>
                <h2>{product.name} {product.id}</h2>
                <Button variant="solid" style={{backgroundColor: "green", color: "white"}} onClick={() => alert(`${product.name} ${product.id}`)}>
                    Buy now!
                </Button>
            </Card>
        </div>
    );
}
