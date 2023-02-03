$(document).ready(function() {
  
  $("#search-input").on("keypress", function(e) {
    if (e.which === 13) {
      var query = $(this).val();
      $.ajax({
        url: "https://api.github.com/search/users?q=" + query,
        success: function(data) {
          $(".user-list").remove();
          var users = data.items.slice(0, 12);
          for (var i = 0; i < 4; i++) {
            var row = $("<div class='row user-list'></div>");
            for (var j = 0; j < 3; j++) {
              var index = i * 3 + j;
              var user = users[index];
              if (!user) break;
              var col = $("<div class='col-sm d-flex justify-content-center user'></div>");
              var image = $("<img src='" + user.avatar_url + "' class='user-image ' />");
              var username = $("<p class='username'>" + user.login + "</p>");
              col.append(image).append(username);
              row.append(col);
            }
            $(".container-fluid").append(row);
          }
        }
      });
    }
  });

  $(document).on("click", ".user", function() {
    var username = $(this).find(".username").text();
    $.ajax({
      url: "https://api.github.com/users/" + username + "/repos",
      success: function(repos) {
        $(".user-list").remove();
        for (var i = 0; i < repos.length; i++) {
          var repo = repos[i];
          var row = $("<div class='row repo'></div>");
          var image = repo.owner.avatar_url ? "<img src='" + repo.owner.avatar_url + "' class='repo-image' />" : "<img src='./github-mark-white.png' class='repo-image' />";
          var name = "<p class='repo-name'>" + repo.name + "</p>";
          var description = "<p class='repo-description'>" + repo.description + "</p>";
          var stars = "<p class='repo-stars'>" + repo.stargazers_count + " stars</p>";
          var language = "<p class='repo-language'>" + repo.language + "</p>";
          row.append("<div class='col-sm'>" + image + name + description + stars + language + "</div>");
          $(".container-fluid").append(row);
        }
      }
    });
  });
});
