# Samsung KX **(WIP)**

## Stack

* Next.js
* Prismic CMS
* Prismic Slice Machine
* Tailwindcss
* Storybook

## Todos

* Create components
* Look at nextjs + prismic build files
* Add code extraction from built files for deployment
* Page loader
* AEM Deployment
* Project dashboard (for managing deployments)
* The rest of the build

## Gotchas

### Pushing to prismic

Issue where preview image is too large to upload to prismic.
Believe this is due to how storybook generates its previews.

Issue where the cli authentication times out. Have to login manually? (might have been due to the image issue actually)


### Thoughts

For slicemachine to work, the content type Page MUST be used
Instead of creating different content types
Make a slice template that combines other slices?
Issue if not easy to model the slice in slicemanager

Maybe just make templates that can be duplicated within the editor? (eg livestream, article, video, audio)

Change HeroComponent to
ImageHero
VideoHero
AudioHero
