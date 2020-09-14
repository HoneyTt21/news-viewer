import React, {useState} from "react";
import axios from "axios";

import NewsList from "./components/NewsList";

function App() {
    // const [data, setData] = useState(null);
    // const onClick = async () => {
    //     try {
    //         const response = await axios.get(
    //             "http://newsapi.org/v2/top-headlines?country=kr&apiKey=0eec4552faaf4438b22c220e6b0ea706"
    //         );
    //         setData(response.data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    return (
        // <div>
        //     <div>
        //         <button onClick={onClick}>Load</button>
        //     </div>
        //     {data && (
        //         <textarea
        //             rows={7}
        //             value={JSON.stringify(data, null, 2)}
        //             readOnly={true}
        //         />
        //     )}
        // </div>
        <NewsList />
    );
}

export default App;
