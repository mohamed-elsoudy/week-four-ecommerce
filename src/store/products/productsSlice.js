import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
            todaysProducts: [
                {
                    title: "HAVIT HV-G92 Gamepad",
                    category: "Gaming",
                    id: 101,
                    image: "/imgs/joystake (4).png",
                    price: 160,
                    afterDiscount: 120,
                    rating: {
                        count: 88,
                        stars: 5
                    },
                    sale: 40
                },
                {
                    title: "AK-900 Wired Keyboard",
                    category: "Gaming",
                    id: 102,
                    image: "/imgs/keyboard.png",
                    price: 1160,
                    afterDiscount: 960,
                    rating: {
                        count: 78,
                        stars: 4
                    },
                    sale: 35
                },
                {
                    title: "IPS LCD Gaming Monitor",
                    category: "Gaming",
                    id: 103,
                    image: "/imgs/screen.png",
                    price: 160,
                    afterDiscount: 120,
                    rating: {
                        count: 88,
                        stars: 5
                    },
                    sale: 30
                },
                {
                    title: "S-Series Comfort Chair ",
                    category: "Furnature",
                    id: 104,
                    image: "/imgs/chair.png",
                    price: 400,
                    afterDiscount: 375,
                    rating: {
                        count: 99,
                        stars: 4
                    },
                    sale: 25
                }
            ],
            thismonthProducts: [
                {
                    title: "The north coat",
                    category: "Clothes",
                    id: 105,
                    image: "/imgs/Frame 605.png",
                    price: 360,
                    afterDiscount: 260,
                    rating: {
                        count: 68,
                        stars: 5
                    },
                },
                {
                    title: "Gucci duffle bag",
                    category: "Clothes",
                    id: 106,
                    image: "/imgs/Frame 606.png",
                    price: 1160,
                    afterDiscount: 960,
                    rating: {
                        count: 65,
                        stars: 5
                    },
                },
                {
                    title: "RGB liquid CPU Cooler",
                    category: "Computer",
                    id: 107,
                    image: "/imgs/Frame 610.png",
                    price: 1160,
                    afterDiscount: 960,
                    rating: {
                        count: 65,
                        stars: 5
                    },
                },
                {
                    title: "Small BookSelf",
                    category: "Furnature",
                    id: 108,
                    image: "/imgs/Frame 612.png",
                    price: 560,
                    afterDiscount: 360,
                    rating: {
                        count: 65,
                        stars: 5
                    },
                },
            ],
            exploreProducts: [
                {
                    title: "Breed Dry Dog Food",
                    category: "Animals",
                    id: 109,
                    image: "/imgs/dog.png",
                    price: 100 ,
                    afterDiscount: 160,
                    rating: {
                        count: 35,
                        stars: 5
                    },
                },
                {
                    title: "CANON EOS DSLR Camera",
                    category: "tech",
                    id: 110,
                    image: "/imgs/camera.png",
                    price: 360 ,
                    afterDiscount: 160,
                    rating: {
                        count: 95,
                        stars: 4
                    },
                },
                {
                    title: "ASUS FHD Gaming Laptop",
                    category: "tech",
                    id: 111,
                    image: "/imgs/laabtop.png",
                    price: 700 ,
                    afterDiscount: 160,
                    rating: {
                        count: 95,
                        stars: 4
                    },
                },
                {
                    title: "Curology Product Set",
                    category: "tech",
                    id: 112,
                    image: "/imgs/Frame 608 (1).png",
                    price: 500,
                    afterDiscount: 160,
                    rating: {
                        count: 145,
                        stars: 5
                    },
                },
                {
                    title: "Kids Electric Car",
                    category: "tech",
                    id: 113,
                    image: "/imgs/Frame 608 (1).png",
                    price: 965,
                    afterDiscount: 160,
                    rating: {
                        count: 55,
                        stars: 5
                    },
                    circleColor: 'red',
                    isNew: true
                },
                {
                    title: "Jr. Zoom Soccer Cleats",
                    category: "sport",
                    id: 114,
                    image: "/imgs/stars.png",
                    price: 1160,
                    afterDiscount: 160,
                    rating: {
                        count: 65,
                        stars: 4
                    },
                    circleColor: 'red',
                    isNew: false
                },
                {
                    title: "GP11 Shooter USB Gamepad",
                    category: "Gaming",
                    id: 115,
                    image: "/imgs/joystake (4).png",
                    price: 660,
                    afterDiscount: 160,
                    rating: {
                        count: 65
                    },
                    circleColor: 'red',
                    isNew: true
                },
                {
                    title: "Quilted Satin Jacket",
                    category: "Gaming",
                    id: 116,
                    image: "/imgs/jacket.png",
                    price: 660,
                    afterDiscount: 55,
                    rating: {
                        count: 65
                    },
                    circleColor: 'red',
                    isNew: false
                }
            ],
        },
});

export default productsSlice.reducer;