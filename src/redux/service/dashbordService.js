import axios from 'axios'

const API = axios.create({

  baseURL: "http://34.159.147.205",
  headers: {
    ContentType: "application/json",
  },
});


const getPlace = () => {
  return API.get("/trip/place/");
};

const getIssykKul = () => {
  return API.get(`http://34.159.147.205/place/?region=issyk-kul`);
};
const getTalas = () => {
  return API.get(`http://34.159.147.205/place/?region=talas`);
};
const getBatken = () => {
  return API.get(`http://34.159.147.205/place/?region=batken`);
};
const getNaryn = () => {
  return API.get(`http://34.159.147.205/place/?region=naryn`);
};
const getOsh = () => {
  return API.get(`http://34.159.147.205/place/?region=osh`);
};
const getChui = () => {
  return API.get(`http://34.159.147.205/place/?region=chui`);
};
const getJalalAbad = () => {
  return API.get(`http://34.159.147.205/place/?region=jalal-abad`);
};

const getArticle = () => {
  return API.get('comment/')
}

// const update = (id, data) => {
//   return API.put(`/tutorials/${id}`, data);
// };

// const remove = id => {
//   return API.delete(`/tutorials/${id}`);
// };

// const removeAll = () => {
//   return API.delete(`/tutorials`);
// };

// const findByTitle = title => {
//   return API.get(`/tutorials?title=${title}`);
// };

const dashbordService = {
  getPlace,
  getChui,
  getIssykKul,
  getBatken,
  getJalalAbad,
  getOsh,
  getNaryn,
  getTalas,
  getArticle
};

export default dashbordService;