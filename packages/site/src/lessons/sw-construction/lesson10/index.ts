import { Presentation } from "../../../../../presenter-core/src/services/types";
import { generateReferencesSlide } from "../../shared/references-slide";
import { CreatingDynamoClient, CreatingDynamoTable, CreatingInDynamo, Credentials, DatabasesOverview, DynamoDb, DynamoTable, FetchingInDynamo, GlobalSecondaryIndex, IamRoles, IsS3ADatabase, LetsWriteS3Program, QueryVsScan, RecordModel, references, Sdks, SecretNotesWithDynamo, SettingUpDynamo, Title, TypesOfDatabases, UsingAnIndex, WhereSecrets } from "./slides/simple";

export const lesson10: Presentation = {
    title: 'Cloud Data Part 2',
    description: "Using S3 from the Cloud. Exploring Dynamo",
    slug: "databases-microservices",
    slides: [
        Title,
        Sdks,
        Credentials,
        WhereSecrets,
        IamRoles,
        LetsWriteS3Program,
        DatabasesOverview,
        IsS3ADatabase,
        TypesOfDatabases,
        DynamoDb,
        DynamoTable,
        CreatingDynamoTable,
        SettingUpDynamo,
        CreatingDynamoClient,
        RecordModel,
        CreatingInDynamo,
        FetchingInDynamo,
        QueryVsScan,
        GlobalSecondaryIndex,
        UsingAnIndex,
        SecretNotesWithDynamo,
        generateReferencesSlide(references)
    ],
    examples: [
    ],
    recording: {
        link: "https://temple.zoom.us/rec/play/EdZTGZ9y3ly2YXghriU8pvOE6JmcljucoaJ3PafFvlPr_TQe15OT7vyhuzglFfVHumLVhMocqOTsexPA.rWUmS2s4URkVXswH?continueMode=true"
    },
    references
}