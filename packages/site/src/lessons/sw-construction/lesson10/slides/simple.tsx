import React from "react";
import { generateContentSlide } from "../../../../../../presenter-core/src/slides/generate-slide";

export const DatabasesOverview = generateContentSlide("Databases", [
    "Databases are tools to store data and make it efficient to query later",
    "Databases should be able to store a decent volume of data",
    "It should be hard to lose data",
    "Ideally data can be queried flexibly",
    'Hopefully databases give you ways to handle concurrency'
]);

export const TypesOfDatabases = generateContentSlide("Types of Databases", [
    { text: "Relational - Organize data into tables. Access via SQL", children: [
        "These were the gold standard. Very flexible and safe",
        "Cross-references multiple tables for complex data",
        "Complex queries are expensive. May not scale to huge sizes"
    ] },
    { text: "Document Databases - Stores data in documents. No cross-references", children: [
        "Less flexible but can scale larger in some cases",
        "Easier for some types of apps. Hard to adapt"
    ] },
    "Key-Value Store - Stores simple or complex data by a single key",
    "Graph Database - Thinks about data in graphs. Good for very connected data"
]);

export const DynamoDb = generateContentSlide("DynamoDB", [
    "DynamoDB is a Document DB",
    "Simple to set up. Only pay for what you use. Very scalable",
    "Opinion -- sometimes so simple to start that it gets picked even when it shouldn't",
    "Look up documents by an ID. Need to know this ahead of time",
    "Document structure is flexible. Can evolve over time"
]);

export const DynamoTable = generateContentSlide("DynamoDB Tables", [
    "A Dynamo table corresponds to a collection of similarly-typed things",
    "In an online shopping app, Products, Orders, and Customers might have their own tables",
    "Tables store records / items for each instance of the table subject",
    "ie. in an Orders table, a record might indicate that somebody bought a lamp",
    "There are no joins in Dynamo. Dynamo is not a SQL database",
    "Items have a max size of 400 KB"
]);

export const WorkingWithDynamo = generateContentSlide("Coding with Dynamo", [
    "To write code that uses a DynamoDB table (or any service), you first need to set up permissions",
    "Pick/create an IAM user that has permission to access your table",
    <>You <strong>can</strong> use an admin user but you probably should not</>,
    <>Generate access keys for the user. Store those in your 
        <a href="https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-credentials.html">credentials file</a>
    </>,
    <>Import the Java AWS SDK as a 
        <a href="https://mvnrepository.com/artifact/com.amazonaws/aws-java-sdk">Maven Dependency</a>
    </>
]);