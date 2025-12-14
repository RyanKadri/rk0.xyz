import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import {
  generateCodeSlide,
  generateContentSlide,
  generateDefinitionSlide,
  generateMediaSlide,
  generateMessageSlide,
  generateTitleSlide,
} from "../../../../../../presenter-core/src/slides/generate-slide";
import { synJava } from "../../../../common/highlighting";

export const Title = generateTitleSlide("State Management and Functional Programming", "Ryan Kadri");

export const WhereData = generateMessageSlide("Where does data live in your application?");

export const PossibleLocations = generateContentSlide("Possible Homes", [
  'Data lives "in" variables',
  "Data can be stored in files",
  "Data can live on another server (databases for example)",
  "Data flows through your application",
  "Data at rest is potentially dangerous!",
]);

export const DataIsDangerous = generateContentSlide("Data is Dangerous", [
  'Managing "state" in your application can be hard',
  "Two users (or threads) can modify shared data at the same time",
  "Data can get lost if your application crashes",
  "Data that is hanging around can get stale",
  "Code that you didn't write can change your data",
  "Storing too much data can crash your application",
]);

export const ReducingState = generateContentSlide("Reducing State", [
  "Data at rest is dangerous. Data in motion is safer",
  "Wherever possible, avoid storing data yourself",
  "Limit where in the code your data can be accessed",
  "Especially limit where data can be written",
  <>
    Java access modifiers (<code>public, private, protected</code>) are a good defense
  </>,
  "Make data private where possible",
  "Make member variables final where possible",
]);

export const UseLocals = generateCodeSlide(
  "Use Local Variables",
  [
    "Wherever reasonable, try to pick the right scope for your data",
    "If data is only needed in a method call, make it local",
  ],
  {
    code: synJava`
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
}`,
  },
);

export const CaseStudySetters = generateContentSlide("Setters are Evil?", [
  "In Java, it is common to have a setter method",
  <>
    <code>
      public void setSomething(String something) &#123; <br />
      &nbsp;&nbsp;this.something = something;
      <br />
      &#125;
    </code>
  </>,
  "public setters let any code change your object (or class's data)",
  "It becomes hard to know where data is changing and when",
  "Who is responsible for calling the setter? Who is allowed?",
  "Setters can almost always be avoided (JPA is a good exception)",
]);

export const ConstructorsAreBetter = generateCodeSlide(
  "Maybe Constructors are Nicer?",
  [
    'If you use setters to "set up" an object after creation, constructors may be better',
    'The object can be built "all at once" using a constructor',
  ],
  {
    code: synJava`// Using setters. Can be modified later
Employee ryan = new Employee();
ryan.setName("Ryan Kadri");
ryan.setAge(28);
ryan.setJob("Developer");

// Using Constructor. Can be locked down and not modifiable
Employee ryan = new Employee("Ryan Kadri", 28, "Developer");`,
  },
);

export const CaseStudyGetters = generateContentSlide("Getters are Meh?", [
  `"Getter" methods may be bad`,
  <>
    <code>
      public void getSomething() &#123; <br />
      &nbsp;&nbsp;return this.something;
      <br />
      &#125;
    </code>
  </>,
  "Do consumers of your object need to see the data you're storing?",
  "Can you use the result of a computation right away? Should somebody else store it?",
  "Getters are ok in data transfer objects in Java",
  "Occasionally useful elsewhere but can be a crutch",
]);

export const UseDataRightAway = generateCodeSlide(
  "Can you use the data right away?",
  [
    "If you need the result of a method, can you use it right away?",
    "Maybe return values are a better fit than getters",
    "If you need multiple values as a result, maybe an object is helpful?",
  ],
  {
    code: synJava`// With getters
payrollManager.fetchEmployeeInfo(2020);
double salary = payrollManager.getSalary();
double bonus = payrollManager.getBonus();

// With returns / objects
EmployeeInfo info = payrollManager.fetchEmployeeInfo(2020);
double salary = info.getSalary();
double bonus = info.getBonus();`,
  },
);

export const UseDataRightAway2 = generateCodeSlide(
  "How is that any different?",
  ["A new EmployeeInfo is returned for each lookup", "PayrollManager does not store any state"],
  {
    codeFirst: true,
    code: synJava`// Shared by all classes who need employee info
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
}`,
  },
);

export const CarefulWithReferences = generateContentSlide("References are dangerous", [
  "Variables in Java are labels for data that exists in memory",
  'Variables do not "store" data. They point to data',
  "Passing objects as parameters to methods in Java passes a reference",
  "Those functions can go and modify the underlying data",
  "It is important who has ownership over data",
]);

export const UnsafeSharing = generateCodeSlide(
  "Unsafe Sharing",
  ["Sharing references to data can be dangerous", "Making copies is sometimes preferable"],
  {
    code: synJava`public void setupEmployees() {
    List<Product> products = Inventory.fetchProducts();
    ProductDatabase.setProducts(products); // Stores parameter in a member variable
    QualityChecker.identifyDefects(products); // Removes non-defective products
    ReportGenerator.defectiveItemsReport(products); // Stores defective products
}`,
  },
);

export const FunctionalProgrammingIntro = generateDefinitionSlide(
  "Functional Programming",
  "Thinking about your program in terms of mathematical functions",
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
  <>
    Produces outputs <strong>only</strong> based on inputs (and maybe constants)
  </>,
  "Is easy to test",
  "Easier to reason about",
  "Can't be interfered with",
  "Is always thread-safe",
]);

export const IsAPureFunction = generateCodeSlide("Pure Functions", [], {
  code: synJava`public int addNumbers(int a, int b) {
    return a + b;
}

public int countUnique(List<String> names) {
    Set<String> nameSet = new HashSet<>(names);
    return nameSet.size();
}

public List<String> filterANames(List<String> names) {
    List<String> result = new ArrayList<>();
    for(String name : names) {
        if(name.startsWith("A")) {
            result.add(name);
        }
    }
    return result;
}`,
});

export const NotAPureFunction = generateCodeSlide("Impure Functions", [], {
  code: synJava`public void doSomething(int a, int b) { ... } // void methods must have side-effects

public boolean flipACoin() { // A no-argument pure function can be a constant?
    double result = Math.random(); // Produces output based on randomness
}

public int countUnique(List<String> names) {
    Set<String> nameSet = new HashSet<>(names);
    this.numUniqueNames = nameSet.size(); // Uh oh. Side effects detected
    return this.numUniqueNames;
}

public void filterANames(List<String> names) {
    for(int i = names.size() - 1; i >= 0; i --) {
        if(names.get(i).startsWith("A")) {
            result.remove(i); // This looks dangerous
        }
    }
    return result;
}`,
});

export const JavaAsFunctionalLanguage = generateContentSlide("Functional Java", [
  'Java is not a "Functional Programming Language"',
  "Java gives you freedom to manage state and have side effects",
  "Java does not really have the concept of Pure Functions",
  "The fact that everything is a class means that Java does not really have functions either",
  "static methods come the closest to plain functions",
]);

export const FunctionalJava = generateContentSlide("Higher Order Functions", [
  'In functional programming languages, there are "Higher Order Functions"',
  "Functions that take another function as a parameter",
  "Functions that return functions",
  "Higher order functions treat functions like they are normal data types",
  "But why?!",
]);

export const FunctionalJava2 = generateContentSlide("Functional Java", [
  {
    text: "Java 8 introduced functional-friendly-features",
    children: [
      "Streams - A stateless way of processing data as it comes in",
      "Optionals - A way to reduce Null Pointer Exceptions",
      "Functional Interfaces - Interfaces with one method are special",
      "Method References - Shorthand for extracting functional bits",
      'Built-In Function Types - Most common "function" types',
    ],
  },
]);

export const references: Reference[] = [
  { label: "Why Immutability Matters", url: "https://debugged.it/blog/why-immutability-matters/" },
  { label: "Pure Functions Definition", url: "https://en.wikipedia.org/wiki/Pure_function" },
];
