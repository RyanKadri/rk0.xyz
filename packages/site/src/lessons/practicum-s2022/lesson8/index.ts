import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { AccessControl, AllowingAccess, ApiSecurity, AwsEntities, AwsManagedServices, AwsSecurity, AwsServicesIntro, HowDoControlSameApi, HowDoSecure, IamIntro, IamPolicies, IamRoles, Iceberg, LetsMakeUsers, LetsWriteS3Program, NetworkSecurity, PrincipleLeastPriv, references, S3Buckets, S3Client, S3GetExample, S3Overview, S3PutExample, SamplePolicy, SecurityGroups, StorageSection, Title, UserSecurity } from "./slides/simple";

export const lesson8: Presentation = {
    description: "AWS Security and Data Storage",
    slug: "security-and-databases",
    slides: [
        Title,
        HowDoSecure,
        NetworkSecurity,
        Iceberg,
        PrincipleLeastPriv,
        SecurityGroups,
        ApiSecurity,
        HowDoControlSameApi,
        UserSecurity,
        AccessControl,
        AwsSecurity,
        IamIntro,
        IamPolicies,
        SamplePolicy,
        AwsEntities,
        LetsMakeUsers,
        StorageSection,
        AwsServicesIntro,
        AwsManagedServices,
        S3Overview,
        S3Buckets,
        AllowingAccess,
        S3Client,
        S3PutExample,
        S3GetExample,
        IamRoles,
        LetsWriteS3Program,
        generateReferencesSlide(references)
    ],
    examples: [
    ],
    recording: {
        link: "https://temple.zoom.us/rec/play/EdZTGZ9y3ly2YXghriU8pvOE6JmcljucoaJ3PafFvlPr_TQe15OT7vyhuzglFfVHumLVhMocqOTsexPA.rWUmS2s4URkVXswH?continueMode=true"
    },
    references
}