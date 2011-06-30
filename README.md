## Cast Github Plugin

This is a plugin for the [Cast](http://www.cast-project.org) deployment
framework which allows you to integrate it with Github. With this plugin you can
trigger automatic deployment of you application when you push to your Github
repository.

This plugin is also meant to be used as an example which demonstrates how to use
the Cast plugin API.

## Available Settings

...

## Example settings

"github": {
  "username": "your_github_username",
  "api_key": "apikey12345",

  "projects": {
    "project_name_1": {
        "filters": {
          "tag": "v.+?",
          "branch": ""
        }
    },

    "project_name_2": {
        "filters": {
          "tag": "",
          "branch": "production"
        }
    }
  }
}

## Notes

For now you need to bundle all the dependencies with your plugin. In the future
we plan to provide better integration with NPM.
