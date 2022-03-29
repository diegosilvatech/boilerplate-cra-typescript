module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your COMPONENT name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/component-styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/component-stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/component-test.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/index.ts',
        templateFile: 'templates/injectable-index.ts.hbs',
        skipIfExists: true
      },
      {
        type: 'append',
        path: '../src/components/index.ts',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`
      },
      {
        type: 'append',
        path: '../src/components/index.ts',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `  {{pascalCase name}},`
      }
    ]
  });
  plop.setGenerator('icon', {
    description: 'Create a icon',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your ICON name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/assets/icons/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/icon.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/assets/icons/index.ts',
        templateFile: 'templates/injectable-index.ts.hbs',
        skipIfExists: true
      },
      {
        type: 'append',
        path: '../src/assets/icons/index.ts',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `export { {{pascalCase name}}Icon } from './{{pascalCase name}}';`
      },
      {
        type: 'append',
        path: '../src/components/Icon/index.tsx',
        pattern: `/* PLOP_INJECT_ICON_IMPORT */`,
        template: `  {{pascalCase name}}Icon as {{camelCase name}},`
      },
      {
        type: 'append',
        path: '../src/components/Icon/index.tsx',
        pattern: `/* PLOP_INJECT_ICON_OBJECT */`,
        template: `  {{camelCase name}},`
      },
      {
        type: 'append',
        path: '../src/components/Icon/index.tsx',
        pattern: `/* PLOP_INJECT_ICON_TYPES */`,
        template: `'{{camelCase name}}' |\n  `
      }
    ]
  });
};
