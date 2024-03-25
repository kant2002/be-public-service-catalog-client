/// <reference types="node" />
import { DiiaOfficeProfileData, ProfileFeature, PublicServiceAppVersionsBySession, PublicServiceCategoryCode, PublicServiceCode, PublicServiceContextMenu, PublicServiceSettings, PublicServiceStatus, PublicServiceTabCode, SessionType, SingleVersionRecord } from "@kant2002-diia-inhouse/types";
import type { CallContext, CallOptions } from "nice-grpc-common";
import * as _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";
export declare enum PublicServiceCategoryStatus {
    active = "active",
    inactive = "inactive"
}
export declare function publicServiceCategoryStatusFromJSON(object: any): PublicServiceCategoryStatus;
export declare function publicServiceCategoryStatusToJSON(object: PublicServiceCategoryStatus): string;
export declare function publicServiceCategoryStatusToNumber(object: PublicServiceCategoryStatus): number;
export interface GetPublicServiceCategoryByCategoryRequest {
    category: PublicServiceCategoryCode;
}
export interface GetPublicServiceCategoriesListRequest {
    skip?: number | undefined;
    limit?: number | undefined;
}
export interface GetPublicServiceCategoriesListResponse {
    total: number;
    publicServiceCategories: PublicServiceCategoryResult[];
}
export interface GetPublicServiceByCodeRequest {
    code: PublicServiceCode;
}
export interface GetPublicServiceContextMenuRequest {
    code: PublicServiceCode;
}
export interface GetPublicServiceContextMenuResponse {
    contextMenu: PublicServiceContextMenu[];
}
export interface PublicServiceSettingsRequest {
    code: PublicServiceCode;
}
export interface GetPublicServicesResponse {
    publicServicesCategories: PublicServiceCategoryResponse[];
    tabs: PublicServiceTab[];
}
export interface GetPublicServicesListRequest {
    skip?: number | undefined;
    limit?: number | undefined;
}
export interface GetPublicServicesListResponse {
    total: number;
    publicServices: PublicServiceSettings[];
}
export interface IsPublicServiceAvailableRequest {
    code: PublicServiceCode;
    sessionType: SessionType;
    features?: UserFeatures | undefined;
}
export interface UserFeatures {
    office?: DiiaOfficeProfileData | undefined;
}
export interface IsPublicServiceAvailableResponse {
    isAvailable: boolean;
}
export interface UpdatePublicServiceRequest {
    /** ua.gov.diia.types.PublicServiceCode */
    code: string;
    name?: string | undefined;
    sortOrder?: number | undefined;
    status?: PublicServiceStatus | undefined;
    appVersions?: PublicServiceAppVersionsBySession | undefined;
    platformMinVersion?: SingleVersionRecord | undefined;
    profileFeature?: ProfileFeature | undefined;
    segments: string[];
    categories: PublicServiceCategoryCode[];
    contextMenu: PublicServiceContextMenu[];
    sessionTypes: SessionType[];
    locales: {
        [key: string]: string;
    };
}
export interface UpdatePublicServiceRequestLocalesEntry {
    key: string;
    value: string;
}
export interface UpdatePublicServiceCategoryRequest {
    /** ua.gov.diia.types.category.PublicServiceCategoryCode */
    category: string;
    name?: string | undefined;
    icon?: string | undefined;
    sortOrder?: number | undefined;
    status?: PublicServiceCategoryStatus | undefined;
    tabCodes: PublicServiceTabCode[];
    locales: {
        [key: string]: string;
    };
}
export interface UpdatePublicServiceCategoryRequestLocalesEntry {
    key: string;
    value: string;
}
export interface PublicServiceTab {
    name: string;
    code: PublicServiceTabCode;
}
export interface PublicServiceCategoryResponse {
    code: PublicServiceCategoryCode;
    icon: string;
    name: string;
    status: PublicServiceCategoryStatus;
    visibleSearch: boolean;
    sortOrder: number;
    publicServices: PublicServiceResponse[];
    tabCode: PublicServiceTabCode;
    tabCodes: PublicServiceTabCode[];
}
export interface PublicServiceResponse {
    code: PublicServiceCode;
    name: string;
    status: PublicServiceStatus;
    sortOrder: number;
    search: string;
    contextMenu: PublicServiceContextMenu[];
}
export interface PublicService {
    code: PublicServiceCode;
    name: string;
    sortOrder: number;
    status: PublicServiceStatus;
    locales: {
        [key: string]: string;
    };
    categories: PublicServiceCategoryCode[];
    segments: string[];
    contextMenu: PublicServiceContextMenu[];
    sessionTypes: SessionType[];
    appVersions?: PublicServiceAppVersionsBySession | undefined;
    platformMinVersion?: SingleVersionRecord | undefined;
    profileFeature?: ProfileFeature | undefined;
}
export interface PublicServiceLocalesEntry {
    key: string;
    value: string;
}
export interface PublicServiceCategory {
    category: PublicServiceCategoryCode;
    name: string;
    icon: string;
    sortOrder: number;
    status: PublicServiceCategoryStatus;
    tabCodes: PublicServiceTabCode[];
    locales: {
        [key: string]: string;
    };
}
export interface PublicServiceCategoryLocalesEntry {
    key: string;
    value: string;
}
export interface PublicServiceCategoryResult {
    /** extends PublicServiceCategory */
    category: PublicServiceCategoryCode;
    name: string;
    icon: string;
    sortOrder: number;
    status: PublicServiceCategoryStatus;
    tabCodes: PublicServiceTabCode[];
    locales: {
        [key: string]: string;
    };
    id: string;
}
export interface PublicServiceCategoryResultLocalesEntry {
    key: string;
    value: string;
}
export declare const GetPublicServiceCategoryByCategoryRequest: {
    encode(message: GetPublicServiceCategoryByCategoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServiceCategoryByCategoryRequest;
    fromJSON(object: any): GetPublicServiceCategoryByCategoryRequest;
    toJSON(message: GetPublicServiceCategoryByCategoryRequest): unknown;
    create(base?: DeepPartial<GetPublicServiceCategoryByCategoryRequest>): GetPublicServiceCategoryByCategoryRequest;
    fromPartial(object: DeepPartial<GetPublicServiceCategoryByCategoryRequest>): GetPublicServiceCategoryByCategoryRequest;
};
export declare const GetPublicServiceCategoriesListRequest: {
    encode(message: GetPublicServiceCategoriesListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServiceCategoriesListRequest;
    fromJSON(object: any): GetPublicServiceCategoriesListRequest;
    toJSON(message: GetPublicServiceCategoriesListRequest): unknown;
    create(base?: DeepPartial<GetPublicServiceCategoriesListRequest>): GetPublicServiceCategoriesListRequest;
    fromPartial(object: DeepPartial<GetPublicServiceCategoriesListRequest>): GetPublicServiceCategoriesListRequest;
};
export declare const GetPublicServiceCategoriesListResponse: {
    encode(message: GetPublicServiceCategoriesListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServiceCategoriesListResponse;
    fromJSON(object: any): GetPublicServiceCategoriesListResponse;
    toJSON(message: GetPublicServiceCategoriesListResponse): unknown;
    create(base?: DeepPartial<GetPublicServiceCategoriesListResponse>): GetPublicServiceCategoriesListResponse;
    fromPartial(object: DeepPartial<GetPublicServiceCategoriesListResponse>): GetPublicServiceCategoriesListResponse;
};
export declare const GetPublicServiceByCodeRequest: {
    encode(message: GetPublicServiceByCodeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServiceByCodeRequest;
    fromJSON(object: any): GetPublicServiceByCodeRequest;
    toJSON(message: GetPublicServiceByCodeRequest): unknown;
    create(base?: DeepPartial<GetPublicServiceByCodeRequest>): GetPublicServiceByCodeRequest;
    fromPartial(object: DeepPartial<GetPublicServiceByCodeRequest>): GetPublicServiceByCodeRequest;
};
export declare const GetPublicServiceContextMenuRequest: {
    encode(message: GetPublicServiceContextMenuRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServiceContextMenuRequest;
    fromJSON(object: any): GetPublicServiceContextMenuRequest;
    toJSON(message: GetPublicServiceContextMenuRequest): unknown;
    create(base?: DeepPartial<GetPublicServiceContextMenuRequest>): GetPublicServiceContextMenuRequest;
    fromPartial(object: DeepPartial<GetPublicServiceContextMenuRequest>): GetPublicServiceContextMenuRequest;
};
export declare const GetPublicServiceContextMenuResponse: {
    encode(message: GetPublicServiceContextMenuResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServiceContextMenuResponse;
    fromJSON(object: any): GetPublicServiceContextMenuResponse;
    toJSON(message: GetPublicServiceContextMenuResponse): unknown;
    create(base?: DeepPartial<GetPublicServiceContextMenuResponse>): GetPublicServiceContextMenuResponse;
    fromPartial(object: DeepPartial<GetPublicServiceContextMenuResponse>): GetPublicServiceContextMenuResponse;
};
export declare const PublicServiceSettingsRequest: {
    encode(message: PublicServiceSettingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublicServiceSettingsRequest;
    fromJSON(object: any): PublicServiceSettingsRequest;
    toJSON(message: PublicServiceSettingsRequest): unknown;
    create(base?: DeepPartial<PublicServiceSettingsRequest>): PublicServiceSettingsRequest;
    fromPartial(object: DeepPartial<PublicServiceSettingsRequest>): PublicServiceSettingsRequest;
};
export declare const GetPublicServicesResponse: {
    encode(message: GetPublicServicesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServicesResponse;
    fromJSON(object: any): GetPublicServicesResponse;
    toJSON(message: GetPublicServicesResponse): unknown;
    create(base?: DeepPartial<GetPublicServicesResponse>): GetPublicServicesResponse;
    fromPartial(object: DeepPartial<GetPublicServicesResponse>): GetPublicServicesResponse;
};
export declare const GetPublicServicesListRequest: {
    encode(message: GetPublicServicesListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServicesListRequest;
    fromJSON(object: any): GetPublicServicesListRequest;
    toJSON(message: GetPublicServicesListRequest): unknown;
    create(base?: DeepPartial<GetPublicServicesListRequest>): GetPublicServicesListRequest;
    fromPartial(object: DeepPartial<GetPublicServicesListRequest>): GetPublicServicesListRequest;
};
export declare const GetPublicServicesListResponse: {
    encode(message: GetPublicServicesListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServicesListResponse;
    fromJSON(object: any): GetPublicServicesListResponse;
    toJSON(message: GetPublicServicesListResponse): unknown;
    create(base?: DeepPartial<GetPublicServicesListResponse>): GetPublicServicesListResponse;
    fromPartial(object: DeepPartial<GetPublicServicesListResponse>): GetPublicServicesListResponse;
};
export declare const IsPublicServiceAvailableRequest: {
    encode(message: IsPublicServiceAvailableRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IsPublicServiceAvailableRequest;
    fromJSON(object: any): IsPublicServiceAvailableRequest;
    toJSON(message: IsPublicServiceAvailableRequest): unknown;
    create(base?: DeepPartial<IsPublicServiceAvailableRequest>): IsPublicServiceAvailableRequest;
    fromPartial(object: DeepPartial<IsPublicServiceAvailableRequest>): IsPublicServiceAvailableRequest;
};
export declare const UserFeatures: {
    encode(message: UserFeatures, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserFeatures;
    fromJSON(object: any): UserFeatures;
    toJSON(message: UserFeatures): unknown;
    create(base?: DeepPartial<UserFeatures>): UserFeatures;
    fromPartial(object: DeepPartial<UserFeatures>): UserFeatures;
};
export declare const IsPublicServiceAvailableResponse: {
    encode(message: IsPublicServiceAvailableResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IsPublicServiceAvailableResponse;
    fromJSON(object: any): IsPublicServiceAvailableResponse;
    toJSON(message: IsPublicServiceAvailableResponse): unknown;
    create(base?: DeepPartial<IsPublicServiceAvailableResponse>): IsPublicServiceAvailableResponse;
    fromPartial(object: DeepPartial<IsPublicServiceAvailableResponse>): IsPublicServiceAvailableResponse;
};
export declare const UpdatePublicServiceRequest: {
    encode(message: UpdatePublicServiceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePublicServiceRequest;
    fromJSON(object: any): UpdatePublicServiceRequest;
    toJSON(message: UpdatePublicServiceRequest): unknown;
    create(base?: DeepPartial<UpdatePublicServiceRequest>): UpdatePublicServiceRequest;
    fromPartial(object: DeepPartial<UpdatePublicServiceRequest>): UpdatePublicServiceRequest;
};
export declare const UpdatePublicServiceRequestLocalesEntry: {
    encode(message: UpdatePublicServiceRequestLocalesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePublicServiceRequestLocalesEntry;
    fromJSON(object: any): UpdatePublicServiceRequestLocalesEntry;
    toJSON(message: UpdatePublicServiceRequestLocalesEntry): unknown;
    create(base?: DeepPartial<UpdatePublicServiceRequestLocalesEntry>): UpdatePublicServiceRequestLocalesEntry;
    fromPartial(object: DeepPartial<UpdatePublicServiceRequestLocalesEntry>): UpdatePublicServiceRequestLocalesEntry;
};
export declare const UpdatePublicServiceCategoryRequest: {
    encode(message: UpdatePublicServiceCategoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePublicServiceCategoryRequest;
    fromJSON(object: any): UpdatePublicServiceCategoryRequest;
    toJSON(message: UpdatePublicServiceCategoryRequest): unknown;
    create(base?: DeepPartial<UpdatePublicServiceCategoryRequest>): UpdatePublicServiceCategoryRequest;
    fromPartial(object: DeepPartial<UpdatePublicServiceCategoryRequest>): UpdatePublicServiceCategoryRequest;
};
export declare const UpdatePublicServiceCategoryRequestLocalesEntry: {
    encode(message: UpdatePublicServiceCategoryRequestLocalesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePublicServiceCategoryRequestLocalesEntry;
    fromJSON(object: any): UpdatePublicServiceCategoryRequestLocalesEntry;
    toJSON(message: UpdatePublicServiceCategoryRequestLocalesEntry): unknown;
    create(base?: DeepPartial<UpdatePublicServiceCategoryRequestLocalesEntry>): UpdatePublicServiceCategoryRequestLocalesEntry;
    fromPartial(object: DeepPartial<UpdatePublicServiceCategoryRequestLocalesEntry>): UpdatePublicServiceCategoryRequestLocalesEntry;
};
export declare const PublicServiceTab: {
    encode(message: PublicServiceTab, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublicServiceTab;
    fromJSON(object: any): PublicServiceTab;
    toJSON(message: PublicServiceTab): unknown;
    create(base?: DeepPartial<PublicServiceTab>): PublicServiceTab;
    fromPartial(object: DeepPartial<PublicServiceTab>): PublicServiceTab;
};
export declare const PublicServiceCategoryResponse: {
    encode(message: PublicServiceCategoryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublicServiceCategoryResponse;
    fromJSON(object: any): PublicServiceCategoryResponse;
    toJSON(message: PublicServiceCategoryResponse): unknown;
    create(base?: DeepPartial<PublicServiceCategoryResponse>): PublicServiceCategoryResponse;
    fromPartial(object: DeepPartial<PublicServiceCategoryResponse>): PublicServiceCategoryResponse;
};
export declare const PublicServiceResponse: {
    encode(message: PublicServiceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublicServiceResponse;
    fromJSON(object: any): PublicServiceResponse;
    toJSON(message: PublicServiceResponse): unknown;
    create(base?: DeepPartial<PublicServiceResponse>): PublicServiceResponse;
    fromPartial(object: DeepPartial<PublicServiceResponse>): PublicServiceResponse;
};
export declare const PublicService: {
    encode(message: PublicService, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublicService;
    fromJSON(object: any): PublicService;
    toJSON(message: PublicService): unknown;
    create(base?: DeepPartial<PublicService>): PublicService;
    fromPartial(object: DeepPartial<PublicService>): PublicService;
};
export declare const PublicServiceLocalesEntry: {
    encode(message: PublicServiceLocalesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublicServiceLocalesEntry;
    fromJSON(object: any): PublicServiceLocalesEntry;
    toJSON(message: PublicServiceLocalesEntry): unknown;
    create(base?: DeepPartial<PublicServiceLocalesEntry>): PublicServiceLocalesEntry;
    fromPartial(object: DeepPartial<PublicServiceLocalesEntry>): PublicServiceLocalesEntry;
};
export declare const PublicServiceCategory: {
    encode(message: PublicServiceCategory, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublicServiceCategory;
    fromJSON(object: any): PublicServiceCategory;
    toJSON(message: PublicServiceCategory): unknown;
    create(base?: DeepPartial<PublicServiceCategory>): PublicServiceCategory;
    fromPartial(object: DeepPartial<PublicServiceCategory>): PublicServiceCategory;
};
export declare const PublicServiceCategoryLocalesEntry: {
    encode(message: PublicServiceCategoryLocalesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublicServiceCategoryLocalesEntry;
    fromJSON(object: any): PublicServiceCategoryLocalesEntry;
    toJSON(message: PublicServiceCategoryLocalesEntry): unknown;
    create(base?: DeepPartial<PublicServiceCategoryLocalesEntry>): PublicServiceCategoryLocalesEntry;
    fromPartial(object: DeepPartial<PublicServiceCategoryLocalesEntry>): PublicServiceCategoryLocalesEntry;
};
export declare const PublicServiceCategoryResult: {
    encode(message: PublicServiceCategoryResult, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublicServiceCategoryResult;
    fromJSON(object: any): PublicServiceCategoryResult;
    toJSON(message: PublicServiceCategoryResult): unknown;
    create(base?: DeepPartial<PublicServiceCategoryResult>): PublicServiceCategoryResult;
    fromPartial(object: DeepPartial<PublicServiceCategoryResult>): PublicServiceCategoryResult;
};
export declare const PublicServiceCategoryResultLocalesEntry: {
    encode(message: PublicServiceCategoryResultLocalesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PublicServiceCategoryResultLocalesEntry;
    fromJSON(object: any): PublicServiceCategoryResultLocalesEntry;
    toJSON(message: PublicServiceCategoryResultLocalesEntry): unknown;
    create(base?: DeepPartial<PublicServiceCategoryResultLocalesEntry>): PublicServiceCategoryResultLocalesEntry;
    fromPartial(object: DeepPartial<PublicServiceCategoryResultLocalesEntry>): PublicServiceCategoryResultLocalesEntry;
};
export type PublicServiceCatalogDefinition = typeof PublicServiceCatalogDefinition;
export declare const PublicServiceCatalogDefinition: {
    readonly name: "PublicServiceCatalog";
    readonly fullName: "ua.gov.diia.publicservicecatalog.PublicServiceCatalog";
    readonly methods: {
        readonly createPublicService: {
            readonly name: "createPublicService";
            readonly requestType: {
                encode(message: PublicService, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PublicService;
                fromJSON(object: any): PublicService;
                toJSON(message: PublicService): unknown;
                create(base?: DeepPartial<PublicService>): PublicService;
                fromPartial(object: DeepPartial<PublicService>): PublicService;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PublicService, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PublicService;
                fromJSON(object: any): PublicService;
                toJSON(message: PublicService): unknown;
                create(base?: DeepPartial<PublicService>): PublicService;
                fromPartial(object: DeepPartial<PublicService>): PublicService;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly createPublicServiceCategory: {
            readonly name: "createPublicServiceCategory";
            readonly requestType: {
                encode(message: PublicServiceCategory, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PublicServiceCategory;
                fromJSON(object: any): PublicServiceCategory;
                toJSON(message: PublicServiceCategory): unknown;
                create(base?: DeepPartial<PublicServiceCategory>): PublicServiceCategory;
                fromPartial(object: DeepPartial<PublicServiceCategory>): PublicServiceCategory;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PublicServiceCategory, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PublicServiceCategory;
                fromJSON(object: any): PublicServiceCategory;
                toJSON(message: PublicServiceCategory): unknown;
                create(base?: DeepPartial<PublicServiceCategory>): PublicServiceCategory;
                fromPartial(object: DeepPartial<PublicServiceCategory>): PublicServiceCategory;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getPublicServiceByCode: {
            readonly name: "getPublicServiceByCode";
            readonly requestType: {
                encode(message: GetPublicServiceByCodeRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServiceByCodeRequest;
                fromJSON(object: any): GetPublicServiceByCodeRequest;
                toJSON(message: GetPublicServiceByCodeRequest): unknown;
                create(base?: DeepPartial<GetPublicServiceByCodeRequest>): GetPublicServiceByCodeRequest;
                fromPartial(object: DeepPartial<GetPublicServiceByCodeRequest>): GetPublicServiceByCodeRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PublicServiceSettings, writer?: _m0.Writer | undefined): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): PublicServiceSettings;
                fromJSON(object: any): PublicServiceSettings;
                toJSON(message: PublicServiceSettings): unknown;
                create(base?: {
                    id?: string | undefined;
                    categories?: string[] | undefined;
                    code?: PublicServiceCode | undefined;
                    name?: string | undefined;
                    status?: PublicServiceStatus | undefined;
                    segments?: string[] | undefined;
                    contextMenu?: {
                        type?: import("@kant2002-diia-inhouse/types").PublicServiceContextMenuType | undefined;
                        name?: string | undefined;
                        code?: string | undefined;
                        appVersions?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                    }[] | undefined;
                    appVersions?: {
                        Acquirer?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        None?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        Partner?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        Temporary?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        User?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        EResident?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        EResidentApplicant?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        ServiceEntrance?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        PortalUser?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        ServiceUser?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        CabinetUser?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    platformMinVersion?: {
                        iOS?: string | undefined;
                        Android?: string | undefined;
                        Huawei?: string | undefined;
                        Browser?: string | undefined;
                    } | undefined;
                    sessionTypes?: SessionType[] | undefined;
                    sortOrder?: number | undefined;
                    locales?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    profileFeature?: ProfileFeature | undefined;
                } | undefined): PublicServiceSettings;
                fromPartial(object: {
                    id?: string | undefined;
                    categories?: string[] | undefined;
                    code?: PublicServiceCode | undefined;
                    name?: string | undefined;
                    status?: PublicServiceStatus | undefined;
                    segments?: string[] | undefined;
                    contextMenu?: {
                        type?: import("@kant2002-diia-inhouse/types").PublicServiceContextMenuType | undefined;
                        name?: string | undefined;
                        code?: string | undefined;
                        appVersions?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                    }[] | undefined;
                    appVersions?: {
                        Acquirer?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        None?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        Partner?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        Temporary?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        User?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        EResident?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        EResidentApplicant?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        ServiceEntrance?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        PortalUser?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        ServiceUser?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        CabinetUser?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    platformMinVersion?: {
                        iOS?: string | undefined;
                        Android?: string | undefined;
                        Huawei?: string | undefined;
                        Browser?: string | undefined;
                    } | undefined;
                    sessionTypes?: SessionType[] | undefined;
                    sortOrder?: number | undefined;
                    locales?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    profileFeature?: ProfileFeature | undefined;
                }): PublicServiceSettings;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getPublicServiceCategoriesList: {
            readonly name: "getPublicServiceCategoriesList";
            readonly requestType: {
                encode(message: GetPublicServiceCategoriesListRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServiceCategoriesListRequest;
                fromJSON(object: any): GetPublicServiceCategoriesListRequest;
                toJSON(message: GetPublicServiceCategoriesListRequest): unknown;
                create(base?: DeepPartial<GetPublicServiceCategoriesListRequest>): GetPublicServiceCategoriesListRequest;
                fromPartial(object: DeepPartial<GetPublicServiceCategoriesListRequest>): GetPublicServiceCategoriesListRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetPublicServiceCategoriesListResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServiceCategoriesListResponse;
                fromJSON(object: any): GetPublicServiceCategoriesListResponse;
                toJSON(message: GetPublicServiceCategoriesListResponse): unknown;
                create(base?: DeepPartial<GetPublicServiceCategoriesListResponse>): GetPublicServiceCategoriesListResponse;
                fromPartial(object: DeepPartial<GetPublicServiceCategoriesListResponse>): GetPublicServiceCategoriesListResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getPublicServiceCategoryByCategory: {
            readonly name: "getPublicServiceCategoryByCategory";
            readonly requestType: {
                encode(message: GetPublicServiceCategoryByCategoryRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServiceCategoryByCategoryRequest;
                fromJSON(object: any): GetPublicServiceCategoryByCategoryRequest;
                toJSON(message: GetPublicServiceCategoryByCategoryRequest): unknown;
                create(base?: DeepPartial<GetPublicServiceCategoryByCategoryRequest>): GetPublicServiceCategoryByCategoryRequest;
                fromPartial(object: DeepPartial<GetPublicServiceCategoryByCategoryRequest>): GetPublicServiceCategoryByCategoryRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PublicServiceCategoryResult, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PublicServiceCategoryResult;
                fromJSON(object: any): PublicServiceCategoryResult;
                toJSON(message: PublicServiceCategoryResult): unknown;
                create(base?: DeepPartial<PublicServiceCategoryResult>): PublicServiceCategoryResult;
                fromPartial(object: DeepPartial<PublicServiceCategoryResult>): PublicServiceCategoryResult;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getPublicServiceContextMenu: {
            readonly name: "getPublicServiceContextMenu";
            readonly requestType: {
                encode(message: GetPublicServiceContextMenuRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServiceContextMenuRequest;
                fromJSON(object: any): GetPublicServiceContextMenuRequest;
                toJSON(message: GetPublicServiceContextMenuRequest): unknown;
                create(base?: DeepPartial<GetPublicServiceContextMenuRequest>): GetPublicServiceContextMenuRequest;
                fromPartial(object: DeepPartial<GetPublicServiceContextMenuRequest>): GetPublicServiceContextMenuRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetPublicServiceContextMenuResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServiceContextMenuResponse;
                fromJSON(object: any): GetPublicServiceContextMenuResponse;
                toJSON(message: GetPublicServiceContextMenuResponse): unknown;
                create(base?: DeepPartial<GetPublicServiceContextMenuResponse>): GetPublicServiceContextMenuResponse;
                fromPartial(object: DeepPartial<GetPublicServiceContextMenuResponse>): GetPublicServiceContextMenuResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getPublicServiceSettings: {
            readonly name: "getPublicServiceSettings";
            readonly requestType: {
                encode(message: PublicServiceSettingsRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PublicServiceSettingsRequest;
                fromJSON(object: any): PublicServiceSettingsRequest;
                toJSON(message: PublicServiceSettingsRequest): unknown;
                create(base?: DeepPartial<PublicServiceSettingsRequest>): PublicServiceSettingsRequest;
                fromPartial(object: DeepPartial<PublicServiceSettingsRequest>): PublicServiceSettingsRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PublicServiceSettings, writer?: _m0.Writer | undefined): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): PublicServiceSettings;
                fromJSON(object: any): PublicServiceSettings;
                toJSON(message: PublicServiceSettings): unknown;
                create(base?: {
                    id?: string | undefined;
                    categories?: string[] | undefined;
                    code?: PublicServiceCode | undefined;
                    name?: string | undefined;
                    status?: PublicServiceStatus | undefined;
                    segments?: string[] | undefined;
                    contextMenu?: {
                        type?: import("@kant2002-diia-inhouse/types").PublicServiceContextMenuType | undefined;
                        name?: string | undefined;
                        code?: string | undefined;
                        appVersions?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                    }[] | undefined;
                    appVersions?: {
                        Acquirer?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        None?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        Partner?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        Temporary?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        User?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        EResident?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        EResidentApplicant?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        ServiceEntrance?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        PortalUser?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        ServiceUser?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        CabinetUser?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    platformMinVersion?: {
                        iOS?: string | undefined;
                        Android?: string | undefined;
                        Huawei?: string | undefined;
                        Browser?: string | undefined;
                    } | undefined;
                    sessionTypes?: SessionType[] | undefined;
                    sortOrder?: number | undefined;
                    locales?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    profileFeature?: ProfileFeature | undefined;
                } | undefined): PublicServiceSettings;
                fromPartial(object: {
                    id?: string | undefined;
                    categories?: string[] | undefined;
                    code?: PublicServiceCode | undefined;
                    name?: string | undefined;
                    status?: PublicServiceStatus | undefined;
                    segments?: string[] | undefined;
                    contextMenu?: {
                        type?: import("@kant2002-diia-inhouse/types").PublicServiceContextMenuType | undefined;
                        name?: string | undefined;
                        code?: string | undefined;
                        appVersions?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                    }[] | undefined;
                    appVersions?: {
                        Acquirer?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        None?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        Partner?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        Temporary?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        User?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        EResident?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        EResidentApplicant?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        ServiceEntrance?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        PortalUser?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        ServiceUser?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                        CabinetUser?: {
                            minVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            maxVersion?: {
                                iOS?: string | undefined;
                                Android?: string | undefined;
                                Huawei?: string | undefined;
                                Browser?: string | undefined;
                            } | undefined;
                            versions?: {
                                iOS?: string[] | undefined;
                                Android?: string[] | undefined;
                                Huawei?: string[] | undefined;
                                Browser?: string[] | undefined;
                            } | undefined;
                        } | undefined;
                    } | undefined;
                    platformMinVersion?: {
                        iOS?: string | undefined;
                        Android?: string | undefined;
                        Huawei?: string | undefined;
                        Browser?: string | undefined;
                    } | undefined;
                    sessionTypes?: SessionType[] | undefined;
                    sortOrder?: number | undefined;
                    locales?: {
                        [x: string]: string | undefined;
                    } | undefined;
                    profileFeature?: ProfileFeature | undefined;
                }): PublicServiceSettings;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getPublicServices: {
            readonly name: "getPublicServices";
            readonly requestType: {
                encode(_: Empty, writer?: _m0.Writer): _m0.Writer;
                decode(input: Uint8Array | _m0.Reader, length?: number | undefined): Empty;
                fromJSON(_: any): Empty;
                toJSON(_: Empty): unknown;
                create(base?: {} | undefined): Empty;
                fromPartial(_: {}): Empty;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetPublicServicesResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServicesResponse;
                fromJSON(object: any): GetPublicServicesResponse;
                toJSON(message: GetPublicServicesResponse): unknown;
                create(base?: DeepPartial<GetPublicServicesResponse>): GetPublicServicesResponse;
                fromPartial(object: DeepPartial<GetPublicServicesResponse>): GetPublicServicesResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getPublicServicesList: {
            readonly name: "getPublicServicesList";
            readonly requestType: {
                encode(message: GetPublicServicesListRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServicesListRequest;
                fromJSON(object: any): GetPublicServicesListRequest;
                toJSON(message: GetPublicServicesListRequest): unknown;
                create(base?: DeepPartial<GetPublicServicesListRequest>): GetPublicServicesListRequest;
                fromPartial(object: DeepPartial<GetPublicServicesListRequest>): GetPublicServicesListRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: GetPublicServicesListResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): GetPublicServicesListResponse;
                fromJSON(object: any): GetPublicServicesListResponse;
                toJSON(message: GetPublicServicesListResponse): unknown;
                create(base?: DeepPartial<GetPublicServicesListResponse>): GetPublicServicesListResponse;
                fromPartial(object: DeepPartial<GetPublicServicesListResponse>): GetPublicServicesListResponse;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly isPublicServiceAvailableByCode: {
            readonly name: "isPublicServiceAvailableByCode";
            readonly requestType: {
                encode(message: IsPublicServiceAvailableRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): IsPublicServiceAvailableRequest;
                fromJSON(object: any): IsPublicServiceAvailableRequest;
                toJSON(message: IsPublicServiceAvailableRequest): unknown;
                create(base?: DeepPartial<IsPublicServiceAvailableRequest>): IsPublicServiceAvailableRequest;
                fromPartial(object: DeepPartial<IsPublicServiceAvailableRequest>): IsPublicServiceAvailableRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: IsPublicServiceAvailableResponse, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): IsPublicServiceAvailableResponse;
                fromJSON(object: any): IsPublicServiceAvailableResponse;
                toJSON(message: IsPublicServiceAvailableResponse): unknown;
                create(base?: DeepPartial<IsPublicServiceAvailableResponse>): IsPublicServiceAvailableResponse;
                fromPartial(object: DeepPartial<IsPublicServiceAvailableResponse>): IsPublicServiceAvailableResponse;
            };
            readonly responseStream: false;
            readonly options: {};
        };
        readonly updatePublicService: {
            readonly name: "updatePublicService";
            readonly requestType: {
                encode(message: UpdatePublicServiceRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePublicServiceRequest;
                fromJSON(object: any): UpdatePublicServiceRequest;
                toJSON(message: UpdatePublicServiceRequest): unknown;
                create(base?: DeepPartial<UpdatePublicServiceRequest>): UpdatePublicServiceRequest;
                fromPartial(object: DeepPartial<UpdatePublicServiceRequest>): UpdatePublicServiceRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PublicService, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PublicService;
                fromJSON(object: any): PublicService;
                toJSON(message: PublicService): unknown;
                create(base?: DeepPartial<PublicService>): PublicService;
                fromPartial(object: DeepPartial<PublicService>): PublicService;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updatePublicServiceCategory: {
            readonly name: "updatePublicServiceCategory";
            readonly requestType: {
                encode(message: UpdatePublicServiceCategoryRequest, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePublicServiceCategoryRequest;
                fromJSON(object: any): UpdatePublicServiceCategoryRequest;
                toJSON(message: UpdatePublicServiceCategoryRequest): unknown;
                create(base?: DeepPartial<UpdatePublicServiceCategoryRequest>): UpdatePublicServiceCategoryRequest;
                fromPartial(object: DeepPartial<UpdatePublicServiceCategoryRequest>): UpdatePublicServiceCategoryRequest;
            };
            readonly requestStream: false;
            readonly responseType: {
                encode(message: PublicServiceCategory, writer?: _m0.Writer): _m0.Writer;
                decode(input: _m0.Reader | Uint8Array, length?: number): PublicServiceCategory;
                fromJSON(object: any): PublicServiceCategory;
                toJSON(message: PublicServiceCategory): unknown;
                create(base?: DeepPartial<PublicServiceCategory>): PublicServiceCategory;
                fromPartial(object: DeepPartial<PublicServiceCategory>): PublicServiceCategory;
            };
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
    };
};
export interface PublicServiceCatalogServiceImplementation<CallContextExt = {}> {
    createPublicService(request: PublicService, context: CallContext & CallContextExt): Promise<DeepPartial<PublicService>>;
    createPublicServiceCategory(request: PublicServiceCategory, context: CallContext & CallContextExt): Promise<DeepPartial<PublicServiceCategory>>;
    getPublicServiceByCode(request: GetPublicServiceByCodeRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PublicServiceSettings>>;
    getPublicServiceCategoriesList(request: GetPublicServiceCategoriesListRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPublicServiceCategoriesListResponse>>;
    getPublicServiceCategoryByCategory(request: GetPublicServiceCategoryByCategoryRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PublicServiceCategoryResult>>;
    getPublicServiceContextMenu(request: GetPublicServiceContextMenuRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPublicServiceContextMenuResponse>>;
    getPublicServiceSettings(request: PublicServiceSettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PublicServiceSettings>>;
    getPublicServices(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<GetPublicServicesResponse>>;
    getPublicServicesList(request: GetPublicServicesListRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPublicServicesListResponse>>;
    isPublicServiceAvailableByCode(request: IsPublicServiceAvailableRequest, context: CallContext & CallContextExt): Promise<DeepPartial<IsPublicServiceAvailableResponse>>;
    updatePublicService(request: UpdatePublicServiceRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PublicService>>;
    updatePublicServiceCategory(request: UpdatePublicServiceCategoryRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PublicServiceCategory>>;
}
export interface PublicServiceCatalogClient<CallOptionsExt = {}> {
    createPublicService(request: DeepPartial<PublicService>, options?: CallOptions & CallOptionsExt): Promise<PublicService>;
    createPublicServiceCategory(request: DeepPartial<PublicServiceCategory>, options?: CallOptions & CallOptionsExt): Promise<PublicServiceCategory>;
    getPublicServiceByCode(request: DeepPartial<GetPublicServiceByCodeRequest>, options?: CallOptions & CallOptionsExt): Promise<PublicServiceSettings>;
    getPublicServiceCategoriesList(request: DeepPartial<GetPublicServiceCategoriesListRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPublicServiceCategoriesListResponse>;
    getPublicServiceCategoryByCategory(request: DeepPartial<GetPublicServiceCategoryByCategoryRequest>, options?: CallOptions & CallOptionsExt): Promise<PublicServiceCategoryResult>;
    getPublicServiceContextMenu(request: DeepPartial<GetPublicServiceContextMenuRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPublicServiceContextMenuResponse>;
    getPublicServiceSettings(request: DeepPartial<PublicServiceSettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<PublicServiceSettings>;
    getPublicServices(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<GetPublicServicesResponse>;
    getPublicServicesList(request: DeepPartial<GetPublicServicesListRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPublicServicesListResponse>;
    isPublicServiceAvailableByCode(request: DeepPartial<IsPublicServiceAvailableRequest>, options?: CallOptions & CallOptionsExt): Promise<IsPublicServiceAvailableResponse>;
    updatePublicService(request: DeepPartial<UpdatePublicServiceRequest>, options?: CallOptions & CallOptionsExt): Promise<PublicService>;
    updatePublicServiceCategory(request: DeepPartial<UpdatePublicServiceCategoryRequest>, options?: CallOptions & CallOptionsExt): Promise<PublicServiceCategory>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
//# sourceMappingURL=public-service-catalog.d.ts.map