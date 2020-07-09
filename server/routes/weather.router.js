
const express = require('express');
const router = express.Router();
const axios = require('axios');

const url = 'https://www.metaweather.com/api';

// send search query to api and return location info
router.get('/search/:search', async (req,res)=>{

    let dynamicURL = url
    const location = req.params.search

    dynamicURL = `${url}/location/search/?query=${location}`
    console.log(dynamicURL)

    try {
        const search = await axios.get(dynamicURL);
        console.log(search.data);
        return res.status(200).json({
            success: true,
            data: search.data
        });

    } catch (error) {
        console.error('error searching for location', error);
        return res.status(500).json({ error: 'Server error searching for location, please try again...' });
    };
});

// send location woeid to api and returns forecast
router.get('/:id', async (req,res)=>{

    let dynamicURL = url
    const location = req.params.id

    dynamicURL = `${url}/location/${location}`
    console.log(dynamicURL)

    try {
        const search = await axios.get(dynamicURL);
        console.log(search.data);
        return res.status(200).json({
            success: true,
            data: search.data
        });

    } catch (error) {
        console.error(`error fetching forecast for ${location}`, error);
        return res.status(500).json({ error: `Server error fetching forecast for ${location}, please try again...` });
    };
});


module.exports = router;
