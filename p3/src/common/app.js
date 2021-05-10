export const axios = require('axios').create({
    baseURL: process.env.VUE_APP_API_URL ?? 'http://e28api.katemolchanova.loc',
    responseType: 'json'
})
