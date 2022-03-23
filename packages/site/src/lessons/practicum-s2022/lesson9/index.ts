import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import * as review from "../lesson8/slides/simple";
import { CreatingDynamoClient, CreatingDynamoTable, CreatingInDynamo, Credentials, DatabasesOverview, DynamoDb, DynamoTable, FetchingInDynamo, GlobalSecondaryIndex, IamRoles, IamUsers, IsS3ADatabase, QueryVsScan, RecordModel, references, Sdks, SettingUpAwsLibs, SettingUpDynamo, Title, TypesOfDatabases, UsingAnIndex, WhereSecrets } from "./slides/simple";

export const lesson9: Presentation = {
    description: "Databases and the Cloud",
    slug: "databases-microservices",
    slides: [
        Title,
        review.IamIntro,
        review.IamPolicies,
        review.SamplePolicy,
        IamUsers,
        Sdks,
        Credentials,
        WhereSecrets,
        IamRoles,
        DatabasesOverview,
        IsS3ADatabase,
        TypesOfDatabases,
        DynamoDb,
        DynamoTable,
        CreatingDynamoTable,
        SettingUpAwsLibs,
        SettingUpDynamo,
        CreatingDynamoClient,
        RecordModel,
        CreatingInDynamo,
        FetchingInDynamo,
        QueryVsScan,
        GlobalSecondaryIndex,
        UsingAnIndex,
        generateReferencesSlide(references)
    ],
    examples: [
    ],
    references
}