import { AutoComplete } from "../components/AutoComplete";
import { StockList } from "../components/StockList";

export const StockOverviewPage=()=>{
    return(
        <div>
                <h4 style={{textAlign:"center", marginTop:"20px"}}>Trading King</h4>
                <AutoComplete/>
                <StockList/>
        </div>
    )
}