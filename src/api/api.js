import axios from "axios";
import convertToKebabCase from "../helpers/ToKebab";

const BASE_URL =
  process.env.REACT_APP_BASE_URL || "https://ayc-back.herokuapp.com";

// const BASE_URL = "https://ayc-back.herokuapp.com";

// API Class
//
// Static class tying together methods used to get/send to the API.
//

class AycApi {
  // the jwt token will be stored here

  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;

    const headers = { Authorization: `Bearer ${AycApi.token}` };

    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  //
  //**************Invididual API routes
  //

  //   Auth Routes

  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  //Videos Routes

  static async getVideos(tag) {
    if (tag) {
      let res = await this.request(`videos?tag=${tag}`);
      return res.videos;
    } else {
      let res = await this.request(`videos`);
      return res.videos;
    }
  }

  static async addVideo(data) {
    let res = await this.request(`videos`, data, "post");
    return res.video;
  }

  static async getVideo(id) {
    let res = await this.request(`videos/${id}`);
    return res.video;
  }

  static async editVideo(id, data) {
    let res = await this.request(`videos/${id}`, data, "patch");
    return res.video;
  }

  static async deleteVideo(id) {
    let res = await this.request(`videos/${id}`, {}, "delete");
    return res.video;
  }

  static async tagVideo(id, data) {
    let res = await this.request(`videos/${id}/tag`, data, "post");
    return res.video;
  }

  static async untagVideo(id, data) {
    let res = await this.request(`videos/${id}/tag`, data, "delete");
    return res.video;
  }

  //Tags Routes

  static async getTags() {
    let res = await this.request("videos");
    return res.tags;
  }

  static async addTag(data) {
    let res = await this.request("tags", data, "post");
    return res.tag;
  }

  static async getTag(id) {
    let res = await this.request(`tags/${id}`);
    return res.tag;
  }

  static async editTag(id, data) {
    let res = await this.request(`tags/${id}`, data, "patch");
    return res.tag;
  }

  static async deleteTag(id) {
    let res = await this.request(`tags/${id}`, {}, "patch");
    return res.tag;
  }

  //Team Routes

  static async getTeam() {
    let res = await this.request("team");
    return res.team;
  }

  static async addMember(data) {
    let res = await this.request("team", data, "post");
    return res.member;
  }

  static async getMember(id) {
    let res = await this.request(`team/${id}`);
    return res.member;
  }

  static async editMember(id, data) {
    let res = await this.request(`team/${id}`, data, "patch");
    return res.member;
  }

  static async deleteMember(id) {
    let res = await this.request(`team/${id}`, {}, "delete");
    return res.member;
  }

  //Customers Routes

  static async getCustomers() {
    let res = await this.request("customers");
    return res.customers;
  }

  static async addCustomer(data) {
    let res = await this.request("customers", data, "post");
    return res.customer;
  }

  static async getCustomer(id) {
    let res = await this.request(`customers/${id}`);
    return res.customer;
  }

  static async editCustomer(id, data) {
    let res = await this.request(`customers/${id}`, data, "patch");
    return res.customer;
  }

  static async deleteCustomer(id) {
    let res = await this.request(`customers/${id}`, {}, "delete");
    return res.customer;
  }
}

export default AycApi;
