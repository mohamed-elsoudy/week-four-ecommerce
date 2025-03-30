import { createSlice } from "@reduxjs/toolkit";



export const productsSlice = createSlice({
    name: "products",
    initialState: [
        {
            id: 31,
            imgSrc: "../public/imgs/dog.png",
            title: "Breed Dry Dog Food",
            category: "Animals",
            price: 100 ,
            afterDiscount: 160,
            rating: {
                count: 35
            },
            rate: 35,
            descountperc: 40,
            sale: true,
            isDescountperc: true,
            circleColor: false,
            isNew: false
        },
        {
            id: 32,
            imgSrc: "../public/imgs/camera.png",
            title: "CANON EOS DSLR Camera",
            category: "tech",
            price: 360 ,
            afterDiscount: 160,
            rating: {
                count: 95
            },
            rate: 95,
            descountperc: 40,
            sale: true,
            isDescountperc: true,
            circleColor: false,
            isNew: false
        },
        {
            id: 33,
            imgSrc: "../public/imgs/laabtop.png",
            title: "ASUS FHD Gaming Laptop",
            category: "tech",
            price: 700 ,
            afterDiscount: 160,
            rating: {
                count: 95
            },
            rate: 95,
            descountperc: 40,
            sale: true,
            isDescountperc: true,
            circleColor: false,
            isNew: false
        },
        {
            id: 34,
            imgSrc: "../public/imgs/Frame 608 (1).png",
            title: "Curology Product Set",
            category: "tech",
            price: 500,
            afterDiscount: 160,
            rating: {
                count: 145
            },
            rate: 145,
            descountperc: 40,
            sale: true,
            isDescountperc: true,
            circleColor: false,
            isNew: false
        },
        {
            id: 35,
            imgSrc: "../public/imgs/Frame 608 (1).png",
            title: "Kids Electric Car",
            category: "tech",
            price: 965,
            afterDiscount: 160,
            rating: {
                count: 55
            },
            rate: 55,
            descountperc: 40,
            sale: true,
            isDescountperc: true,
            circleColor: 'red',
            isNew: false
        },
        {
            id: 36,
            imgSrc: "../public/imgs/stars.png",
            title: "Jr. Zoom Soccer Cleats",
            category: "sport",
            price: 1160,
            afterDiscount: 160,
            rating: {
                count: 65
            },
            rate: 65,
            descountperc: 40,
            sale: true,
            isDescountperc: true,
            circleColor: 'red',
            isNew: false
        },
        {
            id: 37,
            imgSrc: "../public/imgs/joystake (4).png",
            title: "GP11 Shooter USB Gamepad",
            category: "Gaming",
            price: 660,
            afterDiscount: 160,
            rating: {
                count: 65
            },
            rate: 65,
            descountperc: 40,
            sale: true,
            isDescountperc: true,
            circleColor: 'red',
            isNew: false
        },
        {
            id: 38,
            imgSrc: "../public/imgs/jacket.png",
            title: "Quilted Satin Jacket",
            category: "Gaming",
            price: 660,
            afterDiscount: 55,
            rating: {
                count: 65
            },
            rate: 65,
            descountperc: 40,
            sale: true,
            isDescountperc: true,
            circleColor: 'red',
            isNew: false
        },
        {
            id: 40,
            imgSrc: "../public/imgs/joystake (4).png",
            title: "HAVIT HV-G92 Gamepad",
            category: "Gaming",
            price: 120 ,
            afterDiscount: 160,
            rating: {
                count:25
            },
            rate: 88,
            descountperc: 40,
            sale: true,
            isDescountperc: true,
        },
        {
            id: 41,
            imgSrc: "../public/imgs/Keyboard.png",
            title: "AK-900 Wired Keyboard",
            category: "Computer accessory",
            price: 1160,
            afterDiscount: 960,
            rating: {
                count:25
            },
            rate: 75,
            descountperc: 35,
            sale: true,
            isDescountperc: true,
        },
        {
            id: 42,
            imgSrc: "../public/imgs/chair.png",
            title: "S-Series Comfort Chair",
            category: "Furnature",
            price: 400,
            afterDiscount: 375,
            rating: {
                count:25
            },
            rate: 99,
            descountperc: 25,
            sale: true,
            isDescountperc: true,
        },
        {
            id: 43,
            imgSrc: "../public/imgs/screen.png",
            title: "IPS LCD Gaming Monitor",
            category: "Computer",
            price: 400,
            afterDiscount: 375,
            rate: 99,
            rating: {
                count: 25
            },
            descountperc: 25,
            sale: true,
            isDescountperc: true,
        },
        {
            id: 45,
            imgSrc: "../public/imgs/Frame 605.png",
            title: "The north coat",
            category: "Clothes",
            price: 400,
            afterDiscount: 260,
            rate: 65,
            rating: {
                count: 25
            },
            descountperc: 25,
            sale: true,
            isDescountperc: false,
        },
        {
            id: 46,
            imgSrc: "../public/imgs/Frame 606.png",
            title: "Gucci duffle bag",
            category: "Clothes",
            price: 1160,
            afterDiscount: 960,
            rate: 75,
            rating: {
                count: 25
            },
            descountperc: 35,
            sale: true,
            isDescountperc: false,
        },
        {
            id: 47,
            imgSrc: "../public/imgs/Frame 610.png",
            title: "RGB liquid CPU Cooler",
            category: "Clothes",
            price: 170,
            afterDiscount: 160,
            rate: 99,
            rating: {
                count: 25
            },
            descountperc: 25,
            sale: true,
            isDescountperc: false,
        },
        {
            id: 48,
            imgSrc: "../public/imgs/Frame 612.png",
            title: "Small BookSelf",
            category: "Clothes",
            price: 400,
            afterDiscount: 370,
            rate: 99,
            rating: {
                count: 99
            },
            descountperc: 30,
            sale: true,
            isDescountperc: false,
        }
    ]
});

export default productsSlice.reducer;