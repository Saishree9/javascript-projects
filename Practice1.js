let students=
[
    {
        id:1,
        sname:"Walter White",
        age:21,
        imgurl:"https://bootstrapmade.com/demo/templates/Append/assets/img/team/team-1.jpg"
    },
    {
        id:2,
        sname:"Sarah Jhonson",
        age:26,
        imgurl:"https://bootstrapmade.com/demo/templates/Append/assets/img/team/team-2.jpg"
    },
    {
        id:3,
        sname:"William Anderson",
        age:32,
        imgurl:"https://bootstrapmade.com/demo/templates/Append/assets/img/team/team-3.jpg"
    },
    {
        id:4,
        sname:"Amanda jepson",
        age:18,
        imgurl:"https://bootstrapmade.com/demo/templates/Append/assets/img/team/team-4.jpg"
    },

];

let studentDetails=document.getElementById("studentDetails");


// !method 1-----------------using for (const iterator of object)


// for (const {id,sname,age,imgurl} of students) {

//     studentDetails.innerHTML+=
//     `
//     <tr>
//     <td>${id}</td>
//     <td>${sname}</td>
//     <td>${age}</td>
//     <td>
//         <img width=150px src= ${imgurl} alt="">
//     </td>
// </tr>
//     `
// }

// !method 2 -----------------using for (const index in object)

// for (const index in students) {
    
//     studentDetails.innerHTML+=
    
//     `
//     <tr>
//         <td>${Number(index)+1}</td>
//         <td>${students[index].sname}</td>
//         <td>${students[index].age}</td>
//         <td>
//             <img width=150px src=${students[index].imgurl} alt="">
//         </td>
//     </tr>
//     `
// }

// !method 3 -----------------using for map

students.map(({sname,age,imgurl},index)=>
{
    studentDetails.innerHTML+=
    `
    <tr>
        <td>${index+1}</td>
        <td>${sname}</td>
        <td>${age}</td>
        <td>
            <img width=150px src= ${imgurl} alt="">
        </td>
    </tr>
    `
})