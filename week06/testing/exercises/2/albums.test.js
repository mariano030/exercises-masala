const { getAlbumNames } = require("./albums");
const spotify = require("./spotify");

jest.mock("./spotify");

test("album names are in alphabetical order", () => {
    spotify.getAlbumNames.mockResolvedValue([
        "A wonderful Album",
        ["be yourself and sing"],
        ["can you do anything for love?"],
    ]);
    return getAlbumNames("meat loaf").then((albumNames) => {
        expect(albumNames).toEqual(albumNames.sort());
    });
});
