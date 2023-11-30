let numb1 = +prompt('Enter First Number')
let numb2 = +prompt('Enter Second Number')

let myPromise = new Promise((resolve, reject) => {
    let sum = numb1 + numb2
    if (isNaN(numb1) || isNaN(numb2)) {
        reject(`You can't add these numbers because one or both are not valid numbers`)
    } else {
        resolve(`Result is: ${sum}`)
    }
})

myPromise.then(result => confirm(result),
                reject => confirm(reject)
)
 