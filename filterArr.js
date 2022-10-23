const arr=[10,20,10,20,30]

const items=(num,arr)=>arr.filter(item=>(item===num)).length
console.log(items(10,arr))
