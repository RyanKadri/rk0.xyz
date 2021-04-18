import { Reference } from "../../../../../../presenter-core/src/services/types";
import { generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";

export const Title = generateTitleSlide("Containers and Cloud Functions", "Ryan Kadri");

export const references: Reference[] = [
    { label: "Terraform AWS Reference", url: "https://registry.terraform.io/providers/hashicorp/aws/latest/docs" },
    { label: "Installing Terraform", url: "https://learn.hashicorp.com/tutorials/terraform/install-cli" }
]