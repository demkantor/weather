import axios from 'axios';

const url = 'https://www.metaweather.com/api';

// send search query to api and return location info
export const fetchData = async (location) => {

    let dynamicURL = url

    if(location) {
        dynamicURL = `${url}/location/search/?query=${location}`
    };
    console.log(dynamicURL);

    try {
        const { data } = await axios.get(dynamicURL);
        console.log(data);
        return { data };

    } catch (error) {
        return console.error('error searching for location', error);
    };
};
