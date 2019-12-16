import axios from "axios";

const uri = "https://thundercomb-poetry-db-v1.p.rapidapi.com";
const apikey = "";
const headers = {
  "x-rapidapi-host": "thundercomb-poetry-db-v1.p.rapidapi.com",
  "x-rapidapi-key": apikey
};

export const getTitles = () => {
  return axios
    .get(uri + "/title", { headers })
    .then(
      response => {
        const { data } = response || {};
        const { titles } = data || {};
        return titles;
      },
      reject => {
        return false;
      }
    )
    .catch(error => {
      return false;
    });
};

export const getTitleDetail = title => {
  return axios
    .get(`${uri}/title/${title}`, { headers })
    .then(
      response => {
        const { data } = response || {};
        return data;
      },
      reject => {
        return false;
      }
    )
    .catch(error => {
      return false;
    });
};
