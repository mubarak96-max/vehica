const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query MyQuery {
      cars: allContentfulVehica {
        nodes {
          name
        }
      }
    }
  `)

  result.data.cars.nodes.forEach(car => {
    createPage({
      path: `/vehicles/${car.name}`,
      component: path.resolve(`src/components/carTemplate.js`),
      context: {
        name: car.name,
      },
    })
  })
}
