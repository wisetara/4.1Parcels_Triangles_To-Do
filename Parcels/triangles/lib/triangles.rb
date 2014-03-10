class Triangle
  def initialize(side1,side2,side3)
    @side1 = side1
    @side2 = side2
    @side3 = side3
  end

  def is_valid
    if (@side1 < @side2 + @side3) &&
       (@side2 < @side1 + @side3) &&
       (@side3 < @side1 + @side2)
       true
     else
       false
    end
  end

  def type
    if @side1 == @side2 && @side2 == @side3
      result = "That's an Equilateral triangle -- boo-yeah!"
    elsif (@side1 == @side2 || @side1 == @side3) || (@side2 == @side3)
      result = "That's an Isosceles Triangle -- Yeah!!!"
    elsif (@side1 != @side2 && @side1 != @side3) && (@side2 != @side3)
      result = "That's a Scalene triangle -- OH, YEAH!"
    end
  end
end

