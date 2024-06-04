import jwt from "jsonwebtoken"
import { User } from "../Model/userSchema.js";
import bcrypt from "bcryptjs"

export const Register = async (req, res) => {
    try {
        //reading data from body 
        const { name, username, email, password } = req.body;
        //enshoring all fields are given 
        if (!name || !username || !email || !password) {
            return res.status(401).json({
                message: "All fields are require",
                success: false
            })
        }
        //cheking existence of user in db 
        const user = await User.findOne({ email })
        if (user) {

            return res.status(401).json({
                message: "User alread exist.",
                success: false
            })

        }
        //encrypting password
        const hashedpassword = await bcrypt.hash(password, 16)
        //adding new user to db
        await User.create({ name, username, email, password: hashedpassword })
        return res.status(201).json({
            message: "Account create successfully .",
            success: true
        })

    }
    catch (err) {
        console.log(err)
    }
}
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                message: "All field is required",
                sucess: false
            })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({
                message: "User dose not exist",
                success: false
            })
        }
        console.log(user)
        //matching password from user and db password using bcrypt
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({
                message: "Incorrect password or email",
                success: false
            })

        }
        const tokenData = {
            userid: user._id
        }
        // Creating tokens using jwt 
        const token = await jwt.sign(tokenData, process.env.Token_Secrate, { expiresIn: "1d" });

        //Sending tokens to user using cooki
        return res.status(201).cookie("token", token, { expiresIn: "1d", httpOnly: true }).json({
            message: "Welcome back " + `${user.name}`,
            success: true
        })

    }
    catch (err) {
        console.log(err)
    }
}
export const Logout = (req, res) => {
    return res.cookie("token", "", { expireIn: new Date(Date.now()) }).json({
        message: "User loggedout successfully",
        success: true
    })
}

export const bookmark = async (req, res) => {
    try {
        console.log("boorkmarking function")
        const loggedInUserId = req.body.id
        const tweetId = req.params.id
        const user = await User.findById(loggedInUserId)
        if (user.bookmarks.includes(tweetId)) {
            //remove
            await User.findByIdAndUpdate(loggedInUserId, { $pull: { bookmarks: tweetId } });
            res.status(201).json({
                message: "Remove from bookmark",
                success: true
            })
        }
        else {
            //added to bookmark
            await User.findByIdAndUpdate(loggedInUserId, { $addToSet: { bookmarks: tweetId } })
            res.status(201).json({
                message: "Added to  bookmark",
                success: true
            })
        }

    } catch (err) {

    }

}
export const profile = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id).select("-password")
        return res.status(200).json({
            user,
        })
    }
    catch (err) {

    }
}
export const getOtherUsers = async (req, res) => {
    try {
        const { id } = req.params
        const otherUsers = await User.find({ _id: { $ne: id } }).select("-password")
        if (!otherUsers) return res.status(401).json({ message: "Currently do not have any user", success: false })
        return res.status(200).json({ otherUsers, })
    }
    catch (err) {
        console.log(err)
    }
}
//follow function 
export const follow = async (req, res) => {
    try {
        const loggedInUserId = req.body.id
        const userId = req.params.id
        console.log(loggedInUserId)
        console.log(userId)
        
        const loggedInUser = await User.findById(loggedInUserId)
        const user = await User.findById(userId)
        if (!user.followers.includes(loggedInUserId)) {
            await user.updateOne({ $push: { followers: loggedInUserId } })
            await loggedInUser.updateOne({ $push: { following: userId } })
            return res.status(200).json({
                message: `${loggedInUser.name}` + "is now following " + `${user.name}`
            })
        }
        else {
            return res.status(400).json({
                message: `${loggedInUser.name}` + " is alredy following " + `${user.name}`
            })
        }

    }
    catch (err) {
        console.log(err)
    }
}

export const unfollow = async (req, res) => {
    try {
        const loggedInUserId = req.body.id
        const userId = req.params.id
        console.log(loggedInUserId)
        console.log(userId)
        
        const loggedInUser = await User.findById(loggedInUserId)
        const user = await User.findById(userId)
        if (user.followers.includes(loggedInUserId)) {
            await user.updateOne({ $pull: { followers: loggedInUserId } })
            await loggedInUser.updateOne({ $pull: { following: userId } })
            return res.status(200).json({
                message: `${loggedInUser.name}` + " Unfollow " + `${user.name}`
            })
        }
        else {
            return res.status(400).json({
                message:  "User has not follow yet",
                success:false
            })
        }

    }
    catch (err) {
        console.log(err)
    }
}