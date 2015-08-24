var frameworkDataMapper = require('../dal/data-mapper/framework-data-mapper');

module.exports = {
    findById : function(id) {
        return frameworkDataMapper.findById(id);
    }
};