import axios from "axios";

const getData = objectType => axios
    .get(`https://dev.vozilla.pl/api-client-portal/map?objectType=${objectType}`)
    .then(response => response.data.objects);

export default getData;