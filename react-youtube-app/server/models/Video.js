const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = mongoose.Schema({
    writer: {
        // This type allows us to connect this model with another one. In this case, the writer is actually
        // the user who's logged in and posting the video.
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String
    },
    privacy: {
        type: Number
    },
    filePath: {
        type: String
    },
    category: String,
    views: {
        type: Number,
        default: 0
    },
    duration: {
        type: String
    },
    thumbnail: {
        type: String
    }
}, {
    timestamps: true
})

const Video = mongoose.model('Video', videoSchema);

module.exports = {
    Video
}