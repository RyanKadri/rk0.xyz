import { SemanticVersioning } from "./slides/semantic-versioning";
import { DependencyDive, EnterPackageManagers, Maven, MavenDependencies, NaiveDownsides, PackageManagementJava, PossibilitiesForOpenSource, ProjectManagement, References, Title } from "./slides/simple";

export const lesson2 = {
    title: 'The jar is a "door"',
    description: "Managing Dependencies. Introducing Spring",
    slug: "dependencies-spring",
    slides: [
        Title,
        PossibilitiesForOpenSource,
        NaiveDownsides,
        ProjectManagement,
        EnterPackageManagers,
        PackageManagementJava,
        Maven, 
        MavenDependencies,
        DependencyDive,
        SemanticVersioning,
        // IntroJvm,
        // IntroJvmClassLoading,
        // JavaHasMagic,
        // InversionOfControl,
        // Spring,
        References
    ],
    examples: [
    ]
}