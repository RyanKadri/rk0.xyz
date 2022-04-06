import React from "react";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import {
  generateCodeSlide,
  generateContentSlide,
  generateMessageSlide,
  generateTitleSlide,
} from "../../../../../../presenter-core/src/slides/generate-slide";
import { synJava } from "../../../../common/highlighting";

export const Title = generateTitleSlide(
  "Functional Programming and State Management",
  "Ryan Kadri"
);

export const MathFunctions = generateContentSlide("Mathematical Functions", [
  <>
    Functions in math are often written like{" "}
    <code>
      f(x) = x<sup>2</sup>
    </code>
  </>,
  'Functions have parameters and "return" a value',
  "Functions in programming come from this idea but extend it",
  "Functions in programming don't need to deal only with numbers",
  "They have a few other important differences",
]);

export const PureFunctions = generateContentSlide('"Pure" Functions', [
  'Methods that work like mathematical functions are often called "pure functions"',
  {
    text: "The method always returns the same output for the same input",
    children: ["The method can't rely on external sources of information (other than constants)"],
  },
  {
    text: "The method has no side effects",
    children: [
      "The method can't store information elsewhere",
      "The method doesn't trigger other external processes",
    ],
  },
  "All behavior in the method is captured in parameters and the return value",
]);

export const PureFunctionBenefits = generateContentSlide("Pure Function Benefits", [
  {
    text: "Pure Functions are easy to test",
    children: ["No need to do a lot of setup and initialization. Just call your method"],
  },
  {
    text: "Easier to think about",
    children: [
      "You only need to look at the body of the function to understand",
      "No need to think about what data is stored in other places",
    ],
  },
  {
    text: "Is always thread-safe",
    children: [
      "Even if the function is called from 100 threads, they can't affect each other",
      "Changes to the environment cannot mess with a function while it's running",
    ],
  },
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
}`,
});

export const JavaAsFunctionalLanguage = generateContentSlide("Functional Java", [
  <>Some languages are considered "Functional" languages</>,
  'Java is not a "Functional Programming Language"',
  "Java gives you freedom to manage state and have side effects",
  "Java does not really have a core concept of Pure Functions",
  "The fact that everything is a class means that Java does not really have functions either",
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

export const HowNonPure = generateMessageSlide(
  "Alright so pure functions are nice. But we NEED side effects. So what do we do?"
);

export const DataIsDangerous = generateContentSlide("Data is Dangerous", [
  'Managing "state" in your application can be hard',
  "Two users (or threads) can modify shared data at the same time",
  "Data can get lost if your application crashes",
  "Data that is hanging around can get stale",
  "Code that you didn't write can change your data",
  "Storing too much data can crash your application",
  "We need to be strategic about how we deal with stored data",
]);

export const ReducingState = generateContentSlide("Reducing State", [
  "Data at rest is dangerous. Data in motion is safer",
  'A lot of times, you can store your data "somewhere else" (in a database usually)',
  "When you need to store state, limit how it can be accessed",
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
  }
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
  }
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
  }
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
  }
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
  }
);

export const references: Reference[] = [
  { label: "Why Immutability Matters", url: "https://debugged.it/blog/why-immutability-matters/" },
  { label: "Pure Functions Definition", url: "https://en.wikipedia.org/wiki/Pure_function" },
];
