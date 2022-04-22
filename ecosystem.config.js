module.exports = {
  apps: [
    {
      name: "inanna",
      script: "npm run start",
      max_restarts: 4,
      min_uptime: "10s",
      restart_delay: 10000,
      env: {
        PORT: "3014",
      },
    },
  ],
};