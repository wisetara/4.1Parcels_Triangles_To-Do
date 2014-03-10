class Parcel
  def initialize(width,height,depth,weight)
    @width = width
    @height = height
    @depth = depth
    @weight = weight
    @volume = @width * @height * @depth
  end

  def volume
    @volume
  end

  def weight
    @weight
  end

    def cost_to_ship
      if @volume <= 200 && @weight <= 5
        total = 6.0
      elsif @volume <= 200 && @weight >= 5
        total = 7.0
      elsif @volume >= 200 && @weight <= 5
        total = 8.0
      else
        total = 10.0
      end
      total
    end
end

new = Parcel.new(5,12,3,3)
puts new.cost_to_ship


