// create namespace for this project
var vle = vle || {};
vle.models = vle.models || {};

// learning item entity
vle.models.course = function () {
    this.Id = undefined;
    this.Title = undefined;
    this.LearningGroupId = undefined;
    this.DetailLink = undefined;
    this.OData__Comments = undefined;
    this.__metadata = {
        type: 'SP.Data.CourseListItem'
    };
};