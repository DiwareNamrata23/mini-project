const kafka = require('kafka-node');
const express = require('express');
const app = express();

// Kafka Consumer Setup
const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const consumer = new Consumer(
  client,
  [{ topic: 'youtube_videos', partition: 0 }],
  { autoCommit: true }
);

// Cache for storing video messages
let videos = [];

consumer.on('message', function (message) {
  console.log('Received video message:', message);
  
  // Here you could parse the message if necessary
  // Assume message.value contains the video URL and metadata
  const videoData = JSON.parse(message.value);

  // Store the received video in memory (or in a database)
  videos.push(videoData);
});

consumer.on('error', function (err) {
  console.error('Error:', err);
});

// API endpoint to fetch videos for React frontend
app.get('/api/videos', (req, res) => {
  res.json(videos);
});

app.listen(5001, () => {
  console.log('Server running on port 5001');
});
