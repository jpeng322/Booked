import { useState } from "react";

import About from "../src/pages/About"
import "/src/App.css";
import axios from "axios";
import ProviderCard from "./pages/ProviderCard";
import "./ProviderCard.css"; 
import providers from "./providers";


function App() {
  const [count, setCount] = useState(0);

  async function checkout() {
    console.log("asdasd");
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:4000/payment",
        headers: { "Content-Type": "application/json" },
        //data will equal to payment fee of service id instead of items
        data: {
          // id: 1
          items: [
            { id: 1, quantity: 3 },
            { id: 2, quantity: 1 },
          ],
        },
      });
      console.log(response)
      if (response) {
        window.location = response.data.url
      }

    } catch (e) {
      console.log(e);
    }
  }
    // () => {
    //   fetch("http://localhost:3001/payment", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       items: [
    //         { id: 1, quantity: 3 },
    //         { id: 2, quantity: 1 },
    //       ],
    //     }),
    //   })
    //     .then((res) => {
    //       console.log(res)
    //       if (res.ok) return res.json();
    //       return res.json().then((json) => Promise.reject(json));
    //     })
    //     .then(({ url }) => {
    //       window.location = url;
    //     })
    //     .catch((e) => {
    //       console.error(e.error);
    //     });
    // };
  // }
  return (

    <div className="App">
      <About />
     <ProviderCard providers={providers} />

    </div>
  );
}

export default App;
