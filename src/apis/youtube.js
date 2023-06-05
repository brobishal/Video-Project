import axios from 'axios';  
// AIzaSyDdD68cntRjXcsnjSAP3X7430jP3tHOKoo
const KEY = 'AIzaSyC6nbFg2LUviD6SFf0UcLwXrTb-BU0AEFY';

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    // options objects called params
    // it contains all the different query string parameters
    // that we have added on request
    //  
    params:{
        part:'snippet',
        maxResults:5 , 
        key:KEY, 
    }

});

