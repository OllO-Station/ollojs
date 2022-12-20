import * as _58 from "../protoc-gen-openapiv2/options/openapiv2";
export declare namespace grpc {
    namespace gateway {
        namespace protoc_gen_openapiv2 {
            const options: {
                schemeFromJSON(object: any): _58.Scheme;
                schemeToJSON(object: _58.Scheme): string;
                jSONSchema_JSONSchemaSimpleTypesFromJSON(object: any): _58.JSONSchema_JSONSchemaSimpleTypes;
                jSONSchema_JSONSchemaSimpleTypesToJSON(object: _58.JSONSchema_JSONSchemaSimpleTypes): string;
                securityScheme_TypeFromJSON(object: any): _58.SecurityScheme_Type;
                securityScheme_TypeToJSON(object: _58.SecurityScheme_Type): string;
                securityScheme_InFromJSON(object: any): _58.SecurityScheme_In;
                securityScheme_InToJSON(object: _58.SecurityScheme_In): string;
                securityScheme_FlowFromJSON(object: any): _58.SecurityScheme_Flow;
                securityScheme_FlowToJSON(object: _58.SecurityScheme_Flow): string;
                Scheme: typeof _58.Scheme;
                SchemeSDKType: typeof _58.Scheme;
                JSONSchema_JSONSchemaSimpleTypes: typeof _58.JSONSchema_JSONSchemaSimpleTypes;
                JSONSchema_JSONSchemaSimpleTypesSDKType: typeof _58.JSONSchema_JSONSchemaSimpleTypes;
                SecurityScheme_Type: typeof _58.SecurityScheme_Type;
                SecurityScheme_TypeSDKType: typeof _58.SecurityScheme_Type;
                SecurityScheme_In: typeof _58.SecurityScheme_In;
                SecurityScheme_InSDKType: typeof _58.SecurityScheme_In;
                SecurityScheme_Flow: typeof _58.SecurityScheme_Flow;
                SecurityScheme_FlowSDKType: typeof _58.SecurityScheme_Flow;
                Swagger_ResponsesEntry: {
                    encode(message: _58.Swagger_ResponsesEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Swagger_ResponsesEntry;
                    fromPartial(object: {
                        key?: string;
                        value?: {
                            description?: string;
                            schema?: {
                                jsonSchema?: {
                                    ref?: string;
                                    title?: string;
                                    description?: string;
                                    default?: string;
                                    readOnly?: boolean;
                                    example?: string;
                                    multipleOf?: number;
                                    maximum?: number;
                                    exclusiveMaximum?: boolean;
                                    minimum?: number;
                                    exclusiveMinimum?: boolean;
                                    maxLength?: string | number | import("long");
                                    minLength?: string | number | import("long");
                                    pattern?: string;
                                    maxItems?: string | number | import("long");
                                    minItems?: string | number | import("long");
                                    uniqueItems?: boolean;
                                    maxProperties?: string | number | import("long");
                                    minProperties?: string | number | import("long");
                                    required?: string[];
                                    array?: string[];
                                    type?: _58.JSONSchema_JSONSchemaSimpleTypes[];
                                    format?: string;
                                    enum?: string[];
                                };
                                discriminator?: string;
                                readOnly?: boolean;
                                externalDocs?: {
                                    description?: string;
                                    url?: string;
                                };
                                example?: string;
                            };
                            headers?: {
                                [x: string]: {
                                    description?: string;
                                    type?: string;
                                    format?: string;
                                    default?: string;
                                    pattern?: string;
                                };
                            };
                            examples?: {
                                [x: string]: string;
                            };
                            extensions?: {
                                [x: string]: {
                                    nullValue?: import("../google/protobuf/struct").NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    };
                                    listValue?: {
                                        values?: any[];
                                    };
                                };
                            };
                        };
                    }): _58.Swagger_ResponsesEntry;
                };
                Swagger_ExtensionsEntry: {
                    encode(message: _58.Swagger_ExtensionsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Swagger_ExtensionsEntry;
                    fromPartial(object: {
                        key?: string;
                        value?: {
                            nullValue?: import("../google/protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: {
                                fields?: {
                                    [x: string]: any;
                                };
                            };
                            listValue?: {
                                values?: any[];
                            };
                        };
                    }): _58.Swagger_ExtensionsEntry;
                };
                Swagger: {
                    encode(message: _58.Swagger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Swagger;
                    fromPartial(object: {
                        swagger?: string;
                        info?: {
                            title?: string;
                            description?: string;
                            termsOfService?: string;
                            contact?: {
                                name?: string;
                                url?: string;
                                email?: string;
                            };
                            license?: {
                                name?: string;
                                url?: string;
                            };
                            version?: string;
                            extensions?: {
                                [x: string]: {
                                    nullValue?: import("../google/protobuf/struct").NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    };
                                    listValue?: {
                                        values?: any[];
                                    };
                                };
                            };
                        };
                        host?: string;
                        basePath?: string;
                        schemes?: _58.Scheme[];
                        consumes?: string[];
                        produces?: string[];
                        responses?: {
                            [x: string]: {
                                description?: string;
                                schema?: {
                                    jsonSchema?: {
                                        ref?: string;
                                        title?: string;
                                        description?: string;
                                        default?: string;
                                        readOnly?: boolean;
                                        example?: string;
                                        multipleOf?: number;
                                        maximum?: number;
                                        exclusiveMaximum?: boolean;
                                        minimum?: number;
                                        exclusiveMinimum?: boolean;
                                        maxLength?: string | number | import("long");
                                        minLength?: string | number | import("long");
                                        pattern?: string;
                                        maxItems?: string | number | import("long");
                                        minItems?: string | number | import("long");
                                        uniqueItems?: boolean;
                                        maxProperties?: string | number | import("long");
                                        minProperties?: string | number | import("long");
                                        required?: string[];
                                        array?: string[];
                                        type?: _58.JSONSchema_JSONSchemaSimpleTypes[];
                                        format?: string;
                                        enum?: string[];
                                    };
                                    discriminator?: string;
                                    readOnly?: boolean;
                                    externalDocs?: {
                                        description?: string;
                                        url?: string;
                                    };
                                    example?: string;
                                };
                                headers?: {
                                    [x: string]: {
                                        description?: string;
                                        type?: string;
                                        format?: string;
                                        default?: string;
                                        pattern?: string;
                                    };
                                };
                                examples?: {
                                    [x: string]: string;
                                };
                                extensions?: {
                                    [x: string]: {
                                        nullValue?: import("../google/protobuf/struct").NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        };
                                        listValue?: {
                                            values?: any[];
                                        };
                                    };
                                };
                            };
                        };
                        securityDefinitions?: {
                            security?: {
                                [x: string]: {
                                    type?: _58.SecurityScheme_Type;
                                    description?: string;
                                    name?: string;
                                    in?: _58.SecurityScheme_In;
                                    flow?: _58.SecurityScheme_Flow;
                                    authorizationUrl?: string;
                                    tokenUrl?: string;
                                    scopes?: {
                                        scope?: {
                                            [x: string]: string;
                                        };
                                    };
                                    extensions?: {
                                        [x: string]: {
                                            nullValue?: import("../google/protobuf/struct").NullValue;
                                            numberValue?: number;
                                            stringValue?: string;
                                            boolValue?: boolean;
                                            structValue?: {
                                                fields?: {
                                                    [x: string]: any;
                                                };
                                            };
                                            listValue?: {
                                                values?: any[];
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        security?: {
                            securityRequirement?: {
                                [x: string]: {
                                    scope?: string[];
                                };
                            };
                        }[];
                        externalDocs?: {
                            description?: string;
                            url?: string;
                        };
                        extensions?: {
                            [x: string]: {
                                nullValue?: import("../google/protobuf/struct").NullValue;
                                numberValue?: number;
                                stringValue?: string;
                                boolValue?: boolean;
                                structValue?: {
                                    fields?: {
                                        [x: string]: any;
                                    };
                                };
                                listValue?: {
                                    values?: any[];
                                };
                            };
                        };
                    }): _58.Swagger;
                };
                Operation_ResponsesEntry: {
                    encode(message: _58.Operation_ResponsesEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Operation_ResponsesEntry;
                    fromPartial(object: {
                        key?: string;
                        value?: {
                            description?: string;
                            schema?: {
                                jsonSchema?: {
                                    ref?: string;
                                    title?: string;
                                    description?: string;
                                    default?: string;
                                    readOnly?: boolean;
                                    example?: string;
                                    multipleOf?: number;
                                    maximum?: number;
                                    exclusiveMaximum?: boolean;
                                    minimum?: number;
                                    exclusiveMinimum?: boolean;
                                    maxLength?: string | number | import("long");
                                    minLength?: string | number | import("long");
                                    pattern?: string;
                                    maxItems?: string | number | import("long");
                                    minItems?: string | number | import("long");
                                    uniqueItems?: boolean;
                                    maxProperties?: string | number | import("long");
                                    minProperties?: string | number | import("long");
                                    required?: string[];
                                    array?: string[];
                                    type?: _58.JSONSchema_JSONSchemaSimpleTypes[];
                                    format?: string;
                                    enum?: string[];
                                };
                                discriminator?: string;
                                readOnly?: boolean;
                                externalDocs?: {
                                    description?: string;
                                    url?: string;
                                };
                                example?: string;
                            };
                            headers?: {
                                [x: string]: {
                                    description?: string;
                                    type?: string;
                                    format?: string;
                                    default?: string;
                                    pattern?: string;
                                };
                            };
                            examples?: {
                                [x: string]: string;
                            };
                            extensions?: {
                                [x: string]: {
                                    nullValue?: import("../google/protobuf/struct").NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    };
                                    listValue?: {
                                        values?: any[];
                                    };
                                };
                            };
                        };
                    }): _58.Operation_ResponsesEntry;
                };
                Operation_ExtensionsEntry: {
                    encode(message: _58.Operation_ExtensionsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Operation_ExtensionsEntry;
                    fromPartial(object: {
                        key?: string;
                        value?: {
                            nullValue?: import("../google/protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: {
                                fields?: {
                                    [x: string]: any;
                                };
                            };
                            listValue?: {
                                values?: any[];
                            };
                        };
                    }): _58.Operation_ExtensionsEntry;
                };
                Operation: {
                    encode(message: _58.Operation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Operation;
                    fromPartial(object: {
                        tags?: string[];
                        summary?: string;
                        description?: string;
                        externalDocs?: {
                            description?: string;
                            url?: string;
                        };
                        operationId?: string;
                        consumes?: string[];
                        produces?: string[];
                        responses?: {
                            [x: string]: {
                                description?: string;
                                schema?: {
                                    jsonSchema?: {
                                        ref?: string;
                                        title?: string;
                                        description?: string;
                                        default?: string;
                                        readOnly?: boolean;
                                        example?: string;
                                        multipleOf?: number;
                                        maximum?: number;
                                        exclusiveMaximum?: boolean;
                                        minimum?: number;
                                        exclusiveMinimum?: boolean;
                                        maxLength?: string | number | import("long");
                                        minLength?: string | number | import("long");
                                        pattern?: string;
                                        maxItems?: string | number | import("long");
                                        minItems?: string | number | import("long");
                                        uniqueItems?: boolean;
                                        maxProperties?: string | number | import("long");
                                        minProperties?: string | number | import("long");
                                        required?: string[];
                                        array?: string[];
                                        type?: _58.JSONSchema_JSONSchemaSimpleTypes[];
                                        format?: string;
                                        enum?: string[];
                                    };
                                    discriminator?: string;
                                    readOnly?: boolean;
                                    externalDocs?: {
                                        description?: string;
                                        url?: string;
                                    };
                                    example?: string;
                                };
                                headers?: {
                                    [x: string]: {
                                        description?: string;
                                        type?: string;
                                        format?: string;
                                        default?: string;
                                        pattern?: string;
                                    };
                                };
                                examples?: {
                                    [x: string]: string;
                                };
                                extensions?: {
                                    [x: string]: {
                                        nullValue?: import("../google/protobuf/struct").NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        };
                                        listValue?: {
                                            values?: any[];
                                        };
                                    };
                                };
                            };
                        };
                        schemes?: _58.Scheme[];
                        deprecated?: boolean;
                        security?: {
                            securityRequirement?: {
                                [x: string]: {
                                    scope?: string[];
                                };
                            };
                        }[];
                        extensions?: {
                            [x: string]: {
                                nullValue?: import("../google/protobuf/struct").NullValue;
                                numberValue?: number;
                                stringValue?: string;
                                boolValue?: boolean;
                                structValue?: {
                                    fields?: {
                                        [x: string]: any;
                                    };
                                };
                                listValue?: {
                                    values?: any[];
                                };
                            };
                        };
                    }): _58.Operation;
                };
                Header: {
                    encode(message: _58.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Header;
                    fromPartial(object: {
                        description?: string;
                        type?: string;
                        format?: string;
                        default?: string;
                        pattern?: string;
                    }): _58.Header;
                };
                Response_HeadersEntry: {
                    encode(message: _58.Response_HeadersEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Response_HeadersEntry;
                    fromPartial(object: {
                        key?: string;
                        value?: {
                            description?: string;
                            type?: string;
                            format?: string;
                            default?: string;
                            pattern?: string;
                        };
                    }): _58.Response_HeadersEntry;
                };
                Response_ExamplesEntry: {
                    encode(message: _58.Response_ExamplesEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Response_ExamplesEntry;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _58.Response_ExamplesEntry;
                };
                Response_ExtensionsEntry: {
                    encode(message: _58.Response_ExtensionsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Response_ExtensionsEntry;
                    fromPartial(object: {
                        key?: string;
                        value?: {
                            nullValue?: import("../google/protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: {
                                fields?: {
                                    [x: string]: any;
                                };
                            };
                            listValue?: {
                                values?: any[];
                            };
                        };
                    }): _58.Response_ExtensionsEntry;
                };
                Response: {
                    encode(message: _58.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Response;
                    fromPartial(object: {
                        description?: string;
                        schema?: {
                            jsonSchema?: {
                                ref?: string;
                                title?: string;
                                description?: string;
                                default?: string;
                                readOnly?: boolean;
                                example?: string;
                                multipleOf?: number;
                                maximum?: number;
                                exclusiveMaximum?: boolean;
                                minimum?: number;
                                exclusiveMinimum?: boolean;
                                maxLength?: string | number | import("long");
                                minLength?: string | number | import("long");
                                pattern?: string;
                                maxItems?: string | number | import("long");
                                minItems?: string | number | import("long");
                                uniqueItems?: boolean;
                                maxProperties?: string | number | import("long");
                                minProperties?: string | number | import("long");
                                required?: string[];
                                array?: string[];
                                type?: _58.JSONSchema_JSONSchemaSimpleTypes[];
                                format?: string;
                                enum?: string[];
                            };
                            discriminator?: string;
                            readOnly?: boolean;
                            externalDocs?: {
                                description?: string;
                                url?: string;
                            };
                            example?: string;
                        };
                        headers?: {
                            [x: string]: {
                                description?: string;
                                type?: string;
                                format?: string;
                                default?: string;
                                pattern?: string;
                            };
                        };
                        examples?: {
                            [x: string]: string;
                        };
                        extensions?: {
                            [x: string]: {
                                nullValue?: import("../google/protobuf/struct").NullValue;
                                numberValue?: number;
                                stringValue?: string;
                                boolValue?: boolean;
                                structValue?: {
                                    fields?: {
                                        [x: string]: any;
                                    };
                                };
                                listValue?: {
                                    values?: any[];
                                };
                            };
                        };
                    }): _58.Response;
                };
                Info_ExtensionsEntry: {
                    encode(message: _58.Info_ExtensionsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Info_ExtensionsEntry;
                    fromPartial(object: {
                        key?: string;
                        value?: {
                            nullValue?: import("../google/protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: {
                                fields?: {
                                    [x: string]: any;
                                };
                            };
                            listValue?: {
                                values?: any[];
                            };
                        };
                    }): _58.Info_ExtensionsEntry;
                };
                Info: {
                    encode(message: _58.Info, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Info;
                    fromPartial(object: {
                        title?: string;
                        description?: string;
                        termsOfService?: string;
                        contact?: {
                            name?: string;
                            url?: string;
                            email?: string;
                        };
                        license?: {
                            name?: string;
                            url?: string;
                        };
                        version?: string;
                        extensions?: {
                            [x: string]: {
                                nullValue?: import("../google/protobuf/struct").NullValue;
                                numberValue?: number;
                                stringValue?: string;
                                boolValue?: boolean;
                                structValue?: {
                                    fields?: {
                                        [x: string]: any;
                                    };
                                };
                                listValue?: {
                                    values?: any[];
                                };
                            };
                        };
                    }): _58.Info;
                };
                Contact: {
                    encode(message: _58.Contact, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Contact;
                    fromPartial(object: {
                        name?: string;
                        url?: string;
                        email?: string;
                    }): _58.Contact;
                };
                License: {
                    encode(message: _58.License, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.License;
                    fromPartial(object: {
                        name?: string;
                        url?: string;
                    }): _58.License;
                };
                ExternalDocumentation: {
                    encode(message: _58.ExternalDocumentation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.ExternalDocumentation;
                    fromPartial(object: {
                        description?: string;
                        url?: string;
                    }): _58.ExternalDocumentation;
                };
                Schema: {
                    encode(message: _58.Schema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Schema;
                    fromPartial(object: {
                        jsonSchema?: {
                            ref?: string;
                            title?: string;
                            description?: string;
                            default?: string;
                            readOnly?: boolean;
                            example?: string;
                            multipleOf?: number;
                            maximum?: number;
                            exclusiveMaximum?: boolean;
                            minimum?: number;
                            exclusiveMinimum?: boolean;
                            maxLength?: string | number | import("long");
                            minLength?: string | number | import("long");
                            pattern?: string;
                            maxItems?: string | number | import("long");
                            minItems?: string | number | import("long");
                            uniqueItems?: boolean;
                            maxProperties?: string | number | import("long");
                            minProperties?: string | number | import("long");
                            required?: string[];
                            array?: string[];
                            type?: _58.JSONSchema_JSONSchemaSimpleTypes[];
                            format?: string;
                            enum?: string[];
                        };
                        discriminator?: string;
                        readOnly?: boolean;
                        externalDocs?: {
                            description?: string;
                            url?: string;
                        };
                        example?: string;
                    }): _58.Schema;
                };
                JSONSchema: {
                    encode(message: _58.JSONSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.JSONSchema;
                    fromPartial(object: {
                        ref?: string;
                        title?: string;
                        description?: string;
                        default?: string;
                        readOnly?: boolean;
                        example?: string;
                        multipleOf?: number;
                        maximum?: number;
                        exclusiveMaximum?: boolean;
                        minimum?: number;
                        exclusiveMinimum?: boolean;
                        maxLength?: string | number | import("long");
                        minLength?: string | number | import("long");
                        pattern?: string;
                        maxItems?: string | number | import("long");
                        minItems?: string | number | import("long");
                        uniqueItems?: boolean;
                        maxProperties?: string | number | import("long");
                        minProperties?: string | number | import("long");
                        required?: string[];
                        array?: string[];
                        type?: _58.JSONSchema_JSONSchemaSimpleTypes[];
                        format?: string;
                        enum?: string[];
                    }): _58.JSONSchema;
                };
                Tag: {
                    encode(message: _58.Tag, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Tag;
                    fromPartial(object: {
                        description?: string;
                        externalDocs?: {
                            description?: string;
                            url?: string;
                        };
                    }): _58.Tag;
                };
                SecurityDefinitions_SecurityEntry: {
                    encode(message: _58.SecurityDefinitions_SecurityEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.SecurityDefinitions_SecurityEntry;
                    fromPartial(object: {
                        key?: string;
                        value?: {
                            type?: _58.SecurityScheme_Type;
                            description?: string;
                            name?: string;
                            in?: _58.SecurityScheme_In;
                            flow?: _58.SecurityScheme_Flow;
                            authorizationUrl?: string;
                            tokenUrl?: string;
                            scopes?: {
                                scope?: {
                                    [x: string]: string;
                                };
                            };
                            extensions?: {
                                [x: string]: {
                                    nullValue?: import("../google/protobuf/struct").NullValue;
                                    numberValue?: number;
                                    stringValue?: string;
                                    boolValue?: boolean;
                                    structValue?: {
                                        fields?: {
                                            [x: string]: any;
                                        };
                                    };
                                    listValue?: {
                                        values?: any[];
                                    };
                                };
                            };
                        };
                    }): _58.SecurityDefinitions_SecurityEntry;
                };
                SecurityDefinitions: {
                    encode(message: _58.SecurityDefinitions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.SecurityDefinitions;
                    fromPartial(object: {
                        security?: {
                            [x: string]: {
                                type?: _58.SecurityScheme_Type;
                                description?: string;
                                name?: string;
                                in?: _58.SecurityScheme_In;
                                flow?: _58.SecurityScheme_Flow;
                                authorizationUrl?: string;
                                tokenUrl?: string;
                                scopes?: {
                                    scope?: {
                                        [x: string]: string;
                                    };
                                };
                                extensions?: {
                                    [x: string]: {
                                        nullValue?: import("../google/protobuf/struct").NullValue;
                                        numberValue?: number;
                                        stringValue?: string;
                                        boolValue?: boolean;
                                        structValue?: {
                                            fields?: {
                                                [x: string]: any;
                                            };
                                        };
                                        listValue?: {
                                            values?: any[];
                                        };
                                    };
                                };
                            };
                        };
                    }): _58.SecurityDefinitions;
                };
                SecurityScheme_ExtensionsEntry: {
                    encode(message: _58.SecurityScheme_ExtensionsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.SecurityScheme_ExtensionsEntry;
                    fromPartial(object: {
                        key?: string;
                        value?: {
                            nullValue?: import("../google/protobuf/struct").NullValue;
                            numberValue?: number;
                            stringValue?: string;
                            boolValue?: boolean;
                            structValue?: {
                                fields?: {
                                    [x: string]: any;
                                };
                            };
                            listValue?: {
                                values?: any[];
                            };
                        };
                    }): _58.SecurityScheme_ExtensionsEntry;
                };
                SecurityScheme: {
                    encode(message: _58.SecurityScheme, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.SecurityScheme;
                    fromPartial(object: {
                        type?: _58.SecurityScheme_Type;
                        description?: string;
                        name?: string;
                        in?: _58.SecurityScheme_In;
                        flow?: _58.SecurityScheme_Flow;
                        authorizationUrl?: string;
                        tokenUrl?: string;
                        scopes?: {
                            scope?: {
                                [x: string]: string;
                            };
                        };
                        extensions?: {
                            [x: string]: {
                                nullValue?: import("../google/protobuf/struct").NullValue;
                                numberValue?: number;
                                stringValue?: string;
                                boolValue?: boolean;
                                structValue?: {
                                    fields?: {
                                        [x: string]: any;
                                    };
                                };
                                listValue?: {
                                    values?: any[];
                                };
                            };
                        };
                    }): _58.SecurityScheme;
                };
                SecurityRequirement_SecurityRequirementEntry: {
                    encode(message: _58.SecurityRequirement_SecurityRequirementEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.SecurityRequirement_SecurityRequirementEntry;
                    fromPartial(object: {
                        key?: string;
                        value?: any;
                    }): _58.SecurityRequirement_SecurityRequirementEntry;
                };
                SecurityRequirement: {
                    encode(message: _58.SecurityRequirement, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.SecurityRequirement;
                    fromPartial(object: {
                        securityRequirement?: {
                            [x: string]: {
                                scope?: string[];
                            };
                        };
                    }): _58.SecurityRequirement;
                };
                SecurityRequirement_SecurityRequirementValue: {
                    encode(message: _58.SecurityRequirement_SecurityRequirementValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.SecurityRequirement_SecurityRequirementValue;
                    fromPartial(object: {
                        scope?: string[];
                    }): _58.SecurityRequirement_SecurityRequirementValue;
                };
                Scopes_ScopeEntry: {
                    encode(message: _58.Scopes_ScopeEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Scopes_ScopeEntry;
                    fromPartial(object: {
                        key?: string;
                        value?: string;
                    }): _58.Scopes_ScopeEntry;
                };
                Scopes: {
                    encode(message: _58.Scopes, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Scopes;
                    fromPartial(object: {
                        scope?: {
                            [x: string]: string;
                        };
                    }): _58.Scopes;
                };
            };
        }
    }
}
