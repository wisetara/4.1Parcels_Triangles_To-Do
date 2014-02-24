describe('Contact', function() {
  describe('fullName', function() {
    it('combines the first and last name, separated by a space', function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "Constance";
      testContact.lastName = "Quackenbush";
      testContact.fullName().should.equal("Constance Quackenbush");
    });
  });
});

