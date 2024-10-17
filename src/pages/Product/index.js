import { Product } from "../../component/Product";
import { Header } from "../../component/Header";
import { useCard } from "../../context/card.context";
 export const Productpage =()=>{
    const {product}=useCard();
    return (<div>
        <Header></Header>
        <main className="mt-16">
            <Product product={product}></Product>

        </main>
    </div>)
}
