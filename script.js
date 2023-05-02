/*console.log('hello world');
//var can  be changed or it is mutable
var a=10;
console.log(a);
var a =20;
console.log(a);
//here it will print 10&20 because it is changeable.
/*let b=10;
console.log(b);
let b=34;
console.log(b);
//let is not changeable.to avoid or change this but let in blocks;*/
/*{
    let b=10;
console.log(b);
}
{
    let b=10;
console.log(b);
}
//addition
{let a=10;
let b=20;
c=a+b;
console.log(c);}
//subtraction
{let a=10;
let b=20;
c=a-b;
console.log(c);}
//multiplication
{let a=10;
    let b=20;
    c=a*b;
    console.log(c);}
//division
{let a=10;
        let b=20;
        c=a/b;
        console.log(c);}
//modulos
        {let a=10;
            let b=20;
            c=a%b;
            console.log(c);}*/
//==
//checks only values if we convert the values into a string by placing the double qoutes it will only check the value
/*let a=10;
let b="10";
if(a==b)
{
    console.log(true)
}*/
//=== checks the datatype that is it checks wheather it is string or not
/*{let a=10;
let b="10";
if(a===b)
{
    console.log(false);
}}
{
    let a="akash ";
    let b="chandra";
   let  c=a+b;
    console.log(c);
}
var a="akash";
var b="chandra";
var c=a+b;
console.log(`${a}  and  ${b}`);
{
    let car=
    {
        model:"alto",
        color:"red",
        price:1000000

    }
    console.log(car.color);
    console.log(`${car.color} colored ${car.model}`);
}*/
/*let person=
{
    name:"akash",
    college:"CCE",
    class:"s4 cse",
    address:{
        housename:"thaliyassery",
        street:"Edathirinji"
    }
}
console.log(person);
console.log(`${person.name} ${person.address.housename}`);*/
//ARRAY
/*let fruits=["apple","jackfruit"]
fruits[3]="grapes";
console.log(fruits);
fruits.push("pineapple");//push to the last position
console.log(fruits);
fruits.unshift("Dragula")//to enter the elemnts at the first index
console.log(fruits);
fruits.pop();//to pop the last element
console.log(fruits);
fruits.shift();//to delete the first index element
console.log(fruits);
let todo=[{
    id:1,
    task:"Buy book"
},
{
    id:2,
    task:"buy car"
}
]
console.log(todo)
console.log(todo[1].task)*/
/*let numbers=[1,2,3,4,5,6,7,8,9,0];
console.log(numbers);
array=(a,b)=>
{
for (a=0;a<b;a++)
{
  console.log(numbers[a]);
}}
array(0,numbers.length);*/
/*let numbers=[1,2,3,4,5,6,7,8,9,0];//while
console.log(numbers);
array=(a,b)=>
{
    while(a<b)
    {
        console.log(numbers[a]);
        a++;
    }
}
array(0,numbers.length);*/
let numbers=[1,2,3,4,5,6,7,8,9,0];// do while
console.log(numbers);
array=(a,b)=>
{
    do
    {
        console.log(numbers[a]);
        a++;
    }while(a<b)
}
array(0,numbers.length);

