import * as _m0 from "protobufjs/minimal";
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 * The JSON representation for `NullValue` is JSON `null`.
 */
export declare enum NullValue {
    /** NULL_VALUE - Null value. */
    NULL_VALUE = "NULL_VALUE"
}
export declare function nullValueFromJSON(object: any): NullValue;
export declare function nullValueToJSON(object: NullValue): string;
export declare function nullValueToNumber(object: NullValue): number;
/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 *
 * The JSON representation for `Struct` is JSON object.
 */
export interface Struct {
    /** Unordered map of dynamically typed values. */
    fields: {
        [key: string]: any | undefined;
    };
}
export interface StructFieldsEntry {
    key: string;
    value: any | undefined;
}
/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of these
 * variants. Absence of any variant indicates an error.
 *
 * The JSON representation for `Value` is JSON value.
 */
export interface Value {
    /** Represents a null value. */
    null_value?: NullValue | undefined;
    /** Represents a double value. */
    number_value?: number | undefined;
    /** Represents a string value. */
    string_value?: string | undefined;
    /** Represents a boolean value. */
    bool_value?: boolean | undefined;
    /** Represents a structured value. */
    struct_value?: {
        [key: string]: any;
    } | undefined;
    /** Represents a repeated `Value`. */
    list_value?: Array<any> | undefined;
}
/**
 * `ListValue` is a wrapper around a repeated field of values.
 *
 * The JSON representation for `ListValue` is JSON array.
 */
export interface ListValue {
    /** Repeated field of dynamically typed values. */
    values: any[];
}
export declare const Struct: {
    encode(message: Struct, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Struct;
    fromJSON(object: any): Struct;
    toJSON(message: Struct): unknown;
    create(base?: DeepPartial<Struct>): Struct;
    fromPartial(object: DeepPartial<Struct>): Struct;
    wrap(object: {
        [key: string]: any;
    } | undefined): Struct;
    unwrap(message: Struct): {
        [key: string]: any;
    };
};
export declare const StructFieldsEntry: {
    encode(message: StructFieldsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StructFieldsEntry;
    fromJSON(object: any): StructFieldsEntry;
    toJSON(message: StructFieldsEntry): unknown;
    create(base?: DeepPartial<StructFieldsEntry>): StructFieldsEntry;
    fromPartial(object: DeepPartial<StructFieldsEntry>): StructFieldsEntry;
};
export declare const Value: {
    encode(message: Value, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Value;
    fromJSON(object: any): Value;
    toJSON(message: Value): unknown;
    create(base?: DeepPartial<Value>): Value;
    fromPartial(object: DeepPartial<Value>): Value;
    wrap(value: any): Value;
    unwrap(message: any): string | number | boolean | Object | null | Array<any> | undefined;
};
export declare const ListValue: {
    encode(message: ListValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListValue;
    fromJSON(object: any): ListValue;
    toJSON(message: ListValue): unknown;
    create(base?: DeepPartial<ListValue>): ListValue;
    fromPartial(object: DeepPartial<ListValue>): ListValue;
    wrap(array: Array<any> | undefined): ListValue;
    unwrap(message: ListValue): Array<any>;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=struct.d.ts.map