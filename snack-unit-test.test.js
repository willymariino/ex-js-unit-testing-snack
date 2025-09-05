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