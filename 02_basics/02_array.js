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

