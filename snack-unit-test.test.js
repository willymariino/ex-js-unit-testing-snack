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

    if (!string.trim()) {
        throw new Error("titolo non valido")
    }

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

/*
🏆 Snack 6
Creare un test che verifichi la seguente descrizione:

👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."
*/

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {

    const error = () => createSlug("")
    expect(error).toThrow()
})

/*
🏆 Snack 7
Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.

Creare un test che verifichi le seguenti descrizioni:

👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"


Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).
*/

function findPostById(posts, id) {
    return posts.find(p => p.id === id)
}

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {

    const posts = [
        { id: 1, name: "post 1", slug: "slug 1" },
        { id: 2, name: "post 2", slug: "slug 2" },
        { id: 3, name: "post 3", slug: "slug 3" }
    ]

    expect(findPostById(posts, 1)).toBe(posts[0])
})