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
    return string
        .toLowerCase()
        .split(" ")
        .join("-")
}

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("STRINGA")).toBe("stringa")
})

/*
🏆 Snack 3
Creare un test che verifichi la seguente descrizione:

👉 "La funzione average calcola la media aritmetica di un array di numeri."
*/

function average(arr) {
    const sum = arr.reduce((acc, number) => acc + number, 0)
    const average = sum / arr.length
    return average
}


test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([4, 6, 9, 10, 14])).toBe(8.6)
})

/*
🏆 Snack 4
Creare un test che verifichi la seguente descrizione:

👉 "La funzione createSlug sostituisce gli spazi con -."


📌 Esempi:

createSlug("Questo è un test") → "questo-e-un-test"
*/


test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug("Questo è un test")).toBe("questo-è-un-test")
})

/*
🏆 Snack 5
Creare un test che verifichi la seguente descrizione:

👉 "La funzione isPalindrome verifica se una stringa è un palindromo."

📌 Nota: una stringa palindroma è una sequenza di caratteri che si legge uguale sia da sinistra a destra che da destra a sinistra.
*/

function isPalindrome(string) {
    const reversed = string.split("").reverse().join("")

    if (string === reversed) {
        return string
    }
    else {
        return "non è palindroma"
    }
}

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("otto")).toBe("otto")
    expect(isPalindrome("hamburger")).toBe("non è palindroma")
})