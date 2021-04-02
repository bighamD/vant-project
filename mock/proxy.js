const glob = require('glob');

const path = require('path');


module.exports = function(req, res, proxyOptions) {
    const ret = watch(req, res, proxyOptions)
    // console.log(ret, 'return value')
    return ret
}

function watch(req, res, proxyOptions) {
    const urls = getAllApis();
    // console.log(urls, 'urlssss')
    let reqUrl = req.url.replace(/\?[\w\W]*/g, '');
    console.log(reqUrl, urls.some(url => reqUrl === url))
    if (urls.some(url => reqUrl === url)) return false;
}

 function getAllApis() {
    const apiDirs = genApiDirs('./mock/data/*.js');
    return apiDirs.map(dir => {
        const absPath = path.join(__dirname, '..', dir);
        let apiCfg;
        try {
            apiCfg = require(absPath);
            apiCfg = apiCfg.filter(api => api.enabled)
        } catch (error) {
            apiCfg = [];
        }
        return apiCfg.map(api => api.url);
    }).flat(Infinity);
}

function genApiDirs (pattern) {
    return glob.sync(pattern);
}