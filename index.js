const customers = [
    {name:"Anthony", company:"cdt limited", networth:2000000,age:32},
    {name:"Santiago", company:"sants limited", networth:2500000,age:34},
    {name:"Rebecca", company:"Becca co-operations", networth:3000000,age:35},
    {name:"Rindsy", company:"Jolt Agency", networth:1000000,age:27},
    {name:"Marion", company:"ssml limited", networth:250000,age:25},
    {name:"Peter", company:"Eclipse limited", networth:7000000,age:40},
    {name:"Jessica", company:"Jessica bridge limited", networth:1000000,age:29},
    {name:"Spacks", company:"sparks limited", networth:1500000,age:32},
    {name:"Leonardo", company:"lena limited", networth:700000,age:33},
    {name:"Kara", company:"kara limited", networth:2000000,age:35},
]
const results = [20,30,40,50,60,70,45,56,47,69,56];
//higher order functions and mostly used javascript functions in web development
// 1.filter()
// 2.find()
// 3.map()
// 4.sort()
// 5.reduce()
// 6.push()
// 7.splice()
///////////////////////////////////////////////////////////////////////////////////
// filter 
const f = customers.filter(customer => {
    return customer.age > 30
});
// console.log(f)
const h = customers.filter(customer => {
    return customer.networth >= 2000000
});
// console.log(h)
const e = results.filter(result =>{
    return result < 50
});
// console.log(e)
////////////////////////////////////////////////////////////////////////////////
// find 

const g = customers.find(customer => {
    return customer.name === 'Anthony'
});
// console.log(g)
 const i = results.find(result => {
     return result == 20
 });
//  console.log(i)
 ////////////////////////////////////////////////////////////////////////////////
//  map 
const j = customers.map(customer => {
    return `${customer.name} has a networth of ${customer.networth}, ${customer.company}`
});
// console.log(j)
const k = results.map(result=>{
    return result * 2
});
// console.log(k)
//////////////////////////////////////////////////////////////////////////////
// sort 
const m = customers.sort((a,b) =>{
    return a.name - b.name
});
// console.log(m)
const n = customers.sort((a,b) =>{
    return b.age - a.age
});
// console.log(n)
////////////////////////////////////////////////
// reduce 

const o = results.reduce((total, result) => {
    return total + result
},0);
console.log(o)
const q = customers.reduce((total, customer) => {
    return customer.networth + total
},0);
console.log(q)
////////////joining methods///
const p = customers.map(customer => {
    return customer.networth
  }).reduce((total, a) => {
return total + a
},0);
console.log(p)
//////////////////////////////////////////////////////////////////////////////////////
// push 
const r = customers.push({name:"addone", company:'javascript', networth: 200000});
console.log(r)
console.log(customers)
/////////////////////////////////////////////////////////////////////////////////////
arr = [1,2,3,4,5]
const s = arr.splice(1,2);
console.log(s)
console.log(arr)

