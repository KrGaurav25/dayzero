import Clothing from './cdata'
import ProductDetails from './edata'
import ClothingProducts from "./clothingProduct"
import ElectronicProducts from './ElectronicProduct'

function App(){
    return(
        <div>
        <ClothingProducts data={Clothing} storename="Clothing Store"></ClothingProducts>
        <ElectronicProducts data={ProductDetails} storename='Electronic Store'></ElectronicProducts>
        </div>
    )
}
export default App