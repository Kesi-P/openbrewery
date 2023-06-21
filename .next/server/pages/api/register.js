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
exports.id = "pages/api/register";
exports.ids = ["pages/api/register"];
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

/***/ "(api)/./models/users.js":
/*!*************************!*\
  !*** ./models/users.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst { Schema  } = mongoose;\ntry {\n    mongoose.connect(\"mongodb+srv://Kesi:932411@login.nqwyhf9.mongodb.net/?retryWrites=true&w=majority\", {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    console.log(\"MongoDB connected!\");\n} catch (error) {\n    console.log(\"MongoDB connection error:\", error);\n}\nconst userSchema = new Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    }\n});\n// const User = mongoose.model('User', userSchema);\n// module.exports = User;\nmodule.exports = mongoose.models.User || mongoose.model(\"User\", userSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvdXNlcnMuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBQ3pCLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdGO0FBQ25CLElBQUk7SUFDSkEsU0FBU0csT0FBTyxDQUFDLG9GQUFvRjtRQUNuR0MsaUJBQWlCLElBQUk7UUFDckJDLG9CQUFvQixJQUFJO0lBQzFCO0lBQ0FDLFFBQVFDLEdBQUcsQ0FBQztBQUNaLEVBQUUsT0FBT0MsT0FBTztJQUNoQkYsUUFBUUMsR0FBRyxDQUFDLDZCQUE2QkM7QUFDekM7QUFDQSxNQUFNQyxhQUFhLElBQUlQLE9BQU87SUFDNUJRLE1BQU07UUFDSkMsTUFBTUM7UUFDTkMsVUFBVSxJQUFJO0lBQ2hCO0lBQ0FDLE9BQU87UUFDTEgsTUFBTUM7UUFDTkMsVUFBVSxJQUFJO1FBQ2RFLFFBQVEsSUFBSTtJQUNkO0lBQ0FDLFVBQVU7UUFDUkwsTUFBTUM7UUFDTkMsVUFBVSxJQUFJO0lBQ2hCO0FBQ0Y7QUFFQSxtREFBbUQ7QUFFbkQseUJBQXlCO0FBQ3pCSSxPQUFPQyxPQUFPLEdBQ1ZsQixTQUFTbUIsTUFBTSxDQUFDQyxJQUFJLElBQUlwQixTQUFTcUIsS0FBSyxDQUFDLFFBQVFaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJld2VyeS8uL21vZGVscy91c2Vycy5qcz83M2YwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcclxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xyXG50cnkge1xyXG5tb25nb29zZS5jb25uZWN0KFwibW9uZ29kYitzcnY6Ly9LZXNpOjkzMjQxMUBsb2dpbi5ucXd5aGY5Lm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIiwge1xyXG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcclxufSk7XHJcbmNvbnNvbGUubG9nKCdNb25nb0RCIGNvbm5lY3RlZCEnKTtcclxufSBjYXRjaCAoZXJyb3IpIHtcclxuY29uc29sZS5sb2coJ01vbmdvREIgY29ubmVjdGlvbiBlcnJvcjonLCBlcnJvcik7XHJcbn1cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIG5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgfSxcclxuICBlbWFpbDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB1bmlxdWU6IHRydWVcclxuICB9LFxyXG4gIHBhc3N3b3JkOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gIH1cclxufSk7XHJcblxyXG4vLyBjb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWwoJ1VzZXInLCB1c2VyU2NoZW1hKTtcclxuXHJcbi8vIG1vZHVsZS5leHBvcnRzID0gVXNlcjtcclxubW9kdWxlLmV4cG9ydHMgPVxyXG4gICAgbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCB1c2VyU2NoZW1hKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiU2NoZW1hIiwiY29ubmVjdCIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInVzZXJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/users.js\n");

/***/ }),

/***/ "(api)/./pages/api/register.ts":
/*!*******************************!*\
  !*** ./pages/api/register.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);\n// Import required libraries\n\nconst User = __webpack_require__(/*! ../../models/users */ \"(api)/./models/users.js\");\n// Create a login API endpoint\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { firstName , lastName , email , password  } = req.body;\n        const hashedPassword = bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().hashSync(password);\n        console.log(req.body);\n        // TODO: Query your database to validate user credentials\n        const findUser = await User.findOne({\n            email\n        }).exec();\n        if (!findUser) {\n            // const user = new User({ name: firstName + ' ' + lastName, email: email, password: hashedPassword });\n            // user.save(function(err) {\n            //   if (err) throw err;\n            //   console.log('User saved successfully!');\n            //   res.status(200).json({ message: 'Login successful' })\n            // });\n            await User.create({\n                name: firstName + \" \" + lastName,\n                email: email,\n                password: hashedPassword\n            });\n            res.status(200).json({\n                message: \"Login successful\"\n            });\n        } else {\n            console.log(\"invalid\");\n            res.status(401).json({\n                message: \"Invalid\"\n            });\n        //return\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmVnaXN0ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNEJBQTRCO0FBRUM7QUFHN0IsTUFBTUMsT0FBT0MsbUJBQU9BLENBQUM7QUFHckIsOEJBQThCO0FBQ2YsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFNBQVEsRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQUUsR0FBR04sSUFBSU8sSUFBSTtRQUN6RCxNQUFNQyxpQkFBaUJaLHdEQUFlLENBQUNVO1FBQ3ZDSSxRQUFRQyxHQUFHLENBQUNYLElBQUlPLElBQUk7UUFDcEIseURBQXlEO1FBQ3pELE1BQU1LLFdBQVcsTUFBTWYsS0FBS2dCLE9BQU8sQ0FBQztZQUFFUjtRQUFLLEdBQUdTLElBQUk7UUFDbEQsSUFBSSxDQUFDRixVQUFTO1lBQ1osdUdBQXVHO1lBQ3ZHLDRCQUE0QjtZQUM1Qix3QkFBd0I7WUFDeEIsNkNBQTZDO1lBQzdDLDBEQUEwRDtZQUMxRCxNQUFNO1lBQ0YsTUFBTWYsS0FBS2tCLE1BQU0sQ0FBQztnQkFDaEJDLE1BQUtiLFlBQVksTUFBTUM7Z0JBQ3ZCQyxPQUFPQTtnQkFDUEMsVUFBVUU7WUFDWjtZQUNBUCxJQUFJZ0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFtQjtRQUN6RCxPQUNJO1lBQ0ZULFFBQVFDLEdBQUcsQ0FBQztZQUNaVixJQUFJZ0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUFVO1FBQzFDLFFBQVE7UUFDVixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmV3ZXJ5Ly4vcGFnZXMvYXBpL3JlZ2lzdGVyLnRzPzdkYTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHJlcXVpcmVkIGxpYnJhcmllc1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcydcclxuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcclxuaW1wb3J0IHsgc2lnbkluIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcclxuY29uc3QgVXNlciA9IHJlcXVpcmUoJy4uLy4uL21vZGVscy91c2VycycpXHJcblxyXG5cclxuLy8gQ3JlYXRlIGEgbG9naW4gQVBJIGVuZHBvaW50XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICBjb25zdCB7IGZpcnN0TmFtZSwgbGFzdE5hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHlcclxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYmNyeXB0Lmhhc2hTeW5jKHBhc3N3b3JkKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxyXG4gICAgLy8gVE9ETzogUXVlcnkgeW91ciBkYXRhYmFzZSB0byB2YWxpZGF0ZSB1c2VyIGNyZWRlbnRpYWxzXHJcbiAgICBjb25zdCBmaW5kVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsfSkuZXhlYygpO1xyXG4gICAgaWYoICFmaW5kVXNlcil7XHJcbiAgICAgIC8vIGNvbnN0IHVzZXIgPSBuZXcgVXNlcih7IG5hbWU6IGZpcnN0TmFtZSArICcgJyArIGxhc3ROYW1lLCBlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCB9KTtcclxuICAgICAgLy8gdXNlci5zYXZlKGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAvLyAgIGlmIChlcnIpIHRocm93IGVycjtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZygnVXNlciBzYXZlZCBzdWNjZXNzZnVsbHkhJyk7XHJcbiAgICAgIC8vICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnTG9naW4gc3VjY2Vzc2Z1bCcgfSlcclxuICAgICAgLy8gfSk7XHJcbiAgICAgICAgICBhd2FpdCBVc2VyLmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIG5hbWU6Zmlyc3ROYW1lICsgJyAnICsgbGFzdE5hbWUsXHJcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCwgXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ0xvZ2luIHN1Y2Nlc3NmdWwnIH0pXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBjb25zb2xlLmxvZygnaW52YWxpZCcpXHJcbiAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ0ludmFsaWQnIH0pXHJcbiAgICAgIC8vcmV0dXJuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJiY3J5cHQiLCJVc2VyIiwicmVxdWlyZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5IiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoU3luYyIsImNvbnNvbGUiLCJsb2ciLCJmaW5kVXNlciIsImZpbmRPbmUiLCJleGVjIiwiY3JlYXRlIiwibmFtZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/register.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/register.ts"));
module.exports = __webpack_exports__;

})();