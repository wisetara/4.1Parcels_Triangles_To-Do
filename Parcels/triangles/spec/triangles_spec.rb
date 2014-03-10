require 'rspec'
require 'triangles'

describe Triangle do
  it "is initialized with three sides" do
    test_triangle = Triangle.new(5,10,20)
    test_triangle.should be_an_instance_of Triangle
  end
  it "recognizes an equilateral triangle" do
    test_triangle = Triangle.new(5,5,5)
    test_triangle.type.should eq "That's an Equilateral triangle -- boo-yeah!"
  end
  it "recognizes an Isosceles triangle" do
    test_triangle = Triangle.new(2,5,5)
    test_triangle.type.should eq "That's an Isosceles Triangle -- Yeah!!!"
  end
  it "recognizes a Scalene triangle" do
    test_triangle = Triangle.new(8,6,13)
    test_triangle.type.should eq "That's a Scalene triangle -- OH, YEAH!"
  end
  it "recognizes if a triangle is valid or not" do
    test_triangle = Triangle.new(4,8,15)
    test_triangle.is_valid.should eq false
  end
end
