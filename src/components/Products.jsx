import useFetch from "../hooks/useFetch";
import "./Products.css";

function Products() {
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://api.escuelajs.co/api/v1/products");

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading products...</p>;
  }

  if (error) {
    return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;
  }

  return (
    <div className="products-container">
      <h2 className="title">Photos</h2>

      <div className="grid">
        {products.slice(0, 12).map((product) => (
          <div className="card" key={product.id}>
            <img
              src={product.images[0]}
              alt={product.title}
            />
            <p className="card-title">{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
