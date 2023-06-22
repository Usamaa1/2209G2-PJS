// function print(a){
//     if(a <= 0) return;

//     console.log(a);
//     print(a-1)
// }

// print(10)




// n!
// 5 * 4 * 3 * 2 * 1
// 120


// function fac(n){

//     if(n <= 1) return 1;

//     return n * fac(n - 1);


// }


// console.log(fac(6));








let familyTree = {
    name: "John",
    childrens: [
        {
            name: "Charlie",
            childrens: [
                            {
                                name: "Hitler",
                                childrens: []
                            }
                        ]
        },
        {
            name: "Mary",
            childrens: [
                {
                name: "Lisa",
                childrens: [{
                    name: "Jane",
                    childrens: [{
                        name: "Bob",
                        childrens: []
                    }]
                }]
            }
             ]
        }
    ]
}

function printChildren(obj) {

    if(obj.childrens.length === 0) return;
    
    obj.childrens.map((child, index)=>{
       
        console.log(obj.childrens[index], child.name)
        printChildren(child)
    })
}
printChildren(familyTree)









