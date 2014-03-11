require './lib/to_do'

@list = []

def main_menu
  puts "Press 'a' to add a task,'l' to list all of your tasks, 'd' to mark a task as done"
  puts "Press 'x' to exit."
  main_choice = gets.chomp
  if main_choice == 'a'
    add_task
  elsif main_choice == 'l'
    list_tasks
  elsif main_choice == 'd'
    completed_tasks
  elsif main_choice == 'x'
    puts "Good-bye!"
  else
    puts "Sorry, that wasn't a valid option."
    main_menu
  end
end

def add_task
  puts "Enter a description of the new task:"
  user_description = gets.chomp
  @list << Task.new(user_description)
  puts "Task added.\n\n"
  main_menu
end

def list_tasks
  puts "Here are all of your tasks:"
  @list.each_with_index {|task, index| puts (index + 1), task.description}
  puts "\n"
  main_menu
end

def completed_tasks
  puts "Press the number of the task you want to mark as done:"
  @list.each_with_index {|task, index| puts (index + 1), task.description}
  user_number = gets.chomp


end

main_menu
