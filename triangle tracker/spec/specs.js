describe('Triangle', function() {
  describe('isValid', function() {
    it("checks to see if three entered lengths are a triangle.", function() {
      var testValid = Object.create(Triangle);
      testValid.side1 = 1;
      testValid.side2 = 2;
      testValid.side3 = 5;
      testValid.isValid().should.equal(false);
    });
  });
  describe('type', function() {
    it("checks user input to see if all three sides are equal.", function() {
      var testEquilateral = Object.create(Triangle);
      testEquilateral.side1 = 4;
      testEquilateral.side2 = 4;
      testEquilateral.side3 = 4;
      testEquilateral.type().should.equal("Equilateral");
    });
  
    it("checks input to see if two of three sides are the same length.", function() {
      var testIsosceles = Object.create(Triangle);
      testIsosceles.side1 = 5;
      testIsosceles.side2 = 5;
      testIsosceles.side3 = 4;
      testIsosceles.type().should.equal("Isosceles");
    });

    it("checks input to see if no sides are the same.", function() {
      var testScalene = Object.create(Triangle);
      testScalene.side1 = 10;
      testScalene.side2 = 12;
      testScalene.side3 = 14;
      testScalene.type().should.equal("Scalene");
    });  
  
  });
});

