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

/*
🏆 Snack 3
Creare un test che verifichi la seguente descrizione:

👉 "La funzione average calcola la media aritmetica di un array di numeri."
*/

function average([arr]) {
    const sum = arr.reduce((acc, number) => acc + number, 0)
    const average = sum / arr.length
    return average
}


test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([4, 6, 9, 10, 14])).toBe(8.6)
})

