import { useFilter } from "../../context/filter.context";

export const Sidebar = () => {
const {setfilter,discount,sortbyprice}=useFilter();
    return (
  <div className=" w-52 h-screen bg-slate-50 drop-shadow-lg border-r fixed z-10 pl-4 pt-2 text-xl gap-6 flex flex-col">
    <div className="flex justify-between">
      <span className="font-bold" >Filter</span>
      <span><button className="underline font-bold" onClick={()=>setfilter({type :'clear'})}>Clear</button></span>
    </div>
    <div>
      <p className="font-bold" >Sort by price</p>
      <div>
        <label>
          <input checked={sortbyprice === 'lth'} type="radio" name="price" onChange={()=>setfilter({type :'lth'})}></input>
          <span className="text-sm">Low to high</span>
        </label>
      </div>
      <div>
        <label>
          <input checked={sortbyprice === 'htl'} type="radio" name="price" onChange={()=>setfilter({type :'htl'})}></input>
          <span className="text-sm">High to Low</span>
        </label>
      </div>
    </div>
    <div>
      <p className="font-bold">Sort by discount</p>
      <div>
        <label>
          <input checked={discount === '15'} type="radio" name="discount" onChange={()=>setfilter({type :'15'})}></input>
          <span className="text-sm">Discount greater than 15 %</span>
        </label>
      </div>
      <div>
        <label>
          <input className="text-sm" checked={discount === '10'} type="radio" name="discount" onChange={()=>setfilter({type :'10'})}></input>
          <span className="text-sm">Discount greater than 10 %</span>
        </label>
      </div>
      <div>
        <label>
          <input checked={discount === '5'} type="radio" name="discount" onChange={()=>setfilter({type :'5'})}></input>
          <span className="text-sm">Discount greater than 5 %</span>
        </label>
      </div>
    </div>
  </div>);
};
