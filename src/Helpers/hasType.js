export default function hasType(typesList, matchType) {
    let match = false
    typesList.forEach(type => {
        if (type.type.name === matchType) {
            match = true
        }
    })
    return match
}
