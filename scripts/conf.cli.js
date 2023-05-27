// starfall-cli config
// https://github.com/cenfun/starfall-cli

module.exports = {

    build: {

        before: (item, Util) => {

            if (item.production) {
                item.devtool = false;
            }

            return 0;
        }
    }

};
