import axios from 'axios';

const searchImages= async (term)=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID csb7xLZ62al_NfbNtB1SgMHZYqH-oHNSpx0Xz2rU_wY'
        },
        params:{
            query:term,
        },
    });
    // console.log(response)

    return response.data.results;
} 
export default searchImages;