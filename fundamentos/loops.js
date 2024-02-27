const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()

funcs[8]()

// teste usando LET EM LOOPING
const funcs2 = []

for (let b = 0; b < 10; b++){
    funcs2.push(function(){
        console.log(b)
    })
}

funcs2[2]()

funcs2[8]()