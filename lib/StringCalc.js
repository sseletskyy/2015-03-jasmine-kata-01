(function () {
    var StringCalc = function () {
    }

    StringCalc.prototype.add = function (input) {
        input = input.replace(/\n/g,",");

        if (input.indexOf(",,") != -1) throw new Error("Invalid argument");

        var strings = input.split(",");
        var sum = 0;
        for (var i = 0; strings.length > i; i++) {
            sum += +strings[i];
        }
        return sum;
    }

    module.exports = StringCalc;

}).call(this);