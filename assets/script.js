// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Sila Yardee" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Overall total quantity
let total_quantity = 0

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Code to update cookie quantities and overall quantity total in Order Summary
// Update the quantity for a particular cookie flavor which is passed in as an
// argument.
function updateOrderSummaryTotals(cookieFlavor)
{
    switch(cookieFlavor)
    {
        case 'gb':
            document.getElementById('qty-gb').textContent = `${gb}`
            break
        case 'cc':
            document.getElementById('qty-cc').textContent = `${cc}`
            break
        case 'sugar':
            document.getElementById('qty-sugar').textContent = `${sugar}`
            break
    }
    
    total_quantity = gb + cc + sugar
    document.getElementById('qty-total').textContent = `${total_quantity}`
}

// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    //console.log('Ginger bread + button was clicked!')
    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
    gb++
    updateOrderSummaryTotals('gb')
})

// TODO: Hook up event listeners for the rest of the buttons

// Event listener for clicks on the "-" button for Ginger Bread cookies
document.getElementById('minus-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    //console.log('Ginger bread - button was clicked!')

    // TODO: Write the code to be run when the "-" button for "Ginger Bread" is clicked
    if (gb === 0)
    {
        // Special case: don't let cookie count go negative
        gb = 0
    }
    else
    {
        gb--
    }

    updateOrderSummaryTotals('gb')
})

// Event listener for clicks on the "+" button for Chocolate Chip cookies
document.getElementById('add-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    //console.log('Chocolate chip + button was clicked!')
    // TODO: Write the code to be run when the "+" button for "Chocolate Chip" is clicked
    cc++
    updateOrderSummaryTotals('cc')
})

// Event listener for clicks on the "-" button for Chocolate Chip cookies
document.getElementById('minus-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    //console.log('Chocolate chip - button was clicked!')

    // TODO: Write the code to be run when the "-" button for "Chocolate chip" is clicked
    if (cc === 0)
    {
        // Special case: don't let cookie count go negative
        cc = 0
    }
    else
    {
        cc--
    }

    updateOrderSummaryTotals('cc')
})

// Event listener for clicks on the "+" button for Sugar Sprinkle cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    //console.log('Sugar Sprinkle + button was clicked!')
    // TODO: Write the code to be run when the "+" button for "Sugar Sprinkle" is clicked
    sugar++
    updateOrderSummaryTotals('sugar')
})

// Event listener for clicks on the "-" button for Sugar Sprinkle cookies
document.getElementById('minus-sugar').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    //console.log('Sugar Sprinkle - button was clicked!')

    // TODO: Write the code to be run when the "-" button for "Sugar Sprinkle" is clicked
    if (sugar === 0)
    {
        // Special case: don't let cookie count go negative
        sugar = 0
    }
    else
    {
        sugar--
    }

    updateOrderSummaryTotals('sugar')
})
