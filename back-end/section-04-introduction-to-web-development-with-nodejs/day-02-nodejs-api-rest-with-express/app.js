const express = require('express');
const activities = require('./myActivities');

const app = express();

app.use(express.json());

app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;
  const activity = activities.find((item) => item.id === Number(id));
  res.status(200).json(activity);
});

app.get('/myActivities', (_req, res) => res.status(200).json({ activities }));

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
  let filteredActivities = activities;

  if (status) {
    filteredActivities = activities.filter((activity) => activity.status === status);
  };

  res.status(200).json({ activities: filteredActivities });
});

module.exports = app;
