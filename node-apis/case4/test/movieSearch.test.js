const movieSearch = require("../movieSearch")
const axios = require("axios")
const MovieSearch = require("../movieSearch")


jest.mock("axios")

describe("MovieSearch", ()=>{
    it ("buildUrl", ()=>{
        const name = "Rocky"
        const movie = new movieSearch();
        const url = movie.buildUrl(name)
        expect(url).toEqual(`https://www.omdbapi.com/?t=${name}&apikey=trilogy`)

    })

    it("search for given name", ()=>{
        const name = "Rocky"
        const movie = new movieSearch()
        axios.get.mockReturnValue(
            Promise.resolve({data: {}})
        )

        expect(movie.search(name)).resolves.toEqual({data: {}})
        expect(a)
    })
})

