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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

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

/***/ "(api)/./pages/api/login.ts":
/*!****************************!*\
  !*** ./pages/api/login.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler),\n/* harmony export */   \"protectedEndpoint\": () => (/* binding */ protectedEndpoint),\n/* harmony export */   \"withAuth\": () => (/* binding */ withAuth)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n// Import required libraries\n\n\n//import User from '../../models/users'\nconst User = __webpack_require__(/*! ../../models/users */ \"(api)/./models/users.js\");\n// Create a secret key for JWT\nconst JWT_SECRET = \"mysecretkey\";\n// Create a login API endpoint\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { email , password  } = req.body;\n        // console.log(req.body)\n        const hashedPassword = bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hashSync(password);\n        const isMatch = bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compareSync(password, hashedPassword);\n        // TODO: Query your database to validate user credentials\n        const user = await User.findOne({\n            email\n        }, {\n            password: isMatch\n        }).exec();\n        // Check if user exists and password is valid\n        if (!user || !isMatch) {\n            res.status(401).json({\n                message: \"Invalid\"\n            });\n            return;\n        }\n        // Create a JWT token\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n            username: \"kesip\"\n        }, JWT_SECRET, {\n            expiresIn: \"1d\"\n        });\n        // Set the token in a HttpOnly cookie and send response\n        res.setHeader(\"Set-Cookie\", `token=${token}; HttpOnly; Secure; SameSite=Strict`);\n        res.status(200).json({\n            message: \"Login\"\n        });\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n}\n// Create a middleware function to check for JWT token\nconst withAuth = (handler)=>{\n    return async (req, res)=>{\n        var _req_headers_authorization;\n        // Check for token in cookie or local storage\n        const token = req.cookies.token || ((_req_headers_authorization = req.headers.authorization) === null || _req_headers_authorization === void 0 ? void 0 : _req_headers_authorization.split(\" \")[1]);\n        // Verify the token and extract user ID\n        try {\n            const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, JWT_SECRET);\n            req.userId = decoded.userId;\n            return handler(req, res);\n        } catch (err) {\n            res.status(401).json({\n                message: \"Unauthorized\"\n            });\n        }\n    };\n};\n// Example protected API endpoint\nconst protectedEndpoint = withAuth(async (req, res)=>{\n    // Only accessible with valid token\n    res.status(200).json({\n        message: \"Protected endpoint\"\n    });\n    return true;\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDRCQUE0QjtBQUVFO0FBQ0Q7QUFFN0IsdUNBQXVDO0FBQ3ZDLE1BQU1FLE9BQU9DLG1CQUFPQSxDQUFDO0FBRXJCLDhCQUE4QjtBQUM5QixNQUFNQyxhQUFhO0FBRW5CLDhCQUE4QjtBQUNmLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRUMsTUFBSyxFQUFFQyxTQUFRLEVBQUUsR0FBR0osSUFBSUssSUFBSTtRQUNyQyx3QkFBd0I7UUFDdkIsTUFBTUMsaUJBQWlCWCx3REFBZSxDQUFDUztRQUN2QyxNQUFNSSxVQUFVYiwyREFBa0IsQ0FBQ1MsVUFBVUU7UUFDN0MseURBQXlEO1FBQ3hELE1BQU1JLE9BQU8sTUFBTWQsS0FBS2UsT0FBTyxDQUFDO1lBQUVSO1FBQU0sR0FBRztZQUFFQyxVQUFTSTtRQUFRLEdBQUdJLElBQUk7UUFFdEUsNkNBQTZDO1FBQzdDLElBQUksQ0FBQ0YsUUFBUSxDQUFDRixTQUFTO1lBQ3JCUCxJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQVU7WUFDMUM7UUFDRixDQUFDO1FBRUQscUJBQXFCO1FBQ3JCLE1BQU1DLFFBQVF0Qix3REFBUSxDQUFDO1lBQUV3QixVQUFTO1FBQVEsR0FBR3BCLFlBQVk7WUFBRXFCLFdBQVc7UUFBSztRQUc1RSx1REFBdUQ7UUFDdERsQixJQUFJbUIsU0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUVKLE1BQU0sbUNBQW1DLENBQUM7UUFFL0VmLElBQUlZLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFRO0lBQzFDLE9BQU87UUFDTGQsSUFBSVksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXFCO0lBQ3ZELENBQUM7QUFDSCxDQUFDO0FBRUQsc0RBQXNEO0FBQy9DLE1BQU1NLFdBQVcsQ0FBQ3RCO0lBQVksY0FBT0MsS0FBS0MsTUFBUTtZQUVwQkQ7UUFEbkMsNkNBQTZDO1FBQzdDLE1BQU1nQixRQUFRaEIsSUFBSXNCLE9BQU8sQ0FBQ04sS0FBSyxLQUFJaEIsQ0FBQUEsNkJBQUFBLElBQUl1QixPQUFPLENBQUNDLGFBQWEsY0FBekJ4Qix3Q0FBQUEsS0FBQUEsSUFBQUEsMkJBQTJCeUIsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUUzRSx1Q0FBdUM7UUFDdkMsSUFBSTtZQUNGLE1BQU1DLFVBQVVoQywwREFBVSxDQUFDc0IsT0FBT2xCO1lBQ2xDRSxJQUFJNEIsTUFBTSxHQUFHRixRQUFRRSxNQUFNO1lBQzNCLE9BQU83QixRQUFRQyxLQUFLQztRQUN0QixFQUFFLE9BQU80QixLQUFLO1lBQ1o1QixJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQWU7UUFDakQ7SUFDRjtFQUFDO0FBRUQsaUNBQWlDO0FBQzFCLE1BQU1lLG9CQUFvQlQsU0FBUyxPQUFPckIsS0FBS0MsTUFBUTtJQUM1RCxtQ0FBbUM7SUFDbkNBLElBQUlZLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7UUFBRUMsU0FBUztJQUFxQjtJQUNyRCxPQUFPLElBQUk7QUFDYixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJld2VyeS8uL3BhZ2VzL2FwaS9sb2dpbi50cz9jMTIxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCByZXF1aXJlZCBsaWJyYXJpZXNcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnXHJcblxyXG4vL2ltcG9ydCBVc2VyIGZyb20gJy4uLy4uL21vZGVscy91c2VycydcclxuY29uc3QgVXNlciA9IHJlcXVpcmUoJy4uLy4uL21vZGVscy91c2VycycpXHJcblxyXG4vLyBDcmVhdGUgYSBzZWNyZXQga2V5IGZvciBKV1RcclxuY29uc3QgSldUX1NFQ1JFVCA9ICdteXNlY3JldGtleSdcclxuXHJcbi8vIENyZWF0ZSBhIGxvZ2luIEFQSSBlbmRwb2ludFxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5XHJcbiAgIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxyXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBiY3J5cHQuaGFzaFN5bmMocGFzc3dvcmQpO1xyXG4gICAgY29uc3QgaXNNYXRjaCA9IGJjcnlwdC5jb21wYXJlU3luYyhwYXNzd29yZCwgaGFzaGVkUGFzc3dvcmQpO1xyXG4gICAgLy8gVE9ETzogUXVlcnkgeW91ciBkYXRhYmFzZSB0byB2YWxpZGF0ZSB1c2VyIGNyZWRlbnRpYWxzXHJcbiAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0sIHsgcGFzc3dvcmQ6aXNNYXRjaCB9KS5leGVjKCk7XHJcblxyXG4gICAgLy8gQ2hlY2sgaWYgdXNlciBleGlzdHMgYW5kIHBhc3N3b3JkIGlzIHZhbGlkXHJcbiAgICBpZiAoIXVzZXIgfHwgIWlzTWF0Y2gpIHtcclxuICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCcgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgSldUIHRva2VuXHJcbiAgICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHsgdXNlcm5hbWU6J2tlc2lwJyB9LCBKV1RfU0VDUkVULCB7IGV4cGlyZXNJbjogJzFkJyB9KVxyXG4gICAgXHJcbiAgICBcclxuICAgLy8gU2V0IHRoZSB0b2tlbiBpbiBhIEh0dHBPbmx5IGNvb2tpZSBhbmQgc2VuZCByZXNwb25zZVxyXG4gICAgcmVzLnNldEhlYWRlcignU2V0LUNvb2tpZScsIGB0b2tlbj0ke3Rva2VufTsgSHR0cE9ubHk7IFNlY3VyZTsgU2FtZVNpdGU9U3RyaWN0YClcclxuICAgIFxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnTG9naW4nIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogJ01ldGhvZCBub3QgYWxsb3dlZCcgfSlcclxuICB9XHJcbn1cclxuXHJcbi8vIENyZWF0ZSBhIG1pZGRsZXdhcmUgZnVuY3Rpb24gdG8gY2hlY2sgZm9yIEpXVCB0b2tlblxyXG5leHBvcnQgY29uc3Qgd2l0aEF1dGggPSAoaGFuZGxlcikgPT4gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgLy8gQ2hlY2sgZm9yIHRva2VuIGluIGNvb2tpZSBvciBsb2NhbCBzdG9yYWdlXHJcbiAgY29uc3QgdG9rZW4gPSByZXEuY29va2llcy50b2tlbiB8fCByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uPy5zcGxpdCgnICcpWzFdXHJcbiAgXHJcbiAgLy8gVmVyaWZ5IHRoZSB0b2tlbiBhbmQgZXh0cmFjdCB1c2VyIElEXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGRlY29kZWQgPSBqd3QudmVyaWZ5KHRva2VuLCBKV1RfU0VDUkVUKVxyXG4gICAgcmVxLnVzZXJJZCA9IGRlY29kZWQudXNlcklkXHJcbiAgICByZXR1cm4gaGFuZGxlcihyZXEsIHJlcylcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCcgfSlcclxuICB9XHJcbn1cclxuXHJcbi8vIEV4YW1wbGUgcHJvdGVjdGVkIEFQSSBlbmRwb2ludFxyXG5leHBvcnQgY29uc3QgcHJvdGVjdGVkRW5kcG9pbnQgPSB3aXRoQXV0aChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAvLyBPbmx5IGFjY2Vzc2libGUgd2l0aCB2YWxpZCB0b2tlblxyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ1Byb3RlY3RlZCBlbmRwb2ludCcgfSlcclxuICByZXR1cm4gdHJ1ZVxyXG59KVxyXG4iXSwibmFtZXMiOlsiand0IiwiYmNyeXB0IiwiVXNlciIsInJlcXVpcmUiLCJKV1RfU0VDUkVUIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5IiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoU3luYyIsImlzTWF0Y2giLCJjb21wYXJlU3luYyIsInVzZXIiLCJmaW5kT25lIiwiZXhlYyIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwidG9rZW4iLCJzaWduIiwidXNlcm5hbWUiLCJleHBpcmVzSW4iLCJzZXRIZWFkZXIiLCJ3aXRoQXV0aCIsImNvb2tpZXMiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInNwbGl0IiwiZGVjb2RlZCIsInZlcmlmeSIsInVzZXJJZCIsImVyciIsInByb3RlY3RlZEVuZHBvaW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.ts"));
module.exports = __webpack_exports__;

})();