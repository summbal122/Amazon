
const ProductCard = ({products}) => {
  return (
      <div>
      {products.length === 0 ? (
        <p>Loading or no products found...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded p-3 shadow hover:shadow-lg transition"
            >
              <img
                 src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-contain mb-2"
              />
              <h3 className="text-sm font-semibold">{product.title}</h3>
              <p className="text-yellow-600 text-sm">⭐ {product.rating}</p>
              <p className="text-green-600 font-bold">
                {product.price || "No Price"}
              </p>
            </div>
          ))}
        </div>
      )}
      </div>
  )
}

export default ProductCard
