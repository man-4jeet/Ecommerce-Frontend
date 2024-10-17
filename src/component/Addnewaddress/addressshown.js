export const Shownaddr=({address})=>{
    return (<><div className=" flex flex-col">
        <div className="flex">
    <p>Name- {address.name} {address.lastname}</p>
    </div>
    <p>Addresss- {address.address}</p> 
    <div className="flex"> <p>Distric- {address.distric} </p>  &nbsp; &nbsp; <p>Pincode- ({address.pincode})</p> </div>
    </div>
    </>)
}