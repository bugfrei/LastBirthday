const thisYear = (new Date()).getFullYear();
const peoples = [
    [ "Hugo", 7, 21 ],
    [ "Peter", 10, 13 ],
    [ "Marie", 5, 1 ],
    [ "Birgit", 12, 1 ]
].map( (i) => { 
    return { 
    "Name": i[0], 
    "Birthday": new Date(thisYear, i[1] - 1, i[2]), 
    "Out": function() { console.log(`Name: ${this.Name}, Birthday: ${this.Birthday.toLocaleString()}`); }
  }
} );

function GetPreviousBirthday() {
    let today = new Date(thisYear, 9, 15);
    for(let p of peoples) { 
        p.Out();
    }
    console.log(`Today was ${today.toLocaleString()}`);
    let prev = undefined;
    let prevDiff = undefined;

    // Lowest positive Diff-Value = nearst Date before Today in actual Year
    for(let p of peoples) {
        let diff = today - p.Birthday
        if (diff >= 0) {
            if (!prevDiff || diff < prevDiff) {
                prevDiff = diff;
                prev = p;
            }
        }
    }

    if (!prevDiff) {
        // Nothing found, no one had birthday this year

        // Lowest negative diff Value = Nearest Birthdate to Dec. 31 past year
        for(let p of peoples) {
            let diff = today - p.Birthday
            if (diff < 0) {
                if (!prevDiff || diff < prevDiff) {
                    prevDiff = diff;
                    prev = p;
                }
            }
        }

    }

    return prev;
}

var result = GetPreviousBirthday();
console.log("================================================== RESULT ==================================================");
result.Out();

