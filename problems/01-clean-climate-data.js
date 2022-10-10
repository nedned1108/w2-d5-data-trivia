/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* 01. `listAllCitiesWithCountries`
What are all of the cities included in the data set?

Write a function, `listAllCitiesWithCountries` that returns an array of all of
the cities in the data set, formatted in "city, country" format.

For example, it should return:
[ "Amsterdam, Netherlands", "Athens, Greece", ...plus 103 more cities ]
*/

const listAllCitiesWithCountries = (climateData) => {
    let citiesName = [];
    climateData.map((cityObj) => {
        let cityName = cityObj["city"];
        let countryName = cityObj["country"];
        let str = cityName + ", " + countryName
        citiesName.push(str);
    })
    return citiesName;
}
console.log(listAllCitiesWithCountries(climateData))

/* 02. `listAllUsCities`
What are all of the United States cities included in the data set?

Write a function, `listAllUsCities` that returns an array of all of
the United States cities in the data set, formatted in "city, country" format.

For example, it should return:
[ 'Atlanta GA, United States', 'Austin TX, United States', ...plus more cities ]
*/

// Your code here
const listAllUsCities = (climateData) => {
    let cityOfUS = []
    climateData.forEach((cityObj) => {
        let cityName = cityObj["city"];
        let countryName = cityObj["country"];
        let str = cityName + ", " + countryName
        if (cityObj.country === "United States") {
            cityOfUS.push(str);
        }
    })
    return cityOfUS;
}

console.log(listAllUsCities(climateData))
/* 03. `findDuplicates` What cities are included more than once in the data?

Write a function, `findDuplicates` that finds all duplicate cities. Return an
object including every city name, pointing to an array of IDs for that city.

For example, if `Athens` showed up only once with an id of 2, and 'Mexico City'
was duplicated in id 3, 7, and 9, the returned object should look like:
{ 'Athens: [ 2 ], 'Mexico City': [ 3, 7, 9 ] }
*/

// Your code here
const findDuplicates = (climateData) => {
    let duplicateObj = {};
        climateData.forEach((cityObj) => {
            let cityName = cityObj["city"];
            if (duplicateObj.city === undefined) {
                // duplicateId.push(cityObj.id)
                duplicateObj[cityName] = cityObj.id
            } else {
                duplicatObj[cityName] = duplicatObj[cityName].concat(cityObj.id)
            }
    })
    return duplicateObj;
}
console.log(findDuplicates(climateData))
/* 04. `returnDuplicate` Which city object should be corrected in
the data set?

Write a function, `returnDuplicate` that finds the ONE duplicated city,
and returns the data (object) of the last instance of that city.

For example, if `Paris` showed up twice with an id of 2 and 5, the function
should and return the object with the id of 5.

HINT: Use documentation to research the `find()` method in JavaScript. You may,
but do not have to, use this method to solve this problem.
*/

// Your code here

/* 05. `correctDuplicate` Correct the city name of the duplicated city.

Write a function, `correctDuplicate` that finds the ONE duplicated city,
and changes the name of the city to the name provided as a second argument.

For example, if `Paris` showed up twice with an id of 2 and 5, calling
correctDuplicate(climateData, "Nice"), should change the city for the object
with id of 5 to 'Nice' and then return that object with the corrected city name.

HINT: Can you use functions you have already written to help solve this problem?
*/

// Your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ listAllCitiesWithCountries, listAllUsCities, findDuplicates,
    returnDuplicate, correctDuplicate ];
