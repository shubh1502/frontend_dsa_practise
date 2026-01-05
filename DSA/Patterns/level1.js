const pattern = (n)=>{

for(let i = 0;i<n;i++){
    let pattern_str = ""
    for(let j = 0;j<n;j++){
        pattern_str += "*"
    }
    console.log(pattern_str)
}

}

pattern(5)