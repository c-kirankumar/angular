var utils = angular.module('utils', []);

utils.value('momentApi', window.moment);

utils.filter('trimText', function (defaultTrimLength) {
    return function (data, length) {
        length = length || defaultTrimLength;
        return data.length > length ? data.substr(0, length) + '...' : data;
    }
});
utils.filter('toMoment', function (momentApi) {
    return function (data) {
        return momentApi(data).fromNow();
    }
});

utils.filter("closedCount", function ($filter) {
    var builtInFilter = $filter('filter');
    return function (bugs) {

        return builtInFilter(bugs, { isClosed: true }).length;
    }
});
//bugTrackerApp.filter("closedCount", function () {

//    return function (bugs) {
//        return bugs.reduce(function (total, bug) {
//            return bug.isClosed ? ++total : total;
//        }, 0);
//    }
//});
