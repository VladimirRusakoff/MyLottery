"use strict";

var _react = _interopRequireDefault(require("react"));

var _client = require("react-dom/client");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import Layout from "../components/Layout";
//const Test = () => {
//    return ( <Layout>
//        test
//    </Layout> )
//};
//export default Test;
var title = _react["default"].createElement("h1", {}, "YO");

var root = (0, _client.createRoot)(document.getElementById("element-where-you-app-will-be-rendered"));
root.render(element);