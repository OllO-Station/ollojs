import * as _8 from "./api/http";
import * as _9 from "./api/httpbody";
import * as _10 from "./protobuf/any";
import * as _11 from "./protobuf/descriptor";
import * as _12 from "./protobuf/timestamp";
import * as _13 from "./protobuf/duration";
export declare namespace google {
    const api: {
        HttpBody: {
            encode(message: _9.HttpBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.HttpBody;
            fromPartial(object: {
                contentType?: string;
                data?: Uint8Array;
                extensions?: {
                    typeUrl?: string;
                    value?: Uint8Array;
                }[];
            }): _9.HttpBody;
        };
        Http: {
            encode(message: _8.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Http;
            fromPartial(object: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            }): _8.Http;
        };
        HttpRule: {
            encode(message: _8.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.HttpRule;
            fromPartial(object: {
                selector?: string;
                get?: string;
                put?: string;
                post?: string;
                delete?: string;
                patch?: string;
                custom?: {
                    kind?: string;
                    path?: string;
                };
                body?: string;
                responseBody?: string;
                additionalBindings?: any[];
            }): _8.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _8.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.CustomHttpPattern;
            fromPartial(object: {
                kind?: string;
                path?: string;
            }): _8.CustomHttpPattern;
        };
    };
    const protobuf: {
        Duration: {
            encode(message: _13.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Duration;
            fromPartial(object: {
                seconds?: string | number | import("long");
                nanos?: number;
            }): _13.Duration;
        };
        Timestamp: {
            encode(message: _12.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Timestamp;
            fromPartial(object: {
                seconds?: string | number | import("long");
                nanos?: number;
            }): _12.Timestamp;
        };
        fieldDescriptorProto_TypeFromJSON(object: any): _11.FieldDescriptorProto_Type;
        fieldDescriptorProto_TypeToJSON(object: _11.FieldDescriptorProto_Type): string;
        fieldDescriptorProto_LabelFromJSON(object: any): _11.FieldDescriptorProto_Label;
        fieldDescriptorProto_LabelToJSON(object: _11.FieldDescriptorProto_Label): string;
        fileOptions_OptimizeModeFromJSON(object: any): _11.FileOptions_OptimizeMode;
        fileOptions_OptimizeModeToJSON(object: _11.FileOptions_OptimizeMode): string;
        fieldOptions_CTypeFromJSON(object: any): _11.FieldOptions_CType;
        fieldOptions_CTypeToJSON(object: _11.FieldOptions_CType): string;
        fieldOptions_JSTypeFromJSON(object: any): _11.FieldOptions_JSType;
        fieldOptions_JSTypeToJSON(object: _11.FieldOptions_JSType): string;
        methodOptions_IdempotencyLevelFromJSON(object: any): _11.MethodOptions_IdempotencyLevel;
        methodOptions_IdempotencyLevelToJSON(object: _11.MethodOptions_IdempotencyLevel): string;
        FieldDescriptorProto_Type: typeof _11.FieldDescriptorProto_Type;
        FieldDescriptorProto_TypeSDKType: typeof _11.FieldDescriptorProto_Type;
        FieldDescriptorProto_Label: typeof _11.FieldDescriptorProto_Label;
        FieldDescriptorProto_LabelSDKType: typeof _11.FieldDescriptorProto_Label;
        FileOptions_OptimizeMode: typeof _11.FileOptions_OptimizeMode;
        FileOptions_OptimizeModeSDKType: typeof _11.FileOptions_OptimizeMode;
        FieldOptions_CType: typeof _11.FieldOptions_CType;
        FieldOptions_CTypeSDKType: typeof _11.FieldOptions_CType;
        FieldOptions_JSType: typeof _11.FieldOptions_JSType;
        FieldOptions_JSTypeSDKType: typeof _11.FieldOptions_JSType;
        MethodOptions_IdempotencyLevel: typeof _11.MethodOptions_IdempotencyLevel;
        MethodOptions_IdempotencyLevelSDKType: typeof _11.MethodOptions_IdempotencyLevel;
        FileDescriptorSet: {
            encode(message: _11.FileDescriptorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.FileDescriptorSet;
            fromPartial(object: {
                file?: {
                    name?: string;
                    package?: string;
                    dependency?: string[];
                    publicDependency?: number[];
                    weakDependency?: number[];
                    messageType?: {
                        name?: string;
                        field?: {
                            name?: string;
                            number?: number;
                            label?: _11.FieldDescriptorProto_Label;
                            type?: _11.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _11.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _11.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long");
                                    negativeIntValue?: string | number | import("long");
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        extension?: {
                            name?: string;
                            number?: number;
                            label?: _11.FieldDescriptorProto_Label;
                            type?: _11.FieldDescriptorProto_Type;
                            typeName?: string;
                            extendee?: string;
                            defaultValue?: string;
                            oneofIndex?: number;
                            jsonName?: string;
                            options?: {
                                ctype?: _11.FieldOptions_CType;
                                packed?: boolean;
                                jstype?: _11.FieldOptions_JSType;
                                lazy?: boolean;
                                deprecated?: boolean;
                                weak?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long");
                                    negativeIntValue?: string | number | import("long");
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        nestedType?: any[];
                        enumType?: {
                            name?: string;
                            value?: {
                                name?: string;
                                number?: number;
                                options?: {
                                    deprecated?: boolean;
                                    uninterpretedOption?: {
                                        name?: {
                                            namePart?: string;
                                            isExtension?: boolean;
                                        }[];
                                        identifierValue?: string;
                                        positiveIntValue?: string | number | import("long");
                                        negativeIntValue?: string | number | import("long");
                                        doubleValue?: number;
                                        stringValue?: Uint8Array;
                                        aggregateValue?: string;
                                    }[];
                                };
                            }[];
                            options?: {
                                allowAlias?: boolean;
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long");
                                    negativeIntValue?: string | number | import("long");
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                            reservedRange?: {
                                start?: number;
                                end?: number;
                            }[];
                            reservedName?: string[];
                        }[];
                        extensionRange?: {
                            start?: number;
                            end?: number;
                            options?: {
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long");
                                    negativeIntValue?: string | number | import("long");
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        oneofDecl?: {
                            name?: string;
                            options?: {
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long");
                                    negativeIntValue?: string | number | import("long");
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            messageSetWireFormat?: boolean;
                            noStandardDescriptorAccessor?: boolean;
                            deprecated?: boolean;
                            mapEntry?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    enumType?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long");
                                    negativeIntValue?: string | number | import("long");
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allowAlias?: boolean;
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    service?: {
                        name?: string;
                        method?: {
                            name?: string;
                            inputType?: string;
                            outputType?: string;
                            options?: {
                                deprecated?: boolean;
                                idempotencyLevel?: _11.MethodOptions_IdempotencyLevel;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long");
                                    negativeIntValue?: string | number | import("long");
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                            clientStreaming?: boolean;
                            serverStreaming?: boolean;
                        }[];
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _11.FieldDescriptorProto_Label;
                        type?: _11.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _11.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _11.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        javaPackage?: string;
                        javaOuterClassname?: string;
                        javaMultipleFiles?: boolean;
                        javaGenerateEqualsAndHash?: boolean;
                        javaStringCheckUtf8?: boolean;
                        optimizeFor?: _11.FileOptions_OptimizeMode;
                        goPackage?: string;
                        ccGenericServices?: boolean;
                        javaGenericServices?: boolean;
                        pyGenericServices?: boolean;
                        phpGenericServices?: boolean;
                        deprecated?: boolean;
                        ccEnableArenas?: boolean;
                        objcClassPrefix?: string;
                        csharpNamespace?: string;
                        swiftPrefix?: string;
                        phpClassPrefix?: string;
                        phpNamespace?: string;
                        phpMetadataNamespace?: string;
                        rubyPackage?: string;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    sourceCodeInfo?: {
                        location?: {
                            path?: number[];
                            span?: number[];
                            leadingComments?: string;
                            trailingComments?: string;
                            leadingDetachedComments?: string[];
                        }[];
                    };
                    syntax?: string;
                }[];
            }): _11.FileDescriptorSet;
        };
        FileDescriptorProto: {
            encode(message: _11.FileDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.FileDescriptorProto;
            fromPartial(object: {
                name?: string;
                package?: string;
                dependency?: string[];
                publicDependency?: number[];
                weakDependency?: number[];
                messageType?: {
                    name?: string;
                    field?: {
                        name?: string;
                        number?: number;
                        label?: _11.FieldDescriptorProto_Label;
                        type?: _11.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _11.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _11.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    extension?: {
                        name?: string;
                        number?: number;
                        label?: _11.FieldDescriptorProto_Label;
                        type?: _11.FieldDescriptorProto_Type;
                        typeName?: string;
                        extendee?: string;
                        defaultValue?: string;
                        oneofIndex?: number;
                        jsonName?: string;
                        options?: {
                            ctype?: _11.FieldOptions_CType;
                            packed?: boolean;
                            jstype?: _11.FieldOptions_JSType;
                            lazy?: boolean;
                            deprecated?: boolean;
                            weak?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    nestedType?: any[];
                    enumType?: {
                        name?: string;
                        value?: {
                            name?: string;
                            number?: number;
                            options?: {
                                deprecated?: boolean;
                                uninterpretedOption?: {
                                    name?: {
                                        namePart?: string;
                                        isExtension?: boolean;
                                    }[];
                                    identifierValue?: string;
                                    positiveIntValue?: string | number | import("long");
                                    negativeIntValue?: string | number | import("long");
                                    doubleValue?: number;
                                    stringValue?: Uint8Array;
                                    aggregateValue?: string;
                                }[];
                            };
                        }[];
                        options?: {
                            allowAlias?: boolean;
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        reservedRange?: {
                            start?: number;
                            end?: number;
                        }[];
                        reservedName?: string[];
                    }[];
                    extensionRange?: {
                        start?: number;
                        end?: number;
                        options?: {
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    oneofDecl?: {
                        name?: string;
                        options?: {
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        messageSetWireFormat?: boolean;
                        noStandardDescriptorAccessor?: boolean;
                        deprecated?: boolean;
                        mapEntry?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                enumType?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allowAlias?: boolean;
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                service?: {
                    name?: string;
                    method?: {
                        name?: string;
                        inputType?: string;
                        outputType?: string;
                        options?: {
                            deprecated?: boolean;
                            idempotencyLevel?: _11.MethodOptions_IdempotencyLevel;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                        clientStreaming?: boolean;
                        serverStreaming?: boolean;
                    }[];
                    options?: {
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _11.FieldDescriptorProto_Label;
                    type?: _11.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _11.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _11.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    javaPackage?: string;
                    javaOuterClassname?: string;
                    javaMultipleFiles?: boolean;
                    javaGenerateEqualsAndHash?: boolean;
                    javaStringCheckUtf8?: boolean;
                    optimizeFor?: _11.FileOptions_OptimizeMode;
                    goPackage?: string;
                    ccGenericServices?: boolean;
                    javaGenericServices?: boolean;
                    pyGenericServices?: boolean;
                    phpGenericServices?: boolean;
                    deprecated?: boolean;
                    ccEnableArenas?: boolean;
                    objcClassPrefix?: string;
                    csharpNamespace?: string;
                    swiftPrefix?: string;
                    phpClassPrefix?: string;
                    phpNamespace?: string;
                    phpMetadataNamespace?: string;
                    rubyPackage?: string;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long");
                        negativeIntValue?: string | number | import("long");
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                sourceCodeInfo?: {
                    location?: {
                        path?: number[];
                        span?: number[];
                        leadingComments?: string;
                        trailingComments?: string;
                        leadingDetachedComments?: string[];
                    }[];
                };
                syntax?: string;
            }): _11.FileDescriptorProto;
        };
        DescriptorProto: {
            encode(message: _11.DescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.DescriptorProto;
            fromPartial(object: {
                name?: string;
                field?: {
                    name?: string;
                    number?: number;
                    label?: _11.FieldDescriptorProto_Label;
                    type?: _11.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _11.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _11.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                extension?: {
                    name?: string;
                    number?: number;
                    label?: _11.FieldDescriptorProto_Label;
                    type?: _11.FieldDescriptorProto_Type;
                    typeName?: string;
                    extendee?: string;
                    defaultValue?: string;
                    oneofIndex?: number;
                    jsonName?: string;
                    options?: {
                        ctype?: _11.FieldOptions_CType;
                        packed?: boolean;
                        jstype?: _11.FieldOptions_JSType;
                        lazy?: boolean;
                        deprecated?: boolean;
                        weak?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                nestedType?: any[];
                enumType?: {
                    name?: string;
                    value?: {
                        name?: string;
                        number?: number;
                        options?: {
                            deprecated?: boolean;
                            uninterpretedOption?: {
                                name?: {
                                    namePart?: string;
                                    isExtension?: boolean;
                                }[];
                                identifierValue?: string;
                                positiveIntValue?: string | number | import("long");
                                negativeIntValue?: string | number | import("long");
                                doubleValue?: number;
                                stringValue?: Uint8Array;
                                aggregateValue?: string;
                            }[];
                        };
                    }[];
                    options?: {
                        allowAlias?: boolean;
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    reservedRange?: {
                        start?: number;
                        end?: number;
                    }[];
                    reservedName?: string[];
                }[];
                extensionRange?: {
                    start?: number;
                    end?: number;
                    options?: {
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                oneofDecl?: {
                    name?: string;
                    options?: {
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    messageSetWireFormat?: boolean;
                    noStandardDescriptorAccessor?: boolean;
                    deprecated?: boolean;
                    mapEntry?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long");
                        negativeIntValue?: string | number | import("long");
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                reservedRange?: {
                    start?: number;
                    end?: number;
                }[];
                reservedName?: string[];
            }): _11.DescriptorProto;
        };
        DescriptorProto_ExtensionRange: {
            encode(message: _11.DescriptorProto_ExtensionRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.DescriptorProto_ExtensionRange;
            fromPartial(object: {
                start?: number;
                end?: number;
                options?: {
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long");
                        negativeIntValue?: string | number | import("long");
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _11.DescriptorProto_ExtensionRange;
        };
        DescriptorProto_ReservedRange: {
            encode(message: _11.DescriptorProto_ReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.DescriptorProto_ReservedRange;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _11.DescriptorProto_ReservedRange;
        };
        ExtensionRangeOptions: {
            encode(message: _11.ExtensionRangeOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.ExtensionRangeOptions;
            fromPartial(object: {
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long");
                    negativeIntValue?: string | number | import("long");
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _11.ExtensionRangeOptions;
        };
        FieldDescriptorProto: {
            encode(message: _11.FieldDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.FieldDescriptorProto;
            fromPartial(object: {
                name?: string;
                number?: number;
                label?: _11.FieldDescriptorProto_Label;
                type?: _11.FieldDescriptorProto_Type;
                typeName?: string;
                extendee?: string;
                defaultValue?: string;
                oneofIndex?: number;
                jsonName?: string;
                options?: {
                    ctype?: _11.FieldOptions_CType;
                    packed?: boolean;
                    jstype?: _11.FieldOptions_JSType;
                    lazy?: boolean;
                    deprecated?: boolean;
                    weak?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long");
                        negativeIntValue?: string | number | import("long");
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _11.FieldDescriptorProto;
        };
        OneofDescriptorProto: {
            encode(message: _11.OneofDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.OneofDescriptorProto;
            fromPartial(object: {
                name?: string;
                options?: {
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long");
                        negativeIntValue?: string | number | import("long");
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _11.OneofDescriptorProto;
        };
        EnumDescriptorProto: {
            encode(message: _11.EnumDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.EnumDescriptorProto;
            fromPartial(object: {
                name?: string;
                value?: {
                    name?: string;
                    number?: number;
                    options?: {
                        deprecated?: boolean;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                }[];
                options?: {
                    allowAlias?: boolean;
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long");
                        negativeIntValue?: string | number | import("long");
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                reservedRange?: {
                    start?: number;
                    end?: number;
                }[];
                reservedName?: string[];
            }): _11.EnumDescriptorProto;
        };
        EnumDescriptorProto_EnumReservedRange: {
            encode(message: _11.EnumDescriptorProto_EnumReservedRange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.EnumDescriptorProto_EnumReservedRange;
            fromPartial(object: {
                start?: number;
                end?: number;
            }): _11.EnumDescriptorProto_EnumReservedRange;
        };
        EnumValueDescriptorProto: {
            encode(message: _11.EnumValueDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.EnumValueDescriptorProto;
            fromPartial(object: {
                name?: string;
                number?: number;
                options?: {
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long");
                        negativeIntValue?: string | number | import("long");
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _11.EnumValueDescriptorProto;
        };
        ServiceDescriptorProto: {
            encode(message: _11.ServiceDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.ServiceDescriptorProto;
            fromPartial(object: {
                name?: string;
                method?: {
                    name?: string;
                    inputType?: string;
                    outputType?: string;
                    options?: {
                        deprecated?: boolean;
                        idempotencyLevel?: _11.MethodOptions_IdempotencyLevel;
                        uninterpretedOption?: {
                            name?: {
                                namePart?: string;
                                isExtension?: boolean;
                            }[];
                            identifierValue?: string;
                            positiveIntValue?: string | number | import("long");
                            negativeIntValue?: string | number | import("long");
                            doubleValue?: number;
                            stringValue?: Uint8Array;
                            aggregateValue?: string;
                        }[];
                    };
                    clientStreaming?: boolean;
                    serverStreaming?: boolean;
                }[];
                options?: {
                    deprecated?: boolean;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long");
                        negativeIntValue?: string | number | import("long");
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
            }): _11.ServiceDescriptorProto;
        };
        MethodDescriptorProto: {
            encode(message: _11.MethodDescriptorProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MethodDescriptorProto;
            fromPartial(object: {
                name?: string;
                inputType?: string;
                outputType?: string;
                options?: {
                    deprecated?: boolean;
                    idempotencyLevel?: _11.MethodOptions_IdempotencyLevel;
                    uninterpretedOption?: {
                        name?: {
                            namePart?: string;
                            isExtension?: boolean;
                        }[];
                        identifierValue?: string;
                        positiveIntValue?: string | number | import("long");
                        negativeIntValue?: string | number | import("long");
                        doubleValue?: number;
                        stringValue?: Uint8Array;
                        aggregateValue?: string;
                    }[];
                };
                clientStreaming?: boolean;
                serverStreaming?: boolean;
            }): _11.MethodDescriptorProto;
        };
        FileOptions: {
            encode(message: _11.FileOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.FileOptions;
            fromPartial(object: {
                javaPackage?: string;
                javaOuterClassname?: string;
                javaMultipleFiles?: boolean;
                javaGenerateEqualsAndHash?: boolean;
                javaStringCheckUtf8?: boolean;
                optimizeFor?: _11.FileOptions_OptimizeMode;
                goPackage?: string;
                ccGenericServices?: boolean;
                javaGenericServices?: boolean;
                pyGenericServices?: boolean;
                phpGenericServices?: boolean;
                deprecated?: boolean;
                ccEnableArenas?: boolean;
                objcClassPrefix?: string;
                csharpNamespace?: string;
                swiftPrefix?: string;
                phpClassPrefix?: string;
                phpNamespace?: string;
                phpMetadataNamespace?: string;
                rubyPackage?: string;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long");
                    negativeIntValue?: string | number | import("long");
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _11.FileOptions;
        };
        MessageOptions: {
            encode(message: _11.MessageOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MessageOptions;
            fromPartial(object: {
                messageSetWireFormat?: boolean;
                noStandardDescriptorAccessor?: boolean;
                deprecated?: boolean;
                mapEntry?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long");
                    negativeIntValue?: string | number | import("long");
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _11.MessageOptions;
        };
        FieldOptions: {
            encode(message: _11.FieldOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.FieldOptions;
            fromPartial(object: {
                ctype?: _11.FieldOptions_CType;
                packed?: boolean;
                jstype?: _11.FieldOptions_JSType;
                lazy?: boolean;
                deprecated?: boolean;
                weak?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long");
                    negativeIntValue?: string | number | import("long");
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _11.FieldOptions;
        };
        OneofOptions: {
            encode(message: _11.OneofOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.OneofOptions;
            fromPartial(object: {
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long");
                    negativeIntValue?: string | number | import("long");
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _11.OneofOptions;
        };
        EnumOptions: {
            encode(message: _11.EnumOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.EnumOptions;
            fromPartial(object: {
                allowAlias?: boolean;
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long");
                    negativeIntValue?: string | number | import("long");
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _11.EnumOptions;
        };
        EnumValueOptions: {
            encode(message: _11.EnumValueOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.EnumValueOptions;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long");
                    negativeIntValue?: string | number | import("long");
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _11.EnumValueOptions;
        };
        ServiceOptions: {
            encode(message: _11.ServiceOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.ServiceOptions;
            fromPartial(object: {
                deprecated?: boolean;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long");
                    negativeIntValue?: string | number | import("long");
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _11.ServiceOptions;
        };
        MethodOptions: {
            encode(message: _11.MethodOptions, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.MethodOptions;
            fromPartial(object: {
                deprecated?: boolean;
                idempotencyLevel?: _11.MethodOptions_IdempotencyLevel;
                uninterpretedOption?: {
                    name?: {
                        namePart?: string;
                        isExtension?: boolean;
                    }[];
                    identifierValue?: string;
                    positiveIntValue?: string | number | import("long");
                    negativeIntValue?: string | number | import("long");
                    doubleValue?: number;
                    stringValue?: Uint8Array;
                    aggregateValue?: string;
                }[];
            }): _11.MethodOptions;
        };
        UninterpretedOption: {
            encode(message: _11.UninterpretedOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.UninterpretedOption;
            fromPartial(object: {
                name?: {
                    namePart?: string;
                    isExtension?: boolean;
                }[];
                identifierValue?: string;
                positiveIntValue?: string | number | import("long");
                negativeIntValue?: string | number | import("long");
                doubleValue?: number;
                stringValue?: Uint8Array;
                aggregateValue?: string;
            }): _11.UninterpretedOption;
        };
        UninterpretedOption_NamePart: {
            encode(message: _11.UninterpretedOption_NamePart, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.UninterpretedOption_NamePart;
            fromPartial(object: {
                namePart?: string;
                isExtension?: boolean;
            }): _11.UninterpretedOption_NamePart;
        };
        SourceCodeInfo: {
            encode(message: _11.SourceCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.SourceCodeInfo;
            fromPartial(object: {
                location?: {
                    path?: number[];
                    span?: number[];
                    leadingComments?: string;
                    trailingComments?: string;
                    leadingDetachedComments?: string[];
                }[];
            }): _11.SourceCodeInfo;
        };
        SourceCodeInfo_Location: {
            encode(message: _11.SourceCodeInfo_Location, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.SourceCodeInfo_Location;
            fromPartial(object: {
                path?: number[];
                span?: number[];
                leadingComments?: string;
                trailingComments?: string;
                leadingDetachedComments?: string[];
            }): _11.SourceCodeInfo_Location;
        };
        GeneratedCodeInfo: {
            encode(message: _11.GeneratedCodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.GeneratedCodeInfo;
            fromPartial(object: {
                annotation?: {
                    path?: number[];
                    sourceFile?: string;
                    begin?: number;
                    end?: number;
                }[];
            }): _11.GeneratedCodeInfo;
        };
        GeneratedCodeInfo_Annotation: {
            encode(message: _11.GeneratedCodeInfo_Annotation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.GeneratedCodeInfo_Annotation;
            fromPartial(object: {
                path?: number[];
                sourceFile?: string;
                begin?: number;
                end?: number;
            }): _11.GeneratedCodeInfo_Annotation;
        };
        Any: {
            encode(message: _10.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Any;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _10.Any;
        };
    };
}
