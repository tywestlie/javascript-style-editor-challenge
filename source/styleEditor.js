$(document).ready( () => {
    $("input[type=submit]").on( "click", () => {
      let selector = $(style_editor[name="selector"]).val();

      let property = $(style_editor[name="property"]).val();

      let value = $(style_editor[name="value"]).val();

      $(`${selector}`).css(property, value);

      event.preventDefault();
    });
});
