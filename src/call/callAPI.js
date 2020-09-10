import axios from 'axios'
import * as link from './../constant/config';
export default function callAPI(endpoint,medthod,body){
    return(
    axios({
        method :medthod,
        url :`${link.Call_API}/${endpoint}`,
        data:body,
    }).catch(err=>{
        console.log(err);
    }));

}
// export default callAPI;