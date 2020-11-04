# Lab 7: Going Public

<article>

## Overview

For this lab, you will be getting some practice working with Git, a common Version Control System.
You will also get your first chance to post a static page on the internet (in this class at least).
Both parts of this lab will probably involve working with the command line in your Operating System. 
In the second part of the lab, the static site you set up will be the beginning of your final project
for the class.
 

</article>

<article>

## Part One - Managing a Git Project

For this part of the lab, you have inherited a Git project from another team of developers. They got
most of the way through the project they were working on but never did the final steps of putting
everything together. Therefore, the project contains a bunch of feature branches that have not been
merged into the master branch.

The following branches exist: 
- `bob/header`
- `alice/sidebar`
- `eve/news-feed`

Your job is to merge all of these branches into master. The final result should look like
![BookReads Mockup](../../lesson2/lab/bookreads.png).

Please also create a new branch to add a mobile view to this page. In the mobile view, the sidebar
should be removed so that the news feed section of the app takes the full width of the app for screens
smaller than 900px. Please also reduce the horizontal padding around the news feed so that it fills
the screen better for small devices.

Please do not merge this branch into master yet. Just leave it open with a name of `your-name/mobile-view`.

#### Getting Started:

*If you do not have git installed, check out this site: https://git-scm.com*

To start this lab, please make a fork of this project:
https://github.com/RyanKadri/cis1052-lab-7

A fork is a way to create a variation of an open source project. It lets you start, not from a blank
repository, but rather from a copy of the original project. You will be able to see all of the branches
in the original project and all of the original commits. In Github, your fork will behave like another
ordinary repository that you own.

Therefore, please do the following:
- Fork the project -- Use the github site
- Clone your fork of the project -- `git clone`
- Merge the 3 branches listed above into master (resolving any merge conflicts) -- 
`git checkout / git merge`
- Create a new branch -- `git checkout -b`
- In the new branch, update the page to include a mobile view
- Push all of these changes to your fork -- `git push`

</article>

<article>

## Part 2: Static Hosting

In this section of the lab, you will build the first portion of your final project and get it hosted
online. For hosting, we will be using Firebase, an application development framework currently owned by
Google. Firebase has a free tier of services called the "Spark Plan" that will let everyone host their
site for free. It also has more flexibility and more sophisticated app development features than Github
Pages (Amazon's AWS is even more flexible and sophisticated but quite a bit less user-friendly).

Before you can start this part of the lab, you must set up your project. Please read this guide:
(https://firebase.google.com/docs/hosting/quickstart)

#### Step 1: Prerequisites

1. Sign up for Firebase
1. Install the Firebase CLI (Command Line Interface)

#### Step 2: Setting up Project

The following steps will create a new Firebase project.

1. Create a new folder and use VSCode to open the folder.
1. Launch the Terminal in VSCode (Terminal -> New Terminal in the VSCode menu)
1. In the terminal, run `firebase init`
    1. Select "Hosting"
    1. Create a new project
    1. Give your project a unique name (maybe cis1052-\[your first name\])
    1. Hit Enter (or give your project an alias name)
    1. Wait until the Firebase tasks finish
    1. Pick a public directory. This is where you will put your HTML/CSS/JS files.
    The default name is "public" and that should work fine.
    1. Do not configure the app as a single-page-app    

#### Step 3: Testing

The following steps test that your project is set up properly.

1. In the terminal, run `firebase deploy` and wait for the command to finish.
1. Go to the site "https://\[your-site\].firebaseapp.com". For instance, my URL would be
https://cis1052-rk0-example1.firebaseapp.com

Congrats! Your site is hosted on the internet. Anyone else in the world should be able to navigate to
that URL and see the same site. To update the site, you can just edit your `public/*.html` files and
run `firebase deploy` again. It may take a minute or two to see your updates on the real site
after the command finishes. I would recommend deploying somewhat infrequently and still rely on the
Live Server extension to make sure your site looks the way you expect.


Now that you have an easy way to deploy a site on the internet, the main part of this lab will be 
getting the skeleton for your final project hosted online. Your site should have (at least)
the following pages:

- **Sign Up:** This page should allow the user to sign up for *something*. They could be signing up for
updates when new content is created or signing up for a new subscription service. 
It will need to have a form for the user to content. Later on, this form will need to be validated for
correct data. This is **not** a login page. We will probably not have a chance to go over security 
in this class so collecting passwords is probably not a great idea.
- **Main Landing Page:** This in the page the user sees when they just go to your site's URL with no
request path. This will be a file called `index.html`
- **Content Page 1:** This is a specific type of page for the main content in your site
- **Content Page 2:** This is another type of page for your site.
- **About Us:** This is a page that describes either you, the site creator, or the goal of the site itself. 

Most of these pages do not need to have any actual content yet. Feel free to just put in some placeholder
text. The About Us page should include a description of the type of site you are trying to build and how
you plan to accomplish the different requirements in the final project description. 

There *should* be some sort of global navigation structure on all of these pages that lets you reach
the others. This could be a header, a sidebar, or anything else that you think makes sense.

</article>

<article>

## Submitting

To submit this lab, please post two URLs in Canvas. The first URL should be your forked repository
on GitHub from part 1. The second URL should be your hosted site from part 2.

</article>
<article>

## Grading

For part one of this lab, I care about the following:
- Have all of the old branches been merged into master?
- Have any merge conflicts been resolved?
- Is there a new branch with some code to make the site mobile-friendly?
- Has the code been successfully pushed to your Github fork?

For the second part of the lab, I care about the following:
- Can I reach your site with my browser?
- Do you have the 5 requested pages?
- Is there a global navigation structure between the pages?
- Have you written up a blurb about the purpose and plan for the site on the About Us page?
    - This part does not need to be long but it is important so I can give you feedback on whether your
    plan for the site will be able to meet future requirements.
</article>

## Hints

### Using (or avoiding) the Command Line

The most "out of the box" way to use FireBase and Git is through your Operating System's command line.
If you are using Windows, this might involve using the Command Prompt. On Mac, this might be iTerm.
The commands you are using will be pretty straightforward but they also will require that you run them
in the right folder. To make this easier, I would recommend that you start this project by opening
Visual Studio Code on the specific folder you want to work on for each part of the project. If you
go to Terminal -> New Terminal, it should open the Command Prompt in the same folder that you opened
VSCode with. From there, you should be able to run your commands.

Git and Firebase can both get a little tricky to use from the Command Prompt.
You can potentially use other graphical programs for working with them if you would prefer to avoid the
Command Prompt. I recommend either using GitKraken (the student version) or SourceTree. You may need to
read the instructions for how to set them up. Both use the same terms as git 
(commit, branch, checkout, etc) to talk about git commands but use a graphical tool to make things
easier.