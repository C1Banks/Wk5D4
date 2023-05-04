const { Pokemon, Trainer, Badge } = require("./models/index.js");


async function main() {
  const trainers = await Trainer.findAll();
  const pokemon = await Pokemon.findAll();
  const badges = await Badge.findAll();


  await trainers[0].addPokemon(pokemon[0]);
  await trainers[0].addPokemon([pokemon[1], pokemon[2]]);


  //console.log(trainers[0].__proto__)

  const trainer = await Trainer.findOne({where: { name: "Red"} });

  

  const trainerWithPokemon = await Trainer.findOne({
    where: { name: "Red"},
    include: Pokemon,
  });

  await trainers[0].addBadge(badges[0]);
  await trainers[1].addBadge(badges[0]);

  const trainersWithBadges = await Trainer.findAll({ include: Badge });
  console.log(JSON.stringify(trainerWithPokemon, null, 2));

}

main();
