 

export const exerciseOptions = {
   
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };

      export const youtubeOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '1173b95872msha43e8f3aecd4df8p15bcd1jsnb3739a70de77',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        },
      };
      
 export const fetchData= async (url,options) =>{
    const res= await fetch(url,options);
    const data = await res.json();
    return data;
 }