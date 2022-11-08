import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const product_list = [
  {
    id: "p1",
    price: 6,
    title: "Do Epic Shit",
    description: "A book by Ankur Warikoo!",
  },
  {
    id: "p2",
    price: 14,
    title: "Atomic Habits",
    description: "A book about small habits!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {product_list.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
