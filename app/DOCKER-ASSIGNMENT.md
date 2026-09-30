# Task 2 — Production Docker Image

Create the Dockerfile and `.dockerignore`.

## Requirements

Use a multi-stage build.

The build stage should install dependencies and compile TypeScript.

The runtime stage should:

- contain only what is needed to run the application;
- run as non-root;
- expose port 3000;
- execute the compiled JavaScript;
- avoid copying development clutter into the image.

Build and run locally.

Verify `/health`.

Compare the size and contents of a single-stage image and the optimized multi-stage image.
