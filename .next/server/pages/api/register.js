"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 623:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const mongoose = __webpack_require__(185);
const { Schema  } = mongoose;
try {
    mongoose.connect("mongodb+srv://Kesi:932411@login.nqwyhf9.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("MongoDB connected!");
} catch (error) {
    console.log("MongoDB connection error:", error);
}
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
// const User = mongoose.model('User', userSchema);
// module.exports = User;
module.exports = mongoose.models.User || mongoose.model("User", userSchema);


/***/ }),

/***/ 550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);
// Import required libraries

const User = __webpack_require__(623);
// Create a login API endpoint
async function handler(req, res) {
    if (req.method === "POST") {
        const { firstName , lastName , email , password  } = req.body;
        const hashedPassword = bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().hashSync(password);
        console.log(req.body);
        // TODO: Query your database to validate user credentials
        const findUser = await User.findOne({
            email
        }).exec();
        if (!findUser) {
            // const user = new User({ name: firstName + ' ' + lastName, email: email, password: hashedPassword });
            // user.save(function(err) {
            //   if (err) throw err;
            //   console.log('User saved successfully!');
            //   res.status(200).json({ message: 'Login successful' })
            // });
            await User.create({
                name: firstName + " " + lastName,
                email: email,
                password: hashedPassword
            });
            res.status(200).json({
                message: "Login successful"
            });
        } else {
            console.log("invalid");
            res.status(401).json({
                message: "Invalid"
            });
        //return
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(550));
module.exports = __webpack_exports__;

})();