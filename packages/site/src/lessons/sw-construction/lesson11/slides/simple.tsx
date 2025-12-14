import { Link } from "@mui/material";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import {
  generateCodeSlide,
  generateContentSlide,
  generateMediaAssistSlide,
  generateMessageSlide,
  generateTitleSlide,
} from "../../../../../../presenter-core/src/slides/generate-slide";
import { synHCL } from "../../../../common/highlighting";
import terraform from "./terraform.png";

export const Title = generateTitleSlide("Infrastructure as Code", "Ryan Kadri");

export const Debugger = generateContentSlide("Using the Debugger", [
  "The debugger lets you troubleshoot the execution of your program",
  "Most IDEs (and languages) come with a debugger",
  "One of the biggest time-savers for certain issues",
  {
    text: "Almost all debuggers will...",
    children: [
      "Let you check the value of variables",
      'Let you put a "breakpoint" in your code and pause at a spot',
      "Walk line by line after you debug",
      "Watch the value of certain expressions",
    ],
  },
]);

export const AdvancedFeatures = generateContentSlide("Advanced Debugger Features", [
  {
    text: "Some debuggers have a harder time with",
    children: ["Library code (sometimes precompiled)", "Pausing at the end of a loop", "Debugging a remote system"],
  },
  {
    text: "Some debuggers will",
    children: [
      'Try to "decompile" compiled libraries',
      "Let you pause based on a code condition",
      "Let you debug a running system",
    ],
  },
]);

export const ScriptableActions = generateContentSlide("Scripting in AWS", [
  "The AWS API/SDK lets you use code to interact with AWS",
  {
    text: 'You can use it to do "app tasks"',
    children: ["Put items in a database, upload files to a bucket, etc"],
  },
  {
    text: "You can also use it to create app infrastructure",
    children: ["Create / destroy a bucket, EC2 instance, etc", "Create 50 new IAM users"],
  },
  "Anything you do in the UI, you can do in the SDK",
]);

export const InfrastructureVsCode = generateContentSlide("Infrastructure vs Code", [
  '"Infrastructure" refers to things like the servers your code runs on',
  "Can also refer to external services you interact with",
  "Traditionally infrastructure was set up very manually",
  "Somebody would log into a server and run some kind of update script",
  "Tools existed to apply the same changes to many servers at once...",
  "... but things were very ad-hoc",
  "Code itself is normally version-controlled, reviewed, and carefully changed",
]);

export const CodingEnvironments = generateContentSlide("Application Environments", [
  "Most serious projects don't deploy their code right to clients",
  "Most companies deploy versions of their code for testing, development and more",
  {
    text: "A common approach is having 4+ environments",
    children: [
      <>
        <strong>Local: </strong> Your personal machine. Most development happens here
      </>,
      <>
        <strong>Development: </strong> An environment mostly for developers to combine code
      </>,
      <>
        <strong>QA: </strong> A more stable environment for pre-release testing
      </>,
      <>
        <strong>Production: </strong> What the client sees. The "live" code
      </>,
    ],
  },
  "If you making changes, how do you coordinate your environments?",
]);

export const CodeReview = generateContentSlide("Code Reviews", [
  "At most companies, all code changes go through a code review process",
  "This usually involves somebody checking the changes and leaving suggestions",
  "Developers can't unilaterally make changes",
  "With infrastructure, changes may or may not be scripted and reviewed",
  <Link href="https://github.com/facebook/react/pull/21173">Example Pull Request</Link>,
]);

export const DiffChanges = generateContentSlide("The Whole Picture", [
  "Infrastructure is usually changed over time (install software, update database, etc)",
  "Even scripted changes are a set of diffs over time",
  "Hard to look at a set of update scripts and know what state infrastructure is in",
  "Were all the scripts run? When? In what order?",
  "Application code is different. You can see the whole picture",
]);

export const ImmutableInfrastructure = generateContentSlide("Immutable Infrastructure", [
  "Immutable Infrastructure = completely rebuild infrastructure on changes",
  "Your infrastructure is completely scripted and can be automatically created",
  "Your scripts give you the full picture again",
  "No more sneaky side-channel changes",
  "You know that your automation works",
  "Only really works for stateless infrastructure",
  'May be slow to apply "updates"',
]);

export const IsThereABetterWay = generateMessageSlide("Is there a cleaner way to solve these problems?");

export const EnterTerraform = generateMediaAssistSlide(
  "Enter Terraform",
  [
    "Terraform lets you define your infrastructure as configuration files",
    "Infrastructure is defined as it is desired to exist (declarative)",
    "Generates the appropriate changes to get you there",
    <>
      Terraform can work with{" "}
      <Link href="https://registry.terraform.io/browse/providers">most infrastructure providers</Link> (Google, Azure,
      AWS)
    </>,
    "Manages dependencies between resources",
  ],
  <img src={terraform.src} width={512} />,
);

export const TerraformExample = generateCodeSlide(
  "Terraform",
  [
    'Uses HCL or JSON syntax to define infrastructure as "resources"',
    "HCL is more human readable (but is a new thing to learn)",
  ],
  {
    code: synHCL`resource "aws_s3_bucket" "storage-bucket" {
    bucket = "xsrt-storage-\${var.env}"
    server_side_encryption_configuration {
        rule {
            apply_server_side_encryption_by_default {
                sse_algorithm = "AES256"
            }
        }
    }
}`,
  },
);

export const TerraformResources = generateContentSlide("Terraform Resources", [
  'In terraform, "resources" are components that you want to manage',
  "For instance you can define an S3 bucket resource or an IAM user resource",
  "Different resources have different configuration parameters",
  "Some AWS components have more resources than you would think",
  {
    text: "For instance, am IAM user with permissions might have:",
    children: ["A policy document", "A policy", "A user", "A policy user attachment"],
  },
]);

export const TerraformReferences = generateCodeSlide(
  "Terraform References",
  [
    "Resources can reference attributes of other resources (name, ARN, etc)",
    "References can be interpolated into other values",
    "Terraform uses these references to determine build order",
  ],
  {
    code: synHCL`statement {
        effect = "Allow"
        actions = [
          "s3:PutObject",
          "s3:GetObject",
        ]
        resources = [
          aws_s3_bucket.storage-bucket.arn,
          "\${aws_s3_bucket.storage-bucket.arn}/*"
        ]    
    `,
  },
);

export const TerraformData = generateCodeSlide(
  "Terraform Data",
  [
    "Terraform can read data about resources in your environment",
    "This is good for hooking a new component into an existing system",
    "Can also be used for importing secrets and dynamic values",
  ],
  {
    code: synHCL`resource "aws_rds_cluster" "xsrt-main" {
    engine = "aurora-postgresql"
    engine_mode = "serverless"
    engine_version = "10.7"
    database_name = "xyz"
    master_username = "postgres"
    master_password = data.aws_ssm_parameter.db-master-pass.value
}`,
  },
);

export const TerraformProviders = generateCodeSlide(
  "Terraform Providers",
  [
    "AWS supports a ton of different types of infrastructure",
    'Manages complexity with "providers" (they\'re like plugins)',
    "Providers define how Terraform works with a type of infrastructure",
  ],
  {
    code: synHCL`provider "aws" {
    version = "~> 3.0"
    region = "us-east-1"
    alias = "us-east-1"
}`,
  },
);

export const TerraformState = generateCodeSlide(
  "Terraform State",
  [
    "Terraform needs to store some data about what it's done so far",
    "Uses the concept of a state file",
    "Can be stored on your machine or in a remote (often shared) location",
  ],
  {
    code: synHCL`terraform {
    backend "s3" {
        bucket = "xsrt-iac"
        key = "terraform/terraform.tfstate"
        region = "us-east-2"
    }
}`,
  },
);

export const references: Reference[] = [
  {
    label: "Terraform AWS Reference",
    url: "https://registry.terraform.io/providers/hashicorp/aws/latest/docs",
  },
  {
    label: "Installing Terraform",
    url: "https://learn.hashicorp.com/tutorials/terraform/install-cli",
  },
];
