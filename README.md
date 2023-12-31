# Bugs

- [x] #1 `$ npx nx serve store --devRemotes=checkout` -> http://localhost:4200 is not starting.

    the `remotes` key in `store/module-federation.config.ts` needs to be empty. [related issue](https://github.com/nrwl/nx/issues/10963#issuecomment-1203400905)

- [x] #2 `$ npx nx serve store --devRemotes=checkout` -> unexpected behavior: changing product's file will hot reload the app.

- [x] #3 `$ npx nx serve store` -> unexpected behavior: changing product's file will hot reload.

- [x] #4 `index.html` and `styles.scss` of the `product` (remote) is ignored by the `store` (host).

- [ ] #5 if you add the key `path` to the `store/tsconfig.app.json` file, it will throw error

    Cause: in Nx, the key `extends` works differently compared to in Angular Workspace.
    Drawback: the store application import the source code of the library instead of the built angular library.

    changes that works in Angular Workspace.
    ```
    {
    
        "compilerOptions": {

            "paths": {
                "@learn-nx-i-ng/counter2": ["dist/counter2"],

            }

        }

    }
    ```

    the quick fix solution is to add the rest of paths from the `./tsconfig.base.json` file.
    ```
    {
    
        "compilerOptions": {

            "paths": {
                "@learn-nx-i-ng/counter2": ["dist/counter2"],
                "@learn-nx-i-ng/counter": ["counter/src/index.ts"],
                "checkout/Module": ["checkout/src/app/remote-entry/entry.module.ts"],
                "product/Module": ["product/src/app/remote-entry/entry.module.ts"]
            }

        }
        
    }
    ```

# Known Issues

- `npm install -D @angular/material` and `npx nx g @angular/material:ng-add --project=product` will throw error `Bootstrap call not found`

  Solution:

  product/project.json
  ```
    {
        "targets": {
            "build": {

                "executor": "@angular-devkit/build-angular:browser",
                
                "options": {
                    
                    "main": "product/src/bootstrap.ts",
                }
            }
        }
    }
  ```

  https://github.com/nrwl/nx/issues/7621

# LearnNxINg

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Ready to deploy?

Just run `nx build demoapp` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/core-features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/core-features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
