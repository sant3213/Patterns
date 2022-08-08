var repo = function () {

    var db = {};

    var get = function (id) {
        console.log('Getting task '+ id);
        return {
            name: 'new task from db'
        }
    }

    var save = function (task) {
        console.log('Saving ' + task.name + ' to be db');
    }

    console.log('newing up task repo');
    return {
        get: get,
        save: save
    }
}

var rep = new repo();
console.log(rep.get(10));
console.log(rep.save({name:'sant'}))
/**
 * newing up task repo
 * Getting task 10
 * { name: 'new task from db' }
 * Saving sant to be db
 */


//------------------------ Now caching the repository with Factory--------------------------
var repoFactory = function() {

    this.getRepo = function(repoType) {
        if(repoType === 'task') {
            if(this.taskRepo) {
                return this.taskRepo;
            } else {
                this.taskRepo = repo();
                return this.taskRepo;
            }
        }
        if(repoType === 'user') {
            var userRepo = require('./userRepository')();
            return userRepo;
        }
        if(repoType === 'project') {
            var projectRepo = require('./projectRepository')();
            return projectRepo;
        }
    }

}

/**
 * require('whatever')()
 * Will result in the following happening(roughly, plugins are lazy loaded but in practie you won´t notice any difference)
 */