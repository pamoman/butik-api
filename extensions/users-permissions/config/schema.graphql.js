// extensions/users-permissions/config/schema.graphql.js
module.exports = {
    definition: `
    extend type UsersPermissionsMe {
      info: UsersPermissionsUser
    }
  `,
    resolver: {
        UsersPermissionsMe: {
            info: user => user
        },
    },
}