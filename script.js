// Practice #1
// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value.Age


const speckTheDog = {
    name: "Speck",
    species: "Beagle",
    nicknames: ["Specky", "Speckers", "Specky Boy"],
    foodsHeLikes: [],
    itemsHeSleepsOn: [],
    age: 4,
    eat: function (food) {
        this.foodsHeLikes.push(food)
    },
    bark: function (something) {
        window.alert(`Speck barks 'WOOF!' at ${something}.`)
    },
    sleep: function (item) {
        this.itemsHeSleepsOn.push(item)
    },
    favoriteToys: [],
    play: function (toy) {
        

        
            if(toy.includes("stuffed")){
                this.favoriteToys.push(toy)
            }
            else{
                console.log("Speck doesn't like the new toy!")
            }
        }
        
    }




speckTheDog.eat("tacos")
speckTheDog.eat("meat")
console.log(speckTheDog)
speckTheDog.bark("squirrels")
speckTheDog.sleep("dog bed")
speckTheDog.sleep("couch")
console.log(speckTheDog)
speckTheDog.play("stuffed bear")
console.log(speckTheDog)

// Practice #2

// Practice: Pet Sounds
// Now that you have an object that represents your pet, it's time to add some behavior. Pick three behaviors that your pet has and add three kys to your pet object. Each key's value should be a function that logs to the console or displays a window alert. Your choice.

// For example, if your pet is a dog, you could add a bark property, and the function would window.alert("WOOF!").

// Once you have define the properties, invoke each behavior. For example:

// angus.bark()
// angus.whine()
// angus.pant()



// Practice #3

// Practice: My Pet "This"
// Give your pet a new key named favoriteToys whose value is an empty array.
// Now define another new key named play whose value is a function with a single parameter named toy.
// The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this keyword (see example above).
// Here's an example. If your pet is a cat, then he likely only likes furry toys, so you could put an if..then condition in the play() method that checks if the word "fuzzy" is in the argument value. If it is, it gets added to the array.