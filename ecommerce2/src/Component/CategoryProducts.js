import Product from "./Product";

function CategoryProducts(props) {
  const { items, title } = props; // Destructure props

  return (
    <>
      <br />
      <h2 id="products" style={{ textAlign: "center", margin: "0 auto" }}>
        {title}
      </h2>
      <br />

      <div className="container">
        <di className="card-container">
          {items.map(
            (
              item // Use the destructured items
            ) => (
              <Product
                key={item.id}
                product={item}
                ShowDetailsButton={true}
                Price={false}
              />
            )
          )}
        </di>
      </div>
    </>
  );
}

export default CategoryProducts;
