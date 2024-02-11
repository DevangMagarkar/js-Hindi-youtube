const marvel_heros =["ironMan" , "captain", "thor"]
const dc_heros =["flash", "superman", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);

//spread like dropping glass

const all_new_heros = [...marvel_heros,...dc_heros]
//console.log(all_new_heros);

//to convert nested array into flat array
//flat keyword is used

const anotherarray =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArray = anotherarray.flat(Infinity)
console.log(realAnotherArray)

//to check whether it is an array or not
console.log(Array.isArray("Devang"))

//to conver a string into an array of characters
console.log(Array.from("Devang"))

//object cannot be cnverted from this method
console.log(Array.from({name: "Devang"}))

//to convert a given number of variables into an array
let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));



