# Open Source Facepack

This is a the open-source-facepack for Football Manager 2019.

# Vision

Football Manager 2019 (and other versions) don't come with photos for all (many) of the players, especially those less well known.

You can download a facepack to make your FM2019 experience better by avoiding the silhouette and putting a real image in there.

This is an open source (anyone can contribute) facepack.

# Motivation

I found facepacks a pain to locate and once I found one it was tricky to find a mirror. Not having yet updated the pack I downloaded yet, I imagine it's a manual process of again finding the right link, finding a mirror, downloading and manually extracting the content into the right location.

This is an open source facepack which builds on the work of the DF11 team, allowing you to fill in blanks and update things easily.

Hopefully for anyone who knows how to use `git` this is an easier solution.

# Installation

## Pre-reqs

- Git
- Football manager

## Getting the faces

Clone the repository into your Football Manager 2019 folder, for windows users it will be something like:

`C:\Users\<Your Username>\Documents\Sports Interactive\Football Manager 2019\`

If you're unfamiliar with `git`, open the command prompt/terminal, change to the folder above and run:

`git clone https://github.com/dougajmcdonald/open-source-facepack.git`

This will download all the face images.

## Updating the faces

This is the beauty of git, once you have cloned the repository to update it, open a terminal/cmd prompt in your graphics folder and type `git pull origin master` this will add in any new faces and updates the community has added but won't download the whole lot again.

# Contributing new faces

If you want to add a face, make a pull request for the image you want to add / update.

You're pull request should:

1. Include an image file in `.png` format
1. Add or change a file with the correct `playerid`

## How to find the player id

To find a player id you can turn it on in Football Manager.

1. Open the game, go to `preferences`
1. Check the `Show screen IDs in the titlebar to assist skinning` option and click `Confirm`

   ![preferences menu](/guide-images/idoption.PNG)

1. Go back to your game and select a player, you should see the id now listed in the game
   ![Jovane Cabral](/guide-images/playerwithid.PNG)
1. Make a note of the id

## How to add an image

Once you have the ID of the player / staff member you want to update you need to find an image, google is your friend.

Image requirements:

- Images MUST be in `.png` format
- Image file names must be in the format `<id>.png` e.g. if your id is 83111471 (Jovane Cabral) your image should be added as `83111471.png`
- Images should be 260px wide and 310 high

Add the new image into your `graphics` folder as above, commit the change with a commit message `e.g. Added a new image for Jovane Cabral` and make a `Pull Request`
