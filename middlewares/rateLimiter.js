const rateLimit = req("express-rate-limit");

const postLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 70,
  message: { error: "Too blacklisted requests, try again later." },
});

module.exports = postLimiter;
