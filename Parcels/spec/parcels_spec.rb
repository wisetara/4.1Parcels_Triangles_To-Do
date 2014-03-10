require 'rspec'
require 'parcels'

describe Parcel do
  it 'it initialized with dimensions' do
    test_parcel = Parcel.new(5,12,3,3)
    test_parcel.should be_an_instance_of Parcel
  end
  it "lets you retrieve a volume" do
    test_parcel = Parcel.new(5,12,3,3)
    test_parcel.volume.should eq 180
  end
  it 'returns a cost based on our formula' do
    test_parcel = Parcel.new(5,12,3,3)
    test_parcel.cost_to_ship.should eq 6.0
  end
end
