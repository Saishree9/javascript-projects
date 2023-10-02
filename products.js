let productList=
[
    {
        pname:"Samsung mobile",
        price:49999,
        img:"https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/b/o/-original-imagtnqjmk7dxnkh.jpeg?q=70"
    },
    {
        pname:"Portronics Bluetooth speakers",
        price:1199,
        img:"https://rukminim2.flixcart.com/image/416/416/kpzt7680/speaker/mobile-tablet-speaker/c/7/o/sounddrum-1-por-1327-portronics-original-imag43tcuz8swymc.jpeg?q=70"
    },
    {
        pname:"Samsung tv",
        price:71990,
        img:"https://rukminim2.flixcart.com/image/416/416/xif0q/television/t/h/t/-original-imagp27jepyhyj9n.jpeg?q=70"
    },
    {
        pname:"Lenovo laptop",
        price:35900,
        img:"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/b/d/i/-original-imagzhefhc84rmbf.jpeg?q=70"
    },
    {
        pname:"Smart watch",
        price:1499,
        img:"https://m.media-amazon.com/images/I/61SSVxTSs3L._SX679_.jpg",
    },
    {
        pname:"ZEBRONICS earphones",
        price:139,
        img:"https://m.media-amazon.com/images/I/71+ynLeL8UL._SX522_.jpg",
    },{
        pname:"Smart LED tv",
        price:24999,
        img:"https://m.media-amazon.com/images/I/71I73CpB8VL._SX522_.jpg",
    },{
        pname:"Samsung Galaxy mobile",
        price:21999,
        img:"https://m.media-amazon.com/images/I/91L9EF-OEGL._SX679_.jpg",
    },{
        pname:"ZEBRONICS earphones",
        price:169,
        img:"https://m.media-amazon.com/images/I/61+5q4oGJWL._SX522_.jpg",
    },{
        pname:"Noise smart watch",
        price:2999,
        img:"https://m.media-amazon.com/images/I/61jOliJK5CL._SX522_.jpg",
    },{
        pname:"realme narzo mobile",
        price:12999,
        img:"https://m.media-amazon.com/images/I/81WimZLWH1L._SX679_.jpg",
    }

];

let List=document.getElementById("productslist");

productList.map(({pname,price,img},index)=>
{
    List.innerHTML+=
    `
    <tr>
        <td>${index+1}</td>
        <td>${pname}</td>
        <td>${price}</td>
        <td>
            <img width=100px src= ${img} alt="">
        </td>
    </tr>
    `
})

    // !------total price calculations-----
let totalPrice=document.getElementById("totalPrice")

let cost=productList.map(({price})=>price);
let tP=cost.reduce((a,b)=>a+b);
totalPrice.innerText=tP;
    // !-----------------------------------


function getProduct(){

    List.innerHTML="";   //! empting the array

    let search=document.getElementById("searchProduct");
    let value=search.value;

    let filteredProducts=productList.filter(({pname,price})=>
    {
        return pname.toLowerCase().includes(value.toLowerCase()) || price===Number(value)
    })

    if(!filteredProducts.length){
        console.log(`${value} not found`);
    }

    // !------total price calculations-----
        
    let cost=filteredProducts.map(({price})=>price)
    let tP=cost.reduce((a,b)=>a+b)

    totalPrice.innerText=tP;
    // !------------------------------------

    filteredProducts.map(({pname,price,img},index)=>
    {
        List.innerHTML+=
        `
        <tr>
            <td>${index+1}</td>
            <td>${pname}</td>
            <td>${price}</td>
            <td>
                <img width=100px src= ${img} alt="">
            </td>
        </tr>
        `
    })
}

