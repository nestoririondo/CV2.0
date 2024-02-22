// mongo db user model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    created: { type: Date, default: Date.now },
    picture: { type: String, default: 'https://via.placeholder.com/150'},
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
    lastLogin: { type: Date, default: Date.now},
});

const EventSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    location: { type: Object, required: true },
    picture: { type: String, default: 'https://via.placeholder.com/150'},
    created: { type: Date, default: Date.now },
    organizer: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
});

const MessageSchema = new Schema({
    text: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    created: { type: Date, default: Date.now },
    event: { type: Schema.Types.ObjectId, ref: 'Event' },
    files: [{ type: String }],
});
