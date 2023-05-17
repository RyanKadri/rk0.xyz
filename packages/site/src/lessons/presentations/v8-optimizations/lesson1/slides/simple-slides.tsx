import { Link } from "@mui/material";
import { Reference } from "../../../../../../../presenter-core/src/services/types";
import {
  generateContentSlide,
  generateDefinitionSlide,
  generateMediaAssistSlide,
  generateMediaSlide,
  generateMessageSlide,
  generateTitleSlide,
} from "../../../../../../../presenter-core/src/slides/generate-slide";
import { synJS } from "../../../../../common/highlighting";
import { ComparisonSlide } from "./WhichRunsFaster";
import hashMap from "./hashMap.jpg";
import hiddenClasses from "./hiddenClasses.jpg";
import v8Pipeline from "./ignition-pipeline.png";
import yourOpinion from "./your-opinion.jpg";

export const TitleSlide = generateTitleSlide("V8 Engine Deoptimizations", "Ryan Kadri");

export const InterpretedOrCompiled = generateMessageSlide("Is JavaScript an interpreted or compiled language?");

export const CompilerPipeline = generateMediaAssistSlide(
  "V8 Compiler Pipeline",
  [],
  <img src={v8Pipeline.src} style={{ height: "auto", width: 1400 }} />
);

export const DeoptDefinition = generateDefinitionSlide(
  "V8 Deoptimizations",
  "When V8 needs to roll back from its optimized code to an un-optimized state"
);

export const Disclaimer1 = generateDefinitionSlide(
  "Disclaimer 1: Don't lose sleep over any of this",
  "We're going to get into the nitty-gritty of JavaScript optimization. 99.9% of the time you just want to write clean code"
);

export const Disclaimer2 = generateDefinitionSlide(
  "Disclaimer 2: I am not a V8 Developer",
  "The following examples get under the hood in V8. I have not pored over the V8 source code. This info is mainly from talks and blogs"
);

export const Disclaimer3 = generateDefinitionSlide(
  "Disclaimer 3: This stuff changes fast",
  "V8 is aggressively optimized. Any of these principles can change without notice"
);

export const WhyHaveTalk = generateDefinitionSlide(
  "So why have this talk?",
  "It's really interesting to know a bit more about how the browser works. Deoptimizations are surprising and unexpected"
);

const intIterate = synJS`
let sum = 0;
for(let i = 0; i < 1000000; i++) {
    sum ++;
}
`;

const fpIterate = synJS`
let sum = 0;
for(let i = 0.1; i < 1000000.1; i++) {
    sum ++;
}
`;
export const FloatingPointIteration = ComparisonSlide({
  leftCode: intIterate,
  rightCode: fpIterate,
  link: "https://jsbench.me/gaku44mt2l/1",
});

const fpIterate2 = synJS`
let sum = 0;
let start = 2 ** 32;
let end = 2 ** 32 + 1000000
for(let i = start; i < end; i++) {
    sum ++;
}
`;
export const FloatingPointIteration2 = ComparisonSlide({
  leftCode: intIterate,
  rightCode: fpIterate2,
  link: "https://jsbench.me/gaku44mt2l/2",
});

const fpIterate3 = synJS`
let sum = 0;
let i = 0;
i += 0.25;
i -= 0.25;
for(; i < 1000000; i++) {
    sum += i;
}
`;

export const FloatingPointIteration3 = ComparisonSlide({
  leftCode: intIterate,
  rightCode: fpIterate3,
  link: "https://jsbench.me/gaku44mt2l/3",
});

export const WaitButWhyIterate = generateContentSlide("Wait but why?", [
  "The JavaScript specification (ECMA 262) says that all numbers should behave like 64 bit doubles",
  "JavaScript does not allow for direct memory access / weird type casting though...",
  "FP operations are often slower than integer operations",
  "Integers are very common",
  "SOME floating point operations are exactly the same as integer operations",
  "V8 uses 2s complement integers in some cases and floating point numbers in others",
  "Needs to change representations seamlessly in all cases",
]);

export const NumberRepresentations = generateContentSlide("Number Representations in JS", [
  "SMI - Small Integers (roughly up to 2^30 depending on the architecture)",
  "Heap Number - Floating Point numbers stored on the heap that don't change",
  "Mutable Heap Numbers - Floating Point numbers stored on the heap that do change",
  "Variables can switch their representation and then may not switch back",
]);

const forIn19 = synJS`
let a = {};
for(let i = 0; i < 19; i++) {
    a["a" + i] = i
}

let sum = 0;
for(let i = 0; i < 10000; i++) {
    for(const prop in a) {
        sum += a[prop];
    }
}
`;

const forIn20 = synJS`
let a = {};
for(let i = 0; i < 19; i++) {
    a["a" + i] = i
}

let sum = 0;
for(let i = 0; i < 10000; i++) {
    for(const prop in a) {
        sum += a[prop];
    }
}
`;

export const FastProps = ComparisonSlide({
  leftCode: forIn19,
  rightCode: forIn20,
  link: "https://jsbench.me/w3ku47yq6u/1",
});

export const WaitButWhyFastProps = generateMediaAssistSlide(
  "Wait but why?",
  [
    "Objects in JavaScript sort of work like Hash Maps",
    "You can add (and delete) properties as needed",
    "Property names can be arbitrary strings",
    'HashMap lookups are slower than "class" property lookups',
    'Classes "know" what properties they have and where they are in memory',
  ],
  <img src={hashMap.src} />
);

export const HiddenClasses = generateMediaAssistSlide(
  "Hidden Classes",
  [],
  <img src={hiddenClasses.src} style={{ transform: "translate(80px, -100px)" }} height={800} />
);

const randomVals = synJS`
let sum = 0;
for(let i = 0; i < 1000; i++) {
    let a = {};
    for(let i = 0; i < 19; i++) {
        a["a" + (i + 0.1)] = Math.random();
    }
    for(const prop in a) {
        sum += a[prop];
    }
}
`;

const randomProps = synJS`
let sum = 0;
for(let i = 0; i < 1000; i++) {
    let a = {};
    for(let i = 0; i < 19; i++) {
        a["a" + Math.random()] = i + 0.1;
    }
    for(const prop in a) {
        sum += a[prop];
    }
}
`;

export const HiddenClassesCompare = ComparisonSlide({
  leftCode: randomVals,
  rightCode: randomProps,
  link: "https://jsbench.me/74ku49o067/1",
  options: {
    codeSize: "small",
  },
});

const noHoles = synJS`
let array = [];
for(let i = 0; i < 100; i ++) {
    if(i === 10) {
        array[i] = i;
    } else {
        array[i] = i;
    }
}

let sum = 0;
for(let i = 0; i < 1000; i ++) {
    sum += array.reduce((acc, i) => acc + i ?? 0);
}
`;

const holes = synJS`
let array = [];
for(let i = 0; i < 100; i ++) {
    if(i === 10) {
        // array[i] = i;
    } else {
        array[i] = i;
    }
}

let sum = 0;
for(let i = 0; i < 1000; i ++) {
    sum += array.reduce((acc, i) => acc + i ?? 0);
}
`;

export const HoleyArrays = ComparisonSlide({
  leftCode: noHoles,
  rightCode: holes,
  link: "https://jsbench.me/2gku4daywx/1",
  options: {
    codeSize: "small",
  },
});

export const HoleyArraysWBY = generateContentSlide("Wait but why?", [
  "Arrays in most programming languages are contiguous blocks of memory",
  "JavaScript arrays can have holes though",
  "It may be inefficient to allocate a contiguous block of memory when there are holes though",
  "Also, some common operations are manually optimized for different types of arrays (map, reduce, filter, etc) with CodeStubAssembler",
]);

const largeGap = synJS`
let array = [];
for(let i = 0; i < 1000; i++) {
    array[i] = i;
}

for(let i = 10000; i < 11000; i++) {
    array[i] = i;
}

let sum = 0;
for(let i = 0; i < 1000; i++) {
    sum += array[i];
}

for(let i = 10000; i < 11000; i++) {
    sum += array[i];
}
`;

const noGap = synJS`
let array = [];
for(let i = 0; i < 2000; i++) {
    array[i] = i;
}

for(let i = 0; i < 2000; i++) {
    sum += array[i];
}
`;

export const ArrayWithGaps = ComparisonSlide({
  leftCode: largeGap,
  rightCode: noGap,
  link: "https://jsbench.me/2gku4daywx/2",
  options: {
    codeSize: "small",
  },
});

export const YourOpinionMan = generateMediaSlide(<img src={yourOpinion.src} />);

export const D8Intro = generateContentSlide("D8 - A debugging-friendly version of V8", [
  "If you build V8 from source, you can create D8 binary",
  "Allows you to REPL JavaScript code",
  'Opens up "natives syntax" to peek under the hood in V8',
  "Allows you to dump bytecode for JS to see what's going on",
  "Shows where certain deoptimizations might happen",
]);

export const RealReactPR = generateMessageSlide(
  <>
    A real React PR:
    <Link href="https://github.com/facebook/react/pull/14383">https://github.com/facebook/react/pull/14383</Link>
  </>
);

export const references: Reference[] = [
  { label: "The V8 Dev Blog", url: "https://v8.dev/blog" },
  { label: "A React Performance Cliff", url: "https://v8.dev/blog/react-cliff" },
  {
    label: "Deoptimizations in V8",
    url: "https://docs.google.com/presentation/d/1Z6oCocRASCfTqGq1GCo1jbULDGS-w-nzxkbVF7Up0u0/edit#slide=id.g19fe2e08ca_0_148",
  },
  {
    label: "An Introduction to Speculative Optimization in V8",
    url: "https://ponyfoo.com/articles/an-introduction-to-speculative-optimization-in-v8",
  },
];
