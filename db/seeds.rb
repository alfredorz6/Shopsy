# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.delete_all
Store.delete_all
Product.delete_all

user1 = User.create!({id: 1, name: 'Alex', email: 'Alex@demo.com', password: '123456'})
user2 = User.create!({id: 2, name: "Mo", email: "mo", password: "password"})
user3 = User.create!({id: 3, name: "La Belle", email: "Belle@demo.com", password: "password"})
user4 = User.create!({id: 4, name: "Spike", email: "spike@demo.com", password: "password"})
user5 = User.create!({id: 5, name: "Sheldon", email: "Sheldon@demo.com", password: "password"})
user6 = User.create!({id: 6, name: "Edd", email: "Edd@demo.com", password: "password"})

store1 = Store.create!({id: 1, name: 'Modeling Corner', description: 'Everything you need for displaying, ensambling and finishing your models', owner_id: 2, num_sales: 105})
store2 = Store.create!({id: 2, name: "La Belle's Boutique", description: 'You want to look nice come to my shop, I will fix your wardrobe', owner_id: 3, num_sales: 98})
store3 = Store.create!({id: 3, name: "Animal's Paradise", description: 'Rolling, munching, running and jumping anything your pet needs is here', owner_id: 4, num_sales: 45})
store4 = Store.create!({id: 4, name: 'The BigBang Store', description: 'Looking to make the best Gaming PC we help you break the human limits', owner_id: 5, num_sales: 33})
store5 = Store.create!({id: 5, name: "Jaw Breaker's", description: "Are you looking for them.... Caramels?! We got'em", owner_id: 6, num_sales: 60})
## STORE PHOTOS
store_file1= open('https://open-uri.s3.us-west-1.amazonaws.com/store_1.jpg')
store1.photo.attach(io: store_file1, filename: 'store_1.jpg')

store_file2= open('https://open-uri.s3.us-west-1.amazonaws.com/store_2.jpg')
store2.photo.attach(io: store_file2, filename: 'store_2.jpg')

store_file3= open('https://open-uri.s3.us-west-1.amazonaws.com/store_3.jpg')
store3.photo.attach(io: store_file3, filename: 'store_3.jpg')

store_file4= open('https://open-uri.s3.us-west-1.amazonaws.com/store_4.jpg')
store4.photo.attach(io: store_file4, filename: 'store_4.jpg')

store_file5= open('https://open-uri.s3.us-west-1.amazonaws.com/store_5.jpg')
store5.photo.attach(io: store_file5, filename: 'store_5.jpg')

product1= Product.create!({id: 1, name: 'Modeling Kit', description: 'kit with all the essential tools for assembling scale models', price: 24.99, store_id: 1 })
product2= Product.create!({id: 2, name: 'LED Strips', description: 'Style your collection with some ambient lighting', price: 20.99, store_id: 1 })
product3= Product.create!({id: 3, name: 'Glass Display Case', description: 'Display your models in this luxury Case, its sealed so dust wont go inside', price: 49.99, store_id: 1 })
product4= Product.create!({id: 4, name: 'Paint Stand', description: 'Stand support for painting the pieces of your model', price: 14.99, store_id: 1 })
product5= Product.create!({id: 5, name: 'Tools Organizer', description: 'Wood shelf to organize all your tools and paints', price: 44.99, store_id: 1 })

product_file1= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_1.jpg')
product1.photo.attach(io: product_file1, filename: 'product_1.jpg')

product_file2= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_3.jpg')
product2.photo.attach(io: product_file2, filename: 'product_3.jpg')

product_file3= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_2.jpg')
product3.photo.attach(io: product_file3, filename: 'product_2.jpg')

product_file4= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_4.jpg')
product4.photo.attach(io: product_file4, filename: 'product_4.jpg')

product_file5= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_5.jpg')
product5.photo.attach(io: product_file5, filename: 'product_5.jpg')

product6= Product.create!({id: 6, name: 'High Waist Tight Jeans', description: 'Classic high waist skinny jeans, live fabolous', price: 49.99, store_id: 2 })
product7= Product.create!({id: 7, name: 'Drop Sleeve Sweater', description: 'DROP IT DROP SLEEVE SWEATER IN MUSTARD', price: 89.99, store_id: 2 })
product8= Product.create!({id: 8, name: 'Armani Luxury Suit', description: 'ARMANI COLLEZIONI BLACK MODERN FIT WOOL SUIT', price: 119.99, store_id: 2 })
product9= Product.create!({id: 9, name: 'One Piece Summer Dress', description: 'Beautiful slim short-sleeve summer dress', price: 72.99, store_id: 2 })
product10= Product.create!({id: 10, name: 'Casual Shirt', description: 'This Shirt should be part of every men wardrobe', price: 44.99, store_id: 2 })

product_file6= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_6.jpg')
product6.photo.attach(io: product_file6, filename: 'product_6.jpg')
product_file7= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_7.jpg')
product7.photo.attach(io: product_file7, filename: 'product_7.jpg')
product_file8= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_8.jpg')
product8.photo.attach(io: product_file8, filename: 'product_8.jpg')
product_file9= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_9.jpg')
product9.photo.attach(io: product_file9, filename: 'product_9.jpg')
product_file10= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_10.jpg')
product10.photo.attach(io: product_file10, filename: 'product_10.jpg')

product11= Product.create!({id: 11, name: 'Chew Bone', description: 'Nice and big chewy bone with bacon flavor for your dog', price: 13.99, store_id: 3 })
product12= Product.create!({id: 12, name: 'Dog House', description: 'Get your dog this fancy dog house with front porch', price: 149.99, store_id: 3 })
product13= Product.create!({id: 13, name: 'Hamster Toy Ball', description: 'exercise toy ball for hamsters', price: 7.99, store_id: 3 })
product14= Product.create!({id: 14, name: 'Taco Bed', description: 'Taco shaped bed for cat, who said cats cant be a taco', price: 72.99, store_id: 3 })
product15= Product.create!({id: 15, name: 'Aquarium Coffee Table', description: 'This beautiful octagon glass table is an aquarium in the inside perfect for that missing touch in the living space', price: 234.99, store_id: 3 })

product_file11= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_11.jpg')
product11.photo.attach(io: product_file11, filename: 'product_11.jpg')
product_file12= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_12.jpg')
product12.photo.attach(io: product_file12, filename: 'product_12.jpg')
product_file13= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_13.jpg')
product13.photo.attach(io: product_file13, filename: 'product_13.jpg')
product_file14= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_14.jpg')
product14.photo.attach(io: product_file14, filename: 'product_14.pg')
product_file15= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_15.jpg')
product15.photo.attach(io: product_file15, filename: 'product_15.pg')

product16= Product.create!({id: 16, name: 'RTX 3080', description: 'One of the best performing Graphics Card for your gaming or designing experience', price: 899.99, store_id: 4 })
product17= Product.create!({id: 17, name: 'Steel Series Combo', description: 'Up you gaming with this peripheral combo from steel series, keyboard, mouse and headset', price: 99.99, store_id: 4 })
product18= Product.create!({id: 18, name: 'Yeti Caster', description: 'Want to be a Streamer then the Yeti Caster is the best microphone set you can ever get', price: 119.99, store_id: 4 })
product19= Product.create!({id: 19, name: 'Samsung Oddyssey G9', description: 'Samsung’s largest 1000R gaming monitor, NVIDIA® G-SYNC™ Compatibility reduces image tears, stuttering and screen lag', price: 1900.00, store_id: 4 })
product20= Product.create!({id: 20, name: 'Gaming PC Tower', description: 'prebuilt RTX 3060 / Ryzen 5600X, MSI B550 motherboard, 16GB of RAM, 240GB SSD', price: 949.99, store_id: 4 })

product_file16= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_16.jpg')
product16.photo.attach(io: product_file16, filename: 'product_16.jpg')
product_file17= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_17.jpg')
product17.photo.attach(io: product_file17, filename: 'product_17.jpg')
product_file18= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_18.jpg')
product18.photo.attach(io: product_file18, filename: 'product_18.jpg')
product_file19= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_19.jpg')
product19.photo.attach(io: product_file19, filename: 'product_19.pg')
product_file20= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_20.jpg')
product20.photo.attach(io: product_file20, filename: 'product_20.pg')

product21= Product.create!({id: 21, name: 'Jaw Breakers', description: 'Good old Jaw Breaking candies', price: 14.99, store_id: 5 })
product22= Product.create!({id: 22, name: 'Gummy Worms', description: 'Bulk candy Gummies', price: 12.75, store_id: 5 })
product23= Product.create!({id: 23, name: 'Fruit Lollipop', description: 'Fruit lollipop box varied flavors', price: 23.99, store_id: 5 })
product24= Product.create!({id: 24, name: 'Assorted Candies', description: 'Varied types of candies from different regions', price: 35.20, store_id: 5 })
product25= Product.create!({id: 25, name: 'Milk Chocolate balls', description: 'Sweet milk chocolote balls filled with caramell', price: 9.99, store_id: 5 })

product_file21= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_21.jpg')
product21.photo.attach(io: product_file21, filename: 'product_21.jpg')
product_file22= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_22.jpg')
product22.photo.attach(io: product_file22, filename: 'product_22.jpg')
product_file23= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_23.jpg')
product23.photo.attach(io: product_file23, filename: 'product_23.jpg')
product_file24= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_24.jpg')
product24.photo.attach(io: product_file24, filename: 'product_24.pg')
product_file25= open('https://open-uri.s3.us-west-1.amazonaws.com/products/product_25.jpg')
product25.photo.attach(io: product_file25, filename: 'product_25.pg')