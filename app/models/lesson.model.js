module.exports = (sequelize, Sequelize) => {
    const Lesson = sequelize.define("lesson", {
        title: { type: Sequelize.STRING },
        description: { type: Sequelize.STRING },
        notes: { type: Sequelize.STRING },
        review: { type: Sequelize.STRING },
        status: { type: Sequelize.STRING },
        duration: { type: Sequelize.INTEGER },
        coomunicationTool: { type: Sequelize.STRING },
        lessonDate: {
            type: Sequelize.DATE,
            get() {
                return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY');
            }
        },
        lessonTime: {
            type: Sequelize.DATE,
            get() {
                return moment(this.getDataValue('createdAt')).format('h:mm:ss');
            }
        },
    });

    return Lesson;
};
