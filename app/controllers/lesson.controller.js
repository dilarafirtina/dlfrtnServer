const db = require("../models");
const Lesson = db.lesson;
const User = db.user;

function today() {
    var today = new Date();
    var dd = today.getDate();

    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    return  mm + '-' + dd + '-' + yyyy;
}

exports.createLesson = (userId, lesson) => {
    return Comment.create({
        title: lesson.title,
        description: lesson.description,
        notes: lesson.notes,
        review: lesson.review,
        status: lesson.status,
        duration: lesson.duration,
        coomunicationTool: lesson.coomunicationTool,
        lessonDate: today(), 
        lessonTime: new Date().toLocaleTimeString()
    }
        .then((lesson) => {
            console.log(">> Created lesson: " + JSON.stringify(lesson, null, 4));
            return comment;
        })
        .catch((err) => {
            console.log(">> Error while creating lesson: ", err);
        }));
};



  exports.findLessonById = (id) => {
    return Lesson.findByPk(id, { include: ["user"] })
      .then((lesson) => {
        return lesson;
      })
      .catch((err) => {
        console.log(">> Error while finding lesson: ", err);
      });
  };

  exports.findAllCompleted = (status) => {
    return Lesson.findByPk(id, { include: ["user"] })
      .then((lesson) => {
        return lesson;
      })
      .catch((err) => {
        console.log(">> Error while finding lesson: ", err);
      });
  };
  


  exports.findAll = () => {
    return User.findAll({
      include: ["lessons"],
    }).then((users) => {
      return users;
    });
  };
  
  exports.update = (req, res) => {
    const id = req.params.id;
  
    Lesson.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Lesson was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Lesson with id=${id}. Maybe Lesson was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Lesson with id=" + id
        });
      });
  };

  exports.findAllCompleted = (req, res) => {
    Lesson.findAll({ where: { status: 'Completed' } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };