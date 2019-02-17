// Auto generate by https://gist.github.com/CatTail/2ed985c5afc5b41a4e06
import {
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

var Type = new GraphQLList(new GraphQLObjectType({
        name: "Patient",
        description: "",
        fields: () => ({
            "id": {
                type: GraphQLInt
            },
            "first_name": {
                type: GraphQLString
            },
            "last_name": {
                type: GraphQLString
            },
            "email": {
                type: GraphQLString
            },
            "phone": {
                type: GraphQLString
            },
            "address": {
                type: GraphQLString
            },
            "gender": {
                type: GraphQLString
            },
            "history": {
                type: new GraphQLList(GraphQLString)
            },
            "avatar": {
                type: GraphQLString
            },
        })
    }))

export default Type

