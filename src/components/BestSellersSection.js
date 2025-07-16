import { BEST_SELLER_URL } from "../utils/constants"
import { BEST_SELLERS } from "../data"

const BestSellersSection = () => {
  return (
    <div className="w-full space-y-5 ">
      <div className="flex flex-col gap-8"> 
      {Object.values(BEST_SELLERS).map((category, index) => (
        <div className="bg-white p-6" key={index}>
          <h1 className="font-bold text-xl mb-6">{category.title}</h1>
          <div className="overflow-x-scroll flex gap-6">
            { category.id.map((id,i) => (
              <img className="w-72 h-45" key={i} src={BEST_SELLER_URL(id)}/>
            ))
            }
           </div>
         </div>
       
      ))}
      </div>
    </div>
  )
}

export default BestSellersSection
