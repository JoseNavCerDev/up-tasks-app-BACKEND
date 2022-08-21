import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    description:{
        type: String,
        trim: true,
        required: true
    },
    deadline:{
        type: Date,
        default: Date.now()
    },
    client:{
        type: String,
        trim: true,
        required: true        
    },
    creator:{
        //Reference to SQL DDBB, foreign Key
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",        
    },
    //Collaborators: array with multiple References
    collaborators:[
        {
            //Reference to SQL DDBB, foreign Key
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ]
},
{
    timestamps: true
}
);

const Project = mongoose.model('Project', projectSchema);

export default Project;