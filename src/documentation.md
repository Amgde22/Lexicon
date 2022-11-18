#       [LEVELS]
levels are arrays of [Enemy Groups]
at start of each run pick a level order at random that ends with a boss
  this all is an [ACT]

StageSage
  stages 1/2/3
    Levels
      each level is a random non iterating enemy group

- the player has an index (pointer) that points to the current stage

- sometimes you can skip levels for 
quest rooms (might be good might be bad) [orange]
shops (you are missing out on a free card) [blue]
camps (only getting hp) [green]
elites (might die) [red]
vault (nothing to loose) [gold] / [purple]


- at the end of combat two options are generate to where to go next 
  (based on coocking time , cooldown , and room chance)
quest rooms:60% 
shops: 40% 
camps: 40%
elites:20% 
vault : 1% (nothing to loose)

  if multiple rooms are picked
  choose one at random


- each room that is not a reguler battle has a cooldown and coocking times 
            (number of levels untill they can appear)
ct            cd
  0:quest rooms:1
  2:shops:3
  2:camps:4
  3:elites:5

- only way to reset a cooldown us by entering the room

- once in a bloo moon there is a third choice : Vault rooms: awesome free loot : 
[card,relic,money,potion]


#        [Entities]
 ## [death]
EVERY ENTITY spawns with class "alive" [last-class]
when they die alive is replaced witg "dead"
dead class has death animation in scss

1. after each damage we check if the all enemies are dead || no living enemies exist 
2. if that check succeeds end battle

* we give an entityObj that dies the value {dead:true}