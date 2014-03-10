require './lib/triangles'

def main_menu
  puts "Welcome to Triangular!"
  puts "Press n to test a new triangle or x to exit"
  main_choice = gets.chomp
  if main_choice == 'n'
    add_triangle
  elsif main_choice == 'x'
    puts "See ya'! \n\n"
  else
    puts "What the heck are you doing?"
    puts "\n"
    main_menu
  end
end

def add_triangle
  puts "Enter Side 1 of your Triangle:"
  side1 = gets.chomp.to_i
  puts "Enter Side 2 of your Triangle:"
  side2 = gets.chomp.to_i
  puts "Enter Side 3 of your Triangle:"
  side3 = gets.chomp.to_i

  new_triangle = Triangle.new(side1,side2,side3)

    if new_triangle.is_valid == true
      puts new_triangle.type
      puts "\n"
    else
      puts "That's not a real triangle"
      puts "\n"
      main_menu
    end
end
  main_menu
