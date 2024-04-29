import axios from 'axios'

const TOKEN="conkr0hr01qtbee0fbagconkr0hr01qtbee0fbb0"
export default axios.create({
    baseURL:"https://finnhub.io/api/v1",
    params:{
        token:TOKEN
    }
})