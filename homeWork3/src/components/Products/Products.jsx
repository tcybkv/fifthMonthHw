import data from "../../db/data.json"
import {Product} from "../Product/Product.jsx";
import cls from "./products.module.css"

export function Products() {
    const {products, images} = data

    const pool = [...images]

    const randomPhoto = () => {
        const index = Math.floor(Math.random() * pool.length)
        const photo = pool[index]
        pool.splice(index, 1)
        return photo
    }
    return (
        <div>
            <div className={cls.products}>
                {products?.map((product) => (
                    <Product product={product} img={randomPhoto()} key={product.id} />
                ))}
            </div>
        </div>
    );
}

