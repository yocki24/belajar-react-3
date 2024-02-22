const myPrfoile = {
    name: 'febri',
    umur: 22,
    status: 'kkk'
}

const updateProfile = {
    name: 'rian',
    umur: 34,
    status: 'lk'
}
const myUpdatedProfile = {...myPrfoile, ...updateProfile}
console.log(myUpdatedProfile)