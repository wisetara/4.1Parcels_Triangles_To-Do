require './lib/parcels'

def main_menu
  puts "Welcome to Cheap Cheap Shipping."
  puts "Press n to ship new package or x to exit"
  main_choice = gets.chomp
  if main_choice == 'n'
    add_parcel
  elsif main_choice == 'x'
    puts "Good-bye \n\n"
  else
    puts "Sorry, that wasn't a valid option."
    puts "\n"
    main_menu
  end
end

def add_parcel
 puts "Enter the width:"
 width = gets.chomp.to_i
 puts "Enter the height:"
 height = gets.chomp.to_i
 puts "Enter the depth:"
 depth = gets.chomp.to_i
 puts "Enter the weight:"
 weight = gets.chomp.to_i
 new_Parcel = Parcel.new(width,height,depth,weight)

 puts "\n"
 puts "Cost to ship:"
 puts new_Parcel.cost_to_ship
 puts "\n"
end

main_menu

