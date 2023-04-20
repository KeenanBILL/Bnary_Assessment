import axios from "axios";
import { createStore } from 'vuex';
const APIkey = "https://newsapi.org/v2/everything?q=tesla&from=2023-03-20&sortBy=publishedAt&apiKey=c0c1fbe267e1471da76710b32449fae4";

export default createStore({
  state: {
    articles: null,
    broadcast: null,
  },
  getters: {
  },
  mutations: {
    setArticles(state, values) {
      state.articles = values;
    },
    setMessage(state, broadcast) {
      state.broadcast = broadcast
    }
  },
  actions: {
    async displayArticles(context) {
      const res = await axios.get(`${APIkey}`);
      const { articles, err} = await res.data;
      if (articles) {
        context.commit("setArticles", articles);
      }else{
        context.commit("setMessage", err);
      }
      }
    },
  modules: {
  },
});
