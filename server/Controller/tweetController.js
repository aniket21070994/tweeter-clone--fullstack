import { Tweet } from "../Model/tweetSchema.js"
import { User } from "../Model/userSchema.js"

//create tweet conttoller 
export const creatTweet = async (req, res) => {

    try {

        const { description, id } = req.body
        console.log(req.body)
        if (!description || !id) {
            return res.status(201).json({
                message: "Fields are requires",
                success: false
            })
        }
        await Tweet.create({
            description,
            userId: id
        })

        return res.status(201).json({
            message: "Tweet created successfully",
            success: true
        })


    }
    catch (err) {
        console.log(err)
    }
}
//delating tweet
export const deleteTweet = async (req, res) => {
    try {
        const { id } = req.params;
        await Tweet.findOneAndDelete(id);
        return res.status(201).json({
            message: "Tweet deleted Successfully",
            success: true
        })
    }
    catch (err) {
        console.log(err)
    }
}
export const likeOrDislike = async (req, res) => {
    try {
        const loggedInUserId = req.body.id;
        const tweetId = req.params.id;
        const tweet = await Tweet.findById(tweetId);
        if (tweet.like.includes(loggedInUserId)) {
            //dislike
            await Tweet.findByIdAndUpdate(tweetId, { $pull: { like: loggedInUserId } });

            return res.status(200).json({
                message: "User dislike your Tweet",
                success: true
            })
        }
        else {
            //like
            await Tweet.findByIdAndUpdate(tweetId, { $addToSet: { like: loggedInUserId } });

            return res.status(200).json({
                message: "User like your Tweet",
                success: true
            })
        }
    }
    catch (err) {
        console.log(err)
    }
}
export const getAllTweets = async (req, res) => {
    //loggedInUser +Following Tweets
    try {
        const id = req.params.id

        const loggedInUser = await User.findById(id)

        const loggedInUserTweets = await Tweet.find({ userId: id })
        if (!loggedInUser.following) {
            return res.status(200).json({
                tweets: loggedInUserTweets
            })
        }
        const followingTweets = await Promise.all(loggedInUser.following.map((otherUserId) => {
            return Tweet.find({ userId: otherUserId })
        }))
        return res.status(200).json({
            tweets: loggedInUserTweets.concat(...followingTweets)
        })
    }
    catch (err) {
        console.log(err)
    }
}
export const getFollowingTweet = async (req, res) => {

    try {
        const id = req.params.id

        const loggedInUser = await User.findById(id)


        if (!loggedInUser.following) {
            return res.status(200)
        }
        const followingTweets = await Promise.all(loggedInUser.following.map((otherUserId) => {
            return Tweet.find({ userId: otherUserId })
        }))
        return res.status(200).json({
            tweets: [].concat(...followingTweets)
        })
    }
    catch (err) {
        console.log(err)
    }
}