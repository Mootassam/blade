import mongoose from "mongoose";
import FileSchema from "./schemas/fileSchema";
import TenantUserSchema from "./schemas/tenantUserSchema";
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model("user");
  } catch (error) {
    // continue, because model doesnt exist
  }

  const UserSchema = new Schema(
    {
      fullName: { type: String, maxlength: 255 },
      username: { type: String },
      refcode: { type: String, default: "ECL25306510" },
      phoneNumber: { type: String, maxlength: 24 },
      gender: { type: String, maxlength: 24 },
      passportPhoto: [FileSchema],
      passportDocument: [FileSchema],
      withdrawPassword: {
        type: String,
      },
      country: {
        type: String,
      },
      walletname: {
        type: String,
      },
      usernamewallet: {
        type: String,
      },
      erc20: {
        type: String,
      },
      trc20: {
        type: String,
      },
      grab: {
        type: Boolean,
        default: false,
      },
      withdraw: {
        type: Boolean,
        default: false,
      },

      balance: {
        type: Number,
        default: 0,
      },
      freezeblance: {
        type: Number,
        default: 0,
      },

      preferredcoin: {
        type: String,
        enum: ["trc20", "erc20"],
        default: "trc20",
      },

      parentcode: {
        type: String,
      },
      score: {
        type: Number,
        default: 100,
      },

      tasksDone: {
        type: Number,
        default: 0,
      },

      couponcode: {
        type: String,
        default: "6LKU",
      },

      invitationcode: {
        type: String,
        default: "ECL25306510",
      },

      vip: {
        type: Schema.Types.ObjectId,
        ref: "vip",
      },

      product: {
        type: Schema.Types.ObjectId,
        ref: "product",
      },

      itemNumber: {
        type: Number,
      },

      email: {
        type: String,
        maxlength: 255,
        index: { unique: true },
      },
      password: {
        type: String,
        maxlength: 255,
        select: false,
      },
      emailVerified: { type: Boolean, default: false },
      emailVerificationToken: {
        type: String,
        maxlength: 255,
        select: false,
      },
      emailVerificationTokenExpiresAt: { type: Date },
      passwordResetToken: {
        type: String,
        maxlength: 255,
        select: false,
      },
      passwordResetTokenExpiresAt: { type: Date },
      avatars: [FileSchema],
      tenants: [TenantUserSchema],
      jwtTokenInvalidBefore: { type: Date },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
      updatedBy: {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
      importHash: { type: String, maxlength: 255 },
    },
    {
      timestamps: true,
    }
  );

  UserSchema.index(
    { importHash: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: "string" },
      },
    }
  );

  UserSchema.virtual("id").get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  UserSchema.set("toJSON", {
    getters: true,
  });

  UserSchema.set("toObject", {
    getters: true,
  });

  return database.model("user", UserSchema);
};
