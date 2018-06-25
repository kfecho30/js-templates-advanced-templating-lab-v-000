function init() {
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)

  function initForm() {
    var formTemplate = document.getElementById("recipe-form-template").innerHTML
    var template = Handlebars.compile(formTemplate)
  }
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
