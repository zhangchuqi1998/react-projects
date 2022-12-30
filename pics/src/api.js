import axios from "axios";

const searchImages = async (term) => {
    const resposnse = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID Lcsco6pI4W428AdMBSiGkZlB39_hAqCl1CABlnuqvCw' 
        },
        params: {
            query: term,
        }
    });
    return resposnse.data.results;
};

export default searchImages;