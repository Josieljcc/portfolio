const ColorSchemaButtonAll = document.querySelectorAll(".color-palete");
const firstColorSchema = ColorSchemaButtonAll[0];
const secondColorSchema = ColorSchemaButtonAll[1];
const tirdColorSchema = ColorSchemaButtonAll[2];

firstColorSchema.addEventListener("click", handdleFirstSchema);
secondColorSchema.addEventListener("click", handdleSecondSchema);
tirdColorSchema.addEventListener("click", handdleTirdSchema);

function handdleFirstSchema() {
  const varColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--header-color"
  );
  if (varColor != "hsl(285, 28%, 43%)") {
    document.documentElement.style.setProperty(
      "--header-color",
      "hsl(285, 28%, 43%)"
    );
    document.documentElement.style.setProperty(
      "--primary-color",
      "hsl(256, 100%, 85%)"
    );
    document.documentElement.style.setProperty(
      "--secondary-color",
      "hsl(256, 39%, 65%)"
    );
  }
}

function handdleSecondSchema() {
  var color = getComputedStyle(document.documentElement).getPropertyValue(
    "--header-color"
  );
  novaCor = "";
  if (color != "hsla(220, 67%, 43%)") {
    document.documentElement.style.setProperty(
      "--header-color",
      "hsla(220, 67%, 43%)"
    );
    document.documentElement.style.setProperty(
      "--primary-color",
      "hsla(220, 67%, 70%)"
    );
    document.documentElement.style.setProperty(
      "--secondary-color",
      "hsl(220, 39%, 52%)"
    );
  }
}

function handdleTirdSchema() {
  let color = getComputedStyle(document.documentElement).getPropertyValue(
    "--header-color"
  );
  if (color != "hsl(185, 28%, 43%)") {
    document.documentElement.style.setProperty(
      "--header-color",
      "hsl(185, 28%, 43%)"
    );
    document.documentElement.style.setProperty(
      "--primary-color",
      "hsl(156, 100%, 85%)"
    );
    document.documentElement.style.setProperty(
      "--secondary-color",
      "hsl(156, 39%, 65%)"
    );
  }
}
