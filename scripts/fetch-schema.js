const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");

const API_ENPOINT = process.env["WORDPRESS_URL"] + "/graphql";
if (!API_ENPOINT) {
  throw new Error(
    "Api endpoint is not set. Provide a value for env variable WORDPRESS_URL"
  );
}

console.log(`... Fetching ${API_ENPOINT}`);

fetch(API_ENPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    variables: {},
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `
  })
})
  .then(result => result.json())
  .then(result => {
    // here we're filtering out any type information unrelated to unions or interfaces
    const filteredData = result.data.__schema.types.filter(
      type => type.possibleTypes !== null
    );
    result.data.__schema.types = filteredData;

    const filepath = path.join(__dirname, "..", "fragmentTypes.json");
    const data = JSON.stringify(result.data, 0, 2);

    fs.writeFile(filepath, data, err => {
      if (err) {
        console.error("Error writing fragmentTypes file", err);
      } else {
        console.log(
          `\n${data}\n\nFragment types successfully extracted.\n${filepath}\n`
        );
      }
    });
  })
  .catch(err => {
    console.error(err.message);
  });
