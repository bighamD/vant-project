const path = require('path')
const chokidar = require('chokidar');
const glob = require('glob');
const chalk = require('chalk');

const mockDir = path.join(process.cwd(), 'mock')

const registerRoutes = app => {
    const apiDirs = glob.sync('./mock/data/*.js');
    const allApis = apiDirs.reduce((set, dir) => {
        const absPath = path.join(__dirname, '..', dir);
        let apiCfg;
        try {
            apiCfg = require(absPath);
            apiCfg = apiCfg.filter(api => api.enabled);
        } catch (error) {
            apiCfg = [];
        }
        set.push(...apiCfg);
        return set;
    }, []);
    allApis.forEach(({ url, type, response }) => {
        app[type](url, (req, res) => {
            console.log(`${chalk.magenta(`\n  You are using mock api: ${url}`)}`);
            res.send(response())
        });
    });

    return allApis;
}



function clearModuleCache() {
    Object.keys(require.cache).forEach(i => {
        if (i.includes(mockDir)) {
            delete require.cache[require.resolve(i)]
        }
    })
}

function dropRegistedRoutes(APIS, app) {
    const urls = APIS.map(api => api.url);
    app._router.stack = app._router.stack.reduce((routes, router) => {
        if (urls.includes(router.path)) return routes;
        if (router.route && urls.includes(router.route.path)) return routes;
        return routes.concat(router);
    }, []);
};

module.exports = app => {

    var allApis = registerRoutes(app)

    chokidar.watch(mockDir, {
        ignored: /mock-server/,
        ignoreInitial: true
    }).on('all', (event, path) => {
        if (event === 'change') {
            try {
                dropRegistedRoutes(allApis, app) 
     
                clearModuleCache()

                allApis = registerRoutes(app)

            } catch (error) {
                console.log(error)
            }
        }
    })
}
