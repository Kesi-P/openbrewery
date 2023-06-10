"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./models/users.js":
/*!*************************!*\
  !*** ./models/users.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst { Schema  } = mongoose;\ntry {\n    mongoose.connect(\"mongodb+srv://Kesi:932411@login.nqwyhf9.mongodb.net/?retryWrites=true&w=majority\", {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    console.log(\"MongoDB connected!\");\n} catch (error) {\n    console.log(\"MongoDB connection error:\", error);\n}\nconst userSchema = new Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    }\n});\n// const User = mongoose.model('User', userSchema);\n// module.exports = User;\nmodule.exports = mongoose.models.User || mongoose.model(\"User\", userSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlcnMuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBQ3pCLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdGO0FBQ25CLElBQUk7SUFDSkEsU0FBU0csT0FBTyxDQUFDLG9GQUFvRjtRQUNuR0MsaUJBQWlCLElBQUk7UUFDckJDLG9CQUFvQixJQUFJO0lBQzFCO0lBQ0FDLFFBQVFDLEdBQUcsQ0FBQztBQUNaLEVBQUUsT0FBT0MsT0FBTztJQUNoQkYsUUFBUUMsR0FBRyxDQUFDLDZCQUE2QkM7QUFDekM7QUFDQSxNQUFNQyxhQUFhLElBQUlQLE9BQU87SUFDNUJRLE1BQU07UUFDSkMsTUFBTUM7UUFDTkMsVUFBVSxJQUFJO0lBQ2hCO0lBQ0FDLE9BQU87UUFDTEgsTUFBTUM7UUFDTkMsVUFBVSxJQUFJO1FBQ2RFLFFBQVEsSUFBSTtJQUNkO0lBQ0FDLFVBQVU7UUFDUkwsTUFBTUM7UUFDTkMsVUFBVSxJQUFJO0lBQ2hCO0FBQ0Y7QUFFQSxtREFBbUQ7QUFFbkQseUJBQXlCO0FBQ3pCSSxPQUFPQyxPQUFPLEdBQ1ZsQixTQUFTbUIsTUFBTSxDQUFDQyxJQUFJLElBQUlwQixTQUFTcUIsS0FBSyxDQUFDLFFBQVFaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJld2VyeS8uL21vZGVscy91c2Vycy5qcz83M2YwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xyXG50cnkge1xyXG5tb25nb29zZS5jb25uZWN0KFwibW9uZ29kYitzcnY6Ly9LZXNpOjkzMjQxMUBsb2dpbi5ucXd5aGY5Lm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIiwge1xyXG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcclxufSk7XHJcbmNvbnNvbGUubG9nKCdNb25nb0RCIGNvbm5lY3RlZCEnKTtcclxufSBjYXRjaCAoZXJyb3IpIHtcclxuY29uc29sZS5sb2coJ01vbmdvREIgY29ubmVjdGlvbiBlcnJvcjonLCBlcnJvcik7XHJcbn1cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIG5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICBlbWFpbDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB1bmlxdWU6IHRydWVcclxuICB9LFxyXG4gIHBhc3N3b3JkOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH1cclxufSk7XHJcblxyXG4vLyBjb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWwoJ1VzZXInLCB1c2VyU2NoZW1hKTtcclxuXHJcbi8vIG1vZHVsZS5leHBvcnRzID0gVXNlcjtcclxubW9kdWxlLmV4cG9ydHMgPVxyXG4gICAgbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCB1c2VyU2NoZW1hKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiU2NoZW1hIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInVzZXJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/users.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst User = __webpack_require__(/*! ../../../models/users */ \"(api)/./models/users.js\");\nconst JWT_SECRET = process.env.NEXTAUTH_SECRET;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            // Custom credentials provider (e.g., username/email and password)\n            type: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            authorize: async (credentials, res)=>{\n                // Add your own authentication logic here\n                console.log(\"lll\");\n                const { email , password  } = credentials;\n                const user = await User.findOne({\n                    email\n                }).exec();\n                const isMatch = bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compareSync(password, user.password);\n                if (user && isMatch) {\n                    return Promise.resolve(user);\n                } else {\n                    return Promise.resolve(null);\n                }\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/login\"\n    },\n    callbacks: {\n        async jwt ({ token , user  }) {\n            return {\n                ...token,\n                ...user\n            };\n        },\n        async session ({ session , token , user  }) {\n            session.user = token;\n            return session;\n        }\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    jwt: {\n        secret: JWT_SECRET\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUM7QUFFZ0M7QUFFcEM7QUFFN0IsTUFBTUcsT0FBT0MsbUJBQU9BLENBQUM7QUFDckIsTUFBTUMsYUFBYUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0FBRTlDLGlFQUFlUixnREFBUUEsQ0FBQztJQUN0QlMsV0FBVztRQUNUUixzRUFBbUJBLENBQUM7WUFDbEIsa0VBQWtFO1lBQ2xFUyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNILE1BQU07Z0JBQVE7Z0JBQ3ZDSSxVQUFVO29CQUFFRCxPQUFPO29CQUFZSCxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0FLLFdBQVcsT0FBT0osYUFBWUssTUFBUTtnQkFDcEMseUNBQXlDO2dCQUNyQ0MsUUFBUUMsR0FBRyxDQUFDO2dCQUVaLE1BQU0sRUFBQ04sTUFBSyxFQUFFRSxTQUFRLEVBQUMsR0FBR0g7Z0JBSTFCLE1BQU1RLE9BQU8sTUFBTWhCLEtBQUtpQixPQUFPLENBQUM7b0JBQUVSO2dCQUFNLEdBQUdTLElBQUk7Z0JBQy9DLE1BQU1DLFVBQVVwQiwyREFBa0IsQ0FBQ1ksVUFBVUssS0FBS0wsUUFBUTtnQkFFMUQsSUFBSUssUUFBUUcsU0FBUTtvQkFDbkIsT0FBT0UsUUFBUUMsT0FBTyxDQUFDTjtnQkFDdEIsT0FBTztvQkFDUCxPQUFPSyxRQUFRQyxPQUFPLENBQUMsSUFBSTtnQkFDM0IsQ0FBQztZQUVQO1FBRUY7S0FDRDtJQUNEQyxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtJQUNBQyxXQUFVO1FBQ1IsTUFBTUMsS0FBSSxFQUFDQyxNQUFLLEVBQUNYLEtBQUksRUFBQyxFQUFDO1lBRXJCLE9BQU87Z0JBQUMsR0FBR1csS0FBSztnQkFBRSxHQUFHWCxJQUFJO1lBQUE7UUFDM0I7UUFHRixNQUFNWSxTQUFRLEVBQUVBLFFBQU8sRUFBRUQsTUFBSyxFQUFFWCxLQUFJLEVBQUUsRUFBQztZQUNyQ1ksUUFBUVosSUFBSSxHQUFHVztZQUNiLE9BQU9DO1FBQ1g7SUFFRjtJQUNFQSxTQUFTO1FBQ1BDLFVBQVU7SUFFWjtJQUNBSCxLQUFLO1FBQ0hJLFFBQVE1QjtJQUNWO0FBRUYsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJld2VyeS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcclxuaW1wb3J0IFByb3ZpZGVycyBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzJztcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIlxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnXHJcblxyXG5jb25zdCBVc2VyID0gcmVxdWlyZSgnLi4vLi4vLi4vbW9kZWxzL3VzZXJzJylcclxuY29uc3QgSldUX1NFQ1JFVCA9IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICAvLyBDdXN0b20gY3JlZGVudGlhbHMgcHJvdmlkZXIgKGUuZy4sIHVzZXJuYW1lL2VtYWlsIGFuZCBwYXNzd29yZClcclxuICAgICAgdHlwZTogJ2NyZWRlbnRpYWxzJyxcclxuICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICBlbWFpbDogeyBsYWJlbDogJ0VtYWlsJywgdHlwZTogJ2VtYWlsJyB9LFxyXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiAnUGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnIH1cclxuICAgICAgfSxcclxuICAgICAgYXV0aG9yaXplOiBhc3luYyAoY3JlZGVudGlhbHMscmVzKSA9PiB7XHJcbiAgICAgICAgLy8gQWRkIHlvdXIgb3duIGF1dGhlbnRpY2F0aW9uIGxvZ2ljIGhlcmVcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xsbCcpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCB7ZW1haWwsIHBhc3N3b3JkfSA9IGNyZWRlbnRpYWxzIGFzIHtcclxuICAgICAgICAgICAgICBlbWFpbDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KS5leGVjKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTWF0Y2ggPSBiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHVzZXIgJiYgaXNNYXRjaCl7XHJcbiAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVzZXIpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICB9LFxyXG4gICAgICAgIFxyXG4gICAgICB9KSxcclxuICAgIF0sXHJcbiAgICBwYWdlczoge1xyXG4gICAgICBzaWduSW46ICcvbG9naW4nXHJcbiAgICB9LFxyXG4gICAgY2FsbGJhY2tzOntcclxuICAgICAgYXN5bmMgand0KHt0b2tlbix1c2VyfSl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHsuLi50b2tlbiwgLi4udXNlcn1cclxuICAgICAgfSxcclxuICAgICAgXHJcbiAgICBcclxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiwgdXNlciB9KXtcclxuICAgICAgc2Vzc2lvbi51c2VyID0gdG9rZW5cclxuICAgICAgICByZXR1cm4gc2Vzc2lvblxyXG4gICAgfSxcclxuICAgIFxyXG4gIH0sXHJcbiAgICBzZXNzaW9uOiB7XHJcbiAgICAgIHN0cmF0ZWd5OiAnand0JyxcclxuICAgICAgXHJcbiAgICB9LFxyXG4gICAgand0OiB7XHJcbiAgICAgIHNlY3JldDogSldUX1NFQ1JFVCxcclxuICAgIH0sXHJcbiAgICBcclxuICB9KTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwiVXNlciIsInJlcXVpcmUiLCJKV1RfU0VDUkVUIiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsInByb3ZpZGVycyIsInR5cGUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiZmluZE9uZSIsImV4ZWMiLCJpc01hdGNoIiwiY29tcGFyZVN5bmMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInBhZ2VzIiwic2lnbkluIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJzZWNyZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();