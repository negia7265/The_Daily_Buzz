import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import India from "./components/India";
import Business from "./components/Business";
import $ from "jquery";
import Login from "./components/Login";
function App() {
  // var params = {
  //   query:
  //     '{"$query":{"conceptUri":"http://en.wikipedia.org/wiki/India"},"$filter":{"forceMaxDataTimeWindow":"31"}}',
  //   resultType: "articles",
  //   articlesSortBy: "date",
  //   articlesCount: 100,
  //   articleBodyLen: -1,
  //   apiKey: "59916f38-88a8-4998-b989-69669b94fb66",
  // };

  // $.ajax({
  //   url: "https://newsapi.ai/api/v1/article/getArticles",
  //   crossDomain: true,
  //   data: params,
  //   method: "GET",
  // })
  //   .done(function (result) {
  //     console.log(result);
  //   })
  //   .fail(function (err) {
  //     console.error(err.statusText);
  //   });

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route exact path="/india" element={<India />} />
            <Route exact path="/business" element={<Business />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
