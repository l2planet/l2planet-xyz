import axios from "axios"

export const fetchDataTPS = async () => {
    const r = await axios.get("https://api.ethtps.info/API/v2/AllData")
    console.log(r.data);
    console.log("and");
    console.log(typeof r.data);
    
    
}