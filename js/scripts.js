var Cell = {
  initialize: function(Xcoordinate, Ycoordinate) {
    this.Xcoordinate = Xcoordinate;
    this.Ycoordinate = Ycoordinate;
    this.coordinateString = Xcoordinate+","+Ycoordinate;
    this.state = false;
  },

  create: function(Xcoordinate, Ycoordinate) {
    var cell = Object.create(Cell);
    cell.initialize(Xcoordinate, Ycoordinate);
    cell.setNeighbors(Xcoordinate, Ycoordinate);
    return cell;
  },

  setNeighbors: function(X, Y) {
    if (X === 0 && Y === 0) {
      this.neighbors = [[X+1, Y],
                       [X, Y+1], [X+1, Y+1]];
    } else if (X === 0) {
      this.neighbors = [[X, Y-1], [X+1, Y-1], [X+1, Y],
                       [X, Y+1], [X+1, Y+1]];
    } else if (Y === 0) {
      this.neighbors = [[X-1, Y], [X+1, Y],
                      [X-1, Y+1], [X, Y+1], [X+1, Y+1]];
    } else if (Y === 29 && X === 29) {
       this.neighbors = [[X, Y-1],
                       [X-1, Y], [X-1, Y-1]];
    } else if (X === 29) {
      this.neighbors = [[X-1, Y-1], [X, Y-1],
                      [X-1, Y],
                      [X-1, Y+1], [X, Y+1]];
    } else if (Y === 29) {
      this.neighbors = [[X-1, Y-1], [X, Y-1], [X+1, Y-1],
                      [X-1, Y], [X+1, Y]]
    }
    else {
      this.neighbors = [[X-1, Y-1], [X, Y-1], [X+1, Y-1],
                      [X-1, Y], [X+1, Y],
                      [X-1, Y+1], [X, Y+1], [X+1, Y+1]];
    }
  },

  findCellState: function(X, Y) {
    var searchResult;
    World.population.forEach(function(currentCell) {
      if (currentCell.coordinateString === X+","+Y) {
        searchResult = currentCell;
      }
    });
    return searchResult.state;
  },

  find: function(X, Y) {
    var searchResult;
    World.population.forEach(function(currentCell) {
      if (currentCell.coordinateString === X+","+Y) {
        searchResult = currentCell;
      }
    });
    return searchResult;
  },

  liveNeighbors: function() {
    var counter = 0;
    for (var i = 0; i < this.neighbors.length; i++) {
      console.log("i = "+i+"neighbors"+this.neighbors);
      if (Cell.findCellState(this.neighbors[i][0], this.neighbors[i][1]) === undefined) {
        i++;
      } else if (Cell.findCellState(this.neighbors[i][0], this.neighbors[i][1])) {
        counter += 1;
      }
    }
    return counter;
  },

  setFutureState: function() {
    var numAlive = this.liveNeighbors();
    if (numAlive < 2) {
      this.futureState = false;
    } else if (numAlive === 2 || numAlive === 3) {
      this.futureState = true;
    } else if (numAlive > 3) {
      this.futureState = false;
    } else if (this.state === false && numAlive === 3) {
      this.futureState = true;
    } else {
      this.futureState = this.state;
    }
  },

  toggleState: function() {
    this.state = !this.state;
  },

  makeDeadorAlive: function() {
    this.state = this.futureState;
  }

}

var World = {
  population: [],
  populate: function(size) {
    for(var i = 0; i < size; i++) {
      for(var j = 0; j < size; j++) {
        World.population.push(Cell.create(i,j))
      }
    }
  }
  // iterate: function() {
  //   World.population.forEach(function(currentCell) {
  //     currentCell.setFutureState();
  //     currentCell.makeDeadorAlive();
  //   });
  //}
}


$(document).ready(function() {
  World.populate(30);
  console.log(World.population[0]);

  for(var i = 0; i < 30; i++) {
    $("table#world-table").append("<tr></tr>")
    for(var j = 0; j < 30; j++) {
      $("tr").last().append("<td id ='"+i+","+j+"' class = 'white'></td>")
    }
  }

  $('table#world-table td').click(function() {
    Cell.find($(this).parent().index(), $(this).index()).toggleState();
    $(this).toggleClass("black white");
  });

  $('button#run-button').click(function() {
    World.population.forEach(function(cell) {
      cell.setFutureState();
      cell.makeDeadorAlive();
    });
    // World.iterate();
    //setInterval(World.iterate(), 500);
  });



  


});
