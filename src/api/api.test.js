import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import api from "./api";

describe("Api", () => {
  // Videos
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

  test("getVideos(tag) returns videos list with requested tag", async function () {
    const mock = new MockAdapter(axios);
    const data = {
      videos: [
        {
          id: 2,
          name: "Another World",
          description: "Sony 4k Demo: Another World",
          link: "https://www.youtube.com/embed/xcJtL7QggTI",
        },
      ],
    };
    mock
      .onGet("https://ayc-back.herokuapp.com/videos?tag=main")
      .reply(200, data);
    api.getVideos("main").then((response) => {
      expect(response).toEqual(data.videos);
    });
  });

  test("getVideo(id) returns video with id", async function () {
    const mock = new MockAdapter(axios);
    const data = {
      video: {
        id: 2,
        name: "Another World",
        description: "Sony 4k Demo: Another World",
        link: "https://www.youtube.com/embed/xcJtL7QggTI",
      },
    };

    mock.onGet("https://ayc-back.herokuapp.com/videos/2").reply(200, data);
    api.getVideo(2).then((response) => {
      expect(response).toEqual(data.video);
    });
  });

  // Tags

  test("getTags returns list of tags", async function () {
    const mock = new MockAdapter(axios);
    const data = {
      tags: [
        {
          id: 1,
          name: "test1",
        },
        {
          id: 2,
          name: "test2",
        },
        {
          id: 3,
          name: "test3",
        },
      ],
    };
    mock.onGet("https://ayc-back.herokuapp.com/tags").reply(200, data);
    api.getTags().then((response) => {
      expect(response).toEqual(data.tags);
    });
  });

  test("getTag(id) returns a tag with id", async function () {
    const mock = new MockAdapter(axios);
    const data = {
      tag: {
        id: 1,
        name: "test1",
      },
    };
    mock.onGet("https://ayc-back.herokuapp.com/tags/1").reply(200, data);
    api.getTag(1).then((response) => {
      expect(response).toEqual(data.tag);
    });
  });

  // Team

  test("getTeam returns a list of team members", async function () {
    const mock = new MockAdapter(axios);
    const data = {
      team: [
        {
          id: 1,
          name: "test1",
          title: "test1",
          bio: "test1",
          img: "testimg1.jpg",
        },
        {
          id: 2,
          name: "test2",
          title: "test2",
          bio: "test2",
          img: "testimg2.jpg",
        },
        {
          id: 3,
          name: "test3",
          title: "test3",
          bio: "test3",
          img: "testimg3.jpg",
        },
      ],
    };
    mock.onGet("https://ayc-back.herokuapp.com/team").reply(200, data);
    api.getTeam().then((response) => {
      expect(response).toEqual(data.team);
    });
  });

  test("getMember(id) returns a team member with id", async function () {
    const mock = new MockAdapter(axios);
    const data = {
      member: {
        id: 1,
        name: "test1",
        title: "test1",
        bio: "test1",
        img: "testimg1.jpg",
      },
    };
    mock.onGet("https://ayc-back.herokuapp.com/team/1").reply(200, data);
    api.getMember(1).then((response) => {
      expect(response).toEqual(data.member);
    });
  });

  // Customers

  test("getCustomers returns a list of customers", async function () {
    const mock = new MockAdapter(axios);
    const data = {
      customers: [
        {
          id: 1,
          name: "test1",
          email: "test1@email.com",
          phone: "111-111-1111",
          company: "test1",
        },
        {
          id: 2,
          name: "test2",
          email: "test2@email.com",
          phone: "222-222-2222",
          company: "test2",
        },
        {
          id: 3,
          name: "test3",
          email: "test3@email.com",
          phone: "333-333-3333",
          company: "test3",
        },
      ],
    };
    mock.onGet("https://ayc-back.herokuapp.com/customers").reply(200, data);
    api.getCustomers().then((response) => {
      expect(response).toEqual(data.customers);
    });
  });

  test("getCustomer(id) returns a customer by id", async function () {
    const mock = new MockAdapter(axios);
    const data = {
      customer: {
        id: 1,
        name: "test1",
        email: "test1@email.com",
        phone: "111-111-1111",
        company: "test1",
      },
    };
    mock.onGet("https://ayc-back.herokuapp.com/customers/1").reply(200, data);
    api.getCustomer(1).then((response) => {
      expect(response).toEqual(data.customer);
    });
  });
});
