import {Schema} from "mongoose";
import Prize = require("../mongoose/Prize");
import DataAccess = require("./../dataAccess");

const mongoose = DataAccess.mongooseInstance;
const mongooseConnection = DataAccess.mongooseConnection;

class PrizeSchema {
    static get schema() {

        const prize = new Schema({
                rank: {
                    type: Number,
                    required: true
                },
                title: {
                    type: String,
                    required: true
                },
                description: {
                    type: String
                },
                amount: {
                    type: Number,
                    required: true
                },
                eventId: {
                    type: String,
                    required: true
                },
                winnerTeamID: {
                    type: Schema.Types.ObjectId,
                    ref: 'Team' 
                }
            },
            {
                timestamps: true,
                versionKey: false
            });
        return prize;
    }
}
const prizeSchema = mongooseConnection.model<Prize>("Prize", PrizeSchema.schema);
export = prizeSchema;
