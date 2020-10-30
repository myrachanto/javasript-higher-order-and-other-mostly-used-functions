# Working with high order functions and other most widely used function in javasscript
## The sort,add, find,filter among other usefull functions are shown below

## ooh by the way if you have node installed open you cmd and navigate to this folder or wherever you have this file write
### node indes.js to run the code easy peasy--- GOOD LUCK!!!!!!!!!!!

# they include
-filter()
-find()
-map()
-sort()
-reduce()
-push()
-splice()

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


## filter() an array to get a result that meet a certain criteria

### Example 1
    const f = customers.filter(customer => {
        return customer.age > 30
    });
    console.log(f)

### Example 2
    const h = customers.filter(customer => {
        return customer.networth >= 2000000
    });
    console.log(h)

### Example 3
    const e = results.filter(result =>{
        return result < 50
    });
    console.log(e)


## find()- this function enables one to get a result from an array that meet an exalt criteria 

### Example 1
        const g = customers.find(customer => {
            return customer.name === 'Anthony'
        });
        console.log(g)

### Example 2
    const i = results.find(result => {
        return result == 20
    });
 console.log(i)


## map() this function enables a programmer to create an new array from an existing array

### Example 1
    const j = customers.map(customer => {
        return `${customer.name} has a networth of ${customer.networth}, ${customer.company}`
    });
 console.log(j)

### Example 2
    const k = results.map(result=>{
        return result * 2
    });
    console.log(k)


## sort() the sort function sorts data either in asceding or descending order a>b or b>a

### Example 1
    const m = customers.sort((a,b) =>{
        return a.name - b.name
    });
    console.log(m)

### Example 2
    const n = customers.sort((a,b) =>{
        return b.age - a.age
    });
    console.log(n)

## reduce()- well this function actually adds the numbers or concatinate strings together
## I mean who could have thought in order to add you have to reduce --literally -well not literally here more figurative any way here are some of the examples

### Example 1
    const o = results.reduce((total, result) => {
        return total + result
    },0);
    console.log(o)

### Example 2
    const q = customers.reduce((total, customer) => {
        return customer.networth + total
    },0);
    console.log(q)
    
## here is the most impresive way of javascript functions they can be concatinated together a serries of dots -impressive right!
## like customers.map().filter().sort()

### Example 1
    const p = customers.map(customer => {
        return customer.networth
    }).reduce((total, a) => {
    return total + a
    },0);
    console.log(p)
## so am told the above code can be written as
const p = customers.map(customer => customer).reduce((total,a) => total + a, 0)
### am no expert i like to literally see the data through my eyes as it is manipulated by functions , maybe someday i will be a hotshot expert 
### programmer but as for now am learning

## push() - add stuff to an array

    const r = customers.push({name:"addone", company:'javascript', networth: 200000});
    console.log(r)
    console.log(customers)
## splice() -remove stuff from an array using the item index
    arr = [1,2,3,4,5]
    const s = arr.splice(1,2);
    console.log(s)
    console.log(arr)

