async function getData() {
    const url = 'https://dummyjson.com/users';
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    //   const result =  displayResult((result))
    } catch (error) {
      console.error(error.message);
    }
  }
 getData()  



 