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
exports.PublicServiceCatalogDefinition = exports.PublicServiceCategoryResultLocalesEntry = exports.PublicServiceCategoryResult = exports.PublicServiceCategoryLocalesEntry = exports.PublicServiceCategory = exports.PublicServiceLocalesEntry = exports.PublicService = exports.PublicServiceResponse = exports.PublicServiceCategoryResponse = exports.PublicServiceTab = exports.UpdatePublicServiceCategoryRequestLocalesEntry = exports.UpdatePublicServiceCategoryRequest = exports.UpdatePublicServiceRequestLocalesEntry = exports.UpdatePublicServiceRequest = exports.IsPublicServiceAvailableResponse = exports.UserFeatures = exports.IsPublicServiceAvailableRequest = exports.GetPublicServicesListResponse = exports.GetPublicServicesListRequest = exports.GetPublicServicesResponse = exports.PublicServiceSettingsRequest = exports.GetPublicServiceContextMenuResponse = exports.GetPublicServiceContextMenuRequest = exports.GetPublicServiceByCodeRequest = exports.GetPublicServiceCategoriesListResponse = exports.GetPublicServiceCategoriesListRequest = exports.GetPublicServiceCategoryByCategoryRequest = exports.publicServiceCategoryStatusToNumber = exports.publicServiceCategoryStatusToJSON = exports.publicServiceCategoryStatusFromJSON = exports.PublicServiceCategoryStatus = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
const publicServiceCodes_1 = require("./category/publicServiceCodes");
const contextMenu_1 = require("./contextMenu");
const empty_1 = require("./google/protobuf/empty");
const profileFeature_1 = require("./profileFeature");
const publicServiceCode_1 = require("./publicServiceCode");
const sessionType_1 = require("./session/sessionType");
const version_1 = require("./version");
var PublicServiceCategoryStatus;
(function (PublicServiceCategoryStatus) {
    PublicServiceCategoryStatus["active"] = "active";
    PublicServiceCategoryStatus["inactive"] = "inactive";
})(PublicServiceCategoryStatus || (exports.PublicServiceCategoryStatus = PublicServiceCategoryStatus = {}));
function publicServiceCategoryStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "active":
            return PublicServiceCategoryStatus.active;
        case 1:
        case "inactive":
            return PublicServiceCategoryStatus.inactive;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum PublicServiceCategoryStatus");
    }
}
exports.publicServiceCategoryStatusFromJSON = publicServiceCategoryStatusFromJSON;
function publicServiceCategoryStatusToJSON(object) {
    switch (object) {
        case PublicServiceCategoryStatus.active:
            return "active";
        case PublicServiceCategoryStatus.inactive:
            return "inactive";
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum PublicServiceCategoryStatus");
    }
}
exports.publicServiceCategoryStatusToJSON = publicServiceCategoryStatusToJSON;
function publicServiceCategoryStatusToNumber(object) {
    switch (object) {
        case PublicServiceCategoryStatus.active:
            return 0;
        case PublicServiceCategoryStatus.inactive:
            return 1;
        default:
            throw new globalThis.Error("Unrecognized enum value " + object + " for enum PublicServiceCategoryStatus");
    }
}
exports.publicServiceCategoryStatusToNumber = publicServiceCategoryStatusToNumber;
function createBaseGetPublicServiceCategoryByCategoryRequest() {
    return { category: publicServiceCodes_1.PublicServiceCategoryCode.carServices };
}
exports.GetPublicServiceCategoryByCategoryRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.category !== publicServiceCodes_1.PublicServiceCategoryCode.carServices) {
            writer.uint32(8).int32((0, publicServiceCodes_1.publicServiceCategoryCodeToNumber)(message.category));
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPublicServiceCategoryByCategoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.category = (0, publicServiceCodes_1.publicServiceCategoryCodeFromJSON)(reader.int32());
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
            category: isSet(object.category)
                ? (0, publicServiceCodes_1.publicServiceCategoryCodeFromJSON)(object.category)
                : publicServiceCodes_1.PublicServiceCategoryCode.carServices,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.category !== publicServiceCodes_1.PublicServiceCategoryCode.carServices) {
            obj.category = (0, publicServiceCodes_1.publicServiceCategoryCodeToJSON)(message.category);
        }
        return obj;
    },
    create(base) {
        return exports.GetPublicServiceCategoryByCategoryRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPublicServiceCategoryByCategoryRequest();
        message.category = object.category ?? publicServiceCodes_1.PublicServiceCategoryCode.carServices;
        return message;
    },
};
function createBaseGetPublicServiceCategoriesListRequest() {
    return { skip: undefined, limit: undefined };
}
exports.GetPublicServiceCategoriesListRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.skip !== undefined) {
            writer.uint32(8).int32(message.skip);
        }
        if (message.limit !== undefined) {
            writer.uint32(16).int32(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPublicServiceCategoriesListRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.skip = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.limit = reader.int32();
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
            skip: isSet(object.skip) ? globalThis.Number(object.skip) : undefined,
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.skip !== undefined) {
            obj.skip = Math.round(message.skip);
        }
        if (message.limit !== undefined) {
            obj.limit = Math.round(message.limit);
        }
        return obj;
    },
    create(base) {
        return exports.GetPublicServiceCategoriesListRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPublicServiceCategoriesListRequest();
        message.skip = object.skip ?? undefined;
        message.limit = object.limit ?? undefined;
        return message;
    },
};
function createBaseGetPublicServiceCategoriesListResponse() {
    return { total: 0, publicServiceCategories: [] };
}
exports.GetPublicServiceCategoriesListResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.total !== 0) {
            writer.uint32(8).int32(message.total);
        }
        for (const v of message.publicServiceCategories) {
            exports.PublicServiceCategoryResult.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPublicServiceCategoriesListResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.total = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.publicServiceCategories.push(exports.PublicServiceCategoryResult.decode(reader, reader.uint32()));
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
            total: isSet(object.total) ? globalThis.Number(object.total) : 0,
            publicServiceCategories: globalThis.Array.isArray(object?.publicServiceCategories)
                ? object.publicServiceCategories.map((e) => exports.PublicServiceCategoryResult.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.total !== 0) {
            obj.total = Math.round(message.total);
        }
        if (message.publicServiceCategories?.length) {
            obj.publicServiceCategories = message.publicServiceCategories.map((e) => exports.PublicServiceCategoryResult.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetPublicServiceCategoriesListResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPublicServiceCategoriesListResponse();
        message.total = object.total ?? 0;
        message.publicServiceCategories =
            object.publicServiceCategories?.map((e) => exports.PublicServiceCategoryResult.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetPublicServiceByCodeRequest() {
    return { code: publicServiceCode_1.PublicServiceCode.administrativeFees };
}
exports.GetPublicServiceByCodeRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== publicServiceCode_1.PublicServiceCode.administrativeFees) {
            writer.uint32(8).int32((0, publicServiceCode_1.publicServiceCodeToNumber)(message.code));
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPublicServiceByCodeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.code = (0, publicServiceCode_1.publicServiceCodeFromJSON)(reader.int32());
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
        return { code: isSet(object.code) ? (0, publicServiceCode_1.publicServiceCodeFromJSON)(object.code) : publicServiceCode_1.PublicServiceCode.administrativeFees };
    },
    toJSON(message) {
        const obj = {};
        if (message.code !== publicServiceCode_1.PublicServiceCode.administrativeFees) {
            obj.code = (0, publicServiceCode_1.publicServiceCodeToJSON)(message.code);
        }
        return obj;
    },
    create(base) {
        return exports.GetPublicServiceByCodeRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPublicServiceByCodeRequest();
        message.code = object.code ?? publicServiceCode_1.PublicServiceCode.administrativeFees;
        return message;
    },
};
function createBaseGetPublicServiceContextMenuRequest() {
    return { code: publicServiceCode_1.PublicServiceCode.administrativeFees };
}
exports.GetPublicServiceContextMenuRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== publicServiceCode_1.PublicServiceCode.administrativeFees) {
            writer.uint32(8).int32((0, publicServiceCode_1.publicServiceCodeToNumber)(message.code));
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPublicServiceContextMenuRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.code = (0, publicServiceCode_1.publicServiceCodeFromJSON)(reader.int32());
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
        return { code: isSet(object.code) ? (0, publicServiceCode_1.publicServiceCodeFromJSON)(object.code) : publicServiceCode_1.PublicServiceCode.administrativeFees };
    },
    toJSON(message) {
        const obj = {};
        if (message.code !== publicServiceCode_1.PublicServiceCode.administrativeFees) {
            obj.code = (0, publicServiceCode_1.publicServiceCodeToJSON)(message.code);
        }
        return obj;
    },
    create(base) {
        return exports.GetPublicServiceContextMenuRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPublicServiceContextMenuRequest();
        message.code = object.code ?? publicServiceCode_1.PublicServiceCode.administrativeFees;
        return message;
    },
};
function createBaseGetPublicServiceContextMenuResponse() {
    return { contextMenu: [] };
}
exports.GetPublicServiceContextMenuResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.contextMenu) {
            contextMenu_1.PublicServiceContextMenu.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPublicServiceContextMenuResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.contextMenu.push(contextMenu_1.PublicServiceContextMenu.decode(reader, reader.uint32()));
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
            contextMenu: globalThis.Array.isArray(object?.contextMenu)
                ? object.contextMenu.map((e) => contextMenu_1.PublicServiceContextMenu.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.contextMenu?.length) {
            obj.contextMenu = message.contextMenu.map((e) => contextMenu_1.PublicServiceContextMenu.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetPublicServiceContextMenuResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPublicServiceContextMenuResponse();
        message.contextMenu = object.contextMenu?.map((e) => contextMenu_1.PublicServiceContextMenu.fromPartial(e)) || [];
        return message;
    },
};
function createBasePublicServiceSettingsRequest() {
    return { code: publicServiceCode_1.PublicServiceCode.administrativeFees };
}
exports.PublicServiceSettingsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== publicServiceCode_1.PublicServiceCode.administrativeFees) {
            writer.uint32(8).int32((0, publicServiceCode_1.publicServiceCodeToNumber)(message.code));
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublicServiceSettingsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.code = (0, publicServiceCode_1.publicServiceCodeFromJSON)(reader.int32());
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
        return { code: isSet(object.code) ? (0, publicServiceCode_1.publicServiceCodeFromJSON)(object.code) : publicServiceCode_1.PublicServiceCode.administrativeFees };
    },
    toJSON(message) {
        const obj = {};
        if (message.code !== publicServiceCode_1.PublicServiceCode.administrativeFees) {
            obj.code = (0, publicServiceCode_1.publicServiceCodeToJSON)(message.code);
        }
        return obj;
    },
    create(base) {
        return exports.PublicServiceSettingsRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePublicServiceSettingsRequest();
        message.code = object.code ?? publicServiceCode_1.PublicServiceCode.administrativeFees;
        return message;
    },
};
function createBaseGetPublicServicesResponse() {
    return { publicServicesCategories: [], tabs: [] };
}
exports.GetPublicServicesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.publicServicesCategories) {
            exports.PublicServiceCategoryResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.tabs) {
            exports.PublicServiceTab.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPublicServicesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.publicServicesCategories.push(exports.PublicServiceCategoryResponse.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.tabs.push(exports.PublicServiceTab.decode(reader, reader.uint32()));
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
            publicServicesCategories: globalThis.Array.isArray(object?.publicServicesCategories)
                ? object.publicServicesCategories.map((e) => exports.PublicServiceCategoryResponse.fromJSON(e))
                : [],
            tabs: globalThis.Array.isArray(object?.tabs) ? object.tabs.map((e) => exports.PublicServiceTab.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.publicServicesCategories?.length) {
            obj.publicServicesCategories = message.publicServicesCategories.map((e) => exports.PublicServiceCategoryResponse.toJSON(e));
        }
        if (message.tabs?.length) {
            obj.tabs = message.tabs.map((e) => exports.PublicServiceTab.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetPublicServicesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPublicServicesResponse();
        message.publicServicesCategories =
            object.publicServicesCategories?.map((e) => exports.PublicServiceCategoryResponse.fromPartial(e)) || [];
        message.tabs = object.tabs?.map((e) => exports.PublicServiceTab.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGetPublicServicesListRequest() {
    return { skip: undefined, limit: undefined };
}
exports.GetPublicServicesListRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.skip !== undefined) {
            writer.uint32(8).int32(message.skip);
        }
        if (message.limit !== undefined) {
            writer.uint32(16).int32(message.limit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPublicServicesListRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.skip = reader.int32();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.limit = reader.int32();
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
            skip: isSet(object.skip) ? globalThis.Number(object.skip) : undefined,
            limit: isSet(object.limit) ? globalThis.Number(object.limit) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.skip !== undefined) {
            obj.skip = Math.round(message.skip);
        }
        if (message.limit !== undefined) {
            obj.limit = Math.round(message.limit);
        }
        return obj;
    },
    create(base) {
        return exports.GetPublicServicesListRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPublicServicesListRequest();
        message.skip = object.skip ?? undefined;
        message.limit = object.limit ?? undefined;
        return message;
    },
};
function createBaseGetPublicServicesListResponse() {
    return { total: 0, publicServices: [] };
}
exports.GetPublicServicesListResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.total !== 0) {
            writer.uint32(8).int32(message.total);
        }
        for (const v of message.publicServices) {
            contextMenu_1.PublicServiceSettings.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPublicServicesListResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.total = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.publicServices.push(contextMenu_1.PublicServiceSettings.decode(reader, reader.uint32()));
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
            total: isSet(object.total) ? globalThis.Number(object.total) : 0,
            publicServices: globalThis.Array.isArray(object?.publicServices)
                ? object.publicServices.map((e) => contextMenu_1.PublicServiceSettings.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.total !== 0) {
            obj.total = Math.round(message.total);
        }
        if (message.publicServices?.length) {
            obj.publicServices = message.publicServices.map((e) => contextMenu_1.PublicServiceSettings.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetPublicServicesListResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetPublicServicesListResponse();
        message.total = object.total ?? 0;
        message.publicServices = object.publicServices?.map((e) => contextMenu_1.PublicServiceSettings.fromPartial(e)) || [];
        return message;
    },
};
function createBaseIsPublicServiceAvailableRequest() {
    return { code: publicServiceCode_1.PublicServiceCode.administrativeFees, sessionType: sessionType_1.SessionType.Acquirer, features: undefined };
}
exports.IsPublicServiceAvailableRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== publicServiceCode_1.PublicServiceCode.administrativeFees) {
            writer.uint32(8).int32((0, publicServiceCode_1.publicServiceCodeToNumber)(message.code));
        }
        if (message.sessionType !== sessionType_1.SessionType.Acquirer) {
            writer.uint32(16).int32((0, sessionType_1.sessionTypeToNumber)(message.sessionType));
        }
        if (message.features !== undefined) {
            exports.UserFeatures.encode(message.features, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIsPublicServiceAvailableRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.code = (0, publicServiceCode_1.publicServiceCodeFromJSON)(reader.int32());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.sessionType = (0, sessionType_1.sessionTypeFromJSON)(reader.int32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.features = exports.UserFeatures.decode(reader, reader.uint32());
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
            code: isSet(object.code) ? (0, publicServiceCode_1.publicServiceCodeFromJSON)(object.code) : publicServiceCode_1.PublicServiceCode.administrativeFees,
            sessionType: isSet(object.sessionType) ? (0, sessionType_1.sessionTypeFromJSON)(object.sessionType) : sessionType_1.SessionType.Acquirer,
            features: isSet(object.features) ? exports.UserFeatures.fromJSON(object.features) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.code !== publicServiceCode_1.PublicServiceCode.administrativeFees) {
            obj.code = (0, publicServiceCode_1.publicServiceCodeToJSON)(message.code);
        }
        if (message.sessionType !== sessionType_1.SessionType.Acquirer) {
            obj.sessionType = (0, sessionType_1.sessionTypeToJSON)(message.sessionType);
        }
        if (message.features !== undefined) {
            obj.features = exports.UserFeatures.toJSON(message.features);
        }
        return obj;
    },
    create(base) {
        return exports.IsPublicServiceAvailableRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIsPublicServiceAvailableRequest();
        message.code = object.code ?? publicServiceCode_1.PublicServiceCode.administrativeFees;
        message.sessionType = object.sessionType ?? sessionType_1.SessionType.Acquirer;
        message.features = (object.features !== undefined && object.features !== null)
            ? exports.UserFeatures.fromPartial(object.features)
            : undefined;
        return message;
    },
};
function createBaseUserFeatures() {
    return { office: undefined };
}
exports.UserFeatures = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.office !== undefined) {
            profileFeature_1.DiiaOfficeProfileData.encode(message.office, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserFeatures();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.office = profileFeature_1.DiiaOfficeProfileData.decode(reader, reader.uint32());
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
        return { office: isSet(object.office) ? profileFeature_1.DiiaOfficeProfileData.fromJSON(object.office) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.office !== undefined) {
            obj.office = profileFeature_1.DiiaOfficeProfileData.toJSON(message.office);
        }
        return obj;
    },
    create(base) {
        return exports.UserFeatures.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUserFeatures();
        message.office = (object.office !== undefined && object.office !== null)
            ? profileFeature_1.DiiaOfficeProfileData.fromPartial(object.office)
            : undefined;
        return message;
    },
};
function createBaseIsPublicServiceAvailableResponse() {
    return { isAvailable: false };
}
exports.IsPublicServiceAvailableResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.isAvailable !== false) {
            writer.uint32(8).bool(message.isAvailable);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIsPublicServiceAvailableResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.isAvailable = reader.bool();
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
        return { isAvailable: isSet(object.isAvailable) ? globalThis.Boolean(object.isAvailable) : false };
    },
    toJSON(message) {
        const obj = {};
        if (message.isAvailable !== false) {
            obj.isAvailable = message.isAvailable;
        }
        return obj;
    },
    create(base) {
        return exports.IsPublicServiceAvailableResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseIsPublicServiceAvailableResponse();
        message.isAvailable = object.isAvailable ?? false;
        return message;
    },
};
function createBaseUpdatePublicServiceRequest() {
    return {
        code: "",
        name: undefined,
        sortOrder: undefined,
        status: undefined,
        appVersions: undefined,
        platformMinVersion: undefined,
        profileFeature: undefined,
        segments: [],
        categories: [],
        contextMenu: [],
        sessionTypes: [],
        locales: {},
    };
}
exports.UpdatePublicServiceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.name !== undefined) {
            writer.uint32(18).string(message.name);
        }
        if (message.sortOrder !== undefined) {
            writer.uint32(24).int32(message.sortOrder);
        }
        if (message.status !== undefined) {
            writer.uint32(32).int32((0, publicServiceCode_1.publicServiceStatusToNumber)(message.status));
        }
        if (message.appVersions !== undefined) {
            version_1.PublicServiceAppVersionsBySession.encode(message.appVersions, writer.uint32(42).fork()).ldelim();
        }
        if (message.platformMinVersion !== undefined) {
            version_1.SingleVersionRecord.encode(message.platformMinVersion, writer.uint32(50).fork()).ldelim();
        }
        if (message.profileFeature !== undefined) {
            writer.uint32(56).int32((0, profileFeature_1.profileFeatureToNumber)(message.profileFeature));
        }
        for (const v of message.segments) {
            writer.uint32(66).string(v);
        }
        writer.uint32(74).fork();
        for (const v of message.categories) {
            writer.int32((0, publicServiceCodes_1.publicServiceCategoryCodeToNumber)(v));
        }
        writer.ldelim();
        for (const v of message.contextMenu) {
            contextMenu_1.PublicServiceContextMenu.encode(v, writer.uint32(82).fork()).ldelim();
        }
        writer.uint32(90).fork();
        for (const v of message.sessionTypes) {
            writer.int32((0, sessionType_1.sessionTypeToNumber)(v));
        }
        writer.ldelim();
        Object.entries(message.locales).forEach(([key, value]) => {
            exports.UpdatePublicServiceRequestLocalesEntry.encode({ key: key, value }, writer.uint32(98).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdatePublicServiceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.code = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.sortOrder = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.status = (0, publicServiceCode_1.publicServiceStatusFromJSON)(reader.int32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.appVersions = version_1.PublicServiceAppVersionsBySession.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.platformMinVersion = version_1.SingleVersionRecord.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.profileFeature = (0, profileFeature_1.profileFeatureFromJSON)(reader.int32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.segments.push(reader.string());
                    continue;
                case 9:
                    if (tag === 72) {
                        message.categories.push((0, publicServiceCodes_1.publicServiceCategoryCodeFromJSON)(reader.int32()));
                        continue;
                    }
                    if (tag === 74) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.categories.push((0, publicServiceCodes_1.publicServiceCategoryCodeFromJSON)(reader.int32()));
                        }
                        continue;
                    }
                    break;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.contextMenu.push(contextMenu_1.PublicServiceContextMenu.decode(reader, reader.uint32()));
                    continue;
                case 11:
                    if (tag === 88) {
                        message.sessionTypes.push((0, sessionType_1.sessionTypeFromJSON)(reader.int32()));
                        continue;
                    }
                    if (tag === 90) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sessionTypes.push((0, sessionType_1.sessionTypeFromJSON)(reader.int32()));
                        }
                        continue;
                    }
                    break;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    const entry12 = exports.UpdatePublicServiceRequestLocalesEntry.decode(reader, reader.uint32());
                    if (entry12.value !== undefined) {
                        message.locales[entry12.key] = entry12.value;
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
            code: isSet(object.code) ? globalThis.String(object.code) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : undefined,
            sortOrder: isSet(object.sortOrder) ? globalThis.Number(object.sortOrder) : undefined,
            status: isSet(object.status) ? (0, publicServiceCode_1.publicServiceStatusFromJSON)(object.status) : undefined,
            appVersions: isSet(object.appVersions)
                ? version_1.PublicServiceAppVersionsBySession.fromJSON(object.appVersions)
                : undefined,
            platformMinVersion: isSet(object.platformMinVersion)
                ? version_1.SingleVersionRecord.fromJSON(object.platformMinVersion)
                : undefined,
            profileFeature: isSet(object.profileFeature) ? (0, profileFeature_1.profileFeatureFromJSON)(object.profileFeature) : undefined,
            segments: globalThis.Array.isArray(object?.segments) ? object.segments.map((e) => globalThis.String(e)) : [],
            categories: globalThis.Array.isArray(object?.categories)
                ? object.categories.map((e) => (0, publicServiceCodes_1.publicServiceCategoryCodeFromJSON)(e))
                : [],
            contextMenu: globalThis.Array.isArray(object?.contextMenu)
                ? object.contextMenu.map((e) => contextMenu_1.PublicServiceContextMenu.fromJSON(e))
                : [],
            sessionTypes: globalThis.Array.isArray(object?.sessionTypes)
                ? object.sessionTypes.map((e) => (0, sessionType_1.sessionTypeFromJSON)(e))
                : [],
            locales: isObject(object.locales)
                ? Object.entries(object.locales).reduce((acc, [key, value]) => {
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.code !== "") {
            obj.code = message.code;
        }
        if (message.name !== undefined) {
            obj.name = message.name;
        }
        if (message.sortOrder !== undefined) {
            obj.sortOrder = Math.round(message.sortOrder);
        }
        if (message.status !== undefined) {
            obj.status = (0, publicServiceCode_1.publicServiceStatusToJSON)(message.status);
        }
        if (message.appVersions !== undefined) {
            obj.appVersions = version_1.PublicServiceAppVersionsBySession.toJSON(message.appVersions);
        }
        if (message.platformMinVersion !== undefined) {
            obj.platformMinVersion = version_1.SingleVersionRecord.toJSON(message.platformMinVersion);
        }
        if (message.profileFeature !== undefined) {
            obj.profileFeature = (0, profileFeature_1.profileFeatureToJSON)(message.profileFeature);
        }
        if (message.segments?.length) {
            obj.segments = message.segments;
        }
        if (message.categories?.length) {
            obj.categories = message.categories.map((e) => (0, publicServiceCodes_1.publicServiceCategoryCodeToJSON)(e));
        }
        if (message.contextMenu?.length) {
            obj.contextMenu = message.contextMenu.map((e) => contextMenu_1.PublicServiceContextMenu.toJSON(e));
        }
        if (message.sessionTypes?.length) {
            obj.sessionTypes = message.sessionTypes.map((e) => (0, sessionType_1.sessionTypeToJSON)(e));
        }
        if (message.locales) {
            const entries = Object.entries(message.locales);
            if (entries.length > 0) {
                obj.locales = {};
                entries.forEach(([k, v]) => {
                    obj.locales[k] = v;
                });
            }
        }
        return obj;
    },
    create(base) {
        return exports.UpdatePublicServiceRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdatePublicServiceRequest();
        message.code = object.code ?? "";
        message.name = object.name ?? undefined;
        message.sortOrder = object.sortOrder ?? undefined;
        message.status = object.status ?? undefined;
        message.appVersions = (object.appVersions !== undefined && object.appVersions !== null)
            ? version_1.PublicServiceAppVersionsBySession.fromPartial(object.appVersions)
            : undefined;
        message.platformMinVersion = (object.platformMinVersion !== undefined && object.platformMinVersion !== null)
            ? version_1.SingleVersionRecord.fromPartial(object.platformMinVersion)
            : undefined;
        message.profileFeature = object.profileFeature ?? undefined;
        message.segments = object.segments?.map((e) => e) || [];
        message.categories = object.categories?.map((e) => e) || [];
        message.contextMenu = object.contextMenu?.map((e) => contextMenu_1.PublicServiceContextMenu.fromPartial(e)) || [];
        message.sessionTypes = object.sessionTypes?.map((e) => e) || [];
        message.locales = Object.entries(object.locales ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = globalThis.String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseUpdatePublicServiceRequestLocalesEntry() {
    return { key: "", value: "" };
}
exports.UpdatePublicServiceRequestLocalesEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdatePublicServiceRequestLocalesEntry();
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
                    message.value = reader.string();
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
            value: isSet(object.value) ? globalThis.String(object.value) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
    create(base) {
        return exports.UpdatePublicServiceRequestLocalesEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdatePublicServiceRequestLocalesEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
};
function createBaseUpdatePublicServiceCategoryRequest() {
    return {
        category: "",
        name: undefined,
        icon: undefined,
        sortOrder: undefined,
        status: undefined,
        tabCodes: [],
        locales: {},
    };
}
exports.UpdatePublicServiceCategoryRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.category !== "") {
            writer.uint32(10).string(message.category);
        }
        if (message.name !== undefined) {
            writer.uint32(18).string(message.name);
        }
        if (message.icon !== undefined) {
            writer.uint32(26).string(message.icon);
        }
        if (message.sortOrder !== undefined) {
            writer.uint32(32).int32(message.sortOrder);
        }
        if (message.status !== undefined) {
            writer.uint32(40).int32(publicServiceCategoryStatusToNumber(message.status));
        }
        writer.uint32(50).fork();
        for (const v of message.tabCodes) {
            writer.int32((0, publicServiceCode_1.publicServiceTabCodeToNumber)(v));
        }
        writer.ldelim();
        Object.entries(message.locales).forEach(([key, value]) => {
            exports.UpdatePublicServiceCategoryRequestLocalesEntry.encode({ key: key, value }, writer.uint32(58).fork())
                .ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdatePublicServiceCategoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.category = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.icon = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.sortOrder = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.status = publicServiceCategoryStatusFromJSON(reader.int32());
                    continue;
                case 6:
                    if (tag === 48) {
                        message.tabCodes.push((0, publicServiceCode_1.publicServiceTabCodeFromJSON)(reader.int32()));
                        continue;
                    }
                    if (tag === 50) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.tabCodes.push((0, publicServiceCode_1.publicServiceTabCodeFromJSON)(reader.int32()));
                        }
                        continue;
                    }
                    break;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    const entry7 = exports.UpdatePublicServiceCategoryRequestLocalesEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.locales[entry7.key] = entry7.value;
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
            category: isSet(object.category) ? globalThis.String(object.category) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : undefined,
            icon: isSet(object.icon) ? globalThis.String(object.icon) : undefined,
            sortOrder: isSet(object.sortOrder) ? globalThis.Number(object.sortOrder) : undefined,
            status: isSet(object.status) ? publicServiceCategoryStatusFromJSON(object.status) : undefined,
            tabCodes: globalThis.Array.isArray(object?.tabCodes)
                ? object.tabCodes.map((e) => (0, publicServiceCode_1.publicServiceTabCodeFromJSON)(e))
                : [],
            locales: isObject(object.locales)
                ? Object.entries(object.locales).reduce((acc, [key, value]) => {
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.category !== "") {
            obj.category = message.category;
        }
        if (message.name !== undefined) {
            obj.name = message.name;
        }
        if (message.icon !== undefined) {
            obj.icon = message.icon;
        }
        if (message.sortOrder !== undefined) {
            obj.sortOrder = Math.round(message.sortOrder);
        }
        if (message.status !== undefined) {
            obj.status = publicServiceCategoryStatusToJSON(message.status);
        }
        if (message.tabCodes?.length) {
            obj.tabCodes = message.tabCodes.map((e) => (0, publicServiceCode_1.publicServiceTabCodeToJSON)(e));
        }
        if (message.locales) {
            const entries = Object.entries(message.locales);
            if (entries.length > 0) {
                obj.locales = {};
                entries.forEach(([k, v]) => {
                    obj.locales[k] = v;
                });
            }
        }
        return obj;
    },
    create(base) {
        return exports.UpdatePublicServiceCategoryRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdatePublicServiceCategoryRequest();
        message.category = object.category ?? "";
        message.name = object.name ?? undefined;
        message.icon = object.icon ?? undefined;
        message.sortOrder = object.sortOrder ?? undefined;
        message.status = object.status ?? undefined;
        message.tabCodes = object.tabCodes?.map((e) => e) || [];
        message.locales = Object.entries(object.locales ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = globalThis.String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseUpdatePublicServiceCategoryRequestLocalesEntry() {
    return { key: "", value: "" };
}
exports.UpdatePublicServiceCategoryRequestLocalesEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdatePublicServiceCategoryRequestLocalesEntry();
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
                    message.value = reader.string();
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
            value: isSet(object.value) ? globalThis.String(object.value) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
    create(base) {
        return exports.UpdatePublicServiceCategoryRequestLocalesEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseUpdatePublicServiceCategoryRequestLocalesEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
};
function createBasePublicServiceTab() {
    return { name: "", code: publicServiceCode_1.PublicServiceTabCode.citizen };
}
exports.PublicServiceTab = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.code !== publicServiceCode_1.PublicServiceTabCode.citizen) {
            writer.uint32(16).int32((0, publicServiceCode_1.publicServiceTabCodeToNumber)(message.code));
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublicServiceTab();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.code = (0, publicServiceCode_1.publicServiceTabCodeFromJSON)(reader.int32());
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            code: isSet(object.code) ? (0, publicServiceCode_1.publicServiceTabCodeFromJSON)(object.code) : publicServiceCode_1.PublicServiceTabCode.citizen,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.code !== publicServiceCode_1.PublicServiceTabCode.citizen) {
            obj.code = (0, publicServiceCode_1.publicServiceTabCodeToJSON)(message.code);
        }
        return obj;
    },
    create(base) {
        return exports.PublicServiceTab.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePublicServiceTab();
        message.name = object.name ?? "";
        message.code = object.code ?? publicServiceCode_1.PublicServiceTabCode.citizen;
        return message;
    },
};
function createBasePublicServiceCategoryResponse() {
    return {
        code: publicServiceCodes_1.PublicServiceCategoryCode.carServices,
        icon: "",
        name: "",
        status: PublicServiceCategoryStatus.active,
        visibleSearch: false,
        sortOrder: 0,
        publicServices: [],
        tabCode: publicServiceCode_1.PublicServiceTabCode.citizen,
        tabCodes: [],
    };
}
exports.PublicServiceCategoryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== publicServiceCodes_1.PublicServiceCategoryCode.carServices) {
            writer.uint32(8).int32((0, publicServiceCodes_1.publicServiceCategoryCodeToNumber)(message.code));
        }
        if (message.icon !== "") {
            writer.uint32(18).string(message.icon);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.status !== PublicServiceCategoryStatus.active) {
            writer.uint32(32).int32(publicServiceCategoryStatusToNumber(message.status));
        }
        if (message.visibleSearch !== false) {
            writer.uint32(40).bool(message.visibleSearch);
        }
        if (message.sortOrder !== 0) {
            writer.uint32(48).int32(message.sortOrder);
        }
        for (const v of message.publicServices) {
            exports.PublicServiceResponse.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.tabCode !== publicServiceCode_1.PublicServiceTabCode.citizen) {
            writer.uint32(64).int32((0, publicServiceCode_1.publicServiceTabCodeToNumber)(message.tabCode));
        }
        writer.uint32(74).fork();
        for (const v of message.tabCodes) {
            writer.int32((0, publicServiceCode_1.publicServiceTabCodeToNumber)(v));
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublicServiceCategoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.code = (0, publicServiceCodes_1.publicServiceCategoryCodeFromJSON)(reader.int32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.icon = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.status = publicServiceCategoryStatusFromJSON(reader.int32());
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.visibleSearch = reader.bool();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.sortOrder = reader.int32();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.publicServices.push(exports.PublicServiceResponse.decode(reader, reader.uint32()));
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.tabCode = (0, publicServiceCode_1.publicServiceTabCodeFromJSON)(reader.int32());
                    continue;
                case 9:
                    if (tag === 72) {
                        message.tabCodes.push((0, publicServiceCode_1.publicServiceTabCodeFromJSON)(reader.int32()));
                        continue;
                    }
                    if (tag === 74) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.tabCodes.push((0, publicServiceCode_1.publicServiceTabCodeFromJSON)(reader.int32()));
                        }
                        continue;
                    }
                    break;
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
            code: isSet(object.code) ? (0, publicServiceCodes_1.publicServiceCategoryCodeFromJSON)(object.code) : publicServiceCodes_1.PublicServiceCategoryCode.carServices,
            icon: isSet(object.icon) ? globalThis.String(object.icon) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            status: isSet(object.status)
                ? publicServiceCategoryStatusFromJSON(object.status)
                : PublicServiceCategoryStatus.active,
            visibleSearch: isSet(object.visibleSearch) ? globalThis.Boolean(object.visibleSearch) : false,
            sortOrder: isSet(object.sortOrder) ? globalThis.Number(object.sortOrder) : 0,
            publicServices: globalThis.Array.isArray(object?.publicServices)
                ? object.publicServices.map((e) => exports.PublicServiceResponse.fromJSON(e))
                : [],
            tabCode: isSet(object.tabCode) ? (0, publicServiceCode_1.publicServiceTabCodeFromJSON)(object.tabCode) : publicServiceCode_1.PublicServiceTabCode.citizen,
            tabCodes: globalThis.Array.isArray(object?.tabCodes)
                ? object.tabCodes.map((e) => (0, publicServiceCode_1.publicServiceTabCodeFromJSON)(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.code !== publicServiceCodes_1.PublicServiceCategoryCode.carServices) {
            obj.code = (0, publicServiceCodes_1.publicServiceCategoryCodeToJSON)(message.code);
        }
        if (message.icon !== "") {
            obj.icon = message.icon;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.status !== PublicServiceCategoryStatus.active) {
            obj.status = publicServiceCategoryStatusToJSON(message.status);
        }
        if (message.visibleSearch !== false) {
            obj.visibleSearch = message.visibleSearch;
        }
        if (message.sortOrder !== 0) {
            obj.sortOrder = Math.round(message.sortOrder);
        }
        if (message.publicServices?.length) {
            obj.publicServices = message.publicServices.map((e) => exports.PublicServiceResponse.toJSON(e));
        }
        if (message.tabCode !== publicServiceCode_1.PublicServiceTabCode.citizen) {
            obj.tabCode = (0, publicServiceCode_1.publicServiceTabCodeToJSON)(message.tabCode);
        }
        if (message.tabCodes?.length) {
            obj.tabCodes = message.tabCodes.map((e) => (0, publicServiceCode_1.publicServiceTabCodeToJSON)(e));
        }
        return obj;
    },
    create(base) {
        return exports.PublicServiceCategoryResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePublicServiceCategoryResponse();
        message.code = object.code ?? publicServiceCodes_1.PublicServiceCategoryCode.carServices;
        message.icon = object.icon ?? "";
        message.name = object.name ?? "";
        message.status = object.status ?? PublicServiceCategoryStatus.active;
        message.visibleSearch = object.visibleSearch ?? false;
        message.sortOrder = object.sortOrder ?? 0;
        message.publicServices = object.publicServices?.map((e) => exports.PublicServiceResponse.fromPartial(e)) || [];
        message.tabCode = object.tabCode ?? publicServiceCode_1.PublicServiceTabCode.citizen;
        message.tabCodes = object.tabCodes?.map((e) => e) || [];
        return message;
    },
};
function createBasePublicServiceResponse() {
    return {
        code: publicServiceCode_1.PublicServiceCode.administrativeFees,
        name: "",
        status: publicServiceCode_1.PublicServiceStatus.active,
        sortOrder: 0,
        search: "",
        contextMenu: [],
    };
}
exports.PublicServiceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== publicServiceCode_1.PublicServiceCode.administrativeFees) {
            writer.uint32(8).int32((0, publicServiceCode_1.publicServiceCodeToNumber)(message.code));
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.status !== publicServiceCode_1.PublicServiceStatus.active) {
            writer.uint32(24).int32((0, publicServiceCode_1.publicServiceStatusToNumber)(message.status));
        }
        if (message.sortOrder !== 0) {
            writer.uint32(32).int32(message.sortOrder);
        }
        if (message.search !== "") {
            writer.uint32(42).string(message.search);
        }
        for (const v of message.contextMenu) {
            contextMenu_1.PublicServiceContextMenu.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublicServiceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.code = (0, publicServiceCode_1.publicServiceCodeFromJSON)(reader.int32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.status = (0, publicServiceCode_1.publicServiceStatusFromJSON)(reader.int32());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.sortOrder = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.search = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.contextMenu.push(contextMenu_1.PublicServiceContextMenu.decode(reader, reader.uint32()));
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
            code: isSet(object.code) ? (0, publicServiceCode_1.publicServiceCodeFromJSON)(object.code) : publicServiceCode_1.PublicServiceCode.administrativeFees,
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            status: isSet(object.status) ? (0, publicServiceCode_1.publicServiceStatusFromJSON)(object.status) : publicServiceCode_1.PublicServiceStatus.active,
            sortOrder: isSet(object.sortOrder) ? globalThis.Number(object.sortOrder) : 0,
            search: isSet(object.search) ? globalThis.String(object.search) : "",
            contextMenu: globalThis.Array.isArray(object?.contextMenu)
                ? object.contextMenu.map((e) => contextMenu_1.PublicServiceContextMenu.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.code !== publicServiceCode_1.PublicServiceCode.administrativeFees) {
            obj.code = (0, publicServiceCode_1.publicServiceCodeToJSON)(message.code);
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.status !== publicServiceCode_1.PublicServiceStatus.active) {
            obj.status = (0, publicServiceCode_1.publicServiceStatusToJSON)(message.status);
        }
        if (message.sortOrder !== 0) {
            obj.sortOrder = Math.round(message.sortOrder);
        }
        if (message.search !== "") {
            obj.search = message.search;
        }
        if (message.contextMenu?.length) {
            obj.contextMenu = message.contextMenu.map((e) => contextMenu_1.PublicServiceContextMenu.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.PublicServiceResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePublicServiceResponse();
        message.code = object.code ?? publicServiceCode_1.PublicServiceCode.administrativeFees;
        message.name = object.name ?? "";
        message.status = object.status ?? publicServiceCode_1.PublicServiceStatus.active;
        message.sortOrder = object.sortOrder ?? 0;
        message.search = object.search ?? "";
        message.contextMenu = object.contextMenu?.map((e) => contextMenu_1.PublicServiceContextMenu.fromPartial(e)) || [];
        return message;
    },
};
function createBasePublicService() {
    return {
        code: publicServiceCode_1.PublicServiceCode.administrativeFees,
        name: "",
        sortOrder: 0,
        status: publicServiceCode_1.PublicServiceStatus.active,
        locales: {},
        categories: [],
        segments: [],
        contextMenu: [],
        sessionTypes: [],
        appVersions: undefined,
        platformMinVersion: undefined,
        profileFeature: undefined,
    };
}
exports.PublicService = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== publicServiceCode_1.PublicServiceCode.administrativeFees) {
            writer.uint32(8).int32((0, publicServiceCode_1.publicServiceCodeToNumber)(message.code));
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.sortOrder !== 0) {
            writer.uint32(24).int32(message.sortOrder);
        }
        if (message.status !== publicServiceCode_1.PublicServiceStatus.active) {
            writer.uint32(32).int32((0, publicServiceCode_1.publicServiceStatusToNumber)(message.status));
        }
        Object.entries(message.locales).forEach(([key, value]) => {
            exports.PublicServiceLocalesEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        writer.uint32(50).fork();
        for (const v of message.categories) {
            writer.int32((0, publicServiceCodes_1.publicServiceCategoryCodeToNumber)(v));
        }
        writer.ldelim();
        for (const v of message.segments) {
            writer.uint32(58).string(v);
        }
        for (const v of message.contextMenu) {
            contextMenu_1.PublicServiceContextMenu.encode(v, writer.uint32(66).fork()).ldelim();
        }
        writer.uint32(74).fork();
        for (const v of message.sessionTypes) {
            writer.int32((0, sessionType_1.sessionTypeToNumber)(v));
        }
        writer.ldelim();
        if (message.appVersions !== undefined) {
            version_1.PublicServiceAppVersionsBySession.encode(message.appVersions, writer.uint32(82).fork()).ldelim();
        }
        if (message.platformMinVersion !== undefined) {
            version_1.SingleVersionRecord.encode(message.platformMinVersion, writer.uint32(90).fork()).ldelim();
        }
        if (message.profileFeature !== undefined) {
            writer.uint32(96).int32((0, profileFeature_1.profileFeatureToNumber)(message.profileFeature));
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublicService();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.code = (0, publicServiceCode_1.publicServiceCodeFromJSON)(reader.int32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.sortOrder = reader.int32();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.status = (0, publicServiceCode_1.publicServiceStatusFromJSON)(reader.int32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    const entry5 = exports.PublicServiceLocalesEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.locales[entry5.key] = entry5.value;
                    }
                    continue;
                case 6:
                    if (tag === 48) {
                        message.categories.push((0, publicServiceCodes_1.publicServiceCategoryCodeFromJSON)(reader.int32()));
                        continue;
                    }
                    if (tag === 50) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.categories.push((0, publicServiceCodes_1.publicServiceCategoryCodeFromJSON)(reader.int32()));
                        }
                        continue;
                    }
                    break;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.segments.push(reader.string());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.contextMenu.push(contextMenu_1.PublicServiceContextMenu.decode(reader, reader.uint32()));
                    continue;
                case 9:
                    if (tag === 72) {
                        message.sessionTypes.push((0, sessionType_1.sessionTypeFromJSON)(reader.int32()));
                        continue;
                    }
                    if (tag === 74) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sessionTypes.push((0, sessionType_1.sessionTypeFromJSON)(reader.int32()));
                        }
                        continue;
                    }
                    break;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.appVersions = version_1.PublicServiceAppVersionsBySession.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.platformMinVersion = version_1.SingleVersionRecord.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 96) {
                        break;
                    }
                    message.profileFeature = (0, profileFeature_1.profileFeatureFromJSON)(reader.int32());
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
            code: isSet(object.code) ? (0, publicServiceCode_1.publicServiceCodeFromJSON)(object.code) : publicServiceCode_1.PublicServiceCode.administrativeFees,
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            sortOrder: isSet(object.sortOrder) ? globalThis.Number(object.sortOrder) : 0,
            status: isSet(object.status) ? (0, publicServiceCode_1.publicServiceStatusFromJSON)(object.status) : publicServiceCode_1.PublicServiceStatus.active,
            locales: isObject(object.locales)
                ? Object.entries(object.locales).reduce((acc, [key, value]) => {
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
            categories: globalThis.Array.isArray(object?.categories)
                ? object.categories.map((e) => (0, publicServiceCodes_1.publicServiceCategoryCodeFromJSON)(e))
                : [],
            segments: globalThis.Array.isArray(object?.segments) ? object.segments.map((e) => globalThis.String(e)) : [],
            contextMenu: globalThis.Array.isArray(object?.contextMenu)
                ? object.contextMenu.map((e) => contextMenu_1.PublicServiceContextMenu.fromJSON(e))
                : [],
            sessionTypes: globalThis.Array.isArray(object?.sessionTypes)
                ? object.sessionTypes.map((e) => (0, sessionType_1.sessionTypeFromJSON)(e))
                : [],
            appVersions: isSet(object.appVersions)
                ? version_1.PublicServiceAppVersionsBySession.fromJSON(object.appVersions)
                : undefined,
            platformMinVersion: isSet(object.platformMinVersion)
                ? version_1.SingleVersionRecord.fromJSON(object.platformMinVersion)
                : undefined,
            profileFeature: isSet(object.profileFeature) ? (0, profileFeature_1.profileFeatureFromJSON)(object.profileFeature) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.code !== publicServiceCode_1.PublicServiceCode.administrativeFees) {
            obj.code = (0, publicServiceCode_1.publicServiceCodeToJSON)(message.code);
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.sortOrder !== 0) {
            obj.sortOrder = Math.round(message.sortOrder);
        }
        if (message.status !== publicServiceCode_1.PublicServiceStatus.active) {
            obj.status = (0, publicServiceCode_1.publicServiceStatusToJSON)(message.status);
        }
        if (message.locales) {
            const entries = Object.entries(message.locales);
            if (entries.length > 0) {
                obj.locales = {};
                entries.forEach(([k, v]) => {
                    obj.locales[k] = v;
                });
            }
        }
        if (message.categories?.length) {
            obj.categories = message.categories.map((e) => (0, publicServiceCodes_1.publicServiceCategoryCodeToJSON)(e));
        }
        if (message.segments?.length) {
            obj.segments = message.segments;
        }
        if (message.contextMenu?.length) {
            obj.contextMenu = message.contextMenu.map((e) => contextMenu_1.PublicServiceContextMenu.toJSON(e));
        }
        if (message.sessionTypes?.length) {
            obj.sessionTypes = message.sessionTypes.map((e) => (0, sessionType_1.sessionTypeToJSON)(e));
        }
        if (message.appVersions !== undefined) {
            obj.appVersions = version_1.PublicServiceAppVersionsBySession.toJSON(message.appVersions);
        }
        if (message.platformMinVersion !== undefined) {
            obj.platformMinVersion = version_1.SingleVersionRecord.toJSON(message.platformMinVersion);
        }
        if (message.profileFeature !== undefined) {
            obj.profileFeature = (0, profileFeature_1.profileFeatureToJSON)(message.profileFeature);
        }
        return obj;
    },
    create(base) {
        return exports.PublicService.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePublicService();
        message.code = object.code ?? publicServiceCode_1.PublicServiceCode.administrativeFees;
        message.name = object.name ?? "";
        message.sortOrder = object.sortOrder ?? 0;
        message.status = object.status ?? publicServiceCode_1.PublicServiceStatus.active;
        message.locales = Object.entries(object.locales ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = globalThis.String(value);
            }
            return acc;
        }, {});
        message.categories = object.categories?.map((e) => e) || [];
        message.segments = object.segments?.map((e) => e) || [];
        message.contextMenu = object.contextMenu?.map((e) => contextMenu_1.PublicServiceContextMenu.fromPartial(e)) || [];
        message.sessionTypes = object.sessionTypes?.map((e) => e) || [];
        message.appVersions = (object.appVersions !== undefined && object.appVersions !== null)
            ? version_1.PublicServiceAppVersionsBySession.fromPartial(object.appVersions)
            : undefined;
        message.platformMinVersion = (object.platformMinVersion !== undefined && object.platformMinVersion !== null)
            ? version_1.SingleVersionRecord.fromPartial(object.platformMinVersion)
            : undefined;
        message.profileFeature = object.profileFeature ?? undefined;
        return message;
    },
};
function createBasePublicServiceLocalesEntry() {
    return { key: "", value: "" };
}
exports.PublicServiceLocalesEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublicServiceLocalesEntry();
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
                    message.value = reader.string();
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
            value: isSet(object.value) ? globalThis.String(object.value) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
    create(base) {
        return exports.PublicServiceLocalesEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePublicServiceLocalesEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
};
function createBasePublicServiceCategory() {
    return {
        category: publicServiceCodes_1.PublicServiceCategoryCode.carServices,
        name: "",
        icon: "",
        sortOrder: 0,
        status: PublicServiceCategoryStatus.active,
        tabCodes: [],
        locales: {},
    };
}
exports.PublicServiceCategory = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.category !== publicServiceCodes_1.PublicServiceCategoryCode.carServices) {
            writer.uint32(8).int32((0, publicServiceCodes_1.publicServiceCategoryCodeToNumber)(message.category));
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.icon !== "") {
            writer.uint32(26).string(message.icon);
        }
        if (message.sortOrder !== 0) {
            writer.uint32(32).int32(message.sortOrder);
        }
        if (message.status !== PublicServiceCategoryStatus.active) {
            writer.uint32(40).int32(publicServiceCategoryStatusToNumber(message.status));
        }
        writer.uint32(50).fork();
        for (const v of message.tabCodes) {
            writer.int32((0, publicServiceCode_1.publicServiceTabCodeToNumber)(v));
        }
        writer.ldelim();
        Object.entries(message.locales).forEach(([key, value]) => {
            exports.PublicServiceCategoryLocalesEntry.encode({ key: key, value }, writer.uint32(58).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublicServiceCategory();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.category = (0, publicServiceCodes_1.publicServiceCategoryCodeFromJSON)(reader.int32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.icon = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.sortOrder = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.status = publicServiceCategoryStatusFromJSON(reader.int32());
                    continue;
                case 6:
                    if (tag === 48) {
                        message.tabCodes.push((0, publicServiceCode_1.publicServiceTabCodeFromJSON)(reader.int32()));
                        continue;
                    }
                    if (tag === 50) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.tabCodes.push((0, publicServiceCode_1.publicServiceTabCodeFromJSON)(reader.int32()));
                        }
                        continue;
                    }
                    break;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    const entry7 = exports.PublicServiceCategoryLocalesEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.locales[entry7.key] = entry7.value;
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
            category: isSet(object.category)
                ? (0, publicServiceCodes_1.publicServiceCategoryCodeFromJSON)(object.category)
                : publicServiceCodes_1.PublicServiceCategoryCode.carServices,
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            icon: isSet(object.icon) ? globalThis.String(object.icon) : "",
            sortOrder: isSet(object.sortOrder) ? globalThis.Number(object.sortOrder) : 0,
            status: isSet(object.status)
                ? publicServiceCategoryStatusFromJSON(object.status)
                : PublicServiceCategoryStatus.active,
            tabCodes: globalThis.Array.isArray(object?.tabCodes)
                ? object.tabCodes.map((e) => (0, publicServiceCode_1.publicServiceTabCodeFromJSON)(e))
                : [],
            locales: isObject(object.locales)
                ? Object.entries(object.locales).reduce((acc, [key, value]) => {
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.category !== publicServiceCodes_1.PublicServiceCategoryCode.carServices) {
            obj.category = (0, publicServiceCodes_1.publicServiceCategoryCodeToJSON)(message.category);
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.icon !== "") {
            obj.icon = message.icon;
        }
        if (message.sortOrder !== 0) {
            obj.sortOrder = Math.round(message.sortOrder);
        }
        if (message.status !== PublicServiceCategoryStatus.active) {
            obj.status = publicServiceCategoryStatusToJSON(message.status);
        }
        if (message.tabCodes?.length) {
            obj.tabCodes = message.tabCodes.map((e) => (0, publicServiceCode_1.publicServiceTabCodeToJSON)(e));
        }
        if (message.locales) {
            const entries = Object.entries(message.locales);
            if (entries.length > 0) {
                obj.locales = {};
                entries.forEach(([k, v]) => {
                    obj.locales[k] = v;
                });
            }
        }
        return obj;
    },
    create(base) {
        return exports.PublicServiceCategory.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePublicServiceCategory();
        message.category = object.category ?? publicServiceCodes_1.PublicServiceCategoryCode.carServices;
        message.name = object.name ?? "";
        message.icon = object.icon ?? "";
        message.sortOrder = object.sortOrder ?? 0;
        message.status = object.status ?? PublicServiceCategoryStatus.active;
        message.tabCodes = object.tabCodes?.map((e) => e) || [];
        message.locales = Object.entries(object.locales ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = globalThis.String(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBasePublicServiceCategoryLocalesEntry() {
    return { key: "", value: "" };
}
exports.PublicServiceCategoryLocalesEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublicServiceCategoryLocalesEntry();
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
                    message.value = reader.string();
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
            value: isSet(object.value) ? globalThis.String(object.value) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
    create(base) {
        return exports.PublicServiceCategoryLocalesEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePublicServiceCategoryLocalesEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
};
function createBasePublicServiceCategoryResult() {
    return {
        category: publicServiceCodes_1.PublicServiceCategoryCode.carServices,
        name: "",
        icon: "",
        sortOrder: 0,
        status: PublicServiceCategoryStatus.active,
        tabCodes: [],
        locales: {},
        id: "",
    };
}
exports.PublicServiceCategoryResult = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.category !== publicServiceCodes_1.PublicServiceCategoryCode.carServices) {
            writer.uint32(8).int32((0, publicServiceCodes_1.publicServiceCategoryCodeToNumber)(message.category));
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.icon !== "") {
            writer.uint32(26).string(message.icon);
        }
        if (message.sortOrder !== 0) {
            writer.uint32(32).int32(message.sortOrder);
        }
        if (message.status !== PublicServiceCategoryStatus.active) {
            writer.uint32(40).int32(publicServiceCategoryStatusToNumber(message.status));
        }
        writer.uint32(50).fork();
        for (const v of message.tabCodes) {
            writer.int32((0, publicServiceCode_1.publicServiceTabCodeToNumber)(v));
        }
        writer.ldelim();
        Object.entries(message.locales).forEach(([key, value]) => {
            exports.PublicServiceCategoryResultLocalesEntry.encode({ key: key, value }, writer.uint32(58).fork()).ldelim();
        });
        if (message.id !== "") {
            writer.uint32(66).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublicServiceCategoryResult();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.category = (0, publicServiceCodes_1.publicServiceCategoryCodeFromJSON)(reader.int32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.icon = reader.string();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.sortOrder = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.status = publicServiceCategoryStatusFromJSON(reader.int32());
                    continue;
                case 6:
                    if (tag === 48) {
                        message.tabCodes.push((0, publicServiceCode_1.publicServiceTabCodeFromJSON)(reader.int32()));
                        continue;
                    }
                    if (tag === 50) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.tabCodes.push((0, publicServiceCode_1.publicServiceTabCodeFromJSON)(reader.int32()));
                        }
                        continue;
                    }
                    break;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    const entry7 = exports.PublicServiceCategoryResultLocalesEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.locales[entry7.key] = entry7.value;
                    }
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.id = reader.string();
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
            category: isSet(object.category)
                ? (0, publicServiceCodes_1.publicServiceCategoryCodeFromJSON)(object.category)
                : publicServiceCodes_1.PublicServiceCategoryCode.carServices,
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            icon: isSet(object.icon) ? globalThis.String(object.icon) : "",
            sortOrder: isSet(object.sortOrder) ? globalThis.Number(object.sortOrder) : 0,
            status: isSet(object.status)
                ? publicServiceCategoryStatusFromJSON(object.status)
                : PublicServiceCategoryStatus.active,
            tabCodes: globalThis.Array.isArray(object?.tabCodes)
                ? object.tabCodes.map((e) => (0, publicServiceCode_1.publicServiceTabCodeFromJSON)(e))
                : [],
            locales: isObject(object.locales)
                ? Object.entries(object.locales).reduce((acc, [key, value]) => {
                    acc[key] = String(value);
                    return acc;
                }, {})
                : {},
            id: isSet(object.id) ? globalThis.String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.category !== publicServiceCodes_1.PublicServiceCategoryCode.carServices) {
            obj.category = (0, publicServiceCodes_1.publicServiceCategoryCodeToJSON)(message.category);
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.icon !== "") {
            obj.icon = message.icon;
        }
        if (message.sortOrder !== 0) {
            obj.sortOrder = Math.round(message.sortOrder);
        }
        if (message.status !== PublicServiceCategoryStatus.active) {
            obj.status = publicServiceCategoryStatusToJSON(message.status);
        }
        if (message.tabCodes?.length) {
            obj.tabCodes = message.tabCodes.map((e) => (0, publicServiceCode_1.publicServiceTabCodeToJSON)(e));
        }
        if (message.locales) {
            const entries = Object.entries(message.locales);
            if (entries.length > 0) {
                obj.locales = {};
                entries.forEach(([k, v]) => {
                    obj.locales[k] = v;
                });
            }
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.PublicServiceCategoryResult.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePublicServiceCategoryResult();
        message.category = object.category ?? publicServiceCodes_1.PublicServiceCategoryCode.carServices;
        message.name = object.name ?? "";
        message.icon = object.icon ?? "";
        message.sortOrder = object.sortOrder ?? 0;
        message.status = object.status ?? PublicServiceCategoryStatus.active;
        message.tabCodes = object.tabCodes?.map((e) => e) || [];
        message.locales = Object.entries(object.locales ?? {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = globalThis.String(value);
            }
            return acc;
        }, {});
        message.id = object.id ?? "";
        return message;
    },
};
function createBasePublicServiceCategoryResultLocalesEntry() {
    return { key: "", value: "" };
}
exports.PublicServiceCategoryResultLocalesEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublicServiceCategoryResultLocalesEntry();
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
                    message.value = reader.string();
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
            value: isSet(object.value) ? globalThis.String(object.value) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key !== "") {
            obj.key = message.key;
        }
        if (message.value !== "") {
            obj.value = message.value;
        }
        return obj;
    },
    create(base) {
        return exports.PublicServiceCategoryResultLocalesEntry.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePublicServiceCategoryResultLocalesEntry();
        message.key = object.key ?? "";
        message.value = object.value ?? "";
        return message;
    },
};
exports.PublicServiceCatalogDefinition = {
    name: "PublicServiceCatalog",
    fullName: "ua.gov.diia.publicservicecatalog.PublicServiceCatalog",
    methods: {
        createPublicService: {
            name: "createPublicService",
            requestType: exports.PublicService,
            requestStream: false,
            responseType: exports.PublicService,
            responseStream: false,
            options: {
                _unknownFields: {
                    578365826: [
                        Buffer.from([
                            24,
                            34,
                            22,
                            47,
                            97,
                            112,
                            105,
                            47,
                            118,
                            49,
                            47,
                            112,
                            117,
                            98,
                            108,
                            105,
                            99,
                            45,
                            115,
                            101,
                            114,
                            118,
                            105,
                            99,
                            101,
                        ]),
                    ],
                },
            },
        },
        createPublicServiceCategory: {
            name: "createPublicServiceCategory",
            requestType: exports.PublicServiceCategory,
            requestStream: false,
            responseType: exports.PublicServiceCategory,
            responseStream: false,
            options: {
                _unknownFields: {
                    578365826: [
                        Buffer.from([
                            33,
                            34,
                            31,
                            47,
                            97,
                            112,
                            105,
                            47,
                            118,
                            49,
                            47,
                            112,
                            117,
                            98,
                            108,
                            105,
                            99,
                            45,
                            115,
                            101,
                            114,
                            118,
                            105,
                            99,
                            101,
                            45,
                            99,
                            97,
                            116,
                            101,
                            103,
                            111,
                            114,
                            121,
                        ]),
                    ],
                },
            },
        },
        getPublicServiceByCode: {
            name: "getPublicServiceByCode",
            requestType: exports.GetPublicServiceByCodeRequest,
            requestStream: false,
            responseType: contextMenu_1.PublicServiceSettings,
            responseStream: false,
            options: {
                _unknownFields: {
                    578365826: [
                        Buffer.from([
                            32,
                            18,
                            30,
                            47,
                            97,
                            112,
                            105,
                            47,
                            118,
                            49,
                            47,
                            112,
                            117,
                            98,
                            108,
                            105,
                            99,
                            45,
                            115,
                            101,
                            114,
                            118,
                            105,
                            99,
                            101,
                            115,
                            47,
                            123,
                            99,
                            111,
                            100,
                            101,
                            125,
                        ]),
                    ],
                },
            },
        },
        getPublicServiceCategoriesList: {
            name: "getPublicServiceCategoriesList",
            requestType: exports.GetPublicServiceCategoriesListRequest,
            requestStream: false,
            responseType: exports.GetPublicServiceCategoriesListResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    578365826: [
                        Buffer.from([
                            35,
                            18,
                            33,
                            47,
                            97,
                            112,
                            105,
                            47,
                            118,
                            49,
                            47,
                            112,
                            117,
                            98,
                            108,
                            105,
                            99,
                            45,
                            115,
                            101,
                            114,
                            118,
                            105,
                            99,
                            101,
                            45,
                            99,
                            97,
                            116,
                            101,
                            103,
                            111,
                            114,
                            105,
                            101,
                            115,
                        ]),
                    ],
                },
            },
        },
        getPublicServiceCategoryByCategory: {
            name: "getPublicServiceCategoryByCategory",
            requestType: exports.GetPublicServiceCategoryByCategoryRequest,
            requestStream: false,
            responseType: exports.PublicServiceCategoryResult,
            responseStream: false,
            options: {
                _unknownFields: {
                    578365826: [
                        Buffer.from([
                            46,
                            18,
                            44,
                            47,
                            97,
                            112,
                            105,
                            47,
                            118,
                            49,
                            47,
                            112,
                            117,
                            98,
                            108,
                            105,
                            99,
                            45,
                            115,
                            101,
                            114,
                            118,
                            105,
                            99,
                            101,
                            45,
                            99,
                            97,
                            116,
                            101,
                            103,
                            111,
                            114,
                            105,
                            101,
                            115,
                            47,
                            123,
                            99,
                            97,
                            116,
                            101,
                            103,
                            111,
                            114,
                            121,
                            125,
                        ]),
                    ],
                },
            },
        },
        getPublicServiceContextMenu: {
            name: "getPublicServiceContextMenu",
            requestType: exports.GetPublicServiceContextMenuRequest,
            requestStream: false,
            responseType: exports.GetPublicServiceContextMenuResponse,
            responseStream: false,
            options: {},
        },
        getPublicServiceSettings: {
            name: "getPublicServiceSettings",
            requestType: exports.PublicServiceSettingsRequest,
            requestStream: false,
            responseType: contextMenu_1.PublicServiceSettings,
            responseStream: false,
            options: {},
        },
        getPublicServices: {
            name: "getPublicServices",
            requestType: empty_1.Empty,
            requestStream: false,
            responseType: exports.GetPublicServicesResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    578365826: [
                        Buffer.from([
                            77,
                            18,
                            30,
                            47,
                            97,
                            112,
                            105,
                            47,
                            118,
                            51,
                            47,
                            112,
                            117,
                            98,
                            108,
                            105,
                            99,
                            45,
                            115,
                            101,
                            114,
                            118,
                            105,
                            99,
                            101,
                            47,
                            99,
                            97,
                            116,
                            97,
                            108,
                            111,
                            103,
                            90,
                            43,
                            18,
                            41,
                            47,
                            101,
                            45,
                            114,
                            101,
                            115,
                            105,
                            100,
                            101,
                            110,
                            116,
                            47,
                            97,
                            112,
                            105,
                            47,
                            118,
                            51,
                            47,
                            112,
                            117,
                            98,
                            108,
                            105,
                            99,
                            45,
                            115,
                            101,
                            114,
                            118,
                            105,
                            99,
                            101,
                            47,
                            99,
                            97,
                            116,
                            97,
                            108,
                            111,
                            103,
                        ]),
                    ],
                },
            },
        },
        getPublicServicesList: {
            name: "getPublicServicesList",
            requestType: exports.GetPublicServicesListRequest,
            requestStream: false,
            responseType: exports.GetPublicServicesListResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    578365826: [
                        Buffer.from([
                            25,
                            18,
                            23,
                            47,
                            97,
                            112,
                            105,
                            47,
                            118,
                            49,
                            47,
                            112,
                            117,
                            98,
                            108,
                            105,
                            99,
                            45,
                            115,
                            101,
                            114,
                            118,
                            105,
                            99,
                            101,
                            115,
                        ]),
                    ],
                },
            },
        },
        isPublicServiceAvailableByCode: {
            name: "isPublicServiceAvailableByCode",
            requestType: exports.IsPublicServiceAvailableRequest,
            requestStream: false,
            responseType: exports.IsPublicServiceAvailableResponse,
            responseStream: false,
            options: {},
        },
        updatePublicService: {
            name: "updatePublicService",
            requestType: exports.UpdatePublicServiceRequest,
            requestStream: false,
            responseType: exports.PublicService,
            responseStream: false,
            options: {
                _unknownFields: {
                    578365826: [
                        Buffer.from([
                            24,
                            26,
                            22,
                            47,
                            97,
                            112,
                            105,
                            47,
                            118,
                            49,
                            47,
                            112,
                            117,
                            98,
                            108,
                            105,
                            99,
                            45,
                            115,
                            101,
                            114,
                            118,
                            105,
                            99,
                            101,
                        ]),
                    ],
                },
            },
        },
        updatePublicServiceCategory: {
            name: "updatePublicServiceCategory",
            requestType: exports.UpdatePublicServiceCategoryRequest,
            requestStream: false,
            responseType: exports.PublicServiceCategory,
            responseStream: false,
            options: {
                _unknownFields: {
                    578365826: [
                        Buffer.from([
                            33,
                            26,
                            31,
                            47,
                            97,
                            112,
                            105,
                            47,
                            118,
                            49,
                            47,
                            112,
                            117,
                            98,
                            108,
                            105,
                            99,
                            45,
                            115,
                            101,
                            114,
                            118,
                            105,
                            99,
                            101,
                            45,
                            99,
                            97,
                            116,
                            101,
                            103,
                            111,
                            114,
                            121,
                        ]),
                    ],
                },
            },
        },
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=public-service-catalog.js.map