'use strict';

const phimmoi = require('./lib/phimmoi');
const bilutv = require('./lib/bilutv');
const phimbathu = require('./lib/phimbathu');
const banhtv = require('./lib/banhtv');

exports.search = (query) => {
    return Promise.all([
//        phimmoi.search(query),
        bilutv.search(query),
//        phimbathu.search(query),
        banhtv.search(query)
    ]).then(result => {
//        return result;
        return result.reduce((acc, cur) => acc.concat(cur), []);
    });
};

exports.findMedias = ({provider, url}) => {
    console.log('==='+provider);
    if (provider === 'PM') {
        return phimmoi.findMedias(url);
    }

    if (provider === 'BL') {
        return bilutv.findMedias(url);
    }

    if (provider === 'PBH') {
        return phimbathu.findMedias(url);
    }

    if (provider === 'BAH') {
        return banhtv.findMedias(url);
    }

    return Promise.resolve([]);
};
