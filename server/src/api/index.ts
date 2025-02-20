import express from "express";
import cors from "cors";
import { authMiddleware } from "../middlewares/authMiddleware";
import { tenantMiddleware } from "../middlewares/tenantMiddleware";
import { databaseMiddleware } from "../middlewares/databaseMiddleware";
import bodyParser from "body-parser";
import helmet from "helmet";
import { createRateLimiter } from "./apiRateLimiter";
import { languageMiddleware } from "../middlewares/languageMiddleware";
import authSocial from "./auth/authSocial";
import setupSwaggerUI from "./apiDocumentation";

const app = express();

// Enables CORS
app.use(cors({ origin: true }));

// Initializes and adds the database middleware.
app.use(databaseMiddleware);

// Sets the current language of the request
app.use(languageMiddleware);

// Configures the authentication middleware
// to set the currentUser to the requests
app.use(authMiddleware);

// Setup the Documentation
setupSwaggerUI(app);

// Default rate limiter
const defaultRateLimiter = createRateLimiter({
  max: 50000,
  windowMs: 1 * 60 * 1000,
  message: "errors.429",
});
app.use(defaultRateLimiter);

// Enables Helmet, a set of tools to
// increase security.
app.use(helmet());

// Parses the body of POST/PUT request
// to JSON
app.use(
  bodyParser.json({
    verify: function (req, res, buf) {
      const url = (<any>req).originalUrl;
      if (url.startsWith("/api/plan/stripe/webhook")) {
        // Stripe Webhook needs the body raw in order
        // to validate the request
        (<any>req).rawBody = buf.toString();
      }
    },
  })
);

// Configure the Entity routes
const routes = express.Router();

// Enable Passport for Social Sign-in
authSocial(app, routes);
require("./auditLog").default(routes);
require("./auth").default(routes);
require("./plan").default(routes);
require("./tenant").default(routes);
require("./file").default(routes);
require("./user").default(routes);
require("./settings").default(routes);
require("./social").default(routes);
require("./category").default(routes);
require("./record").default(routes);
require("./transaction").default(routes);
require("./vip").default(routes);
require("./product").default(routes);
require("./company").default(routes);
// Loads the Tenant if the :tenantId param is passed
routes.param("tenantId", tenantMiddleware);

// Add the routes to the /api endpoint
app.use("/api", routes);

export default app;
