const taxonomyMatcher = require('../index');
const matcher = require('../src/matcher');
const debug = true; // enable to show match outputs

// most of the test inputs are structured like "<product title> <local product category>"

let tests = [
    {
        testID: 1,
        input: "Roll Up Cotton Chino Shorts Womens > Shorts > Casual",
        expectedOutput: "Clothing & Accessories > Clothing > Shorts",
        shouldPass: true
    }, {
        testID: 2,
        input: "Mounting Bush 46363 by Febi Bilstein Vehicles, Parts and Accessories > Vehicle Accessories > Vehicle Parts",
        expectedOutput: "Vehicles & Parts > Vehicle Parts & Accessories",
        shouldPass: true
    }, {
        testID: 3,
        input: "Sealey 8 Piece 3/8\" Drive Deep Hexagon WallDrive Socket Set Imperial 3/8\" Hand Tools > Socket Sets > Sockets & Spanners > Sockets",
        expectedOutput: "Hardware > Tools > Socket Drivers",
        shouldPass: true
    }, {
        testID: 4,
        input: "Compatible Black Brother TN135BK High Capacity Toner Cartridge > Printers > Inks and Toners",
        expectedOutput: "Electronics > Print, Copy, Scan & Fax > Printer, Photocopier & Fax Machine Accessories > Printer Consumables > Toner & Inkjet Cartridge Refills",
        shouldPass: true
    }, {
        testID: 5,
        input: "A Really bad title",
        expectedOutput: "Electronics > Print, Copy, Scan & Fax > Printer, Photocopier & Fax Machine Accessories > Printer Consumables > Toner & Inkjet Cartridge Refills",
        shouldPass: false
    }, {
        testID: 6,
        input: "White Carnations Fern Gyp 20 stem Bouquet",
        expectedOutput: "Toys & Games > Puzzles > Wooden & Pegged Puzzles",
        shouldPass: false
    }, {
        testID: 7,
        input: "White Carnations Fern Gyp 20 stem Bouquet",
        expectedOutput: "Toys & Games > Puzzles > Wooden & Pegged Puzzles",
        shouldPass: false
    }, {
        testID: 8,
        input: "Dickies Mens Everyday Hi-Vis Trousers Orange / Navy 34\" 34\" Workwear > High Vis Clothing > High Vis Trousers",
        expectedOutput: "Clothing & Accessories > Clothing > Trousers & Jeans",
        shouldPass: true
    }, {
        testID: 9,
        input: "", // deliberately empty for testing
        expectedOutput: "Clothing & Accessories > Clothing > Trousers & Jeans",
        shouldPass: false
    }, {
        testID: 10,
        input: "Draper Expert HSS Drill Bits 1mm Pack of 10 Power Tool Accessories > Drilling Accessories > HSS Drill Bits",
        expectedOutput: "Hardware > Tool Accessories > Drill & Screwdriver Accessories > Drill & Screwdriver Bits",
        shouldPass: true
    }
]
let taxonomy = new taxonomyMatcher('en-GB', 100)

tests.forEach((test) => {
    let matched = taxonomy.match(test.input);
    if (debug) console.log(matched)
    if (!matched) {
        if (!test.shouldPass) console.log(`Test ${test.testID} passed (no match, match not expected)`)
        else console.log(`Test ${test.testID} failed (no match, match was expected)`)
    } else {
        if (matched.full_path === test.expectedOutput) {
            if (test.shouldPass) console.log(`Test ${test.testID} passed (matched, match was expected)`)
            else console.log(`Test ${test.testID} failed/passed (matched, match not expected)`)
        } else console.log(`Test ${test.testID} failed (matched, but to the wrong category)`)
    }
})
