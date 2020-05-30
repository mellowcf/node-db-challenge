const db = require("../data/config")

function find(){
    return db("project")
        .select("*")
    }

function findById(id){
    return db('project').where({ id }).first();
    }

function findResources(){
    return db("resource")
        .select("*")
    }

function findTasks() {
    return db("tasks")
        .select("*")
    }
function findResourceById(id){
    return db('resource').where({ id }).first();
    }

function addProject(scheme){
    if(!scheme.project_completed && !scheme.project_description){
        return db('project')
        .insert({
        project_name: scheme.project_name, 
        project_description: "none",
        project_completed: false    
    })
    }
    if(!scheme.project_completed){
        return db('project')
        .insert({
        project_name: scheme.project_name, 
        project_description: scheme.project_description,
        project_completed: false    
    })
    }
     if(!scheme.project_description){
        return db('project')
        .insert({
        project_name: scheme.project_name, 
        project_description: "none",
        project_completed: scheme.project_completed
    })
    }
    return db('project')
    .insert({
        project_name: scheme.project_name, 
        project_description: scheme.project_description,
        project_completed: scheme.project_completed
    })
    }

function addResource(resource){
        if(!resource.resource_description){
        return db('resource')
        .insert({
        resource_name: resource.resource_name, 
        resource_description: "none"
    })
    }
    return db('resource')
    .insert({
        resource_name: resource.resource_name, 
        resource_description: resource.resource_description
    })
    }

function addTask(task){

if(!task.task_completed && !task.task_notes){
    return db('tasks')
    .insert({
    project_id: task.project_id,
    task_notes: "none", 
    task_description: task.task_description,
    task_completed: false    
})
}
if(!task.task_completed){
    return db('tasks')
    .insert({
        project_id: task.project_id,
    task_notes: task.task_notes, 
    task_description: task.task_description,
    task_completed: false    
})
}
 if(!task.task_notes){
    return db('tasks')
    .insert({
        project_id: task.project_id,
    task_notes: "none", 
    task_description: task.task_description,
    task_completed: task.task_completed
})
}

return db('tasks')
.insert({
    project_id: task.project_id,
    task_notes: task.task_notes, 
    task_description: task.task_description,
    task_completed: task.task_completed
})
}

function findResourcesByProject(id){

    return db("project_resource")
    .join("project", "project.id", "project_resource.project_id")
    .join("resource", "resource.id", "project_resource.resource_id")
    .where("project_id", id)
    .select("project_resource.project_id", "resource.*")
   
    }

function findTasksByProject(id){
    return db('tasks')
        .where("project_id", id)
        
    }



    module.exports = {
        findById, find, findResources, addProject, findResourceById, addResource,findTasksByProject, findTasks, findResourcesByProject, addTask,
    }