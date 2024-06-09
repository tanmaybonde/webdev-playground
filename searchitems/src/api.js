import axios from 'axios';

const searchImages= async ()=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID xQj5nEgox26MqrdOkQi-y7yCsbNJzQNQdURDTsdi57E'
        },
        params:{
            query:'cars',
        },
    });
    console.log(response)

    return response;
} 
export default searchImages;