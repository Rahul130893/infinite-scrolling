import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
export const Home = () => {
   
    const [list, setList] = useState([]);
    let page = 1
    let i=1
    const getMoreData = async () => {
      try {
        let res = await axios(
          `https://jsonplaceholder.typicode.com/todos?_limit=10&_page${page}`
        );

        //console.log(res.data);
        const array = [];
        res.data.forEach((e) => array.push(e.title+ "  "+`${ i++}`));
          setList((old) => [...old, ...array]);
          page+=1
          
      } catch (error) {
        console.log(error);
        }
        
    };

  const handleScroll = (e) => {
    
    if (
      e.target.documentElement.scrollTop + window.innerHeight + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      console.log("im at bottm");
      getMoreData();
    }
  };

    useEffect(() => {
    //   axios
    //     .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    //     .then(({ data }) => {
    //      // console.log(data);
    //       let array = [];
    //       data.forEach((e) => array.push(e.title));
    //       setList(array);
    //     });
        getMoreData()
        window.addEventListener("scroll", handleScroll)
    }, [])

    
   
   
  
  
  return (
    <div>
      {list.map((e, index) => {
        return (
          <div key={index} style={{border:"1px solid red", width:"60%", padding:"20px", margin:"auto"}}>
            <p>{e}</p>
          </div>
        );
      })}
    </div>
  );
};
