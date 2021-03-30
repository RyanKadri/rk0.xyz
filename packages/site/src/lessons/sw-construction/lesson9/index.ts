import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { AccessControl, AllowingAccess, AwsEntities, AwsManagedServices, AwsSecurity, AwsServicesIntro, BucketPricing, HowDoSecure, IamIntro, IamPolicies, LetsMakeUsers, ProgrammaticActions, references, S3Buckets, S3Overview, SamplePolicy, StorageSection, Title, UserSecurity, UsingS3 } from "./slides/simple";

export const lesson9: Presentation = {
    title: 'AWS Security and Data Storage',
    description: "Setting up secure access to your account. Using a database",
    slug: "security-and-databases",
    slides: [
        Title,
        HowDoSecure,
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
        ProgrammaticActions,
        S3Overview,
        S3Buckets,
        BucketPricing,
        AllowingAccess,
        UsingS3,
        generateReferencesSlide(references)
    ],
    examples: [
    ],
    recording: {
        link: "https://temple.zoom.us/rec/play/fWaiOTIXJZnOlTh9rWZYys1s7h4oi_YxrtK_tqMGpAH-xFdAK0-X-vL2NdU1LxplCUBH17cQzqGEXtlP.QnQEikhVjxfAipfO?continueMode=true",
    },
    references
}