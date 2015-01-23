module.exports = {
    start : function () {
        return process.hrtime();
    },
    end : function (start) {
        var diff = process.hrtime(start);
        var ns = (diff[0] * 1e9 + diff[1]);
        var ms = ns / 1e6;
        return {
            ns : ns,
            ms : Math.round(ms)
        };
    }
};
