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

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst User = __webpack_require__(/*! ../../../models/users */ \"(api)/./models/users.js\");\nconst JWT_SECRET = process.env.NEXTAUTH_SECRET;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            // Custom credentials provider (e.g., username/email and password)\n            type: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            authorize: async (credentials, res)=>{\n                // Add your own authentication logic here\n                const { email , password  } = credentials;\n                const user = await User.findOne({\n                    email\n                }).exec();\n                const isMatch = bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compareSync(password, user.password);\n                if (user && isMatch) {\n                    return Promise.resolve(user);\n                } else {\n                    return Promise.resolve(null);\n                }\n            }\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    pages: {\n        signIn: \"/login\"\n    },\n    callbacks: {\n        // async signIn({user, account, profile}){\n        //   console.log('account',user,user.email,user.password,user.id, account)\n        //   const email = user.email;\n        //   //const password = user.password\n        //   const finduser = await User.findOne({ email }).exec();\n        //   //const isMatch = bcrypt.compareSync(password, finduser.password);\n        //   if (finduser && (user.id === account.providerAccountId)){return true}\n        //   else{return true}\n        // },\n        async signIn ({ account , profile  }) {\n            if (account.provider === \"google\") {\n                return profile.email && profile.email.endsWith(\"@example.com\");\n            }\n            return true // Do different verification for other providers that don't have `email_verified`\n            ;\n        },\n        async jwt ({ token , user  }) {\n            return {\n                ...token,\n                ...user\n            };\n        },\n        async session ({ session , token , user  }) {\n            session.user = token;\n            return session;\n        }\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    jwt: {\n        secret: JWT_SECRET\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpQztBQUNnQztBQUNwQztBQUUyQjtBQUV4RCxNQUFNSSxPQUFPQyxtQkFBT0EsQ0FBQztBQUNyQixNQUFNQyxhQUFhQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7QUFFOUMsaUVBQWVULGdEQUFRQSxDQUFDO0lBQ3RCVSxXQUFXO1FBQ1RULHNFQUFtQkEsQ0FBQztZQUNsQixrRUFBa0U7WUFDbEVVLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0gsTUFBTTtnQkFBUTtnQkFDdkNJLFVBQVU7b0JBQUVELE9BQU87b0JBQVlILE1BQU07Z0JBQVc7WUFDbEQ7WUFDQUssV0FBVyxPQUFPSixhQUFZSyxNQUFRO2dCQUNwQyx5Q0FBeUM7Z0JBQ3JDLE1BQU0sRUFBQ0osTUFBSyxFQUFFRSxTQUFRLEVBQUMsR0FBR0g7Z0JBSTFCLE1BQU1NLE9BQU8sTUFBTWQsS0FBS2UsT0FBTyxDQUFDO29CQUFFTjtnQkFBTSxHQUFHTyxJQUFJO2dCQUMvQyxNQUFNQyxVQUFVbkIsMkRBQWtCLENBQUNhLFVBQVVHLEtBQUtILFFBQVE7Z0JBRTFELElBQUlHLFFBQVFHLFNBQVE7b0JBQ25CLE9BQU9FLFFBQVFDLE9BQU8sQ0FBQ047Z0JBQ3RCLE9BQU87b0JBQ1AsT0FBT0ssUUFBUUMsT0FBTyxDQUFDLElBQUk7Z0JBQzNCLENBQUM7WUFHUDtRQUVGO1FBQ0FyQixpRUFBY0EsQ0FBQztZQUNic0IsVUFBVWxCLFFBQVFDLEdBQUcsQ0FBQ2tCLGdCQUFnQjtZQUN0Q0MsY0FBY3BCLFFBQVFDLEdBQUcsQ0FBQ29CLG9CQUFvQjtRQUNoRDtLQUNEO0lBQ0RDLE9BQU87UUFDTEMsUUFBUTtJQUVWO0lBQ0FDLFdBQVU7UUFDUiwwQ0FBMEM7UUFDMUMsMEVBQTBFO1FBQzFFLDhCQUE4QjtRQUM5QixxQ0FBcUM7UUFDckMsMkRBQTJEO1FBQzNELHVFQUF1RTtRQUN2RSwwRUFBMEU7UUFDMUUsc0JBQXNCO1FBRXRCLEtBQUs7UUFDTCxNQUFNRCxRQUFPLEVBQUVFLFFBQU8sRUFBRUMsUUFBTyxFQUFFLEVBQUU7WUFDakMsSUFBSUQsUUFBUUUsUUFBUSxLQUFLLFVBQVU7Z0JBQ2pDLE9BQU9ELFFBQVFwQixLQUFLLElBQUlvQixRQUFRcEIsS0FBSyxDQUFDc0IsUUFBUSxDQUFDO1lBQ2pELENBQUM7WUFDRCxPQUFPLElBQUksQ0FBQyxpRkFBaUY7O1FBQy9GO1FBQ0EsTUFBTUMsS0FBSSxFQUFDQyxNQUFLLEVBQUNuQixLQUFJLEVBQUMsRUFBQztZQUVyQixPQUFPO2dCQUFDLEdBQUdtQixLQUFLO2dCQUFFLEdBQUduQixJQUFJO1lBQUE7UUFDM0I7UUFHRixNQUFNb0IsU0FBUSxFQUFFQSxRQUFPLEVBQUVELE1BQUssRUFBRW5CLEtBQUksRUFBRSxFQUFDO1lBQ3JDb0IsUUFBUXBCLElBQUksR0FBR21CO1lBQ2IsT0FBT0M7UUFDWDtJQUVGO0lBQ0VBLFNBQVM7UUFDUEMsVUFBVTtJQUVaO0lBQ0FILEtBQUs7UUFDSEksUUFBUWxDO0lBQ1Y7QUFFRixFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmV3ZXJ5Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiXHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnXHJcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcclxuXHJcbmNvbnN0IFVzZXIgPSByZXF1aXJlKCcuLi8uLi8uLi9tb2RlbHMvdXNlcnMnKVxyXG5jb25zdCBKV1RfU0VDUkVUID0gcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIC8vIEN1c3RvbSBjcmVkZW50aWFscyBwcm92aWRlciAoZS5nLiwgdXNlcm5hbWUvZW1haWwgYW5kIHBhc3N3b3JkKVxyXG4gICAgICB0eXBlOiAnY3JlZGVudGlhbHMnLFxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiAnRW1haWwnLCB0eXBlOiAnZW1haWwnIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6ICdQYXNzd29yZCcsIHR5cGU6ICdwYXNzd29yZCcgfVxyXG4gICAgICB9LFxyXG4gICAgICBhdXRob3JpemU6IGFzeW5jIChjcmVkZW50aWFscyxyZXMpID0+IHtcclxuICAgICAgICAvLyBBZGQgeW91ciBvd24gYXV0aGVudGljYXRpb24gbG9naWMgaGVyZVxyXG4gICAgICAgICAgICBjb25zdCB7ZW1haWwsIHBhc3N3b3JkfSA9IGNyZWRlbnRpYWxzIGFzIHtcclxuICAgICAgICAgICAgICBlbWFpbDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHBhc3N3b3JkOiBzdHJpbmcsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KS5leGVjKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzTWF0Y2ggPSBiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHVzZXIgJiYgaXNNYXRjaCl7XHJcbiAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVzZXIpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgfSksXHJcbiAgICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcclxuICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUXHJcbiAgICAgIH0pXHJcbiAgICBdLFxyXG4gICAgcGFnZXM6IHtcclxuICAgICAgc2lnbkluOiAnL2xvZ2luJyxcclxuICAgICBcclxuICAgIH0sXHJcbiAgICBjYWxsYmFja3M6e1xyXG4gICAgICAvLyBhc3luYyBzaWduSW4oe3VzZXIsIGFjY291bnQsIHByb2ZpbGV9KXtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZygnYWNjb3VudCcsdXNlcix1c2VyLmVtYWlsLHVzZXIucGFzc3dvcmQsdXNlci5pZCwgYWNjb3VudClcclxuICAgICAgLy8gICBjb25zdCBlbWFpbCA9IHVzZXIuZW1haWw7XHJcbiAgICAgIC8vICAgLy9jb25zdCBwYXNzd29yZCA9IHVzZXIucGFzc3dvcmRcclxuICAgICAgLy8gICBjb25zdCBmaW5kdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pLmV4ZWMoKTtcclxuICAgICAgLy8gICAvL2NvbnN0IGlzTWF0Y2ggPSBiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIGZpbmR1c2VyLnBhc3N3b3JkKTtcclxuICAgICAgLy8gICBpZiAoZmluZHVzZXIgJiYgKHVzZXIuaWQgPT09IGFjY291bnQucHJvdmlkZXJBY2NvdW50SWQpKXtyZXR1cm4gdHJ1ZX1cclxuICAgICAgLy8gICBlbHNle3JldHVybiB0cnVlfVxyXG4gICAgICAgIFxyXG4gICAgICAvLyB9LFxyXG4gICAgICBhc3luYyBzaWduSW4oeyBhY2NvdW50LCBwcm9maWxlIH0pIHtcclxuICAgICAgICBpZiAoYWNjb3VudC5wcm92aWRlciA9PT0gXCJnb29nbGVcIikge1xyXG4gICAgICAgICAgcmV0dXJuIHByb2ZpbGUuZW1haWwgJiYgcHJvZmlsZS5lbWFpbC5lbmRzV2l0aChcIkBleGFtcGxlLmNvbVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZSAvLyBEbyBkaWZmZXJlbnQgdmVyaWZpY2F0aW9uIGZvciBvdGhlciBwcm92aWRlcnMgdGhhdCBkb24ndCBoYXZlIGBlbWFpbF92ZXJpZmllZGBcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgand0KHt0b2tlbix1c2VyfSl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHsuLi50b2tlbiwgLi4udXNlcn1cclxuICAgICAgfSxcclxuICAgICAgXHJcbiAgICBcclxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiwgdXNlciB9KXtcclxuICAgICAgc2Vzc2lvbi51c2VyID0gdG9rZW5cclxuICAgICAgICByZXR1cm4gc2Vzc2lvblxyXG4gICAgfSxcclxuICAgIFxyXG4gIH0sXHJcbiAgICBzZXNzaW9uOiB7XHJcbiAgICAgIHN0cmF0ZWd5OiAnand0JyxcclxuICAgICAgXHJcbiAgICB9LFxyXG4gICAgand0OiB7XHJcbiAgICAgIHNlY3JldDogSldUX1NFQ1JFVCxcclxuICAgIH0sXHJcbiAgICBcclxuICB9KTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwiR29vZ2xlUHJvdmlkZXIiLCJVc2VyIiwicmVxdWlyZSIsIkpXVF9TRUNSRVQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwicHJvdmlkZXJzIiwidHlwZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwicmVzIiwidXNlciIsImZpbmRPbmUiLCJleGVjIiwiaXNNYXRjaCIsImNvbXBhcmVTeW5jIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjbGllbnRJZCIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsInBhZ2VzIiwic2lnbkluIiwiY2FsbGJhY2tzIiwiYWNjb3VudCIsInByb2ZpbGUiLCJwcm92aWRlciIsImVuZHNXaXRoIiwiand0IiwidG9rZW4iLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJzZWNyZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

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