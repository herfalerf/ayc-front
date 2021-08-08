import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import api from "./api";

describe("Api", () => {
  test("getVideos returns videos list", async function () {
    const mock = new MockAdapter(axios);
    const data = {
      videos: [
        {
          id: 2,
          name: "Another World",
          description: "Sony 4k Demo: Another World",
          link: "https://www.youtube.com/embed/xcJtL7QggTI",
        },
        {
          id: 3,
          name: "Unbelievable Beauty",
          description: "4K Video (Ultra HD) Unbelieveable Beauty",
          link: "https://www.youtube.com/embed/K1QICrgxTjA",
        },
        {
          id: 1,
          name: "Costa Rica",
          description: "Costa Rica in 4k",
          link: "https://www.youtube.com/embed/LXb3EKWsInQ",
        },
        {
          id: 4,
          name: "Wild Animals",
          description: "Ultimate Wild Animals Collection in 8K ULTRA HD",
          link: "https://www.youtube.com/embed/Zv11L-ZfrSg",
        },
      ],
    };
    mock.onGet("https://ayc-back.herokuapp.com/videos").reply(200, data);

    api.getVideos().then((response) => {
      expect(response).toEqual(data.videos);
    });
  });
});
