var Triangle = {
  isValid: function() {
    var result = "";
      if (
        (this.side1 >= this.side2 + this.side3) || 
        (this.side2 >= this.side1 + this.side3) ||
        (this.side3 >= this.side1 + this.side2)
        ) {
        return false;
      } else {
        return true;
      }
    },
  type: function() {
      if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
        return "Equilateral";
      } else if ((this.side1 === this.side2) || (this.side1 === this.side3)) { 
        return "Isosceles";
      } else {
        return "Scalene";
      }
    }
};

$(document).ready(function() {
  $("form#new-triangle").submit(function(event) {
    event.preventDefault();

    var inputtedSide1 = $("input#side1").val();
    var inputtedSide2 = $("input#side2").val();
    var inputtedSide3 = $("input#side3").val();
    var newTriangle = Object.create(Triangle);
    newTriangle.side1 = inputtedSide1;
    newTriangle.side2 = inputtedSide2;
    newTriangle.side3 = inputtedSide3;
    
    $("h2").show();
    if (newTriangle.isValid() === false) {
      console.log('GOT THIS FAR');
      $("#not-triangle").show();
    } else {
      $("#type").show().text(newTriangle.type());
    }
    this.reset();
  });
});
