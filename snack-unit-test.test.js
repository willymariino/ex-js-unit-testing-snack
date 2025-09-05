/*
🏆 Snack 1
Creare un test che verifichi la seguente descrizione:

👉 "La funzione getInitials restituisce le iniziali di un nome completo."
*/

function getInitials(string) {
    return string
        .trim()
        .split(" ")
        .map(p => p[0])
        .join(".")

}

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Giorgio Rossi")).toBe("G.R")
})

/*
🏆 Snack 2
Creare un test che verifichi la seguente descrizione:

👉 "La funzione createSlug restituisce una stringa in lowercase."
*/

function createSlug(string) {
    return string.toLowerCase()
}

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("STRINGA")).toBe("stringa")
}) 
