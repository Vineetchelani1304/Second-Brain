"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = exports.signup = void 0;
const db_1 = require("../db");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const JWT_PASS = process.env.JWT_PASSWORD || "vineet";
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;
        if (!username || !password || !email) {
            res.status(403).json({
                message: "need all credentials"
            });
        }
        else {
            if (yield db_1.UserModel.findOne({ email })) {
                res.status(401).json({
                    message: "email already exists"
                });
            }
            else {
                const hashpass = yield bcrypt_1.default.hash(password, 10);
                const user = yield db_1.UserModel.create({
                    username: username,
                    email: email,
                    password: hashpass
                });
                if (user) {
                    res.status(200).json({
                        message: "successfull on creating user"
                    });
                }
            }
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: `error from server side ${error}`
        });
    }
});
exports.signup = signup;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.body.email;
        const password = req.body.password;
        if (!email || !password) {
            res.status(401).json({
                message: "enter all credentials"
            });
            return;
        }
        else {
            const existingUser = yield db_1.UserModel.findOne({ email });
            if (existingUser) {
                if (yield bcrypt_1.default.compare(password, existingUser.password)) {
                    const token = jsonwebtoken_1.default.sign({
                        id: existingUser._id,
                        email: email
                    }, JWT_PASS);
                    res.status(200).json({
                        message: "user loged in",
                        token: token,
                    });
                }
            }
            else {
                res.status(403).json({
                    message: "Incorrrect credentials"
                });
            }
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error" + error
        });
    }
});
exports.signin = signin;
