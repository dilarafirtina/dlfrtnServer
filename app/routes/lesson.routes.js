module.exports = app => {
    const lessons = require("../controllers/lesson.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Lesson
    router.post("/:userId", lessons.createLesson);
  
    // Retrieve all Lessons
    router.get("/", lessons.findAll);
  
    // Retrieve all completed Lessons
    router.get("/completed", lessons.findAllCompleted);
  
    // Retrieve a single Lesson with id
    router.get("/:id", lessons.findLessonById);
  
    // Update a Lesson with id
    router.put("/:id", lessons.update);
  
    app.use('/api/lessons', router);
  };