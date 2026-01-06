const pattern = (n)=>{
    for(let i=0;i<n;i++){
        let pattern_str = ""
        for(let j=0;j<=i;j++){
            pattern_str += "*"
        }
        console.log(pattern_str)
    }
}

pattern(5)

// Output:
// (prints a right-angled triangle pattern of asterisks)
// *
// **
// ***
// ****
// *****