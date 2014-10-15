var expect = require('expect.js')
	, codes = require('../lib/intl-dialling-codes')

describe( 'intl-dialling-codes', function () {    

	describe( 'isValid()', function() {

		it( 'should be a function', function () {
	    expect( codes.isValid ).to.be.a( 'function' );
	  } );

	  it( 'should return a boolean', function() {
	  	expect( codes.isValid( '1' ) ).to.be.a.boolean;
	  } );

	  it( 'should determine 1 to be valid', function() {
	  	expect( codes.isValid( '1' ) ).to.be.true;
	  } );

	  it( 'should determine 1234 to be invalid', function() {
	  	expect( codes.isValid( '1234' ) ).to.be.false;
	  } );

	} );

	describe( 'getCountries()', function() {

		it( 'should be a function', function () {
	    expect( codes.getCountries ).to.be.a( 'function' );
	  } );

	  it( 'should return an array', function() {
	  	expect( codes.getCountries( '1' ) ).to.be.an.array;
	  } );

	  it( 'should identify the US (+1)', function() {	  	
	  	expect( codes.getCountries( '1' ) ).to.contain( 'US' )
	  } );

	} );

	describe( 'getCodes()', function() {

		it( 'should be a function', function () {
	    expect( codes.getCodes ).to.be.a( 'function' );
	  } );

	  it( 'should return an array', function() {
	  	expect( codes.getCodes( 'US' ) ).to.be.an.array;
	  } );

	  it( 'should include 1 for the US', function() {
	  	expect( codes.getCodes( 'US' ) ).to.contain( '1' )
	  } );

	} );

} );