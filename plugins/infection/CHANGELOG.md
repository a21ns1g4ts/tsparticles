# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.10.0](https://github.com/matteobruni/tsparticles/compare/v2.0.0-alpha.0...v2.10.0) (2023-06-03)

### Bug Fixes

-   added browserslist to fix some issues with older browsers ([24d8f52](https://github.com/matteobruni/tsparticles/commit/24d8f520ee6934bd967d63612c828705e1dc09e2))
-   **deps:** pin dependencies ([23be870](https://github.com/matteobruni/tsparticles/commit/23be8708d698e1e37a18f2ed292cbccffb0f1e47))
-   **deps:** update all ([d9f0ff2](https://github.com/matteobruni/tsparticles/commit/d9f0ff2f8c4ac269aaad5077492746e3da8fb422))
-   **deps:** update dependency @ionic/angular to v6 ([b20503f](https://github.com/matteobruni/tsparticles/commit/b20503ff2a29f6c8617f42c764c8a868fc334c5f))
-   **deps:** update dependency gh-pages to v4 ([cf6e957](https://github.com/matteobruni/tsparticles/commit/cf6e9577132afcec26410f7321fcf5ffcfb05930))
-   **deps:** update dependency rimraf to v4.4.1 ([370d1ca](https://github.com/matteobruni/tsparticles/commit/370d1ca4d3bb0ea8bfe5fb3e0f5e1d74f45f4de6))
-   **deps:** update dependency rimraf to v5 ([c29cbc4](https://github.com/matteobruni/tsparticles/commit/c29cbc43ed0d3522b718e7236a48eae9b91cde43))
-   **deps:** update dependency rimraf to v5.0.1 ([6627473](https://github.com/matteobruni/tsparticles/commit/66274734c70b5759c59f7e949c8fcb2c8529bdf2))
-   **deps:** update react monorepo to v18 ([3f6aa46](https://github.com/matteobruni/tsparticles/commit/3f6aa46e399d0092ae13ba494db86256c0d05c40))
-   **deps:** update react monorepo to v18.1.0 ([6b45793](https://github.com/matteobruni/tsparticles/commit/6b457937c41d7681a2135dfcb6ff220e578f22bb))
-   fixed double mouse events on mobile using pointer events, closes [#4622](https://github.com/matteobruni/tsparticles/issues/4622) ([1019fa4](https://github.com/matteobruni/tsparticles/commit/1019fa431f8a43cbd45d6adeb5adf94433e6e04b))
-   fixed flashing issue with background mask, closes [#3514](https://github.com/matteobruni/tsparticles/issues/3514) ([6f74bf1](https://github.com/matteobruni/tsparticles/commit/6f74bf1ab62587c7f2352bfe6f72ea29bb0a31fc))
-   fixed infection plugin ([901b9ce](https://github.com/matteobruni/tsparticles/commit/901b9cef9f3f6df333200d52d712057b7c7fe59c))
-   fixed some components init functions, they must be async ([0541dfa](https://github.com/matteobruni/tsparticles/commit/0541dfa82fb04264e2cd01ffd25e458b72847fdb))
-   fixed some plugins, they weren't loading correctly the options ([00053b4](https://github.com/matteobruni/tsparticles/commit/00053b4ea90fcc4385637b6a1aad955643a712b1))
-   fixes build scripts, closes [#3909](https://github.com/matteobruni/tsparticles/issues/3909), closes [#3911](https://github.com/matteobruni/tsparticles/issues/3911) ([d2c3fb3](https://github.com/matteobruni/tsparticles/commit/d2c3fb33ff9c9d529f2609f89c63cb6e1e61ecda))
-   moved some specific code to the relative project, removing it from the generic engine ([09fe635](https://github.com/matteobruni/tsparticles/commit/09fe63568adc244d11b7eff009626b905d5b05e4))
-   removed all browser flags in package.json, a lot of issues with it. closes [#3094](https://github.com/matteobruni/tsparticles/issues/3094) ([1415875](https://github.com/matteobruni/tsparticles/commit/14158755ec80ace4e0c520cef407b2d7f4078568))
-   updated all plugins to use new build system, improves imports compatibility ([0d75d97](https://github.com/matteobruni/tsparticles/commit/0d75d97c02c8a8f55e1697e4e7f0fdcf4c24ae4a))

### Features

-   added new methods to particle class ([5743453](https://github.com/matteobruni/tsparticles/commit/5743453906001569f262888aa54539ad4e1463ac))
-   added new tspRandom function and setRandom for customizing all the random behaviors ([bd83a57](https://github.com/matteobruni/tsparticles/commit/bd83a57b2eb8b455450a5940ba4c4d5ff34834b2))
-   added range colors to all color fields ([1b6f32a](https://github.com/matteobruni/tsparticles/commit/1b6f32ad50beb3dc4813187a6e1d03f3013f3ca9))
-   added version to engine ([9406873](https://github.com/matteobruni/tsparticles/commit/9406873c6551b59e64edbe3a0e4fe59ef2cde4c6))
-   adding new path plugin, using svg paths as a source ([72316ec](https://github.com/matteobruni/tsparticles/commit/72316ec38ee3556ad2db0af4e84a14529ddb1b9b))
-   created sounds plugin, no sounds yet, added only mute/unmute icon ([5a5970d](https://github.com/matteobruni/tsparticles/commit/5a5970d31682c62197608757cfd66b4b9c876e06))
-   improved move path generators ([9b67377](https://github.com/matteobruni/tsparticles/commit/9b67377f9208a005b122e312ad4ad3c95a50deb7))
-   removed all canvas context save/restore calls ([208722f](https://github.com/matteobruni/tsparticles/commit/208722f0a521246165b7cdc529dfbfbd7a3cf7eb))
-   splitting engine from slim and full bundles (v2) ([268b78c](https://github.com/matteobruni/tsparticles/commit/268b78c12d6c54069893d27643cfe7a30f3be777))

## [2.9.3](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.9.2...tsparticles-plugin-infection@2.9.3) (2023-02-12)

### Bug Fixes

-   fixed some plugins, they weren't loading correctly the options ([00053b4](https://github.com/matteobruni/tsparticles/commit/00053b4ea90fcc4385637b6a1aad955643a712b1))

## [2.9.2](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.9.1...tsparticles-plugin-infection@2.9.2) (2023-02-12)

**Note:** Version bump only for package tsparticles-plugin-infection

## [2.9.1](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.9.0...tsparticles-plugin-infection@2.9.1) (2023-02-11)

**Note:** Version bump only for package tsparticles-plugin-infection

# [2.9.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.8.0...tsparticles-plugin-infection@2.9.0) (2023-02-10)

### Features

-   added version to engine ([9406873](https://github.com/matteobruni/tsparticles/commit/9406873c6551b59e64edbe3a0e4fe59ef2cde4c6))

# [2.8.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.7.1...tsparticles-plugin-infection@2.8.0) (2023-01-18)

**Note:** Version bump only for package tsparticles-plugin-infection

## [2.7.1](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.7.0...tsparticles-plugin-infection@2.7.1) (2022-12-25)

**Note:** Version bump only for package tsparticles-plugin-infection

# [2.7.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.6.0...tsparticles-plugin-infection@2.7.0) (2022-12-23)

### Features

-   created sounds plugin, no sounds yet, added only mute/unmute icon ([5a5970d](https://github.com/matteobruni/tsparticles/commit/5a5970d31682c62197608757cfd66b4b9c876e06))

# [2.6.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.5.3...tsparticles-plugin-infection@2.6.0) (2022-12-06)

**Note:** Version bump only for package tsparticles-plugin-infection

## [2.5.3](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.5.2...tsparticles-plugin-infection@2.5.3) (2022-11-07)

**Note:** Version bump only for package tsparticles-plugin-infection

## [2.5.2](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.5.1...tsparticles-plugin-infection@2.5.2) (2022-11-07)

**Note:** Version bump only for package tsparticles-plugin-infection

## [2.5.1](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.5.0...tsparticles-plugin-infection@2.5.1) (2022-11-03)

**Note:** Version bump only for package tsparticles-plugin-infection

# [2.5.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.4.0...tsparticles-plugin-infection@2.5.0) (2022-11-02)

**Note:** Version bump only for package tsparticles-plugin-infection

# [2.4.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.3.3...tsparticles-plugin-infection@2.4.0) (2022-10-30)

### Bug Fixes

-   fixed infection plugin ([901b9ce](https://github.com/matteobruni/tsparticles/commit/901b9cef9f3f6df333200d52d712057b7c7fe59c))

### Features

-   removed all canvas context save/restore calls ([208722f](https://github.com/matteobruni/tsparticles/commit/208722f0a521246165b7cdc529dfbfbd7a3cf7eb))

## [2.3.3](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.3.2...tsparticles-plugin-infection@2.3.3) (2022-09-30)

**Note:** Version bump only for package tsparticles-plugin-infection

## [2.3.2](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.3.1...tsparticles-plugin-infection@2.3.2) (2022-09-21)

**Note:** Version bump only for package tsparticles-plugin-infection

## [2.3.1](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.3.0...tsparticles-plugin-infection@2.3.1) (2022-09-13)

**Note:** Version bump only for package tsparticles-plugin-infection

# [2.3.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.2.4...tsparticles-plugin-infection@2.3.0) (2022-09-11)

**Note:** Version bump only for package tsparticles-plugin-infection

## [2.2.4](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.2.2...tsparticles-plugin-infection@2.2.4) (2022-08-26)

**Note:** Version bump only for package tsparticles-plugin-infection

## [2.2.3](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.2.2...tsparticles-plugin-infection@2.2.3) (2022-08-21)

**Note:** Version bump only for package tsparticles-plugin-infection

## [2.2.2](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.2.1...tsparticles-plugin-infection@2.2.2) (2022-08-16)

### Bug Fixes

-   fixed double mouse events on mobile using pointer events, closes [#4622](https://github.com/matteobruni/tsparticles/issues/4622) ([1019fa4](https://github.com/matteobruni/tsparticles/commit/1019fa431f8a43cbd45d6adeb5adf94433e6e04b))

## [2.2.1](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.2.0...tsparticles-plugin-infection@2.2.1) (2022-08-12)

**Note:** Version bump only for package tsparticles-plugin-infection

# [2.2.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.1.4...tsparticles-plugin-infection@2.2.0) (2022-08-11)

### Features

-   added new tspRandom function and setRandom for customizing all the random behaviors ([bd83a57](https://github.com/matteobruni/tsparticles/commit/bd83a57b2eb8b455450a5940ba4c4d5ff34834b2))

## [2.1.4](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.1.3...tsparticles-plugin-infection@2.1.4) (2022-07-28)

**Note:** Version bump only for package tsparticles-plugin-infection

## [2.1.3](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.1.2...tsparticles-plugin-infection@2.1.3) (2022-07-01)

**Note:** Version bump only for package tsparticles-plugin-infection

## [2.1.2](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.1.1...tsparticles-plugin-infection@2.1.2) (2022-07-01)

**Note:** Version bump only for package tsparticles-plugin-infection

## [2.1.1](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.1.0...tsparticles-plugin-infection@2.1.1) (2022-07-01)

**Note:** Version bump only for package tsparticles-plugin-infection

# [2.1.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.0.6...tsparticles-plugin-infection@2.1.0) (2022-06-18)

### Bug Fixes

-   **deps:** update dependency gh-pages to v4 ([cf6e957](https://github.com/matteobruni/tsparticles/commit/cf6e9577132afcec26410f7321fcf5ffcfb05930))
-   **deps:** update react monorepo to v18.1.0 ([6b45793](https://github.com/matteobruni/tsparticles/commit/6b457937c41d7681a2135dfcb6ff220e578f22bb))
-   moved some specific code to the relative project, removing it from the generic engine ([09fe635](https://github.com/matteobruni/tsparticles/commit/09fe63568adc244d11b7eff009626b905d5b05e4))

### Features

-   added range colors to all color fields ([1b6f32a](https://github.com/matteobruni/tsparticles/commit/1b6f32ad50beb3dc4813187a6e1d03f3013f3ca9))

## [2.0.6](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.0.5...tsparticles-plugin-infection@2.0.6) (2022-04-16)

### Bug Fixes

-   fixes build scripts, closes [#3909](https://github.com/matteobruni/tsparticles/issues/3909), closes [#3911](https://github.com/matteobruni/tsparticles/issues/3911) ([d2c3fb3](https://github.com/matteobruni/tsparticles/commit/d2c3fb33ff9c9d529f2609f89c63cb6e1e61ecda))

## [2.0.5](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.0.4...tsparticles-plugin-infection@2.0.5) (2022-04-14)

**Note:** Version bump only for package tsparticles-plugin-infection

## [2.0.4](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.43.1...tsparticles-plugin-infection@2.0.4) (2022-04-06)

### Bug Fixes

-   **deps:** update dependency @ionic/angular to v6 ([b20503f](https://github.com/matteobruni/tsparticles/commit/b20503ff2a29f6c8617f42c764c8a868fc334c5f))
-   **deps:** update react monorepo to v18 ([3f6aa46](https://github.com/matteobruni/tsparticles/commit/3f6aa46e399d0092ae13ba494db86256c0d05c40))
-   fixed some components init functions, they must be async ([0541dfa](https://github.com/matteobruni/tsparticles/commit/0541dfa82fb04264e2cd01ffd25e458b72847fdb))

### Features

-   splitting engine from slim and full bundles (v2) ([268b78c](https://github.com/matteobruni/tsparticles/commit/268b78c12d6c54069893d27643cfe7a30f3be777))

## [2.0.3](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.42.1...tsparticles-plugin-infection@2.0.3) (2022-03-11)

## [1.43.1](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.43.0...tsparticles-plugin-infection@1.43.1) (2022-04-06)

**Note:** Version bump only for package tsparticles-plugin-infection

# [1.43.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.42.4...tsparticles-plugin-infection@1.43.0) (2022-04-04)

### Bug Fixes

-   updated all plugins to use new build system, improves imports compatibility ([0d75d97](https://github.com/matteobruni/tsparticles/commit/0d75d97c02c8a8f55e1697e4e7f0fdcf4c24ae4a))

## [1.42.4](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.42.3...tsparticles-plugin-infection@1.42.4) (2022-03-20)

**Note:** Version bump only for package tsparticles-plugin-infection

## [1.42.3](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.42.2...tsparticles-plugin-infection@1.42.3) (2022-03-18)

**Note:** Version bump only for package tsparticles-plugin-infection

## [1.42.2](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.42.1...tsparticles-plugin-infection@1.42.2) (2022-03-14)

### Bug Fixes

-   **deps:** update dependency @ionic/angular to v6 ([b20503f](https://github.com/matteobruni/tsparticles/commit/b20503ff2a29f6c8617f42c764c8a868fc334c5f))
-   fixed some components init functions, they must be async ([0541dfa](https://github.com/matteobruni/tsparticles/commit/0541dfa82fb04264e2cd01ffd25e458b72847fdb))

### Features

-   splitting engine from slim and full bundles (v2) ([268b78c](https://github.com/matteobruni/tsparticles/commit/268b78c12d6c54069893d27643cfe7a30f3be777))

## [2.0.2](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.41.4...tsparticles-plugin-infection@2.0.2) (2022-02-21)

### Bug Fixes

-   **deps:** update dependency @ionic/angular to v6 ([b20503f](https://github.com/matteobruni/tsparticles/commit/b20503ff2a29f6c8617f42c764c8a868fc334c5f))
-   fixed some components init functions, they must be async ([0541dfa](https://github.com/matteobruni/tsparticles/commit/0541dfa82fb04264e2cd01ffd25e458b72847fdb))

### Features

-   splitting engine from slim and full bundles (v2) ([268b78c](https://github.com/matteobruni/tsparticles/commit/268b78c12d6c54069893d27643cfe7a30f3be777))
-   fixed flashing issue with background mask, closes [#3514](https://github.com/matteobruni/tsparticles/issues/3514) ([6f74bf1](https://github.com/matteobruni/tsparticles/commit/6f74bf1ab62587c7f2352bfe6f72ea29bb0a31fc))

## [1.42.1](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.42.0...tsparticles-plugin-infection@1.42.1) (2022-03-09)

**Note:** Version bump only for package tsparticles-plugin-infection

# [1.42.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.41.6...tsparticles-plugin-infection@1.42.0) (2022-03-08)

**Note:** Version bump only for package tsparticles-plugin-infection

## [2.0.1](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.0.0...tsparticles-plugin-infection@2.0.1) (2022-02-15)

## [1.41.6](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.41.5...tsparticles-plugin-infection@1.41.6) (2022-03-03)

**Note:** Version bump only for package tsparticles-plugin-infection

## [1.41.5](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.41.4...tsparticles-plugin-infection@1.41.5) (2022-02-24)

**Note:** Version bump only for package tsparticles-plugin-infection

## [1.41.4](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.41.3...tsparticles-plugin-infection@1.41.4) (2022-02-20)

**Note:** Version bump only for package tsparticles-plugin-infection

## [1.41.3](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.41.2...tsparticles-plugin-infection@1.41.3) (2022-02-19)

**Note:** Version bump only for package tsparticles-plugin-infection

## [1.41.2](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.41.1...tsparticles-plugin-infection@1.41.2) (2022-02-16)

**Note:** Version bump only for package tsparticles-plugin-infection

# [2.0.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.41.1...tsparticles-plugin-infection@2.0.0) (2022-02-15)

### Bug Fixes

-   **deps:** update dependency @ionic/angular to v6 ([b20503f](https://github.com/matteobruni/tsparticles/commit/b20503ff2a29f6c8617f42c764c8a868fc334c5f))
-   fixed some components init functions, they must be async ([0541dfa](https://github.com/matteobruni/tsparticles/commit/0541dfa82fb04264e2cd01ffd25e458b72847fdb))

### Features

-   splitting engine from slim and full bundles (v2) ([268b78c](https://github.com/matteobruni/tsparticles/commit/268b78c12d6c54069893d27643cfe7a30f3be777))

# [2.0.0-beta.5](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.39.2...tsparticles-plugin-infection@2.0.0-beta.5) (2022-01-30)

## [1.41.1](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.41.0...tsparticles-plugin-infection@1.41.1) (2022-02-14)

**Note:** Version bump only for package tsparticles-plugin-infection

# [1.41.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.40.2...tsparticles-plugin-infection@1.41.0) (2022-02-10)

**Note:** Version bump only for package tsparticles-plugin-infection

## [1.40.2](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.40.1...tsparticles-plugin-infection@1.40.2) (2022-02-07)

### Bug Fixes

-   **deps:** update dependency @ionic/angular to v6 ([b20503f](https://github.com/matteobruni/tsparticles/commit/b20503ff2a29f6c8617f42c764c8a868fc334c5f))

### Features

-   splitting engine from slim and full bundles (v2) ([268b78c](https://github.com/matteobruni/tsparticles/commit/268b78c12d6c54069893d27643cfe7a30f3be777))
-   removed all browser flags in package.json, a lot of issues with it. closes [#3094](https://github.com/matteobruni/tsparticles/issues/3094) ([1415875](https://github.com/matteobruni/tsparticles/commit/14158755ec80ace4e0c520cef407b2d7f4078568))

## [1.40.1](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.40.0...tsparticles-plugin-infection@1.40.1) (2022-02-06)

**Note:** Version bump only for package tsparticles-plugin-infection

# [1.40.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.39.3...tsparticles-plugin-infection@1.40.0) (2022-02-04)

**Note:** Version bump only for package tsparticles-plugin-infection

# [2.0.0-beta.4](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.0.0-beta.3...tsparticles-plugin-infection@2.0.0-beta.4) (2021-12-07)

## [1.39.3](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.39.2...tsparticles-plugin-infection@1.39.3) (2022-02-02)

**Note:** Version bump only for package tsparticles-plugin-infection

## [1.39.2](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.39.1...tsparticles-plugin-infection@1.39.2) (2022-01-29)

**Note:** Version bump only for package tsparticles-plugin-infection

## [1.39.1](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.39.0...tsparticles-plugin-infection@1.39.1) (2022-01-26)

**Note:** Version bump only for package tsparticles-plugin-infection

# [1.39.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.38.0...tsparticles-plugin-infection@1.39.0) (2022-01-08)

**Note:** Version bump only for package tsparticles-plugin-infection

# [1.38.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.37.6...tsparticles-plugin-infection@1.38.0) (2021-12-29)

**Note:** Version bump only for package tsparticles-plugin-infection

## [1.37.6](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.37.5...tsparticles-plugin-infection@1.37.6) (2021-12-24)

**Note:** Version bump only for package tsparticles-plugin-infection

# [2.0.0-beta.3](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.37.5...tsparticles-plugin-infection@2.0.0-beta.3) (2021-12-04)

### Features

-   splitting engine from slim and full bundles (v2) ([268b78c](https://github.com/matteobruni/tsparticles/commit/268b78c12d6c54069893d27643cfe7a30f3be777))

# [2.0.0-beta.2](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.35.4...tsparticles-plugin-infection@2.0.0-beta.2) (2021-10-06)

### Features

-   splitting engine from slim and full bundles (v2) ([268b78c](https://github.com/matteobruni/tsparticles/commit/268b78c12d6c54069893d27643cfe7a30f3be777))

## [1.37.5](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.37.4...tsparticles-plugin-infection@1.37.5) (2021-11-28)

**Note:** Version bump only for package tsparticles-plugin-infection

## [1.37.4](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.37.3...tsparticles-plugin-infection@1.37.4) (2021-11-17)

**Note:** Version bump only for package tsparticles-plugin-infection

## [1.37.3](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.37.2...tsparticles-plugin-infection@1.37.3) (2021-11-05)

**Note:** Version bump only for package tsparticles-plugin-infection

## [1.37.2](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.37.1...tsparticles-plugin-infection@1.37.2) (2021-10-31)

**Note:** Version bump only for package tsparticles-plugin-infection

## [1.37.1](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.37.0...tsparticles-plugin-infection@1.37.1) (2021-10-30)

### Bug Fixes

-   added browserslist to fix some issues with older browsers ([24d8f52](https://github.com/matteobruni/tsparticles/commit/24d8f520ee6934bd967d63612c828705e1dc09e2))

# [2.0.0-beta.1](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@2.0.0-beta.0...tsparticles-plugin-infection@2.0.0-beta.1) (2021-10-06)

# [1.37.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.36.0...tsparticles-plugin-infection@1.37.0) (2021-10-28)

**Note:** Version bump only for package tsparticles-plugin-infection

# [1.36.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.35.4...tsparticles-plugin-infection@1.36.0) (2021-10-14)

**Note:** Version bump only for package tsparticles-plugin-infection

## [1.35.4](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.35.3...tsparticles-plugin-infection@1.35.4) (2021-10-06)

**Note:** Version bump only for package tsparticles-plugin-infection

# [2.0.0-beta.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.35.3...tsparticles-plugin-infection@2.0.0-beta.0) (2021-10-06)

### Features

-   splitting engine from slim and full bundles (v2) ([268b78c](https://github.com/matteobruni/tsparticles/commit/268b78c12d6c54069893d27643cfe7a30f3be777))

## [1.35.3](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.35.2...tsparticles-plugin-infection@1.35.3) (2021-10-03)

**Note:** Version bump only for package tsparticles-plugin-infection

## [1.35.2](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.35.1...tsparticles-plugin-infection@1.35.2) (2021-09-27)

**Note:** Version bump only for package tsparticles-plugin-infection

## [1.35.1](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.35.0...tsparticles-plugin-infection@1.35.1) (2021-09-20)

**Note:** Version bump only for package tsparticles-plugin-infection

# [1.35.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.34.1...tsparticles-plugin-infection@1.35.0) (2021-09-18)

**Note:** Version bump only for package tsparticles-plugin-infection

## [1.34.1](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.34.0...tsparticles-plugin-infection@1.34.1) (2021-09-15)

**Note:** Version bump only for package tsparticles-plugin-infection

# [1.34.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.33.3...tsparticles-plugin-infection@1.34.0) (2021-08-23)

### Bug Fixes

-   **deps:** pin dependencies ([23be870](https://github.com/matteobruni/tsparticles/commit/23be8708d698e1e37a18f2ed292cbccffb0f1e47))
-   **deps:** update all ([d9f0ff2](https://github.com/matteobruni/tsparticles/commit/d9f0ff2f8c4ac269aaad5077492746e3da8fb422))

### Features

-   improved move path generators ([9b67377](https://github.com/matteobruni/tsparticles/commit/9b67377f9208a005b122e312ad4ad3c95a50deb7))

## [1.33.3](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.33.2...tsparticles-plugin-infection@1.33.3) (2021-08-10)

### Features

-   added new methods to particle class ([5743453](https://github.com/matteobruni/tsparticles/commit/5743453906001569f262888aa54539ad4e1463ac))

## [1.33.2](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.33.1...tsparticles-plugin-infection@1.33.2) (2021-07-31)

**Note:** Version bump only for package tsparticles-plugin-infection

## [1.33.1](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.33.0...tsparticles-plugin-infection@1.33.1) (2021-07-29)

**Note:** Version bump only for package tsparticles-plugin-infection

# [1.33.0](https://github.com/matteobruni/tsparticles/compare/tsparticles-plugin-infection@1.32.0...tsparticles-plugin-infection@1.33.0) (2021-07-29)

**Note:** Version bump only for package tsparticles-plugin-infection
