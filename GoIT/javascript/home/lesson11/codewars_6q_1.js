var typer = (function() {
    return {
        isUndefined: function (x) { return typeof x == "undefined" },
        isFunction:  function (x) { return typeof x == "function" },
        isNumber:    function (x) { return typeof x != "undefined" && typeof x.valueOf() == "number" && !isNaN(x.valueOf()) },
        isString:    function (x) { return typeof x != "undefined" && typeof x.valueOf() == "string" },
        isBoolean:   function (x) { return typeof x != "undefined" && typeof x.valueOf() == "boolean" },
        isArray:     function (x) { return x instanceof Array },
        isDate:      function (x) { return x instanceof Date },
        isRegExp:    function (x) { return x instanceof RegExp },
        isError:     function (x) { return x instanceof Error },
        isNull:      function (x) { return x === null }
    };
}());