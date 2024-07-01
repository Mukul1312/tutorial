import "./App.css";
import { default as Header } from "./components/header/Component";
import data from "../data.json";
import { default as ProductCard } from "./components/productCard/Component";

function App() {
  return (
    <>
      <Header />
      <section className="mt-20 ">
        <h1 className="text-4xl font-sans font-bold">Product of The Day</h1>
        <div className="grid grid-cols-3 gap-20 mt-20">
          {data.map((product) => (
            <ProductCard
              width={350}
              image1={product.image}
              text1={product.product}
              text2={product.price}
              text3="Add to Cart"
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
