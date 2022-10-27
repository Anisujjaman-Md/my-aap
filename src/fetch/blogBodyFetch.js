export const getBlogBody = async () => {
    try {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if(res.ok){
          let data = await res.json();
          return data;
      }
      return null
        
    } catch (error) {
      console.log(error)
      alert("Could not connect to API server")
      throw Error("Could not connect to API server");
    }
  };