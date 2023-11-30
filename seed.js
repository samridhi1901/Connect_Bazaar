const mongoose=require('mongoose');
const Product = require('./models/Product');


let products=[
    {
        name:"Iphone-12",
        img:"https://images.unsplash.com/photo-1592286927505-1def25115558?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aSUyMHBob25lfGVufDB8fDB8fHww",
        price:45000,
        desc:"Gently Used [Iphone-12 mini] - Excellent Condition - Unlocked",
        category:"Electronics"
    },{
        name:"Samsung S21",
        img:"https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aSUyMHBob25lfGVufDB8fDB8fHww",
        price:16650,
        desc:"In well working condition and includes accessories, such as charging cable, adapter",
        category:"Electronics"
    },
    {
        name:"OnePlus 10",
        img:"https://www.digitaltrends.com/wp-content/uploads/2023/01/oneplus-11-green-in-hand-2.jpg?resize=625%2C417&p=1",
        price:15000,
        desc:"Used for 2 months only, in good working conditions",
        category:"Electronics"
    },
    
    {
        name:"Men's Jacket",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsQIAnFZAy4q6xZ5U9rfdpyIohiTISp3dZfg&usqp=CAU",
        price:650,
        desc:"This jacket is in excellent condition, having been gently worn and well-maintained. The leather has developed a rich patina over time, enhancing its character. ",
        category:"Clothing"
    },{
        name:"Scarf",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTViq-liyZjiMmroJgY7c8woAKEb-ZpD3Rcng&usqp=CAU",
        price:500,
        desc:"Made from high-quality silk, this scarf provides both comfort and warmth. It drapes beautifully around the neck, providing a cozy layer against chilly weather. The commitment to quality is evident in every stitch.",
        category:"Clothing"

    },
    {
        name:"Chair-Set(4)",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ07n8w3F7GfF3T7NEvMKDS2VQC6EMWmn3tsw&usqp=CAU",
        price:1000,
        desc:"This chair set is in excellent condition, having been well-maintained and gently used. There are no major signs of wear, tears, or damage. The structure is sturdy, and the upholstery (if applicable) is clean and well-preserved.",
        category:"Furniture"  
    },
    {
        name:"Wooden Desk",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqVOzVF1kq2GnDm8QwiI97NHMZ-RqH8hSu4Q&usqp=CAU",
        price:1660,
        desc:"Material: Solid Wood, Color/Finish:Dusky brown ,Dimensions:100*100*50 inches.",
        category:"Furniture" 
    },


    {
        name:"Toyota Urban Cruiser Hyryder",
        img:"https://imgd.aeplcdn.com/664x374/n/cw/ec/124027/urban-cruiser-hyryder-exterior-right-front-three-quarter-72.jpeg?isig=0&q=80",
       price:450000,
        desc:"Well-Maintained 2020 model - Excellent Condition - Low Mileage.Mileage: 45,000 mile. Color: Blue, Engine: 2.0L 4-cylinder, Transmission: Automatic",
       category:"Vehicle" 
    },
    {
        name:"Painting",
        img:"https://3.imimg.com/data3/VQ/CT/MY-13910760/indian-horse-painting-500x500.jpg",
       price:4500,
        desc:"Original artwork by Aman Mathew, Excellent condition, Size 70*40 inch,  Versatile for different interior styles.",
       category:"DecorItem"   
    },
    {
        name:"CBSE Class 10 books(Combo)",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqO6G2vjx3kDYChZSoKRjHBOK8y0Vv3Yue2g&usqp=CAU",
        price:"600",
        desc:"Bit torn pages, no pen marks, page quality good, in a pretty good condition",
        category:"BookStationary"
    }
]


async function seedDB(){  /// jab bhi db k func hote h vo async or await lga kr hi use hote h
    await Product.insertMany(products);
    console.log("Data Seeded");
}
module.exports=seedDB;