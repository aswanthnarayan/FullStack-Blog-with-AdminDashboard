
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileTag: { type: String, default: "" },
    profilePic: { type: String, default: "" },
    profileSummary: { type: String, default: "" },
    socialLinks: {
        github: { type: String, default: "" },
        linkedin: { type: String, default: "" },
        instagram: { type: String, default: "" },
        facebook: { type: String, default: "" },
    }
}, { timestamps: true });

// Unique indexes
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ username: 1 }, { unique: true });

// Hash password before saving
userSchema.pre("save", async function(next) {
    if (this.isModified("password") || this.isNew) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

// Method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;

