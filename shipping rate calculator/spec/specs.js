describe('Package', function() {
  describe("isDomestic", function() {
    it('checks to see if a package is sending from and to locations in the USA', function() {
      var testPackage = Object.create(Package);
      testPackage.location = "USA";
      testPackage.isDomestic().should.equal(true);
    });
  });

  describe("calcDistance", function() {
    it('takes the to and from locations and calculates the distance between them', function() {
      var testPackage = Object.create(Package);
      testPackage.zoneFrom = 1;
      testPackage.zoneTo = 3;
      testPackage.calcDistance(1,3).should.equal(2);
    });
  });

});


