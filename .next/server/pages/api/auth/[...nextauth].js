"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
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

/***/ 762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
// EXTERNAL MODULE: external "bcryptjs"
var external_bcryptjs_ = __webpack_require__(432);
var external_bcryptjs_default = /*#__PURE__*/__webpack_require__.n(external_bcryptjs_);
;// CONCATENATED MODULE: external "next-auth/providers/google"
const google_namespaceObject = require("next-auth/providers/google");
var google_default = /*#__PURE__*/__webpack_require__.n(google_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].ts




const User = __webpack_require__(623);
const JWT_SECRET = process.env.NEXTAUTH_SECRET;
/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
    providers: [
        credentials_default()({
            // Custom credentials provider (e.g., username/email and password)
            type: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            authorize: async (credentials, res)=>{
                // Add your own authentication logic here
                const { email , password  } = credentials;
                const user = await User.findOne({
                    email
                }).exec();
                const isMatch = external_bcryptjs_default().compareSync(password, user.password);
                if (user && isMatch) {
                    return Promise.resolve(user);
                } else {
                    return Promise.resolve(null);
                }
            }
        }),
        google_default()({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    pages: {
        signIn: "/login"
    },
    callbacks: {
        // async signIn({user, account, profile}){
        //   console.log('account',user,user.email,user.password,user.id, account)
        //   const email = user.email;
        //   //const password = user.password
        //   const finduser = await User.findOne({ email }).exec();
        //   //const isMatch = bcrypt.compareSync(password, finduser.password);
        //   if (finduser && (user.id === account.providerAccountId)){return true}
        //   else{return true}
        // },
        async signIn ({ account , profile  }) {
            if (account.provider === "google") {
                return profile.email && profile.email.endsWith("@example.com");
            }
            return true // Do different verification for other providers that don't have `email_verified`
            ;
        },
        async jwt ({ token , user  }) {
            return {
                ...token,
                ...user
            };
        },
        async session ({ session , token , user  }) {
            session.user = token;
            return session;
        }
    },
    session: {
        strategy: "jwt"
    },
    jwt: {
        secret: JWT_SECRET
    }
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(762));
module.exports = __webpack_exports__;

})();