
const ProductCard = ({products}) => {
  return (
      <div>
      {products.length === 0 ? (
        <p>Loading or no products found...</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded p-4 shadow transition bg-gray-light/50" >
              <img
                 src={product.images[0]}
                alt={product.title}
                className="w-full h-48 object-contain mb-2"
              />
              <h3 className="text-md font-light">{product.title}</h3>
              <div className="space-y-2"> 
              <p className="text-orange-400 text-sm"><i className="fa-solid fa-star mr-1"></i><span>{product.rating}</span></p>
              <p className="text-xl font-thin">
              ${product.price || "No Price"}
              </p>
              <p className="text-xs font-medium">Ships to Pakistan</p>
              <button className="bg-yellow-light font-medium text-xs px-4 py-2 rounded-2xl hover:cursor-pointer hover:bg-yellow-400">Add to Cart</button>
            </div>
            </div>
          ))}
        </div>
      )}
      </div>
  )
}

export default ProductCard
