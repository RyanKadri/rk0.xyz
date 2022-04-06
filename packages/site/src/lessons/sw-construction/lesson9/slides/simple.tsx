import React from "react";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import {
  generateCodeSlide,
  generateContentSlide,
  generateMessageSlide,
  generateTitleSlide,
} from "../../../../../../presenter-core/src/slides/generate-slide";
import { synJava, synJS } from "../../../../common/highlighting";

export const Title = generateTitleSlide("Security and Data Storage", "Ryan Kadri");

export const HowDoSecure = generateMessageSlide(
  "How do you secure access to components in your cloud environment?"
);

export const UserSecurity = generateContentSlide("User Security", [
  "One common way to think about security in terms of users is the AAA model",
  {
    text: (
      <>
        <strong>Authentication</strong> - Is a user actually who they claim to be?
      </>
    ),
    children: [
      "A username and password are a good way to control this",
      "Secret/temporary access keys can also prove this",
    ],
  },
  {
    text: (
      <>
        <strong>Authorization</strong> - Is the user allowed to do what they're trying to do?
      </>
    ),
    children: ["eg. in Google Docs, only some people can access some docs"],
  },
  {
    text: (
      <>
        <strong>Accounting</strong> - Is there a record of who is doing what?
      </>
    ),
    children: [
      "Useful for after-the-fact breach analysis",
      "Also good for debugging, troubleshooting, and understanding issues. Or sometimes just keeping a record",
    ],
  },
]);

export const AccessControl = generateContentSlide("Access Control / AuthZ", [
  "There are a number of factors that matter in authorization",
  'Question: "Should a specific requested action be allowed?"',
  "Who/what is the actor? Not necessarily a person",
  "What resource(s) are they trying to interact with?",
  "What action are they trying to take?",
  {
    text: "Are there any other important pieces of context to consider?",
    children: [
      "Is the user's IP address coming from a suspicious location?",
      "Is this the first time they're using this device?",
    ],
  },
  "Outcome is generally to allow, deny, or challenge the action (get more info)",
]);

export const AwsSecurity = generateContentSlide("Security in AWS", [
  "AWS accounts are not single-user",
  "They are meant to handle either a single person's setup...",
  "OR a huge organization",
  "You can create and manage multiple users in AWS",
  "Different users can have different permissions",
  "Your first (root) user has full access. Others don't necessarily",
]);

export const IamIntro = generateContentSlide("AWS IAM", [
  "IAM = Identity and Access Management",
  "The AWS service where you create users and manage what they can do",
  "Can create as many as you want (within reason) for free",
  "Users are entities who can work with your AWS account",
  "Not for managing users in an application you build",
  "Users can be organized into groups with shared permissions",
  "They have no permissions by default",
]);

export const IamPolicies = generateContentSlide("AWS IAM Policies", [
  "Policies can give users permissions or take them away",
  "AWS has a bunch of default policies but you can make your own",
  "Policies are written in JSON or created through the UI",
  "Policies can be attached to 0+ users",
  "Policies manage the authorization components from before",
  "What is the user trying to do? To what resource? Other context? Allow or deny?",
]);

export const SamplePolicy = generateCodeSlide(
  "Sample policy",
  [
    "The example below is a default available policy on all new accounts",
    'AmazonS3ReadOnlyAccess - Allows "read" actions on S3 resources',
  ],
  {
    code: synJS`
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:Get*",
                "s3:List*"
            ],
            "Resource": "*"
        }
    ]
}`,
  }
);

export const AwsEntities = generateContentSlide("Core AWS Concepts", [
  "AWS Account - Where all your AWS resources live. Has an ID",
  {
    text: "Region - Literally a large geographic region where AWS has data centers",
    children: [
      "Almost all resources and services get created in a region",
      "For maximum performance and resiliency, pick the right one",
    ],
  },
  {
    text: "Amazon Resource Name (ARN) - Almost all resources get an identifier called an ARN",
    children: ["Can be used in policies when specifying which resource a rule applies to"],
  },
  {
    text: "Tags - Most major resources in AWS can be tagged for organizational purposes",
    children: ["Tags are key-value pairs and you are free to define them"],
  },
]);

export const LetsMakeUsers = generateMessageSlide("Let's set up some users!");

export const StorageSection = generateTitleSlide("Cloud Storage", "Storing data in AWS S3");

export const AwsServicesIntro = generateContentSlide("AWS Services", [
  "Amazon offers a ton of services that you can use",
  "Services help you solve specific types of problems",
  {
    text: "Types of services include:",
    children: [
      "Compute - Actually perform computations and run code",
      "Storage - Store large (or small) amounts of data very safely",
      "Database - Store data in a way that can be accessed quickly and queried",
      "Network - Set up and manage a fast and secure network",
      'Machine Learning - Solve "hard" machine learning problems more easily',
      "...many more",
    ],
  },
]);

export const AwsManagedServices = generateContentSlide("Managed Services", [
  "AWS has a few levels of granularity for service management",
  "EC2 is very low-level. You get full control and can do anything",
  "These types of services may take a lot of maintenance",
  "Other services are totally managed by AWS",
  "You interact purely by API and have no say in how servers are managed",
  "This can be less flexible but also less work (and money)",
  "There are some services in the middle that have a degree of management",
]);

export const ProgrammaticActions = generateContentSlide("Programmatic Access", [
  "AWS services can all be used programmatically",
  "You can write code to start a new server, create a DB, etc (not just use them)",
  "AWS provides a CLI tool to do all of the actions on the web console",
  "This means you can script creation of your infrastructure",
  "That is a lot of power and needs a lot of security",
]);

export const S3Overview = generateContentSlide("S3", [
  "S3 = Simple Storage Service",
  "An AWS managed service for storing files",
  "Can be used by any number of servers",
  "Can store a practically unlimited amount of data (for a cost)",
  'Handles replication for you. "11 9s of durability"',
  "Access is controlled by IAM policies (and other rules)",
]);

export const S3Buckets = generateContentSlide("S3 Buckets", [
  "In S3, you store data in a bucket",
  'Buckets can store an "unlimited" amount of data',
  "Not exactly a filesystem but very similar",
  "You can save and access according to a filename",
  "Filenames can have prefixes (which are essentially directories)",
  "Bucket names are globally unique",
]);

export const BucketPricing = generateContentSlide("Storage Levels", [
  "S3 has a number of storage tiers. They effect pricing, durability, and speed",
  "S3 Standard - The default. 11 9s of durability",
  "S3 Standard Infrequent Access - Same durability. Optimized for infrequent reads",
  "S3 One Zone IA - Cheaper. Less durable in natural disaster scenario",
  "Glacier - Very cheap to store. Slow and more expensive to read",
  "Glacier Deep Archive - The previous but more extreme",
  <a href="https://aws.amazon.com/s3/pricing/?nc=sn&loc=4">Pricing and Details</a>,
]);

export const AllowingAccess = generateContentSlide("Allowing Access", [
  "There are a lot of actions you can do on an S3 bucket",
  "GetObject - Read / open a file",
  "PutObject - Write a file",
  "DeleteObject - Delete a file",
  "ListBucket - List the files in the bucket",
  "ListAllMyBuckets - Lists the buckets in the account",
]);

export const UsingS3 = generateContentSlide("Using S3 in Java", [
  "You can just use S3 to store files if you want (like Google Drive)",
  "It is also very easy to use programmatically",
  "Need to decide which users or apps can use your bucket",
  <>
    You <strong>can</strong> use an admin user but you probably should not
  </>,
  <>
    Generate access keys for the user. Store those in your
    <a href="https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-credentials.html">
      credentials file
    </a>
  </>,
  <>
    Import the Java AWS SDK as a
    <a href="https://mvnrepository.com/artifact/com.amazonaws/aws-java-sdk">Maven Dependency</a>
  </>,
  "Create your credentials file",
]);

export const S3Client = generateCodeSlide(
  "Configuring S3",
  [
    "Many AWS Services require configuration before you can use them",
    <>
      Different services are defined differently but
      <a>here</a>
      is a guide
    </>,
    "Spring Dependency Injection may be a good call here",
  ],
  {
    code: synJava`@Bean
public S3Client createS3Client() {
    return S3Client.builder()
        .region(Region.US_EAST_1)
        .build();
}`,
  }
);

export const S3PutExample = generateCodeSlide(
  "Writing to S3",
  ["Use the previously client to upload items to S3"],
  {
    code: synJava`PutObjectRequest request = PutObjectRequest.builder()
    .bucket("rk0")
    .key("hello.txt")
    .build();

var body = RequestBody.fromString(message);
this.s3Client.putObject(request, body);`,
  }
);

export const S3GetExample = generateCodeSlide(
  "Reading from S3",
  [
    "Reading from S3 looks similar",
    "You'll need to read the file as an input stream which may be annoying if you want a String",
  ],
  {
    code: synJava`GetObjectRequest request = GetObjectRequest.builder()
    .bucket("rk0")
    .key("hello.txt")
    .build();
var inputStream = this.s3Client.getObject(request);
Scanner s = new Scanner(inputStream).useDelimiter("\\A");
String result = s.hasNext() ? s.next() : "";
return result;`,
  }
);

export const references: Reference[] = [
  {
    label: "AWS S3 Client Reference",
    url: "https://docs.aws.amazon.com/sdk-for-java/latest/developer-guide/get-started.html",
    note: "It looks like the quick start section of this documentation has a good starter for S3",
  },
];
