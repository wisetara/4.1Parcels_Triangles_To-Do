4.1Parcels_Triangles_To-Do
==========================

Parcels

Create a Parcel class.

You should be able to create a new parcel and specify the dimensions and weight in the arguments.
When you call volume on an instance, it should return the product of the sides.
When you call the cost_to_ship method on your parcel, return a cost based on a formula you make up.
Build a program that lets users calculate shipping costs.

Triangles

Create a Triangle class.
Make a method in Triangle that tells what type of triangle it is.
Build a program that uses this Triangle model to let users enter 3 values for the sides and find out what type of triangle it is.

To do

Follow along the example of creating a To Do list program.
Extend it so that a user can mark a task as done and have it removed from their list.
Allow users to have multiple lists. You should have two models now: Task and List; each should go in it's own file. List should have an instance variable called tasks whose value is an array containing all of the tasks in that list. You'll need to make a method to add a task to a list that takes a task as an argument. For example:

new_list = List.new("Chores")
task_to_add = Task.new("Scrub the zebra")
new_list.add_task(task_to_add)
new_list.tasks # should return [task_to_add]
If you get this far, add due dates and priority (on a scale of 1-5) for tasks.
Add the ability to sort tasks by name, due date, or priority. This logic should go in the model, not the user interface.
Let users see a list of all the tasks they have marked "done".
Give users the option to edit a task's description.
Finally, add the ability to delete tasks.
Finished? Rewrite your user interface using shoes.rb.
