// create namespace for this project
var vle = vle || {};
vle.models = vle.models || {};

// course entity
vle.models.course = function () {
    this.Id = undefined;
    this.Title = undefined;
    this.LearningGroupId = undefined;
    this.OData__Comments = undefined;
    this.__metadata = {
        type: 'SP.Data.CoursesListItem'
    };
};