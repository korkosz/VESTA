'use strict';
(function () {

    class ProjectsComponent {
        constructor($http, socket) {
            this.$http = $http;
            this.socket = socket;

            this.message = 'Hello';
            this.projects = [];
        }

        $onInit() {
            this.$http.get("/api/projects").then(response => {
                this.projects = response.data;
                this.socket.syncUpdates("project", this.projects);
            });
        }
    }

    angular.module('vestaApp')
      .component('projects', {
          templateUrl: 'app/projects/projects.html',
          controller: ProjectsComponent
      });

})();
