"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListValue = exports.Value = exports.StructFieldsEntry = exports.Struct = exports.nullValueToNumber = exports.nullValueToJSON = exports.nullValueFromJSON = exports.NullValue = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 * The JSON representation for `NullValue` is JSON `null`.
 */
var NullValue;
(function (NullValue) {
    /** NULL_VALUE - Null value. */
    NullValue["NULL_VALUE"] = "NULL_VALUE";
})(NullValue || (exports.NullValue = NullValue = {}));
function nullValueFromJSON(object) {
    switch (object) {
        case 0:
        case "NULL_VALUE":
            return NullValue.NULL_VALUE;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum NullValue");
    }
}
exports.nullValueFromJSON = nullValueFromJSON;
function nullValueToJSON(object) {
    switch (object) {
        case NullValue.NULL_VALUE:
            return "NULL_VALUE";
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum NullValue");
    }
}
exports.nullValueToJSON = nullValueToJSON;
function nullValueToNumber(object) {
    switch (object) {
        case NullValue.NULL_VALUE:
            return 0;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum NullValue");
    }
}
exports.nullValueToNumber = nullValueToNumber;
function createBaseStruct() {
    return { fields: {} };
}
exports.Struct = {
    encode(message, writer = _m0.Writer.create()) {
        Object.entries(message.fields).forEach(([key, value]) => {
            if (value !== undefined) {
                exports.StructFieldsEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
            }
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStruct();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    const entry1 = exports.StructFieldsEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.fields[entry1.key] = entry1.value;
                    }
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            fields: isObject(object.fields)
                ? Object.entries(object.fields).reduce((acc, [key, value]) => {
                    acc[key] = value;
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fields) {
            const entries = Object.entries(message.fields);
            if (entries.length > 0) {
                obj.fields = {};
                entries.forEach(([k, v]) => {
                    obj.fields[k] = v;
                });
            }
        }
        return obj;
    },
    create(base) {
        return exports.Struct.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStruct();
        message.fields = Object.entries(object.fields ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = value;
            }
            return acc;
        }, {});
        return message;
    },
    wrap(object) {
        const struct = createBaseStruct();
        if (object !== undefined) {
            for (const key of Object.keys(object)) {
                struct.fields[key] = object[key];
            }
        }
        return struct;
    },
    unwrap(message) {
        const object = {};
        if (message.fields) {
            for (const key of Object.keys(message.fields)) {
                object[key] = message.fields[key];
            }
        }
        return object;
    },
};
function createBaseStructFieldsEntry() {
    return { key: "", value: undefined };
}
exports.StructFieldsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.Value.encode(exports.Value.wrap(message.value), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStructFieldsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.key = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.value = exports.Value.unwrap(exports.Value.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? globalThis.String(object.key) : "",
            value: isSet(object?.value) ? object.value : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== undefined) {
            obj.value = message.value;
        }
        return obj;
    },
    create(base) {
        return exports.StructFieldsEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStructFieldsEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? undefined;
        return message;
    },
};
function createBaseValue() {
    return {
        null_value: undefined,
        number_value: undefined,
        string_value: undefined,
        bool_value: undefined,
        struct_value: undefined,
        list_value: undefined,
    };
}
exports.Value = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.null_value !== undefined) {
            writer.uint32(8).int32(nullValueToNumber(message.null_value));
        }
        if (message.number_value !== undefined) {
            writer.uint32(17).double(message.number_value);
        }
        if (message.string_value !== undefined) {
            writer.uint32(26).string(message.string_value);
        }
        if (message.bool_value !== undefined) {
            writer.uint32(32).bool(message.bool_value);
        }
        if (message.struct_value !== undefined) {
            exports.Struct.encode(exports.Struct.wrap(message.struct_value), writer.uint32(42).fork()).ldelim();
        }
        if (message.list_value !== undefined) {
            exports.ListValue.encode(exports.ListValue.wrap(message.list_value), writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.null_value = nullValueFromJSON(reader.int32());
                    continue;
                case 2:
                    if (tag !== 17) {
                        break;
                    }
                    message.number_value = reader.double();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.string_value = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.bool_value = reader.bool();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.struct_value = exports.Struct.unwrap(exports.Struct.decode(reader, reader.uint32()));
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.list_value = exports.ListValue.unwrap(exports.ListValue.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            null_value: isSet(object.null_value) ? nullValueFromJSON(object.null_value) : undefined,
            number_value: isSet(object.number_value) ? globalThis.Number(object.number_value) : undefined,
            string_value: isSet(object.string_value) ? globalThis.String(object.string_value) : undefined,
            bool_value: isSet(object.bool_value) ? globalThis.Boolean(object.bool_value) : undefined,
            struct_value: isObject(object.struct_value) ? object.struct_value : undefined,
            list_value: globalThis.Array.isArray(object.list_value) ? [...object.list_value] : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.null_value !== undefined) {
            obj.null_value = nullValueToJSON(message.null_value);
        }
        if (message.number_value !== undefined) {
            obj.number_value = message.number_value;
        }
        if (message.string_value !== undefined) {
            obj.string_value = message.string_value;
        }
        if (message.bool_value !== undefined) {
            obj.bool_value = message.bool_value;
        }
        if (message.struct_value !== undefined) {
            obj.struct_value = message.struct_value;
        }
        if (message.list_value !== undefined) {
            obj.list_value = message.list_value;
        }
        return obj;
    },
    create(base) {
        return exports.Value.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseValue();
        message.null_value = object.null_value ?? undefined;
        message.number_value = object.number_value ?? undefined;
        message.string_value = object.string_value ?? undefined;
        message.bool_value = object.bool_value ?? undefined;
        message.struct_value = object.struct_value ?? undefined;
        message.list_value = object.list_value ?? undefined;
        return message;
    },
    wrap(value) {
        const result = createBaseValue();
        if (value === null) {
            result.null_value = NullValue.NULL_VALUE;
        }
        else if (typeof value === "boolean") {
            result.bool_value = value;
        }
        else if (typeof value === "number") {
            result.number_value = value;
        }
        else if (typeof value === "string") {
            result.string_value = value;
        }
        else if (globalThis.Array.isArray(value)) {
            result.list_value = value;
        }
        else if (typeof value === "object") {
            result.struct_value = value;
        }
        else if (typeof value !== "undefined") {
            throw new globalThis.Error("Unsupported any value type: " + typeof value);
        }
        return result;
    },
    unwrap(message) {
        if (message.string_value !== undefined) {
            return message.string_value;
        }
        else if (message?.number_value !== undefined) {
            return message.number_value;
        }
        else if (message?.bool_value !== undefined) {
            return message.bool_value;
        }
        else if (message?.struct_value !== undefined) {
            return message.struct_value;
        }
        else if (message?.list_value !== undefined) {
            return message.list_value;
        }
        else if (message?.null_value !== undefined) {
            return null;
        }
        return undefined;
    },
};
function createBaseListValue() {
    return { values: [] };
}
exports.ListValue = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.values) {
            exports.Value.encode(exports.Value.wrap(v), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.values.push(exports.Value.unwrap(exports.Value.decode(reader, reader.uint32())));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { values: globalThis.Array.isArray(object?.values) ? [...object.values] : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.values?.length) {
            obj.values = message.values;
        }
        return obj;
    },
    create(base) {
        return exports.ListValue.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListValue();
        message.values = object.values?.map((e) => e) || [];
        return message;
    },
    wrap(array) {
        const result = createBaseListValue();
        result.values = array ?? [];
        return result;
    },
    unwrap(message) {
        if (message?.hasOwnProperty("values") && globalThis.Array.isArray(message.values)) {
            return message.values;
        }
        else {
            return message;
        }
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=struct.js.map