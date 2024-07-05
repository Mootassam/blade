import mongoose from "mongoose";
import FileSchema from "./schemas/fileSchema";
import Dates from "../utils/Dates";
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model("records");
  } catch (error) {
    // continue, because model doesnt exist
  }

  const RecordSchema = new Schema(
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      product: {
        type: Schema.Types.ObjectId,
        ref: "product",
        required: true,
      },
      status: {
        type: String,
        enum: ["pending", "completed", "canceled"],
        default: "pending",
      },
      
      date: {
        type: Date,
        default: Dates.getDate(),
      },
      datecreation: {
        type: Date,
      },
      number: {
        type: String,
        required: true,
      },

      tenant: {
        type: Schema.Types.ObjectId,
        ref: "tenant",
      },

      createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
      updatedBy: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
      importHash: { type: String },
    },
    { timestamps: true }
  );

  RecordSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: "string" },
      },
    }
  );

  RecordSchema.virtual("id").get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  RecordSchema.set("toJSON", {
    getters: true,
  });

  RecordSchema.set("toObject", {
    getters: true,
  });

  return database.model("records", RecordSchema);
};
