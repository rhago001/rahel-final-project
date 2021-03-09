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

user1= User.create(name: "Lala", username: "lala123", email: "lala@gmail.com", password: "123")
user2= User.create(name: "Jon", username: "Jon123", email: "jon@gmail.com", password: "1234")

trainer1= Trainer.create(name: "Evan ", years_experience: 3, flatiron_alum: "yes", price: 10, image: "https://i1.wp.com/sea-technology.com/wp-content/uploads/2018/09/Nadir-Rahmatullah_UTEC.jpg?resize=500%2C667&ssl=1")
trainer1= Trainer.create(name: "Hellen ", years_experience: 3, flatiron_alum: "yes", price: 10, image: "https://jamesgilberdphotography.weebly.com/uploads/1/3/6/5/13650410/emma-not-smiling-35x45_1_orig.jpg")
trainer2= Trainer.create(name: "Michael", years_experience: 1, flatiron_alum: "yes", price: 5, image: "https://pcceagles.com/common/controls/image_handler.aspx?thumb_id=0&image_path=/images/2018/10/8/JosephLiwosz.jpg")
trainer3= Trainer.create(name: "Eva", years_experience: 2, flatiron_alum: "yes", price: 5, image: "https://camerdigitals.com/wp-content/uploads/2015/12/passport-size.jpg")
trainer4= Trainer.create(name: "Marry", years_experience: 3, flatiron_alum: "yes", price: 5, image: "https://i.pinimg.com/originals/8b/c0/b1/8bc0b11ef82d7f875a716dc58550371c.jpg")
trainer5= Trainer.create(name: "Alex", years_experience: 4, flatiron_alum: "yes", price: 10, image: "https://images.squarespace-cdn.com/content/v1/51047986e4b0f96ff4ffc8e0/1492104123103-GZYTFQK9HRLYE0HUDN4Q/ke17ZwdGBToddI8pDm48kJfKvyBGMNkKt0FkDJGTKmtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzlVI-nKukq7aD-HmGzs8xsQNZwRbvRG0p5W9NoJgQtcBPjHlOPGzD4CvBdH8cDzTw/Mens-Accessories-Tie-Bow-pocket-square")
trainer6= Trainer.create(name: "Aaron", years_experience: 5, flatiron_alum: "yes", price: 10, image: "https://images.redframe.com/EFoxphoto/800_35578/Professional%20Headshot%20male%202.jpg")
trainer7= Trainer.create(name: "Sofia", years_experience: 3, flatiron_alum: "yes", price: 10, image: "https://media.istockphoto.com/photos/passport-picture-of-a-smiling-turkish-businesswoman-picture-id856599656?k=6&m=856599656&s=612x612&w=0&h=4Nwo_zZorMKSrrHb-c9DoO7JarfeuKQXXV2U6Ky6N9Q=")
trainer8= Trainer.create(name: "Abel", years_experience: 4, flatiron_alum: "no", price: 10, image: "https://images.squarespace-cdn.com/content/v1/54ab66dee4b0da465dd06039/1476559947089-11G8JA4HI2NYQUNDXYND/ke17ZwdGBToddI8pDm48kHJeILXtbmrxHuO5DLJNO1p7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0vIHRucUU7a1Vci15HXS8HLSDdGh5_MbC6cu68f2Ytr7-e6w1SsnmABxoiazY9umQw/Justin+Wilson9075.jpg?format=500w")
trainer9= Trainer.create(name: "Mike", years_experience: 1, flatiron_alum: "yes", price: 5, image: "https://images.squarespace-cdn.com/content/v1/551f3b77e4b019d7121ca466/1442638512960-ZX28EU2X5FVW2PV7BPHP/ke17ZwdGBToddI8pDm48kHPG90e6v4mF5R505MEkgZlZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpz_ZmeswkhK4XSZiyOZ0uAOaOJiKd5zVzkmfkzu3FAhovubWSTZnUjZe3Iqrm-K4lQ/DC-HEADSHOT-PHOTOGRAPHER-4-1.jpg?format=500w")
trainer11= Trainer.create(name: "Angelina", years_experience: 0, flatiron_alum: "no", price: 5, image: "https://www.zcdco.com/wp-content/uploads/2016/01/01-corporate-headshot-photo-130405-9660.JPG-1500px.jpg")


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

post1=Post.create(user_id: user1.id, post: "What’s the difference between Time and DateTime in Ruby?")
post2=Post.create(user_id: user2.id, post: "Easy way to do migration in rails?")
post3=Post.create(user_id: user2.id, post: "I have this errors showing --React inline style - style prop expects a mapping from style properties to values, not a string-")
post4=Post.create(user_id: user1.id, post: "React error: Style prop value must be an object react/style-prop-object")

com1=Comment.create(trainer_id: trainer2.id, post_id: post1.id, comment: "S6 introduces the spread operator which allows you to expand arrays in place for function calls, array composition, array destructuring, etc.")
com2=Comment.create(trainer_id: trainer3.id, post_id: post2.id, comment: "This is a database configuration file that connects to a MySQL database running on localhost. It’ll use the root user and password “password.”Modify this for your database.")


com3=Comment.create(trainer_id: trainer3.id, post_id: post3.id, comment: "JSX and html are different things and we have a little different syntax to add inline css in jsx I would recommend to go through whole documentation for better understanding")
com4=Comment.create(trainer_id: trainer1.id, post_id: post4.id, comment: "The style attribute accepts a JavaScript object with camelCased properties(style={{float: 'left'}}) rather than a CSS string. This is consistent with the DOM style JavaScript property, is more efficient, and prevents XSS security holes.")
com5=Comment.create(trainer_id: trainer2.id, post_id: post1.id, comment: "There may be a couple edge cases that are not handled in this solution (e.g. remove(list, -1)), but you get the general idea.")
