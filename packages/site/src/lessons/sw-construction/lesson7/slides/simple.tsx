import React from "react";
import { Reference } from "../../../../../../presenter-core/src/services/types";
import {
  generateContentSlide,
  generateMediaSlide,
  generateMessageSlide,
  generateTitleSlide,
} from "../../../../../../presenter-core/src/slides/generate-slide";
import dataCenter from "./datacenter.jpg";

export const Title = generateTitleSlide("Deploying Code", "From the IDE to the Internet");

export const HowDoPublish = generateMessageSlide("How do other people use your code?");

export const SoCloseSoFar = generateContentSlide("So Close", [
  "Running code in your IDE is running a real server",
  "If your router can point incoming traffic to your computer, you're golden",
  "Port forwarding can let you host your app publicly",
  'The app running in IntelliJ or Eclipse is the "real app"',
]);

export const AndYetSoFar = generateContentSlide("And yet so far", [
  "Hosting a service from your own computer is probably a bad idea",
  "You open up your network and computer to attacks",
  "Your site goes down if your computer goes down",
  "Hosting code out of an IDE is even worse",
  "If you close the IDE (or it crashes), your app may stop",
  "The big red stop/restart buttons also don't feel great",
]);

export const RunningOutsideIde = generateContentSlide("Running on the Command Line", [
  "For real apps, you often start them from the command line (or using deeper OS tools)",
  "You don't want your code to be dependent IDE",
  "A Java program should only need Java installed to run",
  "The command line can be more easily automated (and therefore be made more reliable)",
  <>
    You can use the <code>mvn</code> command to build your app
  </>,
  <>
    And the <code>java</code> command to launch it
  </>,
]);

export const CommandLineIntro = generateContentSlide("The Command Line (Shell)", [
  "The command line lets you pass text based commands to the OS",
  "There are a number of standard programs to work with files and data",
  "You can install other programs and tools to do what you need",
  'The command line has a "current working directory"',
  "Commands run in the context of that directory",
]);

export const CommonCommands = generateContentSlide("Common Commands (Linux / Windows)", [
  <>
    <code>pwd / echo %cd%</code> - Prints out the current directory
  </>,
  <>
    <code>cd</code> - Change to a new directory (relative or absolute)
  </>,
  <>
    <code>ls / dir</code> - Print the content of a directory (or current if no args)
  </>,
  <>
    <code>less / more</code> - Print out / explore the content of a file
  </>,
  "You can use WSL in Windows to get a more Linux-y command line",
  "Linux is more popular than Windows for running servers these days**",
  "** - This is hard to actually pin down. Numbers vary widely",
]);

export const MavenCommands = generateContentSlide("Maven Commands", [
  'Maven commands start with "mvn" and run tasks based on plugins',
  "You can run multiple tasks in one line",
  "Some tasks automatically include others",
  "Maven output goes to defined places (convention over configuration)",
  <>
    <code>mvn clean</code> - Delete build artifacts. Clean Slate
  </>,
  <>
    <code>mvn compile</code> - Compiles code based on definitions in pom.xml
  </>,
  <>
    <code>mvn test</code> - Runs automated tests (Depends on plugins. Calls compile if needed)
  </>,
  <>
    <code>mvn package</code> - Builds a JAR file with your code (available through Spring plugin)
  </>,
]);

export const JavaCommands = generateContentSlide("Java Commands", [
  <>
    <code>java</code> command by itself can run compiled Java code
  </>,
  "Tricky to get the command right with libraries",
  <>
    <code>java -jar</code> lets you run a program from a JAR file
  </>,
  "The JAR file has some metadata that fills in for some command line info",
  <>
    <code>mvn clean package</code> and <code>java -jar ...</code> will be our bread and butter
  </>,
]);

export const NowHowDeploy = generateMessageSlide("Now how do we deploy it?");

export const DataCenters = generateContentSlide("Data Centers", [
  "The traditional hosting approach was a Data Center",
  'You rent space (and maybe the server too) in a "server cabinet"',
  "The Data Center has fast / redundant internet connections",
  "Usually a generator, some giant batteries, and reliable power",
  "Powerful cooling and internal networking setups",
  "Full time staff to manage servers",
]);

export const DataCenterImage = generateMediaSlide(
  <img src={dataCenter.src} alt="A data center aisle with server cabinets on each side" />,
  "https://www.missioncriticalmagazine.com/articles/92746-driving-improvements-for-efficient-data-center-cooling",
  'Data Center "Hot Aisle"'
);

export const DataCentersDownside = generateContentSlide("Data Center Tradeoffs", [
  "Data centers may give users total control to customize their setup",
  "May be cheaper at very large scales",
  "At small scales, you need to worry about over or under-provisioning",
  "A lot of things to worry about potentially",
  "Small businesses may not need it",
]);

export const CloudHosting = generateContentSlide("Cloud Hosting", [
  'Servers can be "spun up" or "spun down" in minutes',
  "You often only need to pay for what you use",
  "No need to handle physical hardware",
  "In the end though, it's just servers running somewhere",
]);

export const VirtualMachines = generateContentSlide("Virtual Machines", [
  "System Virtual Machines allow you to act as if a single physical machine is multiple smaller ones",
  "Virtual machines can be created, destroyed, and reconfigured very quickly",
  "Individual VMs are isolated from each other and host",
  "You can run Windows inside Linux, Linux in Windows, or many more exotic setups",
  "The earliest unit of cloud computing was the VM",
  "Rent a VM by the hour (or second these days)",
]);

export const StartingVM = generateContentSlide("Starting a Cloud VM", [
  "Many services provide a service for renting VMs",
  "Amazon has a service called EC2 (Elastic Cloud Compute)",
  "You can rent VMs of different sizes and with different software",
  "Configure storage, networking, security and more",
  "You can connect to the server via SSH (Secure SHell)",
  "The EC2 instance is now a VM you own",
  "You can install software, run your own code. Pretty much do anything",
]);

export const SetupCommands = generateContentSlide("VM Setup Commands", [
  <>
    <code>ssh</code> - This is the command that will let you connect to your server
  </>,
  {
    text: (
      <>
        <code>scp</code> - Similar syntax for uploading and downloading files to/from the server
      </>
    ),
    children: ["You can also use a GUI like FileZilla or WinSCP for this"],
  },
  <>
    <code>chmod</code> - You'll need this once to set permissions on your key file
  </>,
  <>
    <code>yum install</code> - This command will let you install software on your server
  </>,
  <>
    <code>nohup </code> - Lets you run a command that sticks around longer than the current SSH session
  </>,
]);

export const SecurityGroups = generateContentSlide("Security Groups", [
  "Security Groups are the AWS micro-firewall",
  "Can set up traffic rules on your EC2 instances and a few other things",
  "For now, you just need to allow traffic in on the SSH port and the app port",
]);

export const references: Reference[] = [
  {
    label: "SSH Basics",
    url: "https://www.digitalocean.com/community/tutorials/ssh-essentials-working-with-ssh-servers-clients-and-keys",
  },
  { label: "Installing Maven", url: "https://maven.apache.org/install.html" },
  {
    label: "SSH on Windows",
    url: "https://www.howtogeek.com/336775/how-to-enable-and-use-windows-10s-built-in-ssh-commands/",
    note: "It sounds like ssh is included by default with Windows now as long as you're reasonably updated. This link might help if it's still not there",
  },
  {
    label: "EC2 Reference",
    url: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/amazon-linux-ami-mate.html",
    note: "Definitely not something to read 100% cover to cover. But if you're curious or need details on a specific bit",
  },
];
