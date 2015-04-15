// create namespace for this project
var vle = vle || {};
vle.models = vle.models || {};

// learning path entity
vle.models.learningGroup = function () {
    this.Id = undefined;
    this.Title = undefined;
    this.OData__Comments = undefined;
    this.__metadata = {
        type: 'SP.Data.LearningGroupsListItem'
    };
};

