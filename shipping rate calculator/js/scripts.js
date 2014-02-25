var Package = {
  isDomestic: function() {
    if (this.location === "USA") {
      return true;
    } else {
      return false;
    }
  }
  calcDistance: function() {
    if(zoneFrom > zoneTo) {
      zoneFrom - zoneTo;
    } else {
      zoneTo - zoneFrom;
    }
  }

};
