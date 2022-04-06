import React from "react";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import {
  generateCodeSlide,
  generateContentSlide,
  generateMediaAssistSlide,
  generateTitleSlide,
} from "../../../../../../presenter-core/src/slides/generate-slide";
import { synHTML, synJava } from "../../../../common/highlighting";
import dynamoCreation from "./createDynamo.png";

export const Title = generateTitleSlide("Databases in the Cloud", "Ryan Kadri");

export const IamUsers = generateContentSlide("AWS IAM Users", [
  "IAM lets you create multiple users in your account",
  "Users can represent people or external programs",
  "Users can have a username / password",
  "... or an Access Key",
]);

export const Sdks = generateContentSlide("SDKs", [
  "SDK == Software Development Kit",
  "An SDK is a tool to help you use a specific technology",
  "The AWS SDK helps you interact with AWS resources",
  "Manages AWS API authentication",
  "Gives you a nice Java-friendly interface",
  "Smooths out sharp edges of the API (for example automatically retries failures)",
]);

export const Credentials = generateContentSlide("Credentials + Access", [
  "Before you can interact with an AWS service, you need to set up access",
  "Permissions correspond to IAM entities",
  "You can get access in a bunch of ways...",
  "Environment Variables",
  "Credentials File (in a well-known location only on your computer)",
  "Baked into your code (maybe a bad idea)",
  "... and a few others",
  <>
    <em>Note:</em> Some non-AWS-managed setups allow network connections. You're responsible for
    controlling that
  </>,
]);

export const WhereSecrets = generateContentSlide("Where Do Secrets Go?", [
  "Environment Variables may not be great for secrets. Where do they come from?",
  "Automated infrastructure is nice but security is a problem to solve",
  "Hard-coding passwords / keys into version-controlled code is a bad idea",
  "Credentials files are not checked in. But how do you get the file on machines?",
  "There are a few clever approaches to solving this. But do we need passwords?",
]);

export const IamRoles = generateContentSlide("IAM Roles", [
  "IAM Roles let you delegate permissions to trusted AWS resources",
  "Like users but for infrastructure elements",
  "This can let you set up secure password-less access controls",
  "IAM Policies can be attached to IAM Roles to control access",
  "Attach IAM roles to your resources that need privileges (EC2 for now)",
  'These services "automatically" get access based on policies',
]);

export const DatabasesOverview = generateContentSlide("Databases", [
  "Databases are tools to store data and make it efficient to query later",
  "Databases should be able to store a decent volume of data",
  "Databases usually organize data by schema",
  "Data should usually be durable (don't lose records)",
  "Ideally data can be queried flexibly",
  "Databases usually give you ways to handle concurrency",
]);

export const IsS3ADatabase = generateContentSlide("Is S3 a Database?", [
  "S3 has some features like a database but is not fully a DB",
  "S3 is mostly focused on storing files",
  "Databases often store many small, similar units of data",
  "S3 is not super flexible for querying",
  "Does not have strong features for controlling concurrency",
]);

export const TypesOfDatabases = generateContentSlide("Types of Databases", [
  "Key-Value Store - Stores simple or complex data by a single key",
  {
    text: "Relational - Organize data into tables. Access via SQL",
    children: [
      "These were the gold standard. Very flexible and safe",
      "Cross-references multiple tables for complex data",
      "Complex queries are expensive. May not scale to huge sizes",
    ],
  },
  {
    text: "Document Databases - Stores data in documents. No cross-references",
    children: [
      "Less flexible but can scale larger in some cases",
      "Easier for some types of apps. Hard to adapt",
    ],
  },
  "Graph Database - Thinks about data in graphs. Good for very connected data",
]);

export const DynamoDb = generateContentSlide("DynamoDB", [
  "DynamoDB is a Document database",
  "Simple to set up. Only pay for what you use. Very scalable",
  {
    text: "Documents have a primary key made of one or two values...",
    children: ["Called Partition Key and Sort Key"],
  },
  "Document structure is flexible. Can evolve over time",
  "Opinion -- sometimes so simple to start that it gets picked even when it shouldn't",
]);

export const DynamoTable = generateContentSlide("DynamoDB Tables", [
  "A Dynamo table corresponds to a collection of similarly-typed things",
  "In an online shopping app, Products, Orders, and Customers might have their own tables",
  "Tables store records / items for each instance of the table subject",
  "ie. in an Orders table, a record might indicate that somebody bought a lamp",
  "Items have a max size of 400 KB",
]);

export const DynamoKeys = generateContentSlide("Database Lookup Speed", [
  "Databases should let you search for certain kinds of data efficiently",
  "Not all querying is guaranteed to be fast though",
  "Many databases allow you to create indices for faster lookups",
  "Indices trade faster lookups for increased database size and slightly slower inserts / updates",
  "SQL databases are good at handling indices transparently. Dynamo is not",
  "Dynamo gives very fast lookups by primary key though",
]);

export const DynamoPrimaryKey = generateContentSlide("Dynamo Primary Key", [
  "The primary key in most databases is a collection of fields that uniquely identifies a record",
  "Sometimes just a made-up identifier to keep track of records",
  "For instance, users in a social media app may all get an arbitrary user ID",
  "Dynamo requires documents to have a primary key",
  "Lookups according to the primary key are very fast",
]);

export const CreatingDynamoTable = generateMediaAssistSlide(
  "Creating a Dynamo Table",
  [
    "When creating a dynamo table, you need a name for the table",
    "And you need to know how the primary key is structured",
    "There are many other optional settings for scaling and things like that",
  ],
  <img src={dynamoCreation.src} />
);

export const SettingUpAwsLibs = generateCodeSlide(
  "Using AWS in Java",
  [
    "AWS has about a million services. Most have separate libraries",
    "In order to not make you think about version numbers, AWS uses a special Maven feature",
    <>
      Include this above your main <code>{"<dependencies>"}</code> block
    </>,
  ],
  {
    code: synHTML`
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>software.amazon.awssdk</groupId>
            <artifactId>bom</artifactId>
            <version>2.16.60</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>`,
  }
);

export const SettingUpDynamo = generateCodeSlide(
  "Using Dynamo in Java",
  [
    "To use DynamoDB, we want two libraries",
    "The main Java Dynamo library is pretty low-level",
    "AWS also released an enhanced library to hide some complexity",
  ],
  {
    code: synHTML`
<dependencies>
    <dependency>
        <groupId>software.amazon.awssdk</groupId>
        <artifactId>dynamodb</artifactId>
    </dependency>
    <dependency>
        <groupId>software.amazon.awssdk</groupId>
        <artifactId>dynamodb-enhanced</artifactId>
        <version>2.17.123</version>
    </dependency>
</dependencies>`,
  }
);

export const CreatingDynamoClient = generateCodeSlide(
  "Creating Dynamo Client",
  [
    "The Dynamo Client lets you store data into your Dynamo table",
    'The "enhanced" client lets you convert Java objects to a storable format',
    "Create a Dynamo table object in Java to be able to use your table",
  ],
  {
    code: synJava`
DynamoDbClient client = DynamoDbClient.builder()
    .region(Region.US_EAST_1)
    .build();

DynamoDbEnhancedClient enhancedClient = DynamoDbEnhancedClient.builder()
    .dynamoDbClient(client)
    .build();    

DynamoDbTable<UserModel> table = 
    enhancedClient.table("practicum-table", TableSchema.fromBean(UserModel.class));`,
  }
);

export const RecordModel = generateCodeSlide(
  "Creating a Record Model",
  ["You can annotate a Java class to let Dynamo work with it easily"],
  {
    code: synJava`private String id;
private String name;
private Integer age;
private Boolean isProfessor;

public UserModel(String name, Integer age, Boolean isProfessor) {
    this.name = name;
    this.age = age;
    this.isProfessor = isProfessor;
}

@DynamoDbPartitionKey
public String getId() {
    return id;
}

public void setId(String id) {
    this.id = id;
}

// Other getters and setters
`,
  }
);

export const CreatingInDynamo = generateCodeSlide(
  "Creating Records",
  [
    "Use the client to insert items into the database",
    "If you create your model, you should just need to putItem",
    "putItem will either create an object if it doesn't exist or replace it",
    "This is sometimes called an upsert",
  ],
  {
    code: synJava`public void saveUser(UserModel model) {
    userTable.putItem(model);
}`,
  }
);

export const FetchingInDynamo = generateCodeSlide(
  "Fetching a Record",
  [
    "To fetch a record, you need its primary key",
    "You should get back an item of the type you defined in Java",
  ],
  {
    code: synJava`public UserModel fetchUser(String userId) {
    Key key = Key.builder()
        .partitionValue(userId)
        .build();
        
    UserModel model = userTable.getItem(key);
}`,
  }
);

export const QueryVsScan = generateContentSlide("Searching Fast and Slow", [
  "What if you need to query multiple items?",
  "Dynamo is able to search for records other than the Primary Key...",
  "...but the search might be very slow",
  'A "Scan" looks at all records in the table and pulls the ones you want',
  'A "Query" uses an index and then potentially filters',
  "To do a Query, you need to have an index set up",
  "You need to know how you're going to query your data",
  "You pay for indices. Need to allocate resources",
]);

export const GlobalSecondaryIndex = generateContentSlide("Global Secondary Index", [
  "In Dynamo, you can create an index with one or two fields for easier searching",
  "An index basically makes a new sub-table",
  "When inserting, Dynamo inserts to your main table and to the index",
  "You can choose to mirror all attributes to the index or only some",
]);

export const UsingAnIndex = generateCodeSlide(
  "Using an Index",
  [
    "Queries let you look up a number of items at once",
    "Queries may return a huge number of items. This makes for a weird API",
    "You get back a bunch of Pages and you read results from the Pages",
  ],
  {
    code: synJava`QueryConditional query = QueryConditional
    .keyEqualTo(Key.builder().partitionValue(name).build());

var iterable = userTable.index("name-index")
    .query(query);
List<UserModel> users = new ArrayList<>();
for(Page<UserModel> user: iterable) {
    users.addAll(user.items());
}`,
  }
);

export const references: Reference[] = [
  {
    label: "Dynamo Examples (GitHub)",
    url: "https://github.com/awsdocs/aws-doc-sdk-examples/tree/master/javav2/example_code/dynamodb",
  },
  {
    label: "AWS Documentation - IAM Roles",
    url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html",
    note: "AWS Docs can be very verbose. I'd recommend maybe reading the linked session and one or two sub-sections underneath",
  },
];
