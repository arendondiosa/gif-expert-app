import { getGifs } from "../../helpers/getGifs";

describe("Test with getGifs fetch", () => {
  test("Should get 10 elements", async () => {
    const gifs = await getGifs("Batman");

    expect(gifs.length).toBe(10);
  });

  test("Should get 0 elements without arguments", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
