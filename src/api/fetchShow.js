import axios from 'axios';

const fetchShow = () => {
    return axios
      .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
    //   .then(res => {
    //     setShow(res.data);
    //     setSeasons(formatSeasons(res.data._embedded.episodes));
    //   });
  };

  export default fetchShow;