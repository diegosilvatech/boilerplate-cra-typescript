module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/test.tsx.hbs'
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
};
