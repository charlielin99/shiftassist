// Auto generate by https://gist.github.com/CatTail/2ed985c5afc5b41a4e06
import {
  GraphQLInt,
  GraphQLFloat,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

var Type = new GraphQLObjectType({
    name: "Simple",
    description: "",
    fields: () => ({
        "change-reports": {
            type: new GraphQLList(new GraphQLObjectType({
                name: "Change-report",
                description: "",
                fields: () => ({
                    "id": {
                        type: GraphQLString
                    },
                    "outgoingNurse": {
                        type: GraphQLString
                    },
                    "incomingNurse": {
                        type: GraphQLString
                    },
                    "date": {
                        type: GraphQLString
                    },
                    "time": {
                        type: GraphQLString
                    },
                    "patientData": {
                        type: new GraphQLObjectType({
                        name: "PatientData",
                        description: "",
                        fields: () => ({
                            "id": {
                                type: GraphQLString
                            },
                            "doctorId": {
                                type: GraphQLString
                            },
                            "symptoms": {
                                type: GraphQLString
                            },
                            "lastSurgeryDate": {
                                type: GraphQLString
                            },
                            "status": {
                                type: GraphQLString
                            },
                            "details": {
                                type: GraphQLString
                            },
                            "vitals": {
                                type: new GraphQLObjectType({
                                name: "Vitals",
                                description: "",
                                fields: () => ({
                                    "state": {
                                        type: GraphQLInt
                                    },
                                    "lastTime": {
                                        type: GraphQLString
                                    },
                                })
                            })
                            },
                            "pain": {
                                type: new GraphQLObjectType({
                                name: "Pain",
                                description: "",
                                fields: () => ({
                                    "location": {
                                        type: GraphQLString
                                    },
                                    "medication": {
                                        type: GraphQLString
                                    },
                                })
                            })
                            },
                        })
                    })
                    },
                })
            }))
        },
        "nurses": {
            type: new GraphQLList(new GraphQLObjectType({
                name: "Nurse",
                description: "",
                fields: () => ({
                    "id": {
                        type: GraphQLString
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
                    "shifts": {
                        type: new GraphQLList(new GraphQLObjectType({
                            name: "Shift",
                            description: "",
                            fields: () => ({
                                "startTime": {
                                    type: GraphQLString
                                },
                                "endTime": {
                                    type: GraphQLString
                                },
                            })
                        }))
                    },
                    "patients": {
                        type: new GraphQLList(GraphQLString)
                    },
                })
            }))
        },
        "patients": {
            type: new GraphQLList(new GraphQLObjectType({
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
        },
    })
})

export default Type

