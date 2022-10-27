const baseApiUrl = "http://localhost:8001"


export const getBlogs = async () => {
  try {
    let res = await fetch(`${baseApiUrl}/blogs`);
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
