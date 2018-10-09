//import chai, declare expect variable
const expect = require('chai').expect;

//import fizzbuzzer
const fizzBuzzer = require('../fizzBuzzer.js');

//unit tests for fizzbuzzer function
describe('fizzBuzzer', function(){
    //test normal case
    it('should return fizz-buzz if divisible by 15', function(){
        const normalCases = [15,30,45];

        //for each input (num), 'fizzbuzzer' should
        //produce the expected value

        normalCases.forEach(function(input){
            const answer = fizzBuzzer(input);
            expect(answer).to.equal('fizz-buzz');
        });
    });

    it('should return buzz if divisible by 5', function(){
        const normalCases = [5,10,25];
        normalCases.forEach(function(input){
            const answer = fizzBuzzer(input);
            expect(answer).to.equal('buzz');
        });
    });

    it('should return fizz if divisble by 3', function(){
        const normalCases = [3,6,9];
        normalCases.forEach(function(input){
            const answer = fizzBuzzer(input);
            expect(answer).to.equal('fizz');

        });
    });

    it('should raise error if there is non-numeric input', function(){
        const badInputs = ['a', true, null, undefined];
        badInputs.forEach(function(input){
            expect(function(){
                fizzBuzzer(input);
            }).to.throw(Error);
        })

    })

    it('should return a number if it doesn\'t match a fizz buzz test and is also a number ', function(){
        const normalCases = [7,11,13,17];
        normalCases.forEach(function(input){
            const answer = fizzBuzzer(input);
            expect(answer).to.equal(input);
        })
    })


})