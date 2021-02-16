import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import React from "react";
import { generateCodeSlide, generateContentSlide, generateDefinitionSlide, generateMediaSlide, generateMessageSlide, generateTitleSlide } from "../../../../../../presenter-core/src/slides/generate-slide";

export const Title = generateTitleSlide(
    "State Management and Functional Programming",
    "Ryan Kadri"
);

export const WhereData = generateMessageSlide(
    "Where does data live in your application?"
);

export const PossibleLocations = generateContentSlide("Possible Homes", [
    'Data lives "in" variables',
    "Data can be stored in files",
    "Data can live on another server (databases for example)",
    "Data flows through your application",
    "Data at rest is potentially dangerous!"
]);

export const DataIsDangerous = generateContentSlide("Data is Dangerous", [
    'Managing "state" in your application can be hard',
    "Two users (or threads) can modify shared data at the same time",
    "Data can get lost if your application crashes",
    "Data that is hanging around can get stale",
    "Code that you didn't write can change your data",
    "Storing too much data can crash your application"
]);

export const ReducingState = generateContentSlide("Reducing State", [
    "Data at rest is dangerous. Data in motion is safer",
    "Wherever possible, avoid storing data yourself",
    "Limit where in the code your data can be accessed",
    "Especially limit where data can be written",
    <>Java access modifiers (<code>public, private, protected</code>) are a good defense</>,
    "Make data private where possible",
    "Make member variables final where possible"
]);

export const UseLocals = generateCodeSlide("Use Local Variables", [
    "Wherever reasonable, try to pick the right scope for your data",
    "If data is only needed in a method call, make it local"
], {
    language: "java",
    code: `
// Using member variables
private List<Song> favoriteSongs;
public void countFavoriteSongs(List<Song> allSongs) {
    this.filterFavorites(); // Sets this.favoriteSongs
    return this.favoriteSongs.size();
}

// Use locals instead
public void countFavoriteSongs(List<Song> allSongs) {
    List<Song> favoriteSongs = this.filterFavorites(allSongs);
    return favoriteSongs.size();
}    
    `
});

export const CaseStudySetters = generateContentSlide("Setters are Evil?", [
    "In Java, it is common to have a setter method",
    <><code>public void setSomething(String something) &#123; <br/>
        &nbsp;&nbsp;this.something = something;<br/>
    &#125;</code></>,
    "public setters let any code change your object (or class's data)",
    "It becomes hard to know where data is changing and when",
    "Who is responsible for calling the setter? Who is allowed?",
    "Setters can almost always be avoided (JPA is a good exception)",
]);

export const ConstructorsAreBetter = generateCodeSlide("Maybe Constructors are Nicer?", [
    'If you use setters to "set up" an object after creation, constructors may be better',
    'The object can be built "all at once" using a constructor'
], {
    language: "java",
    code: `
// Using setters. Can be modified later
Employee ryan = new Employee();
ryan.setName("Ryan Kadri");
ryan.setAge(28);
ryan.setJob("Developer");

// Using Constructor. Can be locked down and not modifiable
Employee ryan = new Employee("Ryan Kadri", 28, "Developer");
    `
});

export const CaseStudyGetters = generateContentSlide("Getters are Meh?", [
    `"Getter" methods may be bad`,
    <><code>public void getSomething() &#123; <br/>
        &nbsp;&nbsp;return this.something;<br/>
    &#125;</code></>,
    "Do consumers of your object need to see the data you're storing?",
    "Can you use the result of a computation right away? Should somebody else store it?",
    "Getters are ok in data transfer objects in Java",
    "Occasionally useful elsewhere but can be a crutch"
]);

export const UseDataRightAway = generateCodeSlide("Can you use the data right away?", [
    "If you need the result of a method, can you use it right away?",
    "Maybe return values are a better fit than getters",
    "If you need multiple values as a result, maybe an object is helpful?"
], { 
    language: "java",
    code: `
// With getters
payrollManager.fetchEmployeeInfo(2020);
double salary = payrollManager.getSalary();
double bonus = payrollManager.getBonus();

// With returns / objects
EmployeeInfo info = payrollManager.fetchEmployeeInfo(2020);
double salary = info.getSalary();
double bonus = info.getBonus();
    `
});

export const UseDataRightAway2 = generateCodeSlide("How is that any different?", [
    "A new EmployeeInfo is returned for each lookup",
    "PayrollManager does not store any state"
], {
    language: "java",
    code: `
// Shared by all classes who need employee info
public class PayrollManager {
    public EmployeeInfo fetchEmployeeInfo() {
        // ...
        return new EmployeeInfo(...);
    }
}

// ----------
// Immutable
public class EmployeeInfo {
    public EmployeeInfo() {}
}
    `,
}, { codeFirst: true });

export const CarefulWithReferences = generateContentSlide("References are dangerous", [
    "Variables in Java are labels for data that exists in memory",
    'Variables do not "store" data. They point to data',
    "Passing objects as parameters to methods in Java passes a reference",
    "Those functions can go and modify the underlying data",
    "It is important who has ownership over data"
]);

export const UnsafeSharing = generateCodeSlide("Unsafe Sharing", [
    "Sharing references to data can be dangerous",
    "Making copies is sometimes preferable"
], {
    language: "java",
    code: `
public void setupEmployees() {
    List<Product> products = Inventory.fetchProducts();
    ProductDatabase.setProducts(products); // Stores parameter in a member variable
    QualityChecker.identifyDefects(products); // Removes non-defective products
    ReportGenerator.defectiveItemsReport(products); // Stores defective products
}
    `
})

export const FunctionalProgrammingIntro = generateDefinitionSlide(  
    "Functional Programming",
    "Thinking about your program in terms of mathematical functions"
);

export const FunctionalProgramming1 = generateMediaSlide(
    <Paper style={{ width: 1200 }}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Mathematical Functions</TableCell>
                    <TableCell>General Java Methods</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Produce the same output for a given input</TableCell>
                    <TableCell>Can produce different values on each call (or no value at all)</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Don't change the outside world</TableCell>
                    <TableCell>Can have side-effects</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Have strict inputs and outputs</TableCell>
                    <TableCell>Can communicate data to caller through inputs</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </Paper>,
    undefined,
    "Functions vs Methods",
);

export const PureFunctions = generateContentSlide("A Pure Function", [
    "Has no side-effects",
    <>Produces outputs <strong>only</strong> based on inputs (and maybe constants)</>,
    "Is easy to test",
    "Easier to reason about",
    "Can't be interfered with",
    "Is always thread-safe",
]);

export const FunctionalJava = generateContentSlide("Functional Java", [
    "Java does not have functions exactly",
    "Everything being a class makes FP harder",
    '"Functional Interfaces" get us close',
    "Java closures help with the syntax but are not perfect",
    'Method references are nice "syntax sugar"'
]);

export const FunctionalJava2 = generateContentSlide("Functional Java", [
    { text: "Java 8 introduced functional-friendly-features", children: [
        "Streams - A stateless way of processing data as it comes in",
        "Optionals - A way to reduce Null Pointer Exceptions",
        "Functional Interfaces - Interfaces with one method are special",
        "Method References - Shorthand for extracting functional bits",
        'Built-In Function Types - Most common "function" types'
    ] }
]);

export const ImmutableProgramming = generateContentSlide("Immutable Programming", [
    'A variable / object is "mutable" if it can be changed after being created',
    "Mutability should be limited when possible",
    "Functions should return new versions of objects rather than changing them",
    "Copying can be done efficiently"
]);

export const ImmutableJava = generateContentSlide("Immutable Java and JS", [
    "Opinion - Immutability is easier to enforce in Java but easier to write in JS",
    "Java has final fields and final classes",
    "JS has easy object and array copying syntax",
    "JS has built-in immutable methods for strings, arrays, etc",
    "Immutability reduces the need for defensive copying and similar approaches"
]);

