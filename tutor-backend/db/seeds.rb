# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Trainer.destroy_all
Appointment.destroy_all
Post.destroy_all
Comment.destroy_all
Review.destroy_all

user1= User.create(name: "Lala", username: "lala123", email: "lala@gmail.com", password: "123")
user2= User.create(name: "Jon", username: "Jon123", email: "jon@gmail.com", password: "1234")

trainer1= Trainer.create(name: "Evan ", years_experience: 3, flatiron_alum: "yes", price: 30, image: "https://i1.wp.com/sea-technology.com/wp-content/uploads/2018/09/Nadir-Rahmatullah_UTEC.jpg?resize=500%2C667&ssl=1")
trainer0= Trainer.create(name: "Hellen ", years_experience: 3, flatiron_alum: "yes", price: 45, image: "https://jamesgilberdphotography.weebly.com/uploads/1/3/6/5/13650410/emma-not-smiling-35x45_1_orig.jpg")
trainer2= Trainer.create(name: "Michael", years_experience: 5, flatiron_alum: "yes", price: 50, image: "https://pcceagles.com/common/controls/image_handler.aspx?thumb_id=0&image_path=/images/2018/10/8/JosephLiwosz.jpg")
trainer3= Trainer.create(name: "Eva", years_experience: 2, flatiron_alum: "yes", price: 50, image: "https://camerdigitals.com/wp-content/uploads/2015/12/passport-size.jpg")
trainer4= Trainer.create(name: "Marry", years_experience: 3, flatiron_alum: "yes", price: 35, image: "https://i.pinimg.com/originals/8b/c0/b1/8bc0b11ef82d7f875a716dc58550371c.jpg")
trainer5= Trainer.create(name: "Alex", years_experience: 4, flatiron_alum: "yes", price: 30, image: "https://images.squarespace-cdn.com/content/v1/51047986e4b0f96ff4ffc8e0/1492104123103-GZYTFQK9HRLYE0HUDN4Q/ke17ZwdGBToddI8pDm48kJfKvyBGMNkKt0FkDJGTKmtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzlVI-nKukq7aD-HmGzs8xsQNZwRbvRG0p5W9NoJgQtcBPjHlOPGzD4CvBdH8cDzTw/Mens-Accessories-Tie-Bow-pocket-square")
trainer6= Trainer.create(name: "Aaron", years_experience: 5, flatiron_alum: "yes", price: 55, image: "https://images.redframe.com/EFoxphoto/800_35578/Professional%20Headshot%20male%202.jpg")
trainer7= Trainer.create(name: "Sofia", years_experience: 3, flatiron_alum: "yes", price: 45, image: "https://media.istockphoto.com/photos/passport-picture-of-a-smiling-turkish-businesswoman-picture-id856599656?k=6&m=856599656&s=612x612&w=0&h=4Nwo_zZorMKSrrHb-c9DoO7JarfeuKQXXV2U6Ky6N9Q=")
trainer8= Trainer.create(name: "Abel", years_experience: 4, flatiron_alum: "no", price: 50, image: "https://i.pinimg.com/736x/aa/40/8c/aa408c046e40b8c2ce90469b83c2cf27.jpg")
trainer9= Trainer.create(name: "Mike", years_experience: 1, flatiron_alum: "yes", price: 25, image: "https://images.unsplash.com/photo-1563122870-6b0b48a0af09?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80")
trainer11= Trainer.create(name: "Angelina", years_experience: 0, flatiron_alum: "no", price: 20, image: "https://legacy.afrotech.com/wp-content/uploads/2018/12/IMG_0887.png")
trainer12= Trainer.create(name: "Emma", years_experience: 2, flatiron_alum: "no", price: 30, image: "https://i.pinimg.com/originals/9b/92/1f/9b921ff5b4804c32c7095e7c11a13186.jpg")
trainer13= Trainer.create(name: "Isabella", years_experience: 2, flatiron_alum: "no", price: 25, image: "https://www.taraflannery.com/wp-content/uploads/21-8336-post/C-suite-headshots-020(pp_w480_h718).jpg")
trainer13= Trainer.create(name: "Elijah", years_experience: 2, flatiron_alum: "no", price: 25, image: "https://beaubumpas.com/wp-content/uploads/2019/02/5-Ways-Company-Wide-Professional-Headshots-Can-Enhance-Your-Business-1.jpg")
trainer17= Trainer.create(name: "Liam ", years_experience: 4, flatiron_alum: "yes", price: 45, image: "https://www.elitephotographygroup.com/wp-content/uploads/2020/04/ElitePhotographyGroup-Corporate-Studio-Business-Headshot-Photography-black-young-man-facial-hair-suit-tie-19-072-027.jpg")


appt1=Appointment.create(user_id: user1.id, trainer_id: trainer2.id, date: "4/3/2020", time: "10:00")
appt2=Appointment.create(user_id: user1.id, trainer_id: trainer3.id, date: "3/3/2020", time: "11:00")
appt3=Appointment.create(user_id: user1.id, trainer_id: trainer4.id, date: "23/3/2020", time: "9:00")
appt4=Appointment.create(user_id: user2.id, trainer_id: trainer2.id, date: "13/3/2020", time: "1:00")
appt5=Appointment.create(user_id: user2.id, trainer_id: trainer3.id, date: "14/3/2020", time: "2:00")
appt6=Appointment.create(user_id: user2.id, trainer_id: trainer4.id, date: "11/4/2020", time: "10:00")

rev1=Review.create(user_id: user1.id, trainer_id: trainer2.id, comment: "Very details explanantion")
rev1=Review.create(user_id: user2.id, trainer_id: trainer3.id, comment: "Very details explanantion")
rev1=Review.create(user_id: user2.id, trainer_id: trainer3.id, comment: "Very details explanantion")
rev1=Review.create(user_id: user1.id, trainer_id: trainer4.id, comment: "Very details explanantion")
rev1=Review.create(user_id: user2.id, trainer_id: trainer4.id, comment: "Very details explanantion")
rev1=Review.create(user_id: user2.id, trainer_id: trainer5.id, comment: "Very details explanantion")
rev1=Review.create(user_id: user1.id, trainer_id: trainer5.id, comment: "Very details explanantion")
rev1=Review.create(user_id: user1.id, trainer_id: trainer6.id, comment: "Very details explanantion")
rev1=Review.create(user_id: user1.id, trainer_id: trainer2.id, comment: "Very details explanantion")

post1=Post.create(user_id: user1.id, name: user1.name, post: "What’s the difference between Time and DateTime in Ruby?")
post2=Post.create(user_id: user2.id, name: user2.name, post: "Easy way to do migration in rails?")
post3=Post.create(user_id: user2.id, name: user2.name, post: "I have this errors showing --React inline style - style prop expects a mapping from style properties to values, not a string-")
post4=Post.create(user_id: user1.id, name: user1.name, post: "React error: Style prop value must be an object react/style-prop-object")

com1=Comment.create(trainer_id: trainer2.id, post_id: post1.id, name: trainer2.name, comment: "S6 introduces the spread operator which allows you to expand arrays in place for function calls, array composition, array destructuring, etc.")
com2=Comment.create(trainer_id: trainer3.id, post_id: post2.id, name: trainer3.name, comment: "This is a database configuration file that connects to a MySQL database running on localhost. It’ll use the root user and password “password.”Modify this for your database.")


com3=Comment.create(trainer_id: trainer3.id, post_id: post3.id, name: trainer3.name, comment: "JSX and html are different things and we have a little different syntax to add inline css in jsx I would recommend to go through whole documentation for better understanding")
com4=Comment.create(trainer_id: trainer1.id, post_id: post4.id, name: trainer1.name, comment: "The style attribute accepts a JavaScript object with camelCased properties(style={{float: 'left'}}) rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes.")
com5=Comment.create(trainer_id: trainer2.id, post_id: post1.id, name: trainer2.name, comment: "There may be a couple edge cases that are not handled in this solution (e.g. remove(list, -1)), but you get the general idea.")
