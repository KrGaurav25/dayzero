import './body.css'
import Data from './objdata'
function BodyPart(){
    return(
       <div className='Body'>
        {
            Data.map((ob)=>{
                return(
                    <div className='Container'>
                        <div className='Image'>
                            <img src={`${ob.Image}`} alt="image"/>
                        </div>
                        <div className='Details'>
                            <div className='Title'>{ob.Title}</div>
                            <div className='Price'>{ob.price}</div>
                            <div className='Quant'>{ob.Quant}</div>
                        </div>
                    </div>
                )
            })
        }
       </div>
    )
}
export default BodyPart