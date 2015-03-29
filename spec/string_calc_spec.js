describe("StringCalc", function () {
    var StringCalc = require('../lib/StringCalc');
    var stringCalc;

    beforeEach(function () {
        stringCalc = new StringCalc();
    });

    describe("when input is empty string", function () {
        it("should return 0", function () {
            expect(stringCalc.add("")).toEqual(0);
        });
    });

    describe("when input is a string '2'", function () {
        it("should return 2", function () {
            expect(stringCalc.add("2")).toEqual(2);
        });
    });

    describe("when input is a string '2,3'", function () {
        it("should return 6", function () {
            expect(stringCalc.add("2,3")).toEqual(5);
        });
    });

    describe("when input is a string '1,2,3'", function () {
        it("should return 6", function () {
            expect(stringCalc.add("1,2,3")).toEqual(6);
        });
    });

    describe("when input is a string '1\\n2,3'", function () {
        it("should return 6", function () {
            expect(stringCalc.add("1\n2,3")).toEqual(6);
        });
    });

    describe("when input contains several '\\n'", function () {
        it("should correct result", function () {
            expect(stringCalc.add("1\n2,3\n4")).toEqual(10);
        });
    });

    describe("when input is invalid '1,\n' (contains two delimiters at once)", function () {
        it("should raise exception", function () {
            expect(function(){stringCalc.add("1,\n2,3")}).toThrow(new Error("Invalid argument"));
        });
    });


});