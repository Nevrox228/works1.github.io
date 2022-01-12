/*=============HELPER================*/
var Helper = (function () {
    var data = [];

    var months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    function setDays(d) {
        if ((d.constructor !== Array) || d.length !== 7)
            return false;

        days = d;
    }

    function setMonths(m) {
        if ((m.constructor !== Array) || m.length !== 12)
            return false;

        months = m;
    }

    function getDate() {
        var now = new Date();
        var month = typeof (months[now.getMonth()]) == 'undefined' ? now.getMonth() : months[now.getMonth()];
        return (now.getDate()) + " " + month + " " + now.getFullYear();
    }

    function getMonth() {
        var now = new Date();
        var month = typeof (months[now.getMonth()]) == 'undefined' ? now.getMonth() : months[now.getMonth()];
        return month;
    }

    function getDay() {
        var now = new Date();
        var day = typeof (days[now.getDay()]) == 'undefined' ? now.getDay() : days[now.getDay()];
        return day;
    }

    function getDayOfMonth() {
        var now = new Date();
        var day = ('0' + now.getDate()).slice(-2);
        return day;
    }

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    function findAncestor(element, name) {
        while ((element = element.parentElement) && !element.classList.contains(name)) ;
        return element;
    }

    function bindOnQuery(query, callback, action = 'click') {
        var elements = document.querySelectorAll(query);
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener(action, callback, false);
        }
    }

    function bindOnId(name, callback, action = 'click') {
        var element = document.getElementById(name);
        element.addEventListener(action, callback, false);
    }

    function replaceMarkers(text, markers) {
        for (key in markers) {
            var search = '%' + key + '%';
            text = text.replace(new RegExp(search, 'g'), markers[key]);
        }

        return text;
    }

    return {
        setDays: setDays,
        setMonths: setMonths,
        getDate: getDate,
        getDay: getDay,
        getMonth: getMonth,
        getDayOfMonth: getDayOfMonth,
        getUrlParameter: getUrlParameter,
        findAncestor: findAncestor,
        bindOnQuery: bindOnQuery,
        bindOnId: bindOnId,
        replaceMarkers: replaceMarkers
    };

})();

window.onbeforeunload = CommonPwa.onUnloadPage;