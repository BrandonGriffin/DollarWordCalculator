describe("WordCalculator Tests", function(){
	var wordCalculator;

	beforeEach(module("myApp"));

	beforeEach(inject(function($injector){
		wordCalculator = $injector.get("wordCalculator");
	}));

	it("calculate a should return $.01", function(){
	    var expected = "$.01";
	    var actual = wordCalculator.calculate("a");
		expect(actual).toBe(expected);
	});

	it('calculate z should return $.26', function(){
	    var expected = "$.26";
	    var actual = wordCalculator.calculate("z");
		expect(actual).toBe(expected);
	});
	
	it('calculate ; should return error', function(){
	    var expected = "ERROR";
	    var actual = wordCalculator.calculate(";");
		expect(actual).toBe(expected);
	});

	it('$1.00 makes the wordColor #88C53F', function () {
	    var expected = "#88C53F";
	    var actual = wordCalculator.colorValue("$1.00");
	    expect(actual).toBe(expected);
	});

});